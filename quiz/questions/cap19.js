// ═══════════════════════════════════════════════════════════
// CAPÍTULO 19 — Aterectomia, Scoring e Laser
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q19-01) Em lesão coronária com calcificação concêntrica pesada e falha de expansão após balão NC (alta pressão), qual sequência é mais mecanismo-dirigida para viabilizar expansão antes de novo stent?",
    options: [
      "a) Implantar DES imediatamente (stent sobre stent) e apenas prolongar DAPT",
      "b) Modificação de placa (rotacional/orbital ou IVL conforme anatomia e disponibilidade), guiada por IVUS/OCT, e então otimização de expansão",
      "c) Apenas nitrato intracoronário repetido",
      "d) Suspender anticoagulação e repetir insuflações",
      "e) Fazer trombólise intracoronária"
    ],
    answer: 1,
    comment: "Em falha de expansão por cálcio, a prioridade é modificar a placa (ou fraturar cálcio) antes de adicionar metal. Imagem intracoronária é central para identificar o mecanismo e documentar ganho de área.",
    source: "SCAI expert consensus on calcified lesions (síntese); princípios de IVUS/OCT-guided PCI."
  },
  {
    q: "Q19-02) Rotational atherectomy (RA): qual parâmetro técnico clássico (ordem de grandeza) é usado para escolher burr inicial visando eficácia com menor risco de complicações?",
    options: [
      "a) Burr/artery ratio ~0,9–1,0",
      "b) Burr/artery ratio ~0,7–0,8",
      "c) Burr/artery ratio ~0,5–0,6",
      "d) Burr/artery ratio ~0,3–0,4 sempre",
      "e) Não existe racional de dimensionamento"
    ],
    answer: 2,
    comment: "Estratégia contemporânea é “pequeno burr, ganho progressivo”, tipicamente ~0,5–0,6, reduzindo no-reflow/slow-flow e dissecção/perfuração.",
    source: "Técnica padrão de RA (Grossman & Baim; consensos SCAI — síntese)."
  },
  {
    q: "Q19-03) Durante RA, qual padrão de rotação/desaceleração aumenta risco de complicações microvasculares e sugere ajuste imediato de técnica?",
    options: [
      "a) Passes curtos com “pecking” e desaceleração mínima",
      "b) Passes longos e contínuos com desacelerações repetidas e profundas do burr",
      "c) Pausas frequentes para flush",
      "d) Rotação estável sem quedas de RPM",
      "e) Aumento do fluxo do flush"
    ],
    answer: 1,
    comment: "Passes longos e quedas importantes de RPM aumentam liberação de detritos e risco de slow/no-reflow; a técnica “pecking” com passes curtos e estabilidade de RPM é preferida.",
    source: "Técnica padrão de RA; fisiopatologia de no-reflow (síntese)."
  },
  {
    q: "Q19-04) Em lesão ostial de RCA calcificada, qual risco técnico é especialmente relevante ao usar RA/orbital e deve orientar a escolha do guia e o engajamento?",
    options: [
      "a) Apenas risco de alergia ao contraste",
      "b) Damping/trauma aorto-ostial e dissecção do seio/aorta por engajamento agressivo e injeção sob amortecimento",
      "c) Hipoglicemia intra-procedimento",
      "d) Bradicardia por AAS",
      "e) Hiperpotassemia por nitrato"
    ],
    answer: 1,
    comment: "Lesões aorto-ostiais exigem coaxialidade e evitar injeção sob damping; complicações aorto-ostiais podem ser catastróficas.",
    source: "Grossman & Baim; complicações aorto-ostiais (síntese)."
  },
  {
    q: "Q19-05) Orbitral atherectomy (OA): qual diferença mecânica central em relação à RA é mais correta?",
    options: [
      "a) OA é corte por lâmina fixa; RA é vibração ultrassônica",
      "b) OA usa “crown” excêntrica que orbita e pode aumentar diâmetro efetivo com maior velocidade; RA usa burr concêntrico de rotação contínua",
      "c) OA remove apenas trombo; RA remove apenas fibrose",
      "d) OA não gera partículas; RA gera partículas grandes invariavelmente",
      "e) OA é indicada apenas para ISR"
    ],
    answer: 1,
    comment: "OA “lixa” cálcio com órbita dependente de velocidade; RA “ablaciona” com burr concêntrico. Ambas visam modificar cálcio para permitir expansão.",
    source: "ORBIT II trial (JACC: Cardiovascular Interventions, 2014 — síntese); consensos de calcificação."
  },
  {
    q: "Q19-06) Qual cenário favorece mais o uso de balão scoring/cutting como estratégia primária (em vez de RA/OA) para otimização de preparo de placa?",
    options: [
      "a) Calcificação concêntrica pesada com falha de NC",
      "b) Lesão fibrosa/“resistente” com calcificação moderada e risco de “slip” do balão, especialmente em segmentos ostiais e algumas ISR",
      "c) CTO longa sem cap definido",
      "d) Trombo grande em STEMI",
      "e) Dissecção extensa do vaso"
    ],
    answer: 1,
    comment: "Cutting/scoring melhora controle de fratura e reduz “watermelon seeding” em lesões resistentes e ISR; em cálcio concêntrico pesado, atherectomy/IVL costuma ser necessária.",
    source: "Técnica PCI; literatura de cutting/scoring balloons (síntese)."
  },
  {
    q: "Q19-07) “Watermelon seeding” durante pré-dilatação é mais reduzido por:",
    options: [
      "a) Balão complacente grande",
      "b) Balão scoring/cutting (elementos que ancoram e concentram força)",
      "c) Apenas nitrato intracoronário",
      "d) Stent direto em qualquer anatomia",
      "e) Aumentar contraste"
    ],
    answer: 1,
    comment: "Scoring/cutting ancoram e direcionam força, reduzindo deslizamento do balão em placa resistente.",
    source: "Bench/experiência consolidada de PCI (síntese)."
  },
  {
    q: "Q19-08) Em lesão calcificada severa com dúvida se o preparo foi suficiente antes do DES, qual achado IVUS/OCT é mais útil para decidir escalonamento (p.ex., RA/OA/IVL)?",
    options: [
      "a) Apenas TIMI 3",
      "b) Evidência de calcificação espessa e/ou arco amplo sem fratura após dilatação, com limitação de expansão prevista",
      "c) Pressão arterial sistêmica",
      "d) LDL",
      "e) Saturação periférica"
    ],
    answer: 1,
    comment: "Imagem intracoronária quantifica arco/espessura de cálcio e demonstra fraturas; ausência de fratura em cálcio espesso sugere necessidade de modificação adicional.",
    source: "Consensos de calcificação e imagem intracoronária (SCAI/ESC — síntese)."
  },
  {
    q: "Q19-09) Excimer laser coronary atherectomy (ELCA): qual é uma indicação clássica/uso consagrado na prática (selecionado)?",
    options: [
      "a) Substituto de DAPT em qualquer DES",
      "b) Lesões trombóticas selecionadas, ISR e/ou stent subexpandido/underexpanded em cenário específico (frequentemente com estratégia de modificação e imagem)",
      "c) Tratamento de espasmo coronário sem placa",
      "d) Tratamento de aneurisma coronário",
      "e) Tratamento de dissecção aórtica"
    ],
    answer: 1,
    comment: "ELCA pode ser útil em cenários selecionados (p.ex., ISR, trombo, stent subexpandido), frequentemente como parte de estratégia combinada e guiada por imagem.",
    source: "Literatura/consensos sobre ELCA (síntese); Grossman & Baim."
  },
  {
    q: "Q19-10) Em ELCA para lesão trombótica selecionada, qual erro aumenta risco de dissecção/perfuração e deve ser evitado?",
    options: [
      "a) Avanço lento e controlado",
      "b) “Pushing” agressivo do cateter em segmento não preparado, sem coaxialidade e sem controle de energia/fluido",
      "c) Uso de roadmap",
      "d) Uso de heparina adequada",
      "e) Monitorização hemodinâmica"
    ],
    answer: 1,
    comment: "Laser exige técnica: avanço controlado, coaxialidade e parâmetros apropriados. Forçar o cateter aumenta risco de trauma mecânico além do efeito fotoablativo.",
    source: "Técnica ELCA (síntese)."
  },

  // 20 adicionais
  {
    q: "Q19-11) Em RA, a complicação “slow flow/no-reflow” ocorre principalmente por:",
    options: [
      "a) Vasodilatação excessiva do nitrato",
      "b) Microembolização de detritos e vasoespasmo microvascular",
      "c) Queda de ACT",
      "d) Alergia ao contraste",
      "e) Hipercalemia"
    ],
    answer: 1,
    comment: "Atherectomy gera partículas e ativa microcirculação; prevenção inclui técnica adequada, flush/vasodilatadores e passes curtos.",
    source: "Fisiopatologia de no-reflow (síntese); técnica RA/OA."
  },
  {
    q: "Q19-12) Se ocorrer slow/no-reflow durante atherectomy, a conduta inicial mais coerente é:",
    options: [
      "a) Insuflar balão NC em alta pressão imediatamente",
      "b) Interromper passes, administrar vasodilatadores intracoronários (conforme protocolo) e corrigir hemodinâmica, evitando mais microembolização",
      "c) Suspender heparina",
      "d) Trocar contraste",
      "e) Implantar stent imediatamente sem restaurar fluxo"
    ],
    answer: 1,
    comment: "No-reflow deve ser tratado primeiro (microvascular) antes de novas manipulações/implante; caso contrário, amplia necrose e instabilidade.",
    source: "Diretrizes/consensos PCI e manejo de no-reflow (síntese)."
  },
  {
    q: "Q19-13) Em calcificação severa, qual padrão angiográfico sugere que RA/OA pode ser mais apropriada do que apenas scoring balloon?",
    options: [
      "a) Lesão curta não calcificada",
      "b) “Railroad tracks” (calcificação pesada bilateral), rigidez marcada e falha de expansão com NC",
      "c) Vasoespasmo isolado",
      "d) Trombo distal",
      "e) Lesão exclusivamente lipídica"
    ],
    answer: 1,
    comment: "Calcificação concêntrica/espessa com falha de NC é cenário típico para atherectomy (ou IVL) como estratégia de preparo.",
    source: "Consensos de calcificação (SCAI/ESC — síntese)."
  },
  {
    q: "Q19-14) Em RA, por que a estratégia “step-up burr” é preferida à escolha de burr grande de início?",
    options: [
      "a) Porque burr grande não remove cálcio",
      "b) Porque burr grande aumenta risco de dissecação/perfuração e no-reflow; step-up permite ganho progressivo com menor trauma",
      "c) Porque burr pequeno não cruza a lesão",
      "d) Porque burr grande reduz contraste",
      "e) Porque burr grande reduz tempo sempre"
    ],
    answer: 1,
    comment: "Step-up reduz complicações e mantém eficácia ao preparar placa para expansão com balões e stent.",
    source: "Técnica RA (Grossman & Baim; consensos — síntese)."
  },
  {
    q: "Q19-15) “Burr entrapment” em RA: qual é o fator predisponente mais comum?",
    options: [
      "a) Lesão curta e macia",
      "b) Avanço agressivo em lesão muito calcificada/tortuosa com burr grande e sem técnica de passes curtos",
      "c) Uso de radial",
      "d) Uso de IBP",
      "e) ACT alto"
    ],
    answer: 1,
    comment: "Entrapment é mais provável com técnica agressiva e anatomia desfavorável; prevenção é técnica (passes curtos, step-up, coaxialidade).",
    source: "Complicações de RA (síntese)."
  },
  {
    q: "Q19-16) Em OA, o racional de usar diferentes velocidades (baixa vs alta) é:",
    options: [
      "a) Apenas reduzir contraste",
      "b) Controlar o diâmetro efetivo de órbita (sanding) e o grau de modificação de cálcio",
      "c) Aumentar trombo",
      "d) Substituir heparina",
      "e) Evitar necessidade de balão"
    ],
    answer: 1,
    comment: "Maior velocidade aumenta órbita/diâmetro efetivo e pode ampliar modificação; a seleção depende do vaso e da resposta.",
    source: "ORBIT II e técnica de OA (síntese)."
  },
  {
    q: "Q19-17) Cutting balloon vs scoring balloon: qual diferença é mais correta do ponto de vista mecânico?",
    options: [
      "a) Ambos são idênticos em design",
      "b) Cutting tem micro-lâminas; scoring usa elementos de scoring/estruturas externas que concentram força sem “lâmina” clássica",
      "c) Scoring é sempre mais traumático e causa perfuração obrigatória",
      "d) Cutting não funciona em ISR",
      "e) Scoring é contraindicado em coronárias"
    ],
    answer: 1,
    comment: "Ambos melhoram controle de dilatação e reduzem slippage; design difere, com escolhas guiadas por anatomia e disponibilidade.",
    source: "Literatura de cutting/scoring balloons (síntese)."
  },
  {
    q: "Q19-18) Em ISR fibrosa focal com boa expansão do stent e sem necessidade de scaffolding, qual combinação é frequentemente escolhida para otimizar resultado antes de terapia antiproliferativa?",
    options: [
      "a) Apenas balão complacente",
      "b) Scoring/cutting para preparo + DCB (drug-coated balloon) em cenário apropriado",
      "c) Trombectomia rotineira",
      "d) Apenas nitrato",
      "e) Protamina"
    ],
    answer: 1,
    comment: "Preparo com scoring/cutting melhora entrega e resultado do DCB, evitando metal adicional quando não há necessidade de scaffolding.",
    source: "Ensaios/consensos DCB em ISR (síntese)."
  },
  {
    q: "Q19-19) Em stent subexpandido por cálcio, qual estratégia costuma ser MENOS eficaz se a subexpansão não é corrigida mecanicamente?",
    options: [
      "a) NC de alta pressão/IVL",
      "b) Atherectomy/IVL guiada por imagem (quando aplicável)",
      "c) DCB isolado sem correção de subexpansão",
      "d) Otimização por IVUS",
      "e) Planejamento de landing zones"
    ],
    answer: 2,
    comment: "Sem corrigir subexpansão, terapias antiproliferativas (DCB/DES) têm alta taxa de falha, pois o mecanismo primário é mecânico.",
    source: "SCAI ISR consensus (síntese)."
  },
  {
    q: "Q19-20) Em RA/OA, por que “flush” com vasodilatador/antiespasmódico é usado em muitos laboratórios?",
    options: [
      "a) Para reduzir LDL",
      "b) Para reduzir espasmo, agregação e microvascular constriction, mitigando slow/no-reflow",
      "c) Para neutralizar heparina",
      "d) Para induzir trombólise",
      "e) Para aumentar viscosidade"
    ],
    answer: 1,
    comment: "O objetivo é reduzir vasoespasmo e fenômenos microvasculares relacionados a detritos e ativação endotelial/plaquetária.",
    source: "Técnica RA/OA (síntese)."
  },
  {
    q: "Q19-21) Em lesão calcificada com grande tortuosidade proximal, qual risco aumenta com RA/OA e deve orientar escolha de estratégia de suporte?",
    options: [
      "a) Hipoglicemia",
      "b) Perfuração/dissecção por bias do dispositivo e transmissão de força em curvas, além de dificuldade de controle",
      "c) Reação a contraste tardia",
      "d) Aumento de HDL",
      "e) QT longo"
    ],
    answer: 1,
    comment: "Tortuosidade aumenta risco mecânico e dificulta controle; suporte (guia/extension/ancoragem) e seleção do método são críticos.",
    source: "Princípios de PCI complexa (síntese)."
  },
  {
    q: "Q19-22) Em ELCA, qual princípio operacional reduz risco de complicações em vasos pequenos?",
    options: [
      "a) Aumentar energia e avançar rapidamente",
      "b) Avanço lento, controle de energia, coaxialidade e evitar “pushing” mecânico",
      "c) Suspender anticoagulação",
      "d) Usar balão complacente grande antes",
      "e) Fazer trombólise sistêmica"
    ],
    answer: 1,
    comment: "Laser exige disciplina técnica; em vasos pequenos o risco de trauma é maior.",
    source: "Técnica ELCA (síntese)."
  },
  {
    q: "Q19-23) Qual cenário favorece o uso de RA/OA antes de stent para reduzir risco de subexpansão e trombose tardia?",
    options: [
      "a) Placa não calcificada, curta",
      "b) Calcificação severa com previsão de stent underexpanded (IVUS/OCT sugere cálcio espesso e arco amplo)",
      "c) Vasoespasmo isolado",
      "d) Lesão exclusivamente trombótica sem cálcio",
      "e) Dissecção extensa"
    ],
    answer: 1,
    comment: "Atherectomy é ferramenta de preparo para permitir expansão adequada—um dos determinantes mais fortes de segurança tardia.",
    source: "Consensos de calcificação + evidência de PCI guiada por imagem (síntese)."
  },
  {
    q: "Q19-24) Em modificação de placa, qual “resultado intermediário” você busca antes de implantar DES?",
    options: [
      "a) Apenas TIMI 3",
      "b) Balão NC atinge expansão adequada sem waist significativo e imagem confirma ganho luminal/“compliance” após fratura/modificação",
      "c) Aumento de ACT",
      "d) Dor torácica",
      "e) Elevação de troponina"
    ],
    answer: 1,
    comment: "O objetivo do preparo é tornar a lesão expansível; se o balão ainda tem waist importante, o stent tende a ficar subexpandido.",
    source: "Princípios de preparo em calcificação (síntese)."
  },
  {
    q: "Q19-25) Em lesões ostiais calcificadas, por que scoring/cutting balloon pode ser particularmente útil?",
    options: [
      "a) Porque elimina risco de dissecção",
      "b) Porque melhora controle de dilatação e reduz slippage em segmentos onde “watermelon seeding” é frequente",
      "c) Porque substitui IVUS",
      "d) Porque reduz contraste",
      "e) Porque impede no-reflow sempre"
    ],
    answer: 1,
    comment: "Ostiais e segmentos fibrosos são propensos a slippage; dispositivos de scoring/cutting aumentam previsibilidade.",
    source: "Técnica PCI (síntese)."
  },
  {
    q: "Q19-26) Qual é a armadilha de “aterectomia sem imagem” em calcificação?",
    options: [
      "a) Ganha tempo e sempre é melhor",
      "b) Pode levar a modificação insuficiente (stent subexpandido) ou excessiva (perfuração/dissecção), porque arco/espessura de cálcio e referência real são subestimados",
      "c) Elimina necessidade de ACT",
      "d) Reduz dose de radiação obrigatoriamente",
      "e) Elimina risco de CI-AKI"
    ],
    answer: 1,
    comment: "Imagem intracoronária orienta burr/crown/estratégia, documenta fraturas e melhora segurança e eficácia.",
    source: "Consensos de calcificação + IVUS/OCT-guided PCI (síntese)."
  },
  {
    q: "Q19-27) Em RA/OA, qual complicação pode exigir imediata pericardiocentese e materiais de selamento?",
    options: [
      "a) Hipoglicemia",
      "b) Perfuração com tamponamento",
      "c) Hipocalemia",
      "d) Eosinofilia",
      "e) Dermatite"
    ],
    answer: 1,
    comment: "Perfuração é complicação temida em modificação de placa; preparo para manejo é obrigatório.",
    source: "Complicações de PCI (Grossman & Baim; síntese)."
  },
  {
    q: "Q19-28) Em calcificação moderada, qual evidência “de bom senso” torna scoring/cutting preferível a simplesmente subir a pressão do NC repetidamente?",
    options: [
      "a) Menor necessidade de heparina",
      "b) Menor barotrauma difuso, fratura mais controlada e menor risco de dissecções profundas em alguns cenários",
      "c) Redução garantida de mortalidade",
      "d) Eliminação de trombo",
      "e) Redução de LDL"
    ],
    answer: 1,
    comment: "Scoring/cutting concentra força, frequentemente permitindo dilatação efetiva sem escalada indiscriminada de pressão.",
    source: "Princípios de modificação de placa (síntese)."
  },
  {
    q: "Q19-29) Em ELCA para ISR com hiperplasia e componente trombótico, qual “alvo” prático do operador é:",
    options: [
      "a) Remover todo o metal do stent",
      "b) Reduzir carga neointimal/trombo e facilitar expansão com balão, preservando integridade do vaso e evitando trauma excessivo",
      "c) Induzir dissecção subintimal extensa",
      "d) Substituir antiplaquetários",
      "e) Aumentar volume de contraste"
    ],
    answer: 1,
    comment: "Laser é adjuvante: prepara o leito e facilita expansão/otimização subsequente.",
    source: "Técnica ELCA/ISR (síntese)."
  },
  {
    q: "Q19-30) Resumo técnico: a lógica comum entre RA, OA, scoring/cutting e laser em PCI calcificada/ISR é:",
    options: [
      "a) Tratar microvasculatura exclusivamente",
      "b) Modificar a placa/lesão para tornar o segmento “expansível” e permitir resultado mecânico ótimo do stent/DCB, reduzindo falhas tardias",
      "c) Substituir DAPT",
      "d) Reduzir LDL",
      "e) Evitar imagem intracoronária"
    ],
    answer: 1,
    comment: "O eixo é mecânico: permitir expansão adequada e reduzir subexpansão—um determinante-chave de ISR e trombose.",
    source: "Consensos de calcificação/ISR (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap19",
    icon: "⚙️",
    title: "Aterectomia, Scoring e Laser",
    description: "Aterectomia rotacional e orbital, scoring balloon, laser e modificação de placa calcificada.",
    tags: ["Aterectomia", "Rotablator", "Cálcio Coronário"],
    questions: questions
  });
})();
