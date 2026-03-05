// ═══════════════════════════════════════════════════════════
// CAPÍTULO 05 — Antiagregantes, Antitrombóticos e Trombolíticos
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q5-01) Paciente com FA (CHA2DS2-VASc alto) faz PCI por NSTEMI com DES. Qual estratégia antitrombótica pós-alta é mais alinhada aos grandes RCTs (AUGUSTUS/RE-DUAL/PIONEER/ENTRUST) para reduzir sangramento sem aumentar eventos isquêmicos de forma relevante?",
    options: [
      "a) Varfarina + AAS + clopidogrel por 12 meses em todos",
      "b) DOAC + clopidogrel, com AAS apenas por período curto (dias–semanas) conforme risco isquêmico/hemorrágico",
      "c) AAS isolado e suspender anticoagulação",
      "d) DOAC + ticagrelor sempre por 12 meses",
      "e) Heparina SC indefinida + AAS"
    ],
    answer: 1,
    comment: "Dupla terapia (DOAC + P2Y12, usualmente clopidogrel) reduz sangramento; AAS é curto e individualizado.",
    source: "AUGUSTUS (NEJM 2019); RE-DUAL PCI (NEJM 2017); PIONEER AF-PCI (NEJM 2016); ENTRUST-AF PCI (Lancet 2019)."
  },
  {
    q: "Q5-02) Em trombose de stent aguda/subaguda, além de tratar a lesão, qual ajuste farmacológico é mais racional na maioria dos casos (na ausência de contraindicações)?",
    options: [
      "a) Suspender P2Y12 e manter apenas AAS",
      "b) Escalonar para P2Y12 mais potente (prasugrel/ticagrelor) e revisar adesão/interações, além de otimização mecânica",
      "c) Trocar para dipiridamol",
      "d) Anticoagulação plena indefinida como regra, independentemente de causa",
      "e) Suspender estatina"
    ],
    answer: 1,
    comment: "Trombose de stent exige revisão de técnica + adesão + resistência/interações; P2Y12 potente é frequentemente indicado.",
    source: "Diretrizes ACS/PCI; consensos de trombose de stent (síntese)."
  },
  {
    q: "Q5-03) Qual afirmação sobre prasugrel é correta?",
    options: [
      "a) É preferível em pacientes com AVC/TIA prévio",
      "b) É contraindicado em AVC/TIA prévio; cautela em idade ≥75 e peso <60 kg",
      "c) Não aumenta sangramento em relação a clopidogrel em ACS",
      "d) É o P2Y12 de escolha em fibrinólise",
      "e) Não depende de metabolismo hepático"
    ],
    answer: 1,
    comment: "Prasugrel: contraindicação AVC/TIA; maior sangramento em alguns perfis; atenção a idade/peso.",
    source: "TRITON-TIMI 38 (NEJM 2007); bula/label."
  },
  {
    q: "Q5-04) Ticagrelor: qual interação é mais crítica do ponto de vista de eficácia/segurança?",
    options: [
      "a) Indutores potentes de CYP3A (ex.: rifampicina) podem reduzir níveis e eficácia",
      "b) Omeprazol aumenta níveis e risco de sangramento de forma marcada",
      "c) Dipirona é contraindicação absoluta",
      "d) Vitamina K reduz efeito do ticagrelor",
      "e) Estatinas são sempre proibidas"
    ],
    answer: 0,
    comment: "Ticagrelor é substrato de CYP3A; indutores fortes reduzem exposição e podem diminuir eficácia.",
    source: "PLATO (NEJM 2009); bula/label ticagrelor."
  },
  {
    q: "Q5-05) Em NSTE-ACS com estratégia invasiva precoce e necessidade de “rápida” inibição plaquetária no laboratório quando P2Y12 oral não foi absorvido/administrado, qual opção tem racional forte?",
    options: [
      "a) Dobrar AAS",
      "b) Cangrelor IV",
      "c) Suspender heparina",
      "d) Vitamina K",
      "e) Trombolítico"
    ],
    answer: 1,
    comment: "Cangrelor IV oferece inibição P2Y12 imediata e reversível, útil periprocedimento em cenários selecionados.",
    source: "CHAMPION PHOENIX (NEJM 2013); bula/label."
  },
  {
    q: "Q5-06) Em STEMI com angioplastia primária, qual anticoagulante teve sinal consistente de menor sangramento vs heparina + GPIIb/IIIa em alguns estudos, com trade-offs contextuais?",
    options: [
      "a) Bivalirudina",
      "b) Varfarina",
      "c) Fondaparinux isolado durante PCI",
      "d) Dabigatrana",
      "e) Apixabana IV"
    ],
    answer: 0,
    comment: "Bivalirudina reduziu sangramento em estudos, com discussão sobre trombose aguda de stent em alguns cenários e necessidade de estratégia de heparina/infusão.",
    source: "HORIZONS-AMI (NEJM 2008); EUROMAX (Lancet 2013)."
  },
  {
    q: "Q5-07) Fondaparinux em NSTE-ACS: qual cuidado é essencial durante PCI?",
    options: [
      "a) É suficiente como único anticoagulante intraprocedimento",
      "b) Associar heparina (UFH) durante PCI para prevenir trombose de cateter",
      "c) Suspender qualquer anticoagulação",
      "d) Trocar por varfarina imediatamente",
      "e) Administrar trombolítico de rotina"
    ],
    answer: 1,
    comment: "Fondaparinux isolado durante PCI associa-se a trombose de cateter; UFH adicional é recomendado.",
    source: "OASIS-5 (NEJM 2006); diretrizes ESC/ACC NSTE-ACS."
  },
  {
    q: "Q5-08) Em paciente com alto risco de sangramento (ARC-HBR) submetido a DES contemporâneo por DAC estável, qual estratégia de DAPT é mais alinhada às evidências recentes?",
    options: [
      "a) DAPT obrigatória por 12 meses em todos",
      "b) Considerar DAPT curta (1–3 meses) seguida de monoterapia, conforme perfil isquêmico e tipo de stent",
      "c) AAS isolado desde o dia 0",
      "d) P2Y12 duplo sem AAS por 12 meses",
      "e) Anticoagulação plena sem antiagregantes"
    ],
    answer: 1,
    comment: "Em HBR e stents modernos, DAPT curta pode ser adequada em muitos cenários, individualizando isquemia vs sangramento.",
    source: "ARC-HBR (Circulation 2019); estudos de DAPT curta/monoterapia P2Y12 (síntese)."
  },
  {
    q: "Q5-09) “PRECISE-DAPT” é mais útil para:",
    options: [
      "a) Predizer risco hemorrágico e orientar duração de DAPT",
      "b) Diagnosticar trombose de stent",
      "c) Substituir FFR/iFR",
      "d) Definir tipo de guia",
      "e) Escolher contraste"
    ],
    answer: 0,
    comment: "PRECISE-DAPT estima risco de sangramento e ajuda a calibrar duração de DAPT.",
    source: "Costa F et al. Lancet. 2017;389:1025–1034."
  },
  {
    q: "Q5-10) “DAPT score” tende a ser mais útil quando a pergunta clínica é:",
    options: [
      "a) Interromper DAPT antes de 1 mês",
      "b) Considerar prolongar DAPT além de 12 meses em quem tolerou sem sangramento",
      "c) Diagnosticar dissecção",
      "d) Avaliar trombo intracoronário",
      "e) Ajustar dose de heparina intraprocedimento"
    ],
    answer: 1,
    comment: "DAPT score ajuda a pesar benefício isquêmico vs sangramento para extensão >12 meses após curso inicial.",
    source: "Yeh RW et al. JAMA. 2016;315:1735–1749."
  },
  {
    q: "Q5-11) Em choque cardiogênico com PCI, a heparina não fracionada (UFH) é frequentemente preferida por qual motivo prático?",
    options: [
      "a) Não é reversível",
      "b) Monitorização por ACT e reversão com protamina, além de ampla experiência em laboratório",
      "c) Menor variabilidade do que qualquer outro agente",
      "d) Não interage com GP IIb/IIIa",
      "e) Sempre reduz sangramento em relação a todos os outros"
    ],
    answer: 1,
    comment: "UFH é titulável por ACT e reversível; isso é útil em cenários críticos e procedimentos longos/complexos.",
    source: "Prática padrão em hemodinâmica; diretrizes (síntese)."
  },
  {
    q: "Q5-12) Em paciente com HIT (trombocitopenia induzida por heparina) com necessidade de PCI, qual alternativa é mais apropriada?",
    options: [
      "a) Reexpor a UFH",
      "b) Argatroban/bivalirudina (conforme disponibilidade) como anticoagulante intraprocedimento",
      "c) Vitamina K",
      "d) Fondaparinux como único anticoagulante durante PCI sem UFH",
      "e) Suspender qualquer anticoagulação"
    ],
    answer: 1,
    comment: "HIT: evitar heparina; usar anticoagulante direto (ex.: argatroban/bivalirudina) conforme protocolo.",
    source: "Diretrizes HIT; prática PCI (síntese)."
  },
  {
    q: "Q5-13) “De-escalation” de P2Y12 pós-ACS (ex.: ticagrelor/prasugrel → clopidogrel) é mais razoável quando:",
    options: [
      "a) Há sangramento, intolerância ou alto risco hemorrágico e a estratégia é guiada (quando possível) por função plaquetária/genótipo",
      "b) Sempre no dia 1 para todos os pacientes",
      "c) Apenas em pacientes com trombose de stent",
      "d) Nunca, pois aumenta mortalidade invariavelmente",
      "e) Somente se houver CKD"
    ],
    answer: 0,
    comment: "De-escalation pode reduzir sangramento em selecionados; idealmente guiada por risco e, quando disponível, por testes.",
    source: "TROPICAL-ACS; POPular Genetics (síntese)."
  },
  {
    q: "Q5-14) Em fibrinólise para STEMI e posterior estratégia farmacoinvasiva, qual P2Y12 tem maior base tradicional de uso/estudo no contexto inicial?",
    options: [
      "a) Prasugrel",
      "b) Ticagrelor",
      "c) Clopidogrel",
      "d) Vorapaxar",
      "e) Dipiridamol"
    ],
    answer: 2,
    comment: "Clopidogrel foi o P2Y12 clássico associado à fibrinólise (evidência robusta histórica).",
    source: "CLARITY-TIMI 28; COMMIT (síntese)."
  },
  {
    q: "Q5-15) Qual situação favorece uso de GPIIb/IIIa como “bailout” (e não rotineiro) em era de DAPT potente?",
    options: [
      "a) Qualquer DAC estável eletiva",
      "b) Trombo grande/no-reflow, complicações trombóticas intraprocedimento apesar de antitrombótico adequado",
      "c) Pós-angiografia diagnóstica",
      "d) Antes de punção arterial",
      "e) Apenas para reduzir dor"
    ],
    answer: 1,
    comment: "Uso seletivo (bailout) em complicações trombóticas/no-reflow continua racional.",
    source: "Diretrizes ACS/PCI (síntese)."
  },

  // Para completar 30:
  {
    q: "Q5-16) Em paciente com sangramento GI recente, mas alto risco isquêmico pós-PCI, qual medida reduz sangramento GI mantendo terapia antitrombótica?",
    options: [
      "a) Suspender todos os antiagregantes",
      "b) Associar IBP (PPI) e escolher P2Y12 conforme risco/interações",
      "c) Aumentar dose de AAS",
      "d) Trocar para varfarina",
      "e) Trocar para dipiridamol"
    ],
    answer: 1,
    comment: "PPI reduz sangramento GI; interações (ex.: omeprazol-clopidogrel) podem ser consideradas conforme caso.",
    source: "Diretrizes DAPT/IBP (síntese)."
  },
  {
    q: "Q5-17) Em paciente com trombose de stent e suspeita de baixa adesão ao P2Y12, qual abordagem é mais apropriada antes de rotular “resistência”?",
    options: [
      "a) Assumir resistência e suspender o P2Y12",
      "b) Confirmar adesão, checar interações e, se disponível, considerar teste de função plaquetária/genótipo para orientar estratégia",
      "c) Trocar AAS por paracetamol",
      "d) Fazer trombólise domiciliar",
      "e) Não investigar e manter tudo igual"
    ],
    answer: 1,
    comment: "Baixa adesão/interações são causas comuns e tratáveis; testes podem ajudar em casos selecionados.",
    source: "Consensos de terapia antiplaquetária (síntese)."
  },
  {
    q: "Q5-18) Em NSTE-ACS com angiografia adiada e alto risco hemorrágico, qual estratégia sobre “pré-tratamento” com P2Y12 é mais consistente com evidência contemporânea?",
    options: [
      "a) Pré-tratar todos com prasugrel antes de conhecer anatomia",
      "b) Evitar pré-tratamento rotineiro com P2Y12 em muitos cenários, individualizando conforme risco e estratégia invasiva",
      "c) Usar trombolítico antes do cateterismo",
      "d) Aumentar AAS para 500 mg/dia",
      "e) Suspender anticoagulação"
    ],
    answer: 1,
    comment: "Pré-tratamento rotineiro em NSTE-ACS é controverso; individualizar reduz sangramento quando anatomia/estratégia ainda são incertas.",
    source: "ISAR-REACT 5; diretrizes ESC/ACC NSTE-ACS (síntese)."
  },
  {
    q: "Q5-19) Em paciente com FA e PCI, por que clopidogrel é frequentemente preferido como P2Y12 no esquema com DOAC?",
    options: [
      "a) Porque é o mais potente de todos",
      "b) Porque há maior experiência e perfil de sangramento mais favorável em combinação com anticoagulante, comparado a ticagrelor/prasugrel em muitos cenários",
      "c) Porque não tem variabilidade interindividual",
      "d) Porque não interage com nada",
      "e) Porque dispensa AAS para sempre"
    ],
    answer: 1,
    comment: "Em estudos AF-PCI, a grande maioria usou clopidogrel; perfil hemorrágico é mais favorável em combinações.",
    source: "AUGUSTUS; RE-DUAL PCI; PIONEER AF-PCI; ENTRUST-AF PCI."
  },
  {
    q: "Q5-20) Em STEMI com suspeita de dissecção de tronco/complicação catastrófica e risco de cirurgia emergencial, qual propriedade de UFH é particularmente útil?",
    options: [
      "a) Meia-vida longa e irreversível",
      "b) Reversibilidade com protamina",
      "c) Eliminação renal exclusiva",
      "d) Necessidade de monitorização impossível",
      "e) Ausência de interação com qualquer fármaco"
    ],
    answer: 1,
    comment: "Reversibilidade da UFH é útil em necessidade de reversão rápida (ex.: cirurgia).",
    source: "Farmacologia heparina (síntese)."
  },
  {
    q: "Q5-21) Em paciente com trombólise para STEMI, qual complicação hemorrágica é a mais temida e define maior parte das contraindicações absolutas?",
    options: [
      "a) Hematoma no local de punção",
      "b) Epistaxe leve",
      "c) Hemorragia intracraniana",
      "d) Hematúria microscópica",
      "e) Equimose"
    ],
    answer: 2,
    comment: "Hemorragia intracraniana é a complicação mais grave e orienta contraindicações.",
    source: "Diretrizes STEMI; farmacologia trombólise (síntese)."
  },
  {
    q: "Q5-22) Em PCI eletiva com heparina, qual alvo de ACT é mais típico (ordem de grandeza), variando com uso de GPIIb/IIIa e protocolo local?",
    options: [
      "a) 50–80 s",
      "b) 100–120 s",
      "c) 200–300 s",
      "d) 600–800 s",
      "e) 900–1200 s"
    ],
    answer: 2,
    comment: "ACT típico durante PCI com UFH costuma ficar ~250–300 s (varia com IIb/IIIa e laboratório).",
    source: "Prática padrão em hemodinâmica; consensos (síntese)."
  },
  {
    q: "Q5-23) Em paciente com história de sangramento maior e necessidade de DAPT, qual escolha de AAS tende a reduzir risco GI sem perda de eficácia antiagregante?",
    options: [
      "a) AAS 300–500 mg/dia indefinidamente",
      "b) AAS em baixa dose (75–100 mg/dia) + PPI quando indicado",
      "c) AAS em dias alternados em pós-PCI recente",
      "d) Trocar AAS por ibuprofeno",
      "e) AAS sublingual"
    ],
    answer: 1,
    comment: "Baixa dose de AAS é padrão; PPI reduz sangramento GI em risco elevado.",
    source: "Diretrizes DAPT/ACS (síntese)."
  },
  {
    q: "Q5-24) Paciente em clopidogrel apresenta trombose de stent apesar de adesão. Qual teste (quando disponível) tem utilidade prática para orientar conduta?",
    options: [
      "a) Dosagem sérica de LDL",
      "b) Teste de função plaquetária (ex.: PRU) e/ou genótipo CYP2C19",
      "c) Gasometria arterial",
      "d) PCR qualitativa",
      "e) Troponina ultrassensível"
    ],
    answer: 1,
    comment: "PRU/genótipo ajudam a identificar baixa resposta e direcionar escalonamento em casos selecionados.",
    source: "TROPICAL-ACS; POPular Genetics (síntese)."
  },
  {
    q: "Q5-25) Em cenário de cirurgia urgente pós-DES recente, qual estratégia de “bridging” antiplaquetário tem racional farmacológico (reversível/curta meia-vida)?",
    options: [
      "a) Manter prasugrel até o ato",
      "b) Trocar para clopidogrel e suspender no dia",
      "c) Cangrelor IV como ponte até poucas horas antes, em cenários selecionados",
      "d) Iniciar varfarina como substituto do P2Y12",
      "e) Suspender tudo por 30 dias e operar"
    ],
    answer: 2,
    comment: "Cangrelor tem ação rápida e reversível, útil como ponte em casos selecionados.",
    source: "Bula/label; experiência clínica (síntese)."
  },
  {
    q: "Q5-26) Em paciente com alto risco isquêmico pós-ACS, qual estratégia tem melhor respaldo para reduzir eventos recorrentes além de DAPT, quando indicada?",
    options: [
      "a) Adicionar rivaroxabana baixa dose (regime COMPASS) em doença aterosclerótica estável selecionada",
      "b) Adicionar trombolítico oral",
      "c) Trocar estatina por placebo",
      "d) Suspender P2Y12 precocemente sem critério",
      "e) Fazer anticoagulação plena indefinida em todos"
    ],
    answer: 0,
    comment: "COMPASS: rivaroxabana baixa dose + AAS reduziu eventos em doença aterosclerótica estável selecionada, com aumento de sangramento.",
    source: "COMPASS (N Engl J Med. 2017;377:1319–1330)."
  },
  {
    q: "Q5-27) Qual é a principal limitação de aplicar diretamente o regime COMPASS em pós-PCI muito recente por ACS?",
    options: [
      "a) Não há qualquer limitação",
      "b) Maior risco hemorrágico e ausência de desenho específico para fase muito precoce pós-ACS/PCI em todos os cenários; exige seleção e timing",
      "c) COMPASS foi um estudo pediátrico",
      "d) COMPASS mostrou aumento de trombose de stent",
      "e) COMPASS proibiu estatinas"
    ],
    answer: 1,
    comment: "COMPASS é em doença estável; timing e combinação com DAPT exigem cautela e individualização.",
    source: "COMPASS (NEJM 2017); diretrizes (síntese)."
  },
  {
    q: "Q5-28) Em paciente com história de AVC isquêmico e necessidade de P2Y12 pós-PCI, qual escolha evita contraindicação formal?",
    options: [
      "a) Prasugrel",
      "b) Ticagrelor ou clopidogrel (conforme risco/estratégia), evitando prasugrel",
      "c) Dipiridamol isolado",
      "d) Trombolítico",
      "e) Suspender AAS obrigatoriamente"
    ],
    answer: 1,
    comment: "Prasugrel é contraindicado em AVC/TIA prévio; alternativas são ticagrelor/clopidogrel conforme cenário.",
    source: "TRITON-TIMI 38; label prasugrel."
  },
  {
    q: "Q5-29) Em sangramento maior sob DAPT, qual princípio é mais correto na tomada de decisão imediata?",
    options: [
      "a) Nunca interromper nada, independentemente de gravidade",
      "b) Avaliar gravidade/local, controlar fonte, revisar esquema (duração/monoterapia) e reintroduzir quando seguro ponderando risco de trombose de stent (tempo desde PCI é crucial)",
      "c) Suspender estatina primeiro",
      "d) Trocar AAS por AINE",
      "e) Aumentar dose de P2Y12"
    ],
    answer: 1,
    comment: "Decisão depende de gravidade e tempo pós-PCI; risco trombótico é máximo nas primeiras semanas.",
    source: "Diretrizes DAPT/ACS; princípios clínicos."
  },
  {
    q: "Q5-30) Em STEMI com falha de reperfusão após trombólise e indicação de “rescue PCI”, qual afirmação é mais correta?",
    options: [
      "a) Rescue PCI é inferior à repetição de trombólise em geral",
      "b) Rescue PCI é estratégia recomendada quando falha de reperfusão, por melhor desfecho do que repetição de lítico na maioria dos cenários",
      "c) Deve-se aguardar 24–48h sempre",
      "d) É contraindicado usar qualquer antitrombótico",
      "e) A angiografia não deve ser feita"
    ],
    answer: 1,
    comment: "Rescue PCI é indicada na falha de reperfusão após fibrinólise.",
    source: "Diretrizes STEMI (ESC/ACC); evidência de estratégia farmacoinvasiva/rescue (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap05",
    icon: "💊",
    title: "Antiagregantes, Antitrombóticos e Trombolíticos",
    description: "Farmacologia dos antiagregantes, anticoagulantes e trombolíticos em cardiologia intervencionista.",
    tags: ["Antiagregantes", "Anticoagulantes", "Trombolíticos"],
    questions: questions
  });
})();
