// ═══════════════════════════════════════════════════════════
// CAPÍTULO 14 — IM Periprocedimento, Êmbolos e Trombectomia
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q14-01) Por que “IM periprocedimento” é um endpoint metodologicamente sensível em ensaios que comparam estratégia invasiva vs conservadora?",
    options: [
      "a) Porque nunca ocorre em PCI",
      "b) Porque ocorre apenas no braço conservador",
      "c) Porque pode penalizar o braço invasivo por definição (evento induzido pelo procedimento), exigindo interpretação temporal e clínica",
      "d) Porque sempre tem o mesmo prognóstico de IM espontâneo",
      "e) Porque troponina não se eleva em intervenções"
    ],
    answer: 2,
    comment: "A inclusão de IM periprocedimento pode deslocar eventos para o braço invasivo sem refletir o mesmo risco biológico do IM espontâneo.",
    source: "Fourth Universal Definition of MI; princípios de endpoints em ensaios."
  },
  {
    q: "Q14-02) Qual mecanismo é mais comum para elevação de biomarcadores e IM periprocedimento durante PCI eletiva?",
    options: [
      "a) Pericardite viral",
      "b) Microembolização distal de detritos/trombo e obstrução microvascular (± oclusão de ramo lateral)",
      "c) Hemólise por contraste",
      "d) Dissecção aórtica em todos os casos",
      "e) Endocardite"
    ],
    answer: 1,
    comment: "Microembolização, oclusão de ramo lateral e no-reflow são mecanismos típicos de lesão miocárdica peri-PCI.",
    source: "Fourth Universal Definition of MI; fisiopatologia microvascular (síntese)."
  },
  {
    q: "Q14-03) Entre DAP e Ka,r, qual se correlaciona mais diretamente com risco de lesão cutânea (determinística) e por que isso importa em casos longos com microembolização/no-reflow?",
    options: [
      "a) DAP, porque reflete dose no ponto de pele",
      "b) Ka,r, porque se correlaciona melhor com pico de dose na pele; casos longos e complexos aumentam risco global de complicações",
      "c) Tempo de sala, porque é o único determinante",
      "d) Nenhuma métrica tem utilidade",
      "e) Número de stents"
    ],
    answer: 1,
    comment: "Ka,r acompanha dose acumulada no ponto de referência e é mais útil para rastreio de risco cutâneo em casos prolongados.",
    source: "ICRP/boas práticas de radioproteção (conceitos)."
  },
  {
    q: "Q14-04) Em STEMI, trombectomia por aspiração ROTINEIRA mostrou qual sinal em grandes ensaios?",
    options: [
      "a) Redução consistente de mortalidade e AVC",
      "b) Benefício consistente em MACE sem riscos",
      "c) Ausência de benefício clínico robusto e aumento de risco de AVC em alguns estudos",
      "d) Eliminação de no-reflow",
      "e) Superioridade inequívoca em todos os subgrupos"
    ],
    answer: 2,
    comment: "TOTAL e outros mostraram ausência de benefício clínico robusto para uso rotineiro e sinal de AVC aumentado.",
    source: "TOTAL trial (NEJM)."
  },
  {
    q: "Q14-05) Então, na prática contemporânea, a trombectomia é mais aceitável como:",
    options: [
      "a) Rotina em qualquer STEMI",
      "b) Bailout em trombo muito grande/oclusão com fluxo ruim, ou quando há falha de reperfusão/no-reflow selecionado",
      "c) Substituto de anticoagulação",
      "d) Técnica proibida em qualquer cenário",
      "e) Terapia primária em DAC estável"
    ],
    answer: 1,
    comment: "Uso seletivo (“bailout”) pode ser razoável, apesar de não ser rotina.",
    source: "Diretrizes STEMI/PCI; TOTAL (síntese)."
  },
  {
    q: "Q14-06) Em intervenção de enxerto de veia safena (SVG), qual estratégia tem evidência clássica de redução de microembolização/periprocedural MI?",
    options: [
      "a) Trombólise sistêmica",
      "b) Dispositivos de proteção distal (EPD) em cenários apropriados",
      "c) Evitar heparina",
      "d) Apenas nitrato IC",
      "e) Balão de corte como rotina"
    ],
    answer: 1,
    comment: "EPD em SVG reduzem embolização distal e IM periprocedimento em estudos clássicos.",
    source: "SAFER trial; diretrizes/consensos de SVG PCI."
  },
  {
    q: "Q14-07) Em no-reflow após stent em STEMI, qual é a abordagem correta em “primeiro ciclo” de tratamento?",
    options: [
      "a) Aumentar pressão do balão repetidamente",
      "b) Excluir causa mecânica (dissecção/oclusão), dar vasodilatadores intracoronários conforme protocolo (adenosina/verapamil/nitroprussiato) e otimizar anticoagulação; reduzir manipulação adicional",
      "c) Suspender heparina imediatamente",
      "d) Apenas diurético",
      "e) Apenas betabloqueador IV"
    ],
    answer: 1,
    comment: "No-reflow é microvascular; tratar causa mecânica e usar vasodilatadores IC é padrão pragmático.",
    source: "Diretrizes STEMI/PCI (síntese)."
  },
  {
    q: "Q14-08) Qual é a principal diferença fisiopatológica entre TIMI 3 e perfusão tecidual adequada em SCA?",
    options: [
      "a) Se TIMI é 3, perfusão tecidual sempre é normal",
      "b) Microembolização/obstrução microvascular pode reduzir blush/perfusão mesmo com TIMI 3",
      "c) Blush depende só da PA",
      "d) Perfusão tecidual depende só de LDL",
      "e) Não existe microcirculação"
    ],
    answer: 1,
    comment: "TIMI mede fluxo epicárdico; perfusão miocárdica pode estar comprometida pela microvasculatura.",
    source: "Fisiologia coronária e perfusão (conceitos)."
  },
  {
    q: "Q14-09) Qual padrão favorece “embolização de placa” durante PCI eletiva e aumenta risco de IM peri-PCI?",
    options: [
      "a) Lesão curta e fibrosa",
      "b) Lesão com grande burden, componente friável (lipídico), trombo, e manipulação repetida (pré-dilatações agressivas)",
      "c) Lesão sem placa",
      "d) Apenas espasmo",
      "e) Stent curto em vaso grande"
    ],
    answer: 1,
    comment: "Carga e friabilidade aumentam microembolização; técnica e preparo importam.",
    source: "Fourth Universal Definition of MI; biologia de placa (síntese)."
  },
  {
    q: "Q14-10) Qual medida procedural reduz risco de embolização distal em SVG além de EPD (quando aplicável)?",
    options: [
      "a) Injeção sob damping",
      "b) Estratégia “gentle”: minimizar manipulação, evitar altas pressões iniciais, considerar stent direto em casos selecionados e antitrombótico adequado",
      "c) Suspender anticoagulação",
      "d) Aumentar cine",
      "e) Abrir colimação"
    ],
    answer: 1,
    comment: "Em SVG, friabilidade e material trombótico tornam microembolização frequente; técnica e antitrombótico importam.",
    source: "Consensos de SVG PCI; princípios de microembolização."
  },

  // Q14-11 a Q14-30
  {
    q: "Q14-11) Em avaliação de IM periprocedimento, qual armadilha prática ao usar troponina em procedimentos complexos é mais relevante?",
    options: [
      "a) Troponina nunca sobe por causas não isquêmicas",
      "b) Troponina é muito sensível e pode elevar-se com pequenas lesões; o significado prognóstico depende do contexto, magnitude e evidências de isquemia",
      "c) Troponina é específica de dissecção aórtica",
      "d) Troponina é sempre falsa em CKD",
      "e) Troponina substitui ECG e clínica"
    ],
    answer: 1,
    comment: "A interpretação deve integrar sintomas, ECG, imagem e magnitude/limiar do biomarcador conforme definições universais.",
    source: "Fourth Universal Definition of MI."
  },
  {
    q: "Q14-12) Oclusão de ramo lateral em bifurcação é um mecanismo clássico de IM peri-PCI. Qual estratégia reduz esse risco em bifurcação relevante?",
    options: [
      "a) Ignorar ramo lateral",
      "b) Proteger com fio (wiring) e estratégia de provisional com POT e, se necessário, KBI/rewiring otimizado",
      "c) Apenas nitrato",
      "d) Apenas trocar contraste",
      "e) Evitar heparina"
    ],
    answer: 1,
    comment: "Proteção e técnica de bifurcação (POT, re-cross, KBI quando indicado) reduzem oclusão e perda de ramo.",
    source: "Consensos de bifurcação (EBC/SCAI – síntese)."
  },
  {
    q: "Q14-13) Em no-reflow, qual achado hemodinâmico/cateter pode ajudar a confirmar componente microvascular significativo após excluir oclusão mecânica?",
    options: [
      "a) ACT alto",
      "b) Aumento de pressão diastólica aórtica",
      "c) Elevada resistência microvascular (quando medida) e queda de blush/TMPG",
      "d) LDL alto",
      "e) Saturação periférica normal"
    ],
    answer: 2,
    comment: "Índices como IMR (quando disponíveis) e marcadores angiográficos de perfusão sustentam componente microvascular.",
    source: "Documentos de fisiologia microvascular (síntese)."
  },
  {
    q: "Q14-14) Proteção distal com filtro em SVG: qual limitação importante deve ser reconhecida?",
    options: [
      "a) Elimina embolização 100%",
      "b) Pode não capturar partículas muito pequenas e pode causar espasmo/trauma; ainda assim reduz embolização clinicamente relevante em cenários selecionados",
      "c) Aumenta patência por efeito antitrombótico direto",
      "d) Substitui anticoagulação",
      "e) Proíbe pós-dilatação"
    ],
    answer: 1,
    comment: "EPD reduzem embolização, mas não a eliminam; há trade-offs técnicos.",
    source: "SAFER; consensos SVG PCI."
  },
  {
    q: "Q14-15) Em trombo muito grande em STEMI, qual erro aumenta o risco de embolização distal e no-reflow?",
    options: [
      "a) Técnica suave e poucas inflations",
      "b) Pré-dilatação agressiva repetida antes de estabelecer fluxo e sem estratégia antitrombótica adequada",
      "c) Anticoagulação por ACT",
      "d) Radial",
      "e) Colimação"
    ],
    answer: 1,
    comment: "Barotrauma e múltiplas manipulações em trombo aumentam microembolização.",
    source: "Diretrizes STEMI/PCI (síntese)."
  },
  {
    q: "Q14-16) Em PCI, qual causa de IM peri-PCI é mais “mecânica” e melhor prevenível por IVUS/OCT?",
    options: [
      "a) PCR elevada",
      "b) Subexpansão grave e edge dissection relevantes",
      "c) Idade",
      "d) Sexo",
      "e) HDL"
    ],
    answer: 1,
    comment: "Mecanismos mecânicos são fortemente modificáveis com imagem e otimização.",
    source: "Evidência de IVUS/OCT-guided PCI (síntese)."
  },
  {
    q: "Q14-17) Qual terapia intracoronária é mais frequentemente usada como vasodilatador para componente microvascular espástico/no-reflow (além de nitratos)?",
    options: [
      "a) Verapamil (ou outros CCB IC), adenosina ou nitroprussiato, conforme protocolo",
      "b) Vitamina K",
      "c) Protamina",
      "d) Ezetimiba",
      "e) Dipiridamol oral"
    ],
    answer: 0,
    comment: "CCB IC, adenosina e nitroprussiato são usados como terapias adjuvantes conforme protocolo e hemodinâmica.",
    source: "Diretrizes STEMI/PCI; prática de laboratório (síntese)."
  },
  {
    q: "Q14-18) Em SVG, por que o risco de embolização distal é maior do que em coronária nativa, em geral?",
    options: [
      "a) Porque SVG não tem endotélio",
      "b) Porque placas em SVG são mais friáveis, ricas em material lipídico/necrótico e trombo, com maior propensão à fragmentação",
      "c) Porque o fluxo é sempre menor",
      "d) Porque contraste causa trombo",
      "e) Porque o guia é diferente"
    ],
    answer: 1,
    comment: "A biologia da placa em SVG favorece fragmentação e embolização.",
    source: "Literatura patológica de SVG; SAFFER (síntese)."
  },
  {
    q: "Q14-19) Se após PCI há elevação importante de biomarcadores e dor/ECG compatíveis, qual exame ajuda a diferenciar grande infarto peri-PCI de pequena lesão?",
    options: [
      "a) US de carótidas",
      "b) RM cardíaca com realce tardio (quando disponível) e/ou eco para novas alterações segmentares",
      "c) Radiografia de tórax",
      "d) Densitometria óssea",
      "e) Endoscopia"
    ],
    answer: 1,
    comment: "Eco e CMR podem identificar nova lesão miocárdica e extensão, refinando o diagnóstico.",
    source: "Fourth Universal Definition of MI; literatura de CMR em peri-PCI."
  },
  {
    q: "Q14-20) Qual afirmação sobre “distal protection” em coronária nativa em STEMI é mais correta?",
    options: [
      "a) É padrão e comprovadamente reduz mortalidade",
      "b) Não é rotineiro; a evidência robusta de benefício é mais clara em SVG, não em nativa em STEMI",
      "c) Substitui trombectomia",
      "d) É contraindicado em SVG",
      "e) Elimina AVC"
    ],
    answer: 1,
    comment: "Benefício clássico e mais consistente é em SVG; em coronária nativa o uso é bem mais seletivo.",
    source: "Diretrizes PCI; SAFER; evidência em STEMI (síntese)."
  },
  {
    q: "Q14-21) Em caso longo e complexo, qual prática reduz simultaneamente microembolização e complicações relacionadas a barotrauma?",
    options: [
      "a) Aumentar pressão e repetir inflations sem imagem",
      "b) Preparar adequadamente a placa (scoring/cutting/IVL/atherectomy quando indicado) e otimizar sizing guiado por imagem, evitando múltiplas manipulações desnecessárias",
      "c) Trocar contraste",
      "d) Aumentar FPS",
      "e) Abrir colimação"
    ],
    answer: 1,
    comment: "Preparação controlada e imagem reduzem trauma e necessidade de retrabalho, diminuindo complicações microvasculares.",
    source: "Consensos de calcificação e IVUS/OCT-guided PCI (síntese)."
  },
  {
    q: "Q14-22) Embolização de colesterol pós-cateterismo (atheroembolismo): qual pista clínica é mais típica e ajuda a diferenciar de CI-AKI pura?",
    options: [
      "a) Recuperação renal rápida em 24h",
      "b) Livedo reticularis/“blue toe” e eosinofilia em curso subagudo",
      "c) Dor torácica com supra de ST",
      "d) Hipoglicemia",
      "e) Tosse seca"
    ],
    answer: 1,
    comment: "Ateroembolismo é sistêmico e subagudo, com sinais cutâneos e laboratoriais sugestivos.",
    source: "Textos de nefrologia/complicações do cateterismo."
  },
  {
    q: "Q14-23) Em STEMI, qual achado angiográfico é mais associado a risco de no-reflow e microembolização?",
    options: [
      "a) Lesão curta sem trombo",
      "b) Alto “thrombus burden” e oclusão proximal com grande território",
      "c) TIMI 3 inicial",
      "d) Ausência de dor",
      "e) Calcificação densa sem trombo"
    ],
    answer: 1,
    comment: "Trombo grande e grande território aumentam risco de no-reflow por microembolização e disfunção microvascular.",
    source: "Diretrizes STEMI; literatura de no-reflow (síntese)."
  },
  {
    q: "Q14-24) Qual é a estratégia mais correta para “não se enganar” com melhoria angiográfica parcial em no-reflow?",
    options: [
      "a) Considerar TIMI 2 como sucesso completo sempre",
      "b) Usar marcadores de perfusão tecidual (blush/TMPG), clínica e hemodinâmica, não apenas TIMI",
      "c) Ignorar ECG",
      "d) Não monitorar PA",
      "e) Evitar qualquer vasodilatador"
    ],
    answer: 1,
    comment: "Reperfusão epicárdica não garante reperfusão tecidual; avaliação deve ser integrada.",
    source: "Fisiologia de reperfusão (síntese)."
  },
  {
    q: "Q14-25) Em SVG, se EPD não é possível por anatomia, qual alternativa pragmática pode reduzir embolização em alguns casos?",
    options: [
      "a) Proibir intervenção",
      "b) Estratégia de menor manipulação, stent direto quando apropriado, e considerar técnica de oclusão proximal com aspiração (conforme disponibilidade/experiência)",
      "c) Aumentar inflations",
      "d) Suspender heparina",
      "e) Apenas nitrato"
    ],
    answer: 1,
    comment: "Quando EPD não é viável, alternativas e técnica cuidadosa são fundamentais; decisão é individualizada.",
    source: "Consensos SVG PCI (síntese)."
  },
  {
    q: "Q14-26) Em PCI, qual componente tem maior relação com “lesão miocárdica peri-PCI” clinicamente relevante?",
    options: [
      "a) Pequenas elevações isoladas de troponina sem sinais de isquemia",
      "b) Elevações maiores acompanhadas de evidência de isquemia (ECG, dor, imagem) e/ou complicações mecânicas (ramo ocluído, no-reflow)",
      "c) CK total",
      "d) PCR",
      "e) Creatinina"
    ],
    answer: 1,
    comment: "A definição universal exige biomarcador + evidência de isquemia; magnitude e contexto importam para prognóstico.",
    source: "Fourth Universal Definition of MI."
  },
  {
    q: "Q14-27) Em caso de trombectomia “bailout” em STEMI, qual cuidado reduz complicações (ex.: AVC)?",
    options: [
      "a) Múltiplas passagens agressivas",
      "b) Técnica suave, minimizando manipulação aórtica e número de passagens, e evitando injeções sob damping/engajamento instável",
      "c) Suspender anticoagulação",
      "d) Trocar para femoral obrigatoriamente",
      "e) Aumentar cine"
    ],
    answer: 1,
    comment: "Menor manipulação e passagens reduz potencial de embolização sistêmica e complicações.",
    source: "TOTAL (sinal de AVC) + princípios de técnica (síntese)."
  },
  {
    q: "Q14-28) Qual afirmação resume melhor o papel atual de trombectomia e EPD na prática baseada em evidência?",
    options: [
      "a) Trombectomia rotineira em STEMI e EPD nunca",
      "b) EPD em SVG tem evidência clássica; trombectomia rotineira em STEMI não é recomendada, mas uso seletivo pode ocorrer",
      "c) Ambas são obrigatórias em toda PCI",
      "d) Ambas são proibidas",
      "e) Só dependem do tipo de contraste"
    ],
    answer: 1,
    comment: "EPD em SVG é o caso com evidência mais consolidada; trombectomia em STEMI é seletiva.",
    source: "SAFER; TOTAL; diretrizes PCI/STEMI."
  },
  {
    q: "Q14-29) Em STEMI com trombo grande, qual decisão farmacológica pode ser considerada como “bailout” em complicação trombótica intraprocedimento (variando por protocolo e risco de sangramento)?",
    options: [
      "a) Suspender P2Y12",
      "b) Considerar GPIIb/IIIa em bailout",
      "c) Vitamina K",
      "d) Protamina",
      "e) Ezetimiba"
    ],
    answer: 1,
    comment: "GPIIb/IIIa em bailout ainda é usado em complicações trombóticas/no-reflow selecionadas, ponderando sangramento.",
    source: "Diretrizes STEMI/PCI (síntese)."
  },
  {
    q: "Q14-30) Em resumo, IM peri-PCI é melhor prevenido por:",
    options: [
      "a) Apenas prolongar DAPT",
      "b) Otimização técnica (imagem, expansão, manejo de bifurcação), minimizar microembolização (técnica/EPD em SVG selecionado), e antitrombótico adequado",
      "c) Trocar contraste",
      "d) Aumentar magnificação",
      "e) Apenas betabloqueador"
    ],
    answer: 1,
    comment: "A prevenção é multifatorial: mecânica + trombo/microembolização + terapia antitrombótica apropriada.",
    source: "Fourth Universal Definition of MI; diretrizes PCI; SAFER/TOTAL (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap14",
    icon: "⚠️",
    title: "IM Periprocedimento, Êmbolos e Trombectomia",
    description: "Complicações isquêmicas periprocedimento, fenômeno de no-reflow e trombectomia por aspiração.",
    tags: ["No-reflow", "Trombectomia", "Embolização"],
    questions: questions
  });
})();
