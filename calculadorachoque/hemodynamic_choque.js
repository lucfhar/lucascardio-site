// CALCULADORA DE PARÂMETROS HEMODINÂMICOS
// Manejo de Choque - Criada por Lucas Ferreira Silva
// ========================================

// Variável global para método de cálculo de VO2
let metodoVO2 = 'bergstra'; // 'bergstra' ou 'simplificado'

// Modal "Sobre"
function abrirModalSobre() {
  document.getElementById('modalSobre').classList.add('show');
}

function fecharModalSobre() {
  document.getElementById('modalSobre').classList.remove('show');
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
  const modal = document.getElementById('modalSobre');
  if (event.target === modal) {
    fecharModalSobre();
  }
}

// Toggle do método de VO2
function toggleMetodoVO2() {
  metodoVO2 = metodoVO2 === 'bergstra' ? 'simplificado' : 'bergstra';
  const metodoTexto = document.getElementById('metodoTexto');
  if (metodoVO2 === 'bergstra') {
    metodoTexto.textContent = 'Fórmula VO₂: Bergstra (1995)';
  } else {
    metodoTexto.textContent = 'Fórmula VO₂: Simplificado (SC × 125)';
  }
  calcular(); // Recalcular com novo método
}

// Adicionar listeners para cálculo automático
const inputIds = [
  'idade', 'peso', 'altura', 'fc', 'hb', 'sexo',
  'pam', 'pvc',
  'sao2', 'pao2', 'paco2',
  'svo2', 'pvo2', 'pvco2'
];

inputIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', calcular);
    if (el.tagName === 'SELECT') {
      el.addEventListener('change', calcular);
    }
  }
});

// ========================================
// FUNÇÕES DE CÁLCULO
// ========================================

function getVal(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const val = parseFloat(el.value);
  return isNaN(val) ? null : val;
}

function setResult(id, value, decimals = 2) {
  const el = document.getElementById(id);
  if (!el) return;
  if (value === null || value === undefined || isNaN(value)) {
    el.textContent = '--';
  } else {
    el.textContent = value.toFixed(decimals);
  }
}

function calcular() {
  // Dados do paciente
  const idade = getVal('idade');
  const peso = getVal('peso');
  const altura = getVal('altura');
  const hb = getVal('hb');
  const fc = getVal('fc');
  const sexo = document.getElementById('sexo').value;
  
  // Pressões
  const pam = getVal('pam');
  const pvc = getVal('pvc');
  
  // Gasometria Arterial
  const sao2 = getVal('sao2');
  const pao2 = getVal('pao2');
  const paco2 = getVal('paco2');
  
  // Gasometria Venosa Central
  const svo2 = getVal('svo2');
  const pvo2 = getVal('pvo2');
  const pvco2 = getVal('pvco2');

  // ========================================
  // CÁLCULOS BÁSICOS
  // ========================================

  // Superfície Corporal (DuBois)
  let sc = null;
  if (peso && altura) {
    sc = 0.007184 * Math.pow(peso, 0.425) * Math.pow(altura, 0.725);
  }
  setResult('resSC', sc, 2);

  // VO2 Estimado (Bergstra 1995 ou Simplificado)
  let vo2Est = null;
  if (metodoVO2 === 'bergstra') {
    // Equação de Bergstra (1995): VO2(ass) = (157.3 × BSA) + (10.0 × Sexo) - (10.5 × ln(Idade)) + 4.8
    // Sexo: Masculino = 1, Feminino = 0
    if (sc && idade && idade > 0) {
      const sexoValor = sexo === 'Masculino' ? 1 : 0;
      vo2Est = (157.3 * sc) + (10.0 * sexoValor) - (10.5 * Math.log(idade)) + 4.8;
    }
  } else {
    // Método simplificado: 125 × SC
    if (sc) {
      vo2Est = 125 * sc;
    }
  }
  setResult('resVO2', vo2Est, 0);

  // ========================================
  // PARÂMETROS DE OXIGENAÇÃO
  // ========================================

  let cao2 = null;
  let cvo2 = null;
  let cavo2 = null;
  let o2er = null;

  if (sao2 && hb && pao2) {
    cao2 = (1.34 * (sao2 / 100) * hb) + (0.003 * pao2);
  }
  setResult('resCaO2', cao2, 2);

  if (svo2 && hb && pvo2) {
    cvo2 = (1.34 * (svo2 / 100) * hb) + (0.003 * pvo2);
  }
  setResult('resCvO2', cvo2, 2);

  if (cao2 && cvo2) {
    cavo2 = cao2 - cvo2;
  }
  setResult('resCAVO2', cavo2, 2);

  if (cao2 && cavo2) {
    o2er = (cavo2 / cao2) * 100;
  }
  setResult('resO2ER', o2er, 1);

  // ========================================
  // PARÂMETROS DE PERFUSÃO
  // ========================================

  let gapCO2 = null;
  let razaoGap = null;

  if (pvco2 && paco2) {
    gapCO2 = pvco2 - paco2;
  }
  setResult('resGapCO2', gapCO2, 1);

  if (gapCO2 && cavo2) {
    razaoGap = gapCO2 / cavo2;
  }
  setResult('resRazaoGap', razaoGap, 2);

  // ========================================
  // DÉBITO CARDÍACO E ÍNDICES
  // ========================================

  let dc = null;
  let ic = null;

  if (vo2Est && cavo2) {
    dc = vo2Est / (cavo2 * 10);
  }
  setResult('resDC', dc, 2);

  if (dc && sc) {
    ic = dc / sc;
  }
  setResult('resIC', ic, 2);

  // ========================================
  // VOLUME SISTÓLICO
  // ========================================

  let vs = null;

  if (dc && fc) {
    vs = (dc / fc) * 1000;
  }
  setResult('resVS', vs, 0);

  // ========================================
  // RESISTÊNCIA VASCULAR SISTÊMICA
  // ========================================

  let rvs = null;

  if (pam && pvc && dc) {
    rvs = ((pam - pvc) / dc) * 80;
  }
  setResult('resRVS', rvs, 0);

  // ========================================
  // OFERTA E CONSUMO DE O2
  // ========================================

  let do2 = null;
  let vo2Consumo = null;

  if (dc && cao2) {
    do2 = dc * cao2 * 10;
  }
  setResult('resDO2', do2, 0);

  if (dc && cavo2) {
    vo2Consumo = dc * cavo2 * 10;
  }
  setResult('resVO2Consumo', vo2Consumo, 0);

  // ========================================
  // INTERPRETAÇÃO CLÍNICA
  // ========================================

  gerarInterpretacao(
    gapCO2, razaoGap, dc, ic, rvs, o2er, cavo2, 
    cao2, cvo2, do2, vs, pam, pvc, svo2
  );
}

function gerarInterpretacao(
  gapCO2, razaoGap, dc, ic, rvs, o2er, cavo2,
  cao2, cvo2, do2, vs, pam, pvc, svo2
) {
  const box = document.getElementById('classificationText');
  let html = '';

  // Verificar se há dados suficientes
  const temDadosOxigenacao = gapCO2 !== null && razaoGap !== null && o2er !== null;
  const temDadosHemodinamicos = dc !== null && rvs !== null;

  if (!temDadosHemodinamicos && !temDadosOxigenacao) {
    html = 'Preencha os dados para obter interpretação clínica.';
  } else {
    html = '<div style="line-height: 1.8;">';

    // ========================================
    // ANÁLISE DE PERFUSÃO
    // ========================================

    if (gapCO2 !== null) {
      html += '<div style="margin-bottom: 0.75rem; padding: 0.75rem; background: rgba(59, 130, 246, 0.1); border-left: 3px solid #3b82f6; border-radius: 0.25rem;">';
      html += '<strong>GAP CO₂:</strong> ';
      if (gapCO2 < 6) {
        html += `${gapCO2.toFixed(1)} mmHg - <span style="color: #ef4444; font-weight: bold;">BAIXO FLUXO / DÉBITO INADEQUADO</span>. Hipoperfusão tecidual.`;
      } else if (gapCO2 >= 6 && gapCO2 <= 8) {
        html += `${gapCO2.toFixed(1)} mmHg - Normal. Débito cardíaco adequado.`;
      } else {
        html += `${gapCO2.toFixed(1)} mmHg - Elevado. Débito adequado ou elevado.`;
      }
      html += '</div>';
    }

    // ========================================
    // ANÁLISE DE METABOLISMO ANAERÓBICO
    // ========================================

    if (razaoGap !== null) {
      html += '<div style="margin-bottom: 0.75rem; padding: 0.75rem; background: rgba(239, 68, 68, 0.1); border-left: 3px solid #ef4444; border-radius: 0.25rem;">';
      html += '<strong>Razão GAP CO₂ / C(A-V)O₂:</strong> ';
      if (razaoGap > 1.4) {
        html += `${razaoGap.toFixed(2)} - <span style="color: #ef4444; font-weight: bold;">METABOLISMO ANAERÓBICO</span>. Hipoxia tecidual presente.`;
      } else {
        html += `${razaoGap.toFixed(2)} - Normal. Sem metabolismo anaeróbico.`;
      }
      html += '</div>';
    }

    // ========================================
    // ANÁLISE DE EXTRAÇÃO DE O2
    // ========================================

    if (o2er !== null) {
      html += '<div style="margin-bottom: 0.75rem; padding: 0.75rem; background: rgba(245, 158, 11, 0.1); border-left: 3px solid #f59e0b; border-radius: 0.25rem;">';
      html += '<strong>O₂ER%:</strong> ';
      if (o2er < 22) {
        html += `${o2er.toFixed(1)}% - Extração inadequada. Débito elevado ou shunt.`;
      } else if (o2er >= 22 && o2er <= 30) {
        html += `${o2er.toFixed(1)}% - Normal. Balanço adequado.`;
      } else {
        html += `${o2er.toFixed(1)}% - <span style="color: #ef4444; font-weight: bold;">Extração excessiva</span>. Hipoperfusão.`;
      }
      html += '</div>';
    }

    // ========================================
    // CLASSIFICAÇÃO DO TIPO DE CHOQUE
    // ========================================

    if (dc !== null && rvs !== null) {
      html += '<div style="margin-top: 1rem; padding: 1rem; background: rgba(30, 58, 95, 0.05); border-left: 4px solid #1e3a5f; border-radius: 0.375rem;">';
      html += '<strong>Classificação Hemodinâmica:</strong><br>';

      if (dc < 4 && rvs > 1200) {
        html += '🔴 <strong>CHOQUE CARDIOGÊNICO</strong> - Débito baixo com resistência elevada.';
      } else if (dc < 4 && rvs < 800) {
        html += '🔴 <strong>CHOQUE HIPOVOLÊMICO</strong> - Débito baixo com resistência elevada.';
      } else if (dc > 8 && rvs < 800) {
        html += '🟠 <strong>CHOQUE SÉPTICO (fase inicial)</strong> - Débito elevado com resistência baixa.';
      } else if (dc < 4 && rvs < 800) {
        html += '🔴 <strong>CHOQUE SÉPTICO (fase tardia)</strong> - Débito baixo com resistência baixa.';
      } else {
        html += '🟢 <strong>HEMODINÂMICA COMPENSADA</strong> - Parâmetros normais.';
      }
      html += '</div>';
    }

    html += '</div>';
  }

  box.innerHTML = html;
}

// Inicializar cálculos ao carregar a página
window.addEventListener('load', calcular);
