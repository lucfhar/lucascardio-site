// ========================================
// CALCULADORA DE CATETERISMO DIREITO
// Dr. Lucas Silva
// ========================================

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
  'idade', 'peso', 'altura', 'fc', 'hb',
  'satAP', 'satVP', 'satAo',
  'pAD', 'pAPSist', 'pAPDiast', 'pCP', 'pAoSist', 'pAoDiast',
  'fcPosTeste', 'pAPSistPos', 'pAPDiastPos', 'pCPPos'
];

inputIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', calcular);
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
  const peso = getVal('peso');
  const altura = getVal('altura');
  const hb = getVal('hb');
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

  // VO2 Estimado (125 × SC)
  let vo2 = null;
  if (sc) {
    vo2 = 125 * sc;
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

    laudo += `

TESTE DE REATIVIDADE PULMONAR
Droga utilizada: ${droga}
FC pós-teste: ${fcPos !== null ? fcPos + ' bpm' : '--'}
PAP Sistólica pós: ${papSistPos !== null ? papSistPos + ' mmHg' : '--'}
PAP Diastólica pós: ${papDiastPos !== null ? papDiastPos + ' mmHg' : '--'}
PAP Média pós: ${papmPos !== null ? papmPos.toFixed(1) + ' mmHg' : '--'}
PCP pós-teste: ${pcpPos !== null ? pcpPos + ' mmHg' : '--'}`;
  }

  laudo += `

---
Dr. Lucas Silva
Cateterismo Direito`;

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
  doc.text('CATETERISMO CARDÍACO DIREITO', 105, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Dr. Lucas Silva', 105, 28, { align: 'center' });

  // Linha separadora
  doc.setLineWidth(0.5);
  doc.line(20, 32, 190, 32);

  let y = 42;

  // Identificação
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('IDENTIFICAÇÃO', 20, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(`Paciente: ${nome}`, 20, y); y += 5;
  doc.text(`RG/Prontuário: ${rg}`, 20, y); y += 5;
  doc.text(`Sexo: ${sexo} | Idade: ${idade ? idade + ' anos' : '--'}`, 20, y); y += 5;
  doc.text(`Data do Exame: ${data}`, 20, y); y += 10;

  // Pressões
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('PRESSÕES (mmHg)', 20, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  const pAD = getVal('pAD');
  const pAPSist = getVal('pAPSist');
  const pAPDiast = getVal('pAPDiast');
  const pCP = getVal('pCP');
  const papm = document.getElementById('resPAPm').textContent;

  doc.text(`Átrio Direito: ${pAD !== null ? pAD : '--'}`, 20, y); y += 5;
  doc.text(`Artéria Pulmonar: ${pAPSist !== null ? pAPSist : '--'}/${pAPDiast !== null ? pAPDiast : '--'} (média: ${papm})`, 20, y); y += 5;
  doc.text(`Capilar Pulmonar (PCP): ${pCP !== null ? pCP : '--'}`, 20, y); y += 10;

  // Resultados principais
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('PARÂMETROS HEMODINÂMICOS', 20, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);

  const dc = document.getElementById('resDC').textContent;
  const ic = document.getElementById('resIC').textContent;
  const rvp = document.getElementById('resRVP').textContent;
  const rvs = document.getElementById('resRVS').textContent;
  const gtp = document.getElementById('resGTP').textContent;
  const gdp = document.getElementById('resGDP').textContent;
  const cpa = document.getElementById('resCpa').textContent;

  doc.text(`Débito Cardíaco: ${dc} L/min`, 20, y); y += 5;
  doc.text(`Índice Cardíaco: ${ic} L/min/m²`, 20, y); y += 5;
  doc.text(`Resistência Vascular Pulmonar: ${rvp} UW`, 20, y); y += 5;
  doc.text(`Resistência Vascular Sistêmica: ${rvs} UW`, 20, y); y += 5;
  doc.text(`Gradiente Transpulmonar: ${gtp} mmHg`, 20, y); y += 5;
  doc.text(`Gradiente Diastólico Pulmonar: ${gdp} mmHg`, 20, y); y += 5;
  doc.text(`Complacência Arterial Pulmonar: ${cpa} mL/mmHg`, 20, y); y += 10;

  // Classificação
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('CLASSIFICAÇÃO (ESC/ERS 2022)', 20, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const classificacao = document.getElementById('classificationText').textContent;
  const splitClass = doc.splitTextToSize(classificacao, 170);
  doc.text(splitClass, 20, y);
  y += splitClass.length * 5 + 5;

  // Teste de Reatividade
  const testeAtivo = document.getElementById('testeReatividade').checked;
  if (testeAtivo) {
    const droga = document.getElementById('drogaVasodilatadora').value;
    if (droga) {
      y += 5;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text('TESTE DE REATIVIDADE PULMONAR', 20, y);
      y += 7;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Droga: ${droga}`, 20, y); y += 5;
      
      const fcPos = getVal('fcPosTeste');
      const papSistPos = getVal('pAPSistPos');
      const papDiastPos = getVal('pAPDiastPos');
      const pcpPos = getVal('pCPPos');
      
      doc.text(`FC pós: ${fcPos !== null ? fcPos + ' bpm' : '--'}`, 20, y); y += 5;
      doc.text(`PAP pós: ${papSistPos !== null ? papSistPos : '--'}/${papDiastPos !== null ? papDiastPos : '--'} mmHg`, 20, y); y += 5;
      doc.text(`PCP pós: ${pcpPos !== null ? pcpPos + ' mmHg' : '--'}`, 20, y); y += 5;
    }
  }

  // Cálculos detalhados (opcional)
  if (incluirCalculos) {
    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('CÁLCULOS DETALHADOS', 20, y);
    y += 7;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);

    const sc = document.getElementById('resSC').textContent;
    const vo2 = document.getElementById('resVO2').textContent;
    const caO2AP = document.getElementById('resCaO2AP').textContent;
    const caO2VP = document.getElementById('resCaO2VP').textContent;
    const caO2Ao = document.getElementById('resCaO2Ao').textContent;

    doc.text(`Superfície Corporal (DuBois): ${sc} m²`, 20, y); y += 4;
    doc.text(`VO₂ Estimado (125 × SC): ${vo2} mL/min`, 20, y); y += 4;
    doc.text(`Conteúdo O₂ - Tronco AP: ${caO2AP} mL/dL`, 20, y); y += 4;
    doc.text(`Conteúdo O₂ - Veia Pulmonar: ${caO2VP} mL/dL`, 20, y); y += 4;
    doc.text(`Conteúdo O₂ - Aorta: ${caO2Ao} mL/dL`, 20, y); y += 6;

    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text('Fórmulas utilizadas:', 20, y); y += 4;
    doc.text('SC = 0.007184 × Peso^0.425 × Altura^0.725 (DuBois)', 20, y); y += 4;
    doc.text('CaO₂ = Hb × 1.36 × (Sat/100)', 20, y); y += 4;
    doc.text('DC = VO₂ / [(CaO₂ arterial - CaO₂ venoso) × 10]', 20, y); y += 4;
    doc.text('RVP = (PAPm - PCP) / DC', 20, y);
    doc.setTextColor(0);
  }

  // Rodapé
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(9);
  doc.setTextColor(100);
  doc.text('Dr. Lucas Silva - Cateterismo Direito', 105, pageHeight - 10, { align: 'center' });

  // Salvar
  const nomeArquivo = `Cateterismo_${nome.replace(/\s+/g, '_')}_${data.replace(/\//g, '-')}.pdf`;
  doc.save(nomeArquivo);
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
  // Definir data atual no formato BR
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const ano = hoje.getFullYear();
  document.getElementById('data').value = `${dia}/${mes}/${ano}`;
});
