// ========================================
// CALCULADORA DE CATETERISMO DIREITO
// Criada por Lucas Ferreira Silva
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

// Toggle do Teste de Reatividade
document.getElementById('testeReatividade').addEventListener('change', function() {
  const fields = document.getElementById('testeReatividadeFields');
  if (this.checked) {
    fields.classList.remove('hidden');
  } else {
    fields.classList.add('hidden');
  }
});

// Adicionar listeners para cálculo automático
const inputIds = [
  'idade', 'peso', 'altura', 'fc', 'hb', 'sexo',
  'satAP', 'satVP', 'satAo',
  'pAD', 'pAPSist', 'pAPDiast', 'pCP', 'pAoSist', 'pAoDiast',
  'fcPosTeste', 'pAPSistPos', 'pAPDiastPos', 'pCPPos'
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

function calcular() {
  const idade = getVal('idade');
  const peso = getVal('peso');
  const altura = getVal('altura');
  const hb = getVal('hb');
  const sexo = document.getElementById('sexo').value;
  const satAP = getVal('satAP');
  const satVP = getVal('satVP');
  const satAo = getVal('satAo');
  const pAD = getVal('pAD');
  const pAPSist = getVal('pAPSist');
  const pAPDiast = getVal('pAPDiast');
  const pCP = getVal('pCP');
  const pAoSist = getVal('pAoSist');
  const pAoDiast = getVal('pAoDiast');

  // Superfície Corporal (DuBois)
  let sc = null;
  if (peso && altura) {
    sc = 0.007184 * Math.pow(peso, 0.425) * Math.pow(altura, 0.725);
  }
  document.getElementById('resSC').textContent = sc ? sc.toFixed(2) : '--';

  // VO2 Estimado - Método selecionado
  let vo2 = null;
  if (metodoVO2 === 'bergstra') {
    // Equação de Bergstra (1995): VO2(ass) = (157.3 × BSA) + (10.0 × Sexo) - (10.5 × ln(Idade)) + 4.8
    // Sexo: Masculino = 1, Feminino = 0
    if (sc && idade && idade > 0) {
      const sexoValor = sexo === 'Masculino' ? 1 : 0;
      vo2 = (157.3 * sc) + (10.0 * sexoValor) - (10.5 * Math.log(idade)) + 4.8;
    }
  } else {
    // Método simplificado: 125 × SC
    if (sc) {
      vo2 = 125 * sc;
    }
  }
  document.getElementById('resVO2').textContent = vo2 ? vo2.toFixed(0) : '--';

  // Conteúdos de O2 (Hb × 1.36 × Sat)
  let caO2AP = null, caO2VP = null, caO2Ao = null;
  if (hb && satAP) {
    caO2AP = hb * 1.36 * (satAP / 100);
  }
  if (hb && satVP) {
    caO2VP = hb * 1.36 * (satVP / 100);
  }
  if (hb && satAo) {
    caO2Ao = hb * 1.36 * (satAo / 100);
  }
  document.getElementById('resCaO2AP').textContent = caO2AP ? caO2AP.toFixed(2) : '--';
  document.getElementById('resCaO2VP').textContent = caO2VP ? caO2VP.toFixed(2) : '--';
  document.getElementById('resCaO2Ao').textContent = caO2Ao ? caO2Ao.toFixed(2) : '--';

  // Débito Cardíaco (Fick): DC = VO2 / (CaO2Ao - CaO2AP) / 10
  let dc = null;
  if (vo2 && caO2Ao && caO2AP && (caO2Ao - caO2AP) > 0) {
    dc = vo2 / ((caO2Ao - caO2AP) * 10);
  }
  document.getElementById('resDC').textContent = dc ? dc.toFixed(2) : '--';

  // Índice Cardíaco
  let ic = null;
  if (dc && sc) {
    ic = dc / sc;
  }
  document.getElementById('resIC').textContent = ic ? ic.toFixed(2) : '--';

  // PAP Média
  let papm = null;
  if (pAPSist && pAPDiast) {
    papm = pAPDiast + (pAPSist - pAPDiast) / 3;
  }
  document.getElementById('resPAPm').textContent = papm ? papm.toFixed(1) : '--';

  // Gradiente Transpulmonar
  let gtp = null;
  if (papm && pCP) {
    gtp = papm - pCP;
  }
  document.getElementById('resGTP').textContent = gtp ? gtp.toFixed(1) : '--';

  // Gradiente Diastólico Pulmonar
  let gdp = null;
  if (pAPDiast && pCP) {
    gdp = pAPDiast - pCP;
  }
  document.getElementById('resGDP').textContent = gdp ? gdp.toFixed(1) : '--';

  // Resistência Vascular Pulmonar (UW)
  let rvp = null;
  if (gtp && dc && dc > 0) {
    rvp = gtp / dc;
  }
  document.getElementById('resRVP').textContent = rvp ? rvp.toFixed(2) : '--';

  // Resistência Vascular Sistêmica
  let rvs = null;
  if (pAoSist && pAoDiast && pAD !== null && dc && dc > 0) {
    const pam = pAoDiast + (pAoSist - pAoDiast) / 3;
    rvs = (pam - pAD) / dc;
  }
  document.getElementById('resRVS').textContent = rvs ? rvs.toFixed(2) : '--';

  // Complacência Arterial Pulmonar
  let cpa = null;
  if (dc && pAPSist && pAPDiast && (pAPSist - pAPDiast) > 0) {
    const vs = (dc * 1000) / (getVal('fc') || 70); // Volume sistólico em mL
    cpa = vs / (pAPSist - pAPDiast);
  }
  document.getElementById('resCpa').textContent = cpa ? cpa.toFixed(2) : '--';

  // Classificação de Hipertensão Pulmonar (ESC/ERS 2022)
  atualizarClassificacao(papm, pCP, rvp);
  
  // Avaliação do Teste de Vasorreatividade (se ativo)
  avaliarVasorreatividade();
}

function atualizarClassificacao(papm, pcp, rvp) {
  const box = document.getElementById('classificationBox');
  const text = document.getElementById('classificationText');

  if (papm === null) {
    text.textContent = 'Preencha os dados para classificação';
    box.classList.remove('hp-present');
    return;
  }

  let classificacao = '';

  if (papm <= 20) {
    classificacao = 'Sem hipertensão pulmonar (PAPm ≤ 20 mmHg)';
    box.classList.remove('hp-present');
  } else {
    box.classList.add('hp-present');
    
    if (pcp === null) {
      classificacao = 'Hipertensão pulmonar presente (PAPm > 20 mmHg). Preencha PCP para classificação completa.';
    } else if (pcp <= 15) {
      // HP pré-capilar
      if (rvp !== null && rvp >= 2) {
        classificacao = 'Hipertensão pulmonar pré-capilar (PAPm > 20, PCP ≤ 15, RVP ≥ 2 UW)';
      } else if (rvp !== null && rvp < 2) {
        classificacao = 'Elevação isolada de PAPm (PAPm > 20, PCP ≤ 15, RVP < 2 UW)';
      } else {
        classificacao = 'HP pré-capilar provável (PAPm > 20, PCP ≤ 15). Calcule RVP para confirmar.';
      }
    } else {
      // HP pós-capilar
      if (rvp !== null && rvp >= 2) {
        classificacao = 'Hipertensão pulmonar pós-capilar combinada (PAPm > 20, PCP > 15, RVP ≥ 2 UW)';
      } else if (rvp !== null && rvp < 2) {
        classificacao = 'Hipertensão pulmonar pós-capilar isolada (PAPm > 20, PCP > 15, RVP < 2 UW)';
      } else {
        classificacao = 'HP pós-capilar (PAPm > 20, PCP > 15). Calcule RVP para subclassificação.';
      }
    }
  }

  text.textContent = classificacao;
}

// ========================================
// AVALIAÇÃO DE VASORREATIVIDADE
// ========================================

function avaliarVasorreatividade() {
  const testeAtivo = document.getElementById('testeReatividade').checked;
  
  if (!testeAtivo) {
    return null;
  }
  
  // Valores basais
  const rvpBasal = parseFloat(document.getElementById('resRVP').textContent);
  const gtpBasal = parseFloat(document.getElementById('resGTP').textContent);
  const pAPSistBasal = getVal('pAPSist');
  const dcBasal = parseFloat(document.getElementById('resDC').textContent);
  
  // Valores pós-teste
  const pAPSistPos = getVal('pAPSistPos');
  const pAPDiastPos = getVal('pAPDiastPos');
  const pCPPos = getVal('pCPPos');
  
  // Calcular parâmetros pós-teste
  let papmPos = null;
  let gtpPos = null;
  let rvpPos = null;
  
  if (pAPSistPos && pAPDiastPos) {
    papmPos = pAPDiastPos + (pAPSistPos - pAPDiastPos) / 3;
  }
  
  if (papmPos && pCPPos) {
    gtpPos = papmPos - pCPPos;
  }
  
  if (gtpPos && dcBasal && dcBasal > 0) {
    rvpPos = gtpPos / dcBasal;
  }
  
  // Critérios de positividade (contexto pré-transplante cardíaco)
  let resultado = {
    positivo: false,
    texto: '',
    detalhes: []
  };
  
  if (rvpPos === null || gtpPos === null || pAPSistPos === null) {
    resultado.texto = 'Dados insuficientes para avaliar vasorreatividade';
    return resultado;
  }
  
  // Verificar critérios de positividade
  const criterio1 = rvpPos <= 2.5; // RVP reduzível a ≤ 2.5 UW
  const criterio2 = gtpPos <= 15;   // GTP reduzível a ≤ 15 mmHg
  const criterio3 = pAPSistPos < 60; // PAPs < 60 mmHg (usando 60 como limite superior)
  
  resultado.detalhes.push(`RVP pós-teste: ${rvpPos.toFixed(2)} UW ${criterio1 ? '(≤ 2.5 ✓)' : '(> 2.5 ✗)'}`);
  resultado.detalhes.push(`GTP pós-teste: ${gtpPos.toFixed(1)} mmHg ${criterio2 ? '(≤ 15 ✓)' : '(> 15 ✗)'}`);
  resultado.detalhes.push(`PAP sistólica pós: ${pAPSistPos} mmHg ${criterio3 ? '(< 60 ✓)' : '(≥ 60 ✗)'}`);
  
  // Teste é positivo se RVP ≤ 2.5 OU GTP ≤ 15, E PAPs < 60
  if ((criterio1 || criterio2) && criterio3) {
    resultado.positivo = true;
    resultado.texto = 'TESTE POSITIVO (Hipertensão pulmonar reversível - Aceitável para transplante)';
  } else {
    resultado.positivo = false;
    if (rvpPos > 5) {
      resultado.texto = 'TESTE NEGATIVO (RVP > 5 UW - Alto risco de falência do VD do enxerto)';
    } else {
      resultado.texto = 'TESTE NEGATIVO (Hipertensão pulmonar não suficientemente reversível)';
    }
  }
  
  return resultado;
}

// ========================================
// GERAÇÃO DE LAUDO
// ========================================

function gerarLaudo() {
  const nome = document.getElementById('nome').value || '[Nome não informado]';
  const rg = document.getElementById('rg').value || '[RG não informado]';
  const sexo = document.getElementById('sexo').value;
  const data = document.getElementById('data').value || '[Data não informada]';
  const idade = getVal('idade');

  // Resultados
  const sc = document.getElementById('resSC').textContent;
  const vo2 = document.getElementById('resVO2').textContent;
  const dc = document.getElementById('resDC').textContent;
  const ic = document.getElementById('resIC').textContent;
  const papm = document.getElementById('resPAPm').textContent;
  const gtp = document.getElementById('resGTP').textContent;
  const gdp = document.getElementById('resGDP').textContent;
  const rvp = document.getElementById('resRVP').textContent;
  const rvs = document.getElementById('resRVS').textContent;
  const cpa = document.getElementById('resCpa').textContent;
  const classificacao = document.getElementById('classificationText').textContent;

  // Pressões
  const pAD = getVal('pAD');
  const pAPSist = getVal('pAPSist');
  const pAPDiast = getVal('pAPDiast');
  const pCP = getVal('pCP');

  // Método de VO2 usado
  const metodoTexto = metodoVO2 === 'bergstra' ? 'Equação de Bergstra (1995)' : 'Método simplificado (SC × 125 mL/min/m²)';

  // Teste de Reatividade
  const testeAtivo = document.getElementById('testeReatividade').checked;
  const droga = document.getElementById('drogaVasodilatadora').value;

  let laudo = `LAUDO DE CATETERISMO CARDÍACO DIREITO

IDENTIFICAÇÃO
Paciente: ${nome}
RG/Prontuário: ${rg}
Sexo: ${sexo}
Idade: ${idade ? idade + ' anos' : 'Não informada'}
Data do Exame: ${data}

DADOS HEMODINÂMICOS
Superfície Corporal: ${sc} m²
VO₂ Estimado (${metodoTexto}): ${vo2} mL/min
Débito Cardíaco (Fick): ${dc} L/min
Índice Cardíaco: ${ic} L/min/m²

PRESSÕES (mmHg)
Átrio Direito: ${pAD !== null ? pAD : '--'}
Artéria Pulmonar Sistólica: ${pAPSist !== null ? pAPSist : '--'}
Artéria Pulmonar Diastólica: ${pAPDiast !== null ? pAPDiast : '--'}
Pressão Arterial Pulmonar Média: ${papm}
Pressão Capilar Pulmonar: ${pCP !== null ? pCP : '--'}

RESISTÊNCIAS E GRADIENTES
Gradiente Transpulmonar: ${gtp} mmHg
Gradiente Diastólico Pulmonar: ${gdp} mmHg
Resistência Vascular Pulmonar: ${rvp} UW
Resistência Vascular Sistêmica: ${rvs} UW
Complacência Arterial Pulmonar: ${cpa} mL/mmHg

CLASSIFICAÇÃO (ESC/ERS 2022)
${classificacao}`;

  if (testeAtivo && droga) {
    const fcPos = getVal('fcPosTeste');
    const papSistPos = getVal('pAPSistPos');
    const papDiastPos = getVal('pAPDiastPos');
    const pcpPos = getVal('pCPPos');
    
    let papmPos = null;
    if (papSistPos && papDiastPos) {
      papmPos = papDiastPos + (papSistPos - papDiastPos) / 3;
    }

    // Avaliar vasorreatividade
    const resultadoVaso = avaliarVasorreatividade();
    
    laudo += `

TESTE DE REATIVIDADE PULMONAR
Droga utilizada: ${droga}
FC pós-teste: ${fcPos !== null ? fcPos + ' bpm' : '--'}
PAP Sistólica pós: ${papSistPos !== null ? papSistPos + ' mmHg' : '--'}
PAP Diastólica pós: ${papDiastPos !== null ? papDiastPos + ' mmHg' : '--'}
PAP Média pós: ${papmPos !== null ? papmPos.toFixed(1) + ' mmHg' : '--'}
PCP pós-teste: ${pcpPos !== null ? pcpPos + ' mmHg' : '--'}`;
    
    // Adicionar resultado da avaliação
    if (resultadoVaso && resultadoVaso.texto) {
      laudo += `

AVALIAÇÃO DE VASORREATIVIDADE (Critérios Pré-Transplante Cardíaco)
${resultadoVaso.texto}`;
      
      if (resultadoVaso.detalhes && resultadoVaso.detalhes.length > 0) {
        laudo += `

Critérios avaliados:`;
        resultadoVaso.detalhes.forEach(detalhe => {
          laudo += `
- ${detalhe}`;
        });
      }
      
      laudo += `

Critérios de positividade:
- RVP reduzível a ≤ 2.5 UW, OU
- GTP reduzível a ≤ 15 mmHg, E
- PAP sistólica < 60 mmHg pós-vasodilatador`;
    }
  }

  laudo += `

---
Calculadora criada por Lucas Ferreira Silva
lucascardio.com.br`;

  document.getElementById('laudoText').value = laudo;
}

function copiarLaudo() {
  const textarea = document.getElementById('laudoText');
  textarea.select();
  document.execCommand('copy');
  alert('Laudo copiado para a área de transferência!');
}

// ========================================
// EXPORTAÇÃO PDF
// ========================================

function baixarPDF(incluirCalculos) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const nome = document.getElementById('nome').value || 'Paciente';
  const rg = document.getElementById('rg').value || '';
  const sexo = document.getElementById('sexo').value;
  const data = document.getElementById('data').value || '';
  const idade = getVal('idade');

  // Cabeçalho
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('CATETERISMO CARDIACO DIREITO', 105, 20, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Criada por Lucas Ferreira Silva', 105, 27, { align: 'center' });

  // Linha separadora
  doc.setLineWidth(0.5);
  doc.line(20, 32, 190, 32);

  let y = 42;

  // Identificação
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('IDENTIFICACAO', 20, y);
  y += 6;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`Paciente: ${nome}`, 20, y);
  y += 5;
  doc.text(`RG/Prontuario: ${rg}`, 20, y);
  y += 5;
  doc.text(`Sexo: ${sexo}`, 20, y);
  y += 5;
  doc.text(`Idade: ${idade ? idade + ' anos' : 'Nao informada'}`, 20, y);
  y += 5;
  doc.text(`Data do Exame: ${data}`, 20, y);
  y += 10;

  // Dados Hemodinâmicos
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('DADOS HEMODINAMICOS', 20, y);
  y += 6;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const sc = document.getElementById('resSC').textContent;
  const vo2 = document.getElementById('resVO2').textContent;
  const dc = document.getElementById('resDC').textContent;
  const ic = document.getElementById('resIC').textContent;
  
  const metodoTexto = metodoVO2 === 'bergstra' ? 'Bergstra 1995' : 'SC × 125';
  
  doc.text(`Superficie Corporal: ${sc} m2`, 20, y);
  y += 5;
  doc.text(`VO2 Estimado (${metodoTexto}): ${vo2} mL/min`, 20, y);
  y += 5;
  doc.text(`Debito Cardiaco (Fick): ${dc} L/min`, 20, y);
  y += 5;
  doc.text(`Indice Cardiaco: ${ic} L/min/m2`, 20, y);
  y += 10;

  // Pressões
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('PRESSOES (mmHg)', 20, y);
  y += 6;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const pAD = getVal('pAD');
  const pAPSist = getVal('pAPSist');
  const pAPDiast = getVal('pAPDiast');
  const papm = document.getElementById('resPAPm').textContent;
  const pCP = getVal('pCP');
  
  doc.text(`Atrio Direito: ${pAD !== null ? pAD : '--'}`, 20, y);
  y += 5;
  doc.text(`Arteria Pulmonar Sistolica: ${pAPSist !== null ? pAPSist : '--'}`, 20, y);
  y += 5;
  doc.text(`Arteria Pulmonar Diastolica: ${pAPDiast !== null ? pAPDiast : '--'}`, 20, y);
  y += 5;
  doc.text(`Pressao Arterial Pulmonar Media: ${papm}`, 20, y);
  y += 5;
  doc.text(`Pressao Capilar Pulmonar: ${pCP !== null ? pCP : '--'}`, 20, y);
  y += 10;

  // Resistências e Gradientes
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('RESISTENCIAS E GRADIENTES', 20, y);
  y += 6;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const gtp = document.getElementById('resGTP').textContent;
  const gdp = document.getElementById('resGDP').textContent;
  const rvp = document.getElementById('resRVP').textContent;
  const rvs = document.getElementById('resRVS').textContent;
  const cpa = document.getElementById('resCpa').textContent;
  
  doc.text(`Gradiente Transpulmonar: ${gtp} mmHg`, 20, y);
  y += 5;
  doc.text(`Gradiente Diastolico Pulmonar: ${gdp} mmHg`, 20, y);
  y += 5;
  doc.text(`Resistencia Vascular Pulmonar: ${rvp} UW`, 20, y);
  y += 5;
  doc.text(`Resistencia Vascular Sistemica: ${rvs} UW`, 20, y);
  y += 5;
  doc.text(`Complacencia Arterial Pulmonar: ${cpa} mL/mmHg`, 20, y);
  y += 10;

  // Classificação
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('CLASSIFICACAO (ESC/ERS 2022)', 20, y);
  y += 6;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const classificacao = document.getElementById('classificationText').textContent;
  const linhasClassificacao = doc.splitTextToSize(classificacao, 170);
  doc.text(linhasClassificacao, 20, y);
  y += linhasClassificacao.length * 5 + 5;

  // Teste de Reatividade (se ativo)
  const testeAtivo = document.getElementById('testeReatividade').checked;
  const droga = document.getElementById('drogaVasodilatadora').value;
  
  if (testeAtivo && droga) {
    if (y > 250) {
      doc.addPage();
      y = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('TESTE DE REATIVIDADE PULMONAR', 20, y);
    y += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const fcPos = getVal('fcPosTeste');
    const papSistPos = getVal('pAPSistPos');
    const papDiastPos = getVal('pAPDiastPos');
    const pcpPos = getVal('pCPPos');
    
    let papmPos = null;
    if (papSistPos && papDiastPos) {
      papmPos = papDiastPos + (papSistPos - papDiastPos) / 3;
    }
    
    doc.text(`Droga utilizada: ${droga}`, 20, y);
    y += 5;
    doc.text(`FC pos-teste: ${fcPos !== null ? fcPos + ' bpm' : '--'}`, 20, y);
    y += 5;
    doc.text(`PAP Sistolica pos: ${papSistPos !== null ? papSistPos + ' mmHg' : '--'}`, 20, y);
    y += 5;
    doc.text(`PAP Diastolica pos: ${papDiastPos !== null ? papDiastPos + ' mmHg' : '--'}`, 20, y);
    y += 5;
    doc.text(`PAP Media pos: ${papmPos !== null ? papmPos.toFixed(1) + ' mmHg' : '--'}`, 20, y);
    y += 5;
    doc.text(`PCP pos-teste: ${pcpPos !== null ? pcpPos + ' mmHg' : '--'}`, 20, y);
    y += 10;
    
    // Avaliar vasorreatividade e adicionar ao PDF
    const resultadoVaso = avaliarVasorreatividade();
    if (resultadoVaso && resultadoVaso.texto) {
      if (y > 220) {
        doc.addPage();
        y = 20;
      }
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('AVALIACAO DE VASORREATIVIDADE', 20, y);
      y += 6;
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text('(Criterios Pre-Transplante Cardiaco)', 20, y);
      y += 6;
      
      // Resultado
      doc.setFont('helvetica', 'bold');
      const linhasResultado = doc.splitTextToSize(resultadoVaso.texto, 170);
      doc.text(linhasResultado, 20, y);
      y += linhasResultado.length * 5 + 5;
      
      // Detalhes
      if (resultadoVaso.detalhes && resultadoVaso.detalhes.length > 0) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.text('Criterios avaliados:', 20, y);
        y += 5;
        
        resultadoVaso.detalhes.forEach(detalhe => {
          // Remover caracteres especiais para PDF
          const detalheAscii = detalhe.replace(/✓/g, 'OK').replace(/✗/g, 'X').replace(/≤/g, '<=').replace(/≥/g, '>=');
          doc.text(`  - ${detalheAscii}`, 20, y);
          y += 4;
        });
        y += 3;
      }
      
      // Critérios de positividade
      doc.setFontSize(9);
      doc.text('Criterios de positividade:', 20, y);
      y += 5;
      doc.text('  - RVP reduzivel a <= 2.5 UW, OU', 20, y);
      y += 4;
      doc.text('  - GTP reduzivel a <= 15 mmHg, E', 20, y);
      y += 4;
      doc.text('  - PAP sistolica < 60 mmHg pos-vasodilatador', 20, y);
      y += 10;
    }
  }

  // Cálculos detalhados (se solicitado)
  if (incluirCalculos) {
    if (y > 220) {
      doc.addPage();
      y = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('CALCULOS DETALHADOS', 20, y);
    y += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    
    const hb = getVal('hb');
    const satAP = getVal('satAP');
    const satVP = getVal('satVP');
    const satAo = getVal('satAo');
    
    doc.text('Conteudos de O2:', 20, y);
    y += 5;
    doc.text(`  Tronco AP: ${document.getElementById('resCaO2AP').textContent} mL/dL`, 20, y);
    y += 4;
    doc.text(`  Veia Pulmonar: ${document.getElementById('resCaO2VP').textContent} mL/dL`, 20, y);
    y += 4;
    doc.text(`  Aorta: ${document.getElementById('resCaO2Ao').textContent} mL/dL`, 20, y);
    y += 6;
    
    doc.text('Formulas utilizadas:', 20, y);
    y += 5;
    doc.text(`  SC (DuBois) = 0.007184 x Peso^0.425 x Altura^0.725`, 20, y);
    y += 4;
    
    if (metodoVO2 === 'bergstra') {
      doc.text(`  VO2 (Bergstra) = (157.3 x SC) + (10.0 x Sexo) - (10.5 x ln(Idade)) + 4.8`, 20, y);
      y += 4;
      doc.text(`    Sexo: Masculino = 1, Feminino = 0`, 20, y);
    } else {
      doc.text(`  VO2 (Simplificado) = 125 x SC`, 20, y);
    }
    y += 4;
    doc.text(`  CaO2 = Hb x 1.36 x (Sat/100)`, 20, y);
    y += 4;
    doc.text(`  DC (Fick) = VO2 / [(CaO2 Aorta - CaO2 AP) x 10]`, 20, y);
    y += 4;
    doc.text(`  IC = DC / SC`, 20, y);
    y += 4;
    doc.text(`  PAPm = PAPd + (PAPs - PAPd) / 3`, 20, y);
    y += 4;
    doc.text(`  RVP = (PAPm - PCP) / DC`, 20, y);
  }

  // Rodapé
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('Calculadora criada por Lucas Ferreira Silva - lucascardio.com.br', 105, 285, { align: 'center' });
  }

  // Salvar PDF
  const nomeArquivo = `Cateterismo_${nome.replace(/\s+/g, '_')}_${data.replace(/\//g, '-')}.pdf`;
  doc.save(nomeArquivo);
}
