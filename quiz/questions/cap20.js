// ═══════════════════════════════════════════════════════════
// CAPÍTULO 20 — Stents e Trombose
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q20-01) Pela definição ARC clássica, “trombose de stent definitiva” exige:",
    options: [
      "a) Apenas dor torácica típica",
      "b) Evidência angiográfica de trombo no stent ou confirmação anatomopatológica",
      "c) Troponina elevada isolada",
      "d) ECG normal",
      "e) Apenas queda de Hb"
    ],
    answer: 1,
    comment: "ARC definiu categorias (definitiva/provável/possível) para padronizar estudos; “definitiva” requer confirmação angiográfica ou patológica.",
    source: "Academic Research Consortium definition: Cutlip DE et al. Circulation. 2007."
  },
  {
    q: "Q20-02) Na classificação temporal ARC, trombose de stent “muito tardia” é:",
    options: [
      "a) <24 h",
      "b) 1–30 dias",
      "c) 31 dias–1 ano",
      "d) >1 ano",
      "e) >10 anos apenas"
    ],
    answer: 3,
    comment: "A classificação temporal diferencia mecanismos e orienta investigação (mecânico, adesão, neoaterosclerose).",
    source: "Cutlip DE et al. Circulation. 2007 (ARC)."
  },
  {
    q: "Q20-03) Em trombose de stent aguda/subaguda, qual achado de IVUS/OCT é mais frequentemente “o mecanismo culpado” e altamente corrigível no ato?",
    options: [
      "a) LDL alto",
      "b) Subexpansão do stent",
      "c) Hipersensibilidade ao polímero como regra",
      "d) Anemia",
      "e) Vasoespasmo isolado sempre"
    ],
    answer: 1,
    comment: "Subexpansão é um dos preditores mais fortes e modificáveis de trombose/ISR; deve ser buscada ativamente por imagem.",
    source: "IVUS/OCT-guided PCI literature (síntese); consensos SCAI."
  },
  {
    q: "Q20-04) Conduta padrão em suspeita de trombose de stent com instabilidade/hemodinâmica ou STEMI é:",
    options: [
      "a) Ajustar estatina e reavaliar em 24 h",
      "b) Cateterismo urgente com PCI do stent (restaurar fluxo), tratar causa mecânica, e otimizar terapia antitrombótica",
      "c) Trombólise domiciliar sem angiografia",
      "d) Suspender P2Y12 para reduzir sangramento",
      "e) Apenas nitrato sublingual"
    ],
    answer: 1,
    comment: "Trombose de stent é emergência: reperfusão + correção mecânica + revisão/otimização antitrombótica.",
    source: "Diretrizes ACS/PCI (ACC/AHA/ESC — síntese)."
  },
  {
    q: "Q20-05) Em paciente com trombose muito tardia e história de interrupção precoce de P2Y12, qual interpretação é mais coerente?",
    options: [
      "a) Interrupção não influencia risco após 1 mês",
      "b) Interrupção remove proteção antitrombótica e, se houver substrato (struts expostos/neoaterosclerose/malapposição), o risco aumenta",
      "c) Interrupção reduz risco por evitar sangramento",
      "d) AAS sozinho é sempre suficiente",
      "e) É incompatível com DES"
    ],
    answer: 1,
    comment: "Risco trombótico depende de substrato + gatilho (interrupção, baixa resposta, inflamação); a interação é central.",
    source: "Joner M et al. J Am Coll Cardiol. 2006 (mecanismos tardios); diretrizes DAPT (síntese)."
  },
  {
    q: "Q20-06) Qual combinação de fatores aumenta mais risco de trombose de stent por mecanismo “técnico”?",
    options: [
      "a) Stent curto, grande e bem expandido",
      "b) Subexpansão + edge dissection significativa + burden trombótico em ACS",
      "c) LDL baixo",
      "d) Uso de PPI",
      "e) Rinite alérgica"
    ],
    answer: 1,
    comment: "Falhas mecânicas (subexpansão/dissecção) somadas a trombo/ACS aumentam risco imediato de trombose.",
    source: "Consensos de trombose de stent/PCI (síntese)."
  },
  {
    q: "Q20-07) “Longitudinal stent deformation” é mais associada a:",
    options: [
      "a) Apenas stents antigos de aço inoxidável",
      "b) Interação mecânica com cateter-guia, balões, IVUS/OCT ou guide-extension, especialmente em segmentos proximais/ostiais",
      "c) Uso de estatina",
      "d) Nitrato intracoronário",
      "e) Troponina"
    ],
    answer: 1,
    comment: "Deformação longitudinal ocorre por forças externas no stent recém-implantado; pode levar a malapposição e eventos se não reconhecida/corrigida.",
    source: "Literatura de mecânica de stents (síntese)."
  },
  {
    q: "Q20-08) Em OCT, qual padrão sugere “neoaterosclerose” como mecanismo tardio dentro do stent?",
    options: [
      "a) Neoíntima homogênea e brilhante sem heterogeneidade",
      "b) Sinal de pool lipídico/necrose, possível ruptura e trombo, semelhante a placa nativa",
      "c) Ausência total de tecido em todos os struts",
      "d) Apenas calcificação profunda sem interface",
      "e) Apenas espasmo"
    ],
    answer: 1,
    comment: "Neoaterosclerose é transformação aterosclerótica da neoíntima e pode causar síndrome coronariana aguda intra-stent.",
    source: "Otsuka F et al. Eur Heart J. 2015;36:2147–2159."
  },
  {
    q: "Q20-09) Em trombose de stent recorrente sob clopidogrel com adesão confirmada, qual abordagem é mais coerente antes de chamar de “azar”?",
    options: [
      "a) Suspender P2Y12",
      "b) Investigar mecanismo mecânico por imagem + avaliar baixa resposta (PRU/genótipo) e considerar escalonamento para P2Y12 mais potente se não contraindicado",
      "c) Trocar AAS por AINE",
      "d) Apenas aumentar nitrato",
      "e) Apenas reduzir LDL por 1 semana"
    ],
    answer: 1,
    comment: "Trombose recorrente exige busca ativa de falha mecânica e falha farmacológica/adesão/interações.",
    source: "POPular Genetics (NEJM 2019); consensos antiplaquetários/PCI (síntese)."
  },
  {
    q: "Q20-10) Em stent no TCE/bifurcação, qual fator mecânico é particularmente crítico para reduzir trombose/ISR tardias?",
    options: [
      "a) Apenas o tipo de contraste",
      "b) Expansão adequada (MSA), POT/FKBI quando indicado e evitar subexpansão proximal",
      "c) Evitar qualquer pós-dilatação",
      "d) Proibir IVUS",
      "e) Manter ACT baixo"
    ],
    answer: 1,
    comment: "TCE/bifurcação amplificam impacto de subexpansão e geometria ruim; otimização final é determinante.",
    source: "EBC consensus; IVUS-guided LM PCI (síntese)."
  },

  // 20 adicionais
  {
    q: "Q20-11) Qual variável clínica isolada continua sendo um dos maiores preditores de trombose de stent (especialmente precoce)?",
    options: [
      "a) Interrupção precoce de DAPT / não adesão",
      "b) HDL alto",
      "c) Miopia",
      "d) Rinite",
      "e) Vitamina D"
    ],
    answer: 0,
    comment: "Interrupção de DAPT remove proteção antitrombótica num período ainda vulnerável, sobretudo em ACS e em falhas mecânicas.",
    source: "Diretrizes DAPT/PCI (ACC/AHA/ESC — síntese)."
  },
  {
    q: "Q20-12) Em stent subexpandido identificado na trombose aguda, qual estratégia é mais racional para correção imediata?",
    options: [
      "a) Apenas trombectomia e finalizar sem otimização",
      "b) Pós-dilatação agressiva com NC (e, se necessário, estratégia de modificação de cálcio) guiada por imagem, após restabelecer fluxo",
      "c) Suspender heparina",
      "d) Trocar contraste",
      "e) Fazer trombólise sistêmica rotineira"
    ],
    answer: 1,
    comment: "A correção mecânica é essencial para reduzir recorrência; a imagem confirma expansão e bordas.",
    source: "Consensos de trombose de stent/ISR (síntese)."
  },
  {
    q: "Q20-13) “Edge dissection” significativa pós-stent aumenta risco de trombose principalmente porque:",
    options: [
      "a) Aumenta HDL",
      "b) Cria flap/estenose residual e superfície trombogênica, com turbulência e potencial de oclusão",
      "c) Reduz MVO2",
      "d) Aumenta diurese",
      "e) Não tem relação com trombose"
    ],
    answer: 1,
    comment: "Dissecção relevante pode comprometer fluxo e criar superfície pró-trombótica; decisão de tratar depende de extensão e fluxo (idealmente por imagem).",
    source: "Técnica PCI e complicações (síntese)."
  },
  {
    q: "Q20-14) Em “very late stent thrombosis”, qual mecanismo ganhou importância na era dos DES (inclusive modernos) além de struts expostos?",
    options: [
      "a) Miocardite",
      "b) Neoaterosclerose intra-stent com ruptura",
      "c) Hipoglicemia",
      "d) Hipotireoidismo",
      "e) Pneumonia"
    ],
    answer: 1,
    comment: "Neoaterosclerose é mecanismo tardio bem descrito e pode causar eventos tipo SCA dentro do stent.",
    source: "Otsuka F et al. Eur Heart J. 2015."
  },
  {
    q: "Q20-15) Em PCI de alto risco hemorrágico (ARC-HBR), por que DES contemporâneo ainda é preferido a BMS na maioria dos cenários?",
    options: [
      "a) Porque DES dispensa DAPT",
      "b) Porque DES reduz ISR e, com estratégias modernas, permite DAPT curta em selecionados sem penalizar tanto a segurança",
      "c) Porque BMS não tem trombose",
      "d) Porque DES sempre requer 12 meses",
      "e) Porque BMS é proibido"
    ],
    answer: 1,
    comment: "A era atual é de DES modernos + individualização de DAPT (muitas vezes curta) em HBR; BMS perdeu espaço por ISR elevada.",
    source: "ARC-HBR (Circulation 2019); diretrizes PCI/DAPT (síntese)."
  },
  {
    q: "Q20-16) Em trombose de stent, qual “armadilha” de estratégia pode aumentar recorrência se você não identificar o mecanismo real?",
    options: [
      "a) Uso de IVUS/OCT",
      "b) Colocar outro stent sem corrigir subexpansão/malapposição ou sem cobrir edge disease",
      "c) Ajustar ACT",
      "d) Tratar no-reflow",
      "e) Dar nitrato"
    ],
    answer: 1,
    comment: "Stent-in-stent sem correção do mecanismo primário perpetua o problema e adiciona camadas metálicas.",
    source: "Consensos de ISR/trombose (síntese)."
  },
  {
    q: "Q20-17) Em cenário de “high thrombus burden” (ACS), qual medida intraprocedimento é mais importante para reduzir trombose aguda do stent?",
    options: [
      "a) Reduzir heparina para evitar sangramento",
      "b) Anticoagulação adequada titulada (ACT) + técnica para reduzir embolização + P2Y12 efetivo (incluindo opção IV em casos selecionados)",
      "c) Suspender AAS",
      "d) Aumentar contraste",
      "e) Evitar qualquer vasodilatador"
    ],
    answer: 1,
    comment: "Trombose aguda é multifatorial: trombo, técnica e terapia antitrombótica efetiva/rápida.",
    source: "Diretrizes ACS/PCI (síntese); CHAMPION PHOENIX (NEJM 2013, cangrelor)."
  },
  {
    q: "Q20-18) Cangrelor pode ser particularmente útil no laboratório quando:",
    options: [
      "a) O paciente já tomou ticagrelor há 6h e absorveu bem",
      "b) Há necessidade de inibição P2Y12 imediata (não pré-tratado, vômitos, absorção incerta) durante PCI",
      "c) O objetivo é reduzir LDL",
      "d) O objetivo é tratar espasmo",
      "e) O objetivo é tratar CI-AKI"
    ],
    answer: 1,
    comment: "Cangrelor oferece inibição imediata e reversível durante o procedimento em cenários selecionados.",
    source: "CHAMPION PHOENIX. N Engl J Med. 2013."
  },
  {
    q: "Q20-19) Após trombose de stent tratada com sucesso, qual estratégia de antiagregação é frequentemente adotada (se não houver contraindicação)?",
    options: [
      "a) Manter apenas AAS",
      "b) Escalonar para P2Y12 mais potente e reavaliar adesão/interações; ajustar duração conforme risco isquêmico/hemorrágico",
      "c) Suspender DAPT por 1 mês",
      "d) Trocar por dipiridamol",
      "e) Apenas anticoagulação plena em todos"
    ],
    answer: 1,
    comment: "Após evento trombótico, intensificação/otimização antiplaquetária é usual, além de correção mecânica e investigação de baixa resposta.",
    source: "Diretrizes ACS/DAPT (síntese)."
  },
  {
    q: "Q20-20) Qual característica de plataforma está associada a melhor cicatrização e menor trombose tardia em comparação a DES antigos?",
    options: [
      "a) Struts mais espessos e polímero mais inflamatório",
      "b) Struts mais finos e polímeros mais biocompatíveis, com eluição mais controlada",
      "c) Ausência de antiproliferativo em todos",
      "d) Aumento sistemático do comprimento do stent",
      "e) Coating pró-trombótico"
    ],
    answer: 1,
    comment: "A evolução para strut fino e polímero biocompatível melhorou perfil de trombose tardia.",
    source: "Literatura de DES de 2ª/3ª geração (síntese)."
  },
  {
    q: "Q20-21) Em OCT, “struts não cobertos” em seguimento precoce pós-DES indicam:",
    options: [
      "a) Cicatrização completa e risco zero",
      "b) Cicatrização potencialmente retardada e substrato trombogênico, dependente do contexto e do tempo",
      "c) Neoaterosclerose estabelecida obrigatória",
      "d) Dissecção aórtica",
      "e) Perfuração"
    ],
    answer: 1,
    comment: "Cobertura incompleta pode ser marcador de cicatrização retardada; interpretação depende do tempo e da geração do stent.",
    source: "Joner M et al. J Am Coll Cardiol. 2006."
  },
  {
    q: "Q20-22) Em stent malaposto tardio (late-acquired malapposition), um mecanismo típico é:",
    options: [
      "a) Recoil do stent metálico",
      "b) Remodelamento positivo tardio e/ou reabsorção de trombo por trás dos struts",
      "c) Aumento de HDL",
      "d) Efeito do PPI",
      "e) Hiperglicemia"
    ],
    answer: 1,
    comment: "LASM foi descrito especialmente em DES antigos, relacionado a remodelamento positivo e resolução de trombo.",
    source: "Joner M et al. J Am Coll Cardiol. 2006."
  },
  {
    q: "Q20-23) Em trombose de stent, quando o uso de GPIIb/IIIa ainda faz sentido na prática contemporânea?",
    options: [
      "a) Rotineiramente em qualquer PCI eletiva",
      "b) Como bailout em trombo grande/no-reflow/complicação trombótica intraprocedimento, ponderando sangramento",
      "c) Substituindo P2Y12 oral por 12 meses",
      "d) Em pós-PCI estável sem trombo",
      "e) Para reduzir CI-AKI"
    ],
    answer: 1,
    comment: "Uso seletivo (bailout) permanece racional em complicações trombóticas apesar de DAPT potente/estratégias atuais.",
    source: "Diretrizes ACS/PCI (síntese)."
  },
  {
    q: "Q20-24) Um paciente com FA em DOAC faz PCI e recebe terapia inadequada (por exemplo, tripla terapia prolongada desnecessariamente). Qual risco principal aumenta com tripla terapia prolongada?",
    options: [
      "a) Apenas trombose de stent",
      "b) Sangramento maior, sem ganho proporcional em muitos cenários quando comparado a DOAC + P2Y12 (com AAS curto)",
      "c) LDL alto",
      "d) Espasmo coronário",
      "e) CI-AKI"
    ],
    answer: 1,
    comment: "Ensaios AF-PCI favorecem dupla terapia (DOAC + clopidogrel) com AAS por período curto em muitos pacientes, reduzindo sangramento.",
    source: "AUGUSTUS (NEJM 2019); RE-DUAL PCI (NEJM 2017); PIONEER AF-PCI (NEJM 2016); ENTRUST-AF PCI (Lancet 2019)."
  },
  {
    q: "Q20-25) Em stent no segmento proximal com alta carga mecânica (tortuoso), qual complicação estrutural pode aparecer e predispor ISR/trombose?",
    options: [
      "a) Stent fracture",
      "b) Endocardite",
      "c) Pneumonia",
      "d) Hipoglicemia",
      "e) Pleural effusion"
    ],
    answer: 0,
    comment: "Fratura de stent é falha estrutural que pode levar a ISR e eventos trombóticos; suspeitar em recorrência focal/angiografia sugestiva.",
    source: "Literatura de fratura de stent (síntese)."
  },
  {
    q: "Q20-26) Qual “pacote” é mais completo ao final de uma PCI complexa para reduzir risco de trombose tardia?",
    options: [
      "a) TIMI 3 + sem pós-dilatação + alta",
      "b) Expansão/apposição adequadas (preferencialmente por imagem), bordas sem doença crítica/dissecção relevante e plano antitrombótico/adesão estruturado",
      "c) Apenas troca do contraste",
      "d) Apenas nitrato",
      "e) Apenas reduzir LDL por 7 dias"
    ],
    answer: 1,
    comment: "Risco tardio é combinação de mecânica e biologia/terapia; ambos devem ser endereçados.",
    source: "Consensos PCI + DAPT (síntese)."
  },
  {
    q: "Q20-27) Qual afirmativa é mais correta sobre BMS vs DES em relação à trombose de stent na era moderna?",
    options: [
      "a) BMS tem trombose menor e por isso é preferido",
      "b) DES modernos têm perfil de segurança excelente; BMS caiu em desuso pela alta ISR e pela possibilidade de DAPT curta com DES em HBR selecionado",
      "c) DES é contraindicado em HBR",
      "d) BMS dispensa DAPT",
      "e) DES sempre exige 24 meses"
    ],
    answer: 1,
    comment: "A escolha atual é majoritariamente DES, com individualização de DAPT; BMS raramente é necessário.",
    source: "Diretrizes PCI/DAPT; ARC-HBR (síntese)."
  },
  {
    q: "Q20-28) Em evento trombótico intra-stent tardio, qual ação sistêmica reduz chance de recorrência por via aterosclerótica (neoaterosclerose)?",
    options: [
      "a) Suspender estatina",
      "b) Intensificar prevenção secundária (LDL agressivo, controle de DM, cessar tabagismo, etc.)",
      "c) Aumentar LDL para cicatrização",
      "d) Apenas nitrato",
      "e) Apenas diurético"
    ],
    answer: 1,
    comment: "Neoaterosclerose é aterosclerose “dentro” do stent: exige prevenção secundária agressiva além do tratamento local.",
    source: "Diretrizes dislipidemia/ACS (ESC/ACC — síntese); Otsuka F et al. Eur Heart J. 2015."
  },
  {
    q: "Q20-29) Em suspeita de trombose de stent em vaso grande com choque, qual decisão logística salva miocárdio e reduz mortalidade mais diretamente?",
    options: [
      "a) Esperar enzimas seriadas",
      "b) Reperfusão imediata por PCI (tempo-dependente), com suporte hemodinâmico conforme necessidade",
      "c) Ajustar PPI",
      "d) Reduzir contraste apenas",
      "e) Fazer teste ergométrico"
    ],
    answer: 1,
    comment: "Em choque/ACS, tempo até reperfusão é determinante central de prognóstico.",
    source: "Diretrizes STEMI/ACS (síntese)."
  },
  {
    q: "Q20-30) Resumo: quando você deve “culpar” o paciente (adesão) antes de “culpar” a técnica em trombose de stent?",
    options: [
      "a) Sempre, porque técnica raramente importa",
      "b) Nunca; a abordagem correta é investigar ambos: falhas mecânicas (imagem) e falhas farmacológicas/adesão/interações",
      "c) Apenas se LDL for alto",
      "d) Apenas se o stent for longo",
      "e) Apenas em mulheres"
    ],
    answer: 1,
    comment: "Trombose de stent é quase sempre multifatorial; a investigação sistemática evita recorrência.",
    source: "Consensos trombose de stent/antiplaquetários (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap20",
    icon: "🩺",
    title: "Stents e Trombose",
    description: "Trombose de stent: mecanismos, fatores de risco, DAPT e manejo clínico.",
    tags: ["Trombose de Stent", "DAPT", "Stent"],
    questions: questions
  });
})();
