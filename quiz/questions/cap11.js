// ═══════════════════════════════════════════════════════════
// CAPÍTULO 11 — ICP Eletiva
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q11-01) Em DAC estável com lesão intermediária (40–70%) e sintomas/ischemia incertos, qual estratégia reduz implantes desnecessários e melhora desfechos de revascularização?",
    options: [
      "a) Stent baseado apenas em QCA visual",
      "b) Fisiologia (FFR/iFR) para guiar decisão, com PCI apenas se lesão for hemodinamicamente significativa",
      "c) Trocar contraste",
      "d) Apenas nitrato e stent se houver espasmo",
      "e) Stent em todas as lesões múltiplas"
    ],
    answer: 1,
    comment: "Fisiologia reduz PCI desnecessária e melhora racionalidade da revascularização em lesões intermediárias.",
    source: "FAME; DEFINE-FLAIR; iFR-SWEDEHEART (ensaios de fisiologia)."
  },
  {
    q: "Q11-02) ISCHEMIA trial, em síntese, demonstrou que em muitos pacientes com isquemia moderada/alta e anatomia não crítica:",
    options: [
      "a) Estratégia invasiva inicial reduz mortalidade em curto prazo em todos",
      "b) Estratégia invasiva inicial não reduziu MACE global primário de forma robusta vs estratégia conservadora com terapia otimizada, mas pode melhorar sintomas em subgrupos",
      "c) PCI é sempre inferior e deve ser evitada",
      "d) CABG é sempre obrigatória",
      "e) FFR é inútil"
    ],
    answer: 1,
    comment: "ISCHEMIA: abordagem invasiva não mostrou redução clara de hard outcomes em população selecionada, mas há benefícios de angina em alguns.",
    source: "ISCHEMIA trial (NEJM)."
  },
  {
    q: "Q11-03) Em TCE distal (bifurcação) e SYNTAX elevado, qual princípio de decisão é mais alinhado às diretrizes contemporâneas?",
    options: [
      "a) PCI sempre, independente de complexidade",
      "b) Heart Team com avaliação anatômica (SYNTAX), clínica e preferência; CABG tende a ser favorecida em alta complexidade",
      "c) Decidir apenas pelo IMC",
      "d) Evitar revascularização em qualquer caso",
      "e) PCI apenas se FFR for baixo no TCE (sempre aplicável)"
    ],
    answer: 1,
    comment: "TCE com alta complexidade anatômica favorece CABG; decisão é de Heart Team.",
    source: "ACC/AHA/SCAI Coronary Revascularization guideline; SYNTAX/EXCEL/NOBLE (síntese)."
  },
  {
    q: "Q11-04) Em lesão calcificada severa com falha de expansão do stent na primeira tentativa, a conduta mais racional é:",
    options: [
      "a) Implantar mais stents",
      "b) Identificar mecanismo com IVUS/OCT e realizar modificação de placa (IVL, aterectomia, cutting/scoring, alta pressão) antes de “stent-in-stent”",
      "c) Suspender anticoagulação",
      "d) Apenas nitrato IC",
      "e) Trocar para contraste iso-osmolar"
    ],
    answer: 1,
    comment: "Falha de expansão é causa maior de ISR/trombose; atacar o mecanismo é essencial.",
    source: "ULTIMATE; IVUS-XPL (princípios de otimização por imagem); consensos de calcificação (SCAI)."
  },
  {
    q: "Q11-05) IVUS/OCT-guided PCI: qual desfecho tem evidência mais consistente de melhora em doença complexa?",
    options: [
      "a) Aumento de sangramento maior",
      "b) Redução de MACE/revascularização e/ou trombose de stent em subgrupos complexos, via melhor expansão/apposição",
      "c) Piora de resultados por maior radiação obrigatória",
      "d) Nenhuma diferença em qualquer cenário",
      "e) Aumento de CI-AKI sempre"
    ],
    answer: 1,
    comment: "Ensaios e meta-análises sugerem benefício em lesões complexas (longas, TCE, calcificação) por otimização mecânica.",
    source: "IVUS-XPL; ULTIMATE; meta-análises de IVUS-guided PCI."
  },
  {
    q: "Q11-06) Definição prática: subexpansão de stent (mecânica) é melhor abordada por:",
    options: [
      "a) Aumentar duração de DAPT",
      "b) Pós-dilatação com balão não complacente adequado e/ou técnicas de modificação (IVL/aterectomia) guiadas por imagem",
      "c) Suspender estatina",
      "d) Trocar P2Y12",
      "e) Apenas observar"
    ],
    answer: 1,
    comment: "Subexpansão é problema mecânico; fármacos não corrigem geometria de stent.",
    source: "Princípios de PCI guiada por imagem."
  },
  {
    q: "Q11-07) Periprocedural MI: qual armadilha metodológica é relevante ao comparar estratégia invasiva vs conservadora em DAC estável?",
    options: [
      "a) IM periprocedimento só ocorre no braço conservador",
      "b) Incluir IM periprocedimento no composto pode “penalizar” invasivo por definição, exigindo interpretação temporal e clínica",
      "c) IM espontâneo é irrelevante",
      "d) Troponina não sobe em PCI",
      "e) CK-MB nunca é usado"
    ],
    answer: 1,
    comment: "End-points combinados podem ser influenciados por eventos inerentes ao procedimento; interpretação exige nuance.",
    source: "ISCHEMIA/COURAGE (conceitos de endpoints); Universal Definition of MI."
  },
  {
    q: "Q11-08) Em lesão intermediária com FFR 0,83 e angina atípica, a decisão mais coerente é:",
    options: [
      "a) PCI obrigatória",
      "b) OMT e reavaliação; evitar PCI em lesão não significativa (salvo contexto especial)",
      "c) Stent para “prevenir infarto” em todos",
      "d) CABG",
      "e) Fazer trombólise"
    ],
    answer: 1,
    comment: "FFR acima do limiar clássico sugere que PCI não agregará benefício isquêmico direto na maioria dos casos.",
    source: "FAME; FAME 2 (limiares e racional)."
  },
  {
    q: "Q11-09) “No-reflow” em PCI eletiva de lesão calcificada longa é mais frequentemente prevenido por:",
    options: [
      "a) Aumentar pressão de injeção",
      "b) Minimizar embolização: preparo adequado da placa, evitar barotrauma e otimizar técnica; considerar vasodilatadores IC se microvascular spasm",
      "c) Suspender heparina",
      "d) Aumentar magnificação",
      "e) Apenas AAS"
    ],
    answer: 1,
    comment: "No-reflow em eletiva é menos comum que em ACS; quando ocorre, técnica e microembolização importam.",
    source: "Textos de PCI e microcirculação (síntese)."
  },
  {
    q: "Q11-10) Em bifurcação não TCE com side branch relevante, qual estratégia é mais frequentemente recomendada como padrão inicial (na maioria dos casos)?",
    options: [
      "a) 2 stents sempre",
      "b) Provisional stenting (stent no vaso principal, reavaliar ramo lateral) como estratégia default",
      "c) Apenas balão no ramo principal",
      "d) Apenas stent no ramo lateral",
      "e) CABG"
    ],
    answer: 1,
    comment: "Provisional é default na maioria das bifurcações; técnicas de 2 stents são para anatomias/risco específicos.",
    source: "Consensos de bifurcação (EBC/SCAI – síntese)."
  },

  // Q11-11 a Q11-30
  {
    q: "Q11-11) Em lesão ostial verdadeira (aorto-ostial) de RCA, qual preocupação técnica é mais crítica?",
    options: [
      "a) Oversizing extremo do stent para “ancorar”",
      "b) Precisão no posicionamento ostial e risco de dissecção aorto-ostial; evitar damping e injeções sob engajamento perigoso",
      "c) Evitar qualquer pós-dilatação",
      "d) Trocar P2Y12 resolve o problema",
      "e) Nunca usar IVUS"
    ],
    answer: 1,
    comment: "Lesão aorto-ostial tem alto risco de dissecção/complicações; precisão e segurança do engajamento são fundamentais.",
    source: "Grossman & Baim; consensos de lesões ostiais (síntese)."
  },
  {
    q: "Q11-12) Em CTO eletiva (sem IAM), qual variável mais determina chance de sucesso e estratégia (não o “sintoma” isolado)?",
    options: [
      "a) LDL",
      "b) Score anatômico (J-CTO) e estratégia híbrida (anterógrada/retrógrada/dissecção controlada) em centros experientes",
      "c) Sexo",
      "d) IMC",
      "e) Tipo de contraste"
    ],
    answer: 1,
    comment: "CTO depende de anatomia, expertise e estratégia; escores ajudam planejamento.",
    source: "Literatura CTO/hybrid algorithm (consensos)."
  },
  {
    q: "Q11-13) Em PCI eletiva, qual medida reduz sangramento e complicações de acesso sem piorar desfechos isquêmicos em muitos cenários?",
    options: [
      "a) Acesso femoral sempre",
      "b) Acesso radial como padrão em operadores treinados",
      "c) 8F obrigatório",
      "d) Sem heparina",
      "e) Apenas sedação profunda"
    ],
    answer: 1,
    comment: "Radial reduz sangramento e complicações de acesso em várias populações, incluindo ACS e eletiva.",
    source: "MATRIX; RIVAL (síntese)."
  },
  {
    q: "Q11-14) Heparina na PCI eletiva: qual é o racional do ajuste por ACT intra-procedimento?",
    options: [
      "a) Prever CI-AKI",
      "b) Garantir anticoagulação adequada para prevenir trombose intraprocedimento, especialmente em casos longos/complexos",
      "c) Reduzir LDL",
      "d) Aumentar vasodilatação coronária",
      "e) Substituir P2Y12"
    ],
    answer: 1,
    comment: "ACT é ferramenta pragmática para titulação de UFH durante PCI.",
    source: "Textos de cateterismo/PCI (Grossman & Baim)."
  },
  {
    q: "Q11-15) Em stent “edge dissection” (dissecção na borda) vista ao final do caso, a melhor conduta depende principalmente de:",
    options: [
      "a) Cor do contraste",
      "b) Extensão, profundidade e comprometimento do fluxo (e avaliação por IVUS/OCT quando dúvida) para decidir observação vs extensão de stent",
      "c) Trocar AAS",
      "d) Aumentar sedação",
      "e) Apenas nitrato"
    ],
    answer: 1,
    comment: "Nem toda dissecção de borda exige stent; decisão é anatômica e hemodinâmica.",
    source: "Princípios de complicações angiográficas; IVUS/OCT."
  },
  {
    q: "Q11-16) Em DAC estável com necessidade de DAPT pós-DES, o default de duração (fora de HBR/extremos) é mais frequentemente:",
    options: [
      "a) 1 semana",
      "b) 1 mês em todos",
      "c) ~6 meses (com individualização para HBR ou alto risco isquêmico)",
      "d) 24 meses em todos",
      "e) DAPT nunca é necessária"
    ],
    answer: 2,
    comment: "Em estável, 6 meses é padrão frequente; HBR permite encurtar, alto risco pode prolongar.",
    source: "Diretrizes DAPT/PCI (ACC/ESC – síntese)."
  },
  {
    q: "Q11-17) Em paciente HBR com DES contemporâneo e lesão simples eletiva, estratégia mais alinhada a evidência recente é:",
    options: [
      "a) DAPT 12 meses obrigatória",
      "b) DAPT curta (1–3 meses) seguida de monoterapia, conforme perfil e dispositivo",
      "c) Sem antiagregantes",
      "d) Anticoagulação plena sem P2Y12",
      "e) Somente dipiridamol"
    ],
    answer: 1,
    comment: "HBR: DAPT curta é aceitável em muitos cenários com DES modernos.",
    source: "ARC-HBR; estudos de DAPT curta/monoterapia (síntese)."
  },
  {
    q: "Q11-18) Qual achado IVUS pós-implante mais correlaciona com menor risco de ISR/trombose?",
    options: [
      "a) Struts mal aposicionados com área mínima pequena",
      "b) Área mínima do stent adequada (expansão) e boa aposição, com bordas livres de doença crítica",
      "c) Apenas comprimento do stent",
      "d) Apenas pressão nominal do balão",
      "e) Apenas TIMI 3"
    ],
    answer: 1,
    comment: "Expansão (MSA) e aposição são determinantes mecânicos-chave.",
    source: "IVUS-XPL; ULTIMATE (síntese)."
  },
  {
    q: "Q11-19) Em “geographic miss” (lesão não totalmente coberta) o risco tende a ser maior para:",
    options: [
      "a) Zero eventos",
      "b) Reestenose e eventos na borda (edge restenosis/dissection)",
      "c) CI-AKI",
      "d) Hipoglicemia",
      "e) Bloqueio AV"
    ],
    answer: 1,
    comment: "Cobertura inadequada aumenta dissecção de borda e reestenose na transição.",
    source: "Técnica PCI (síntese)."
  },
  {
    q: "Q11-20) Em lesão longa difusa, estratégia de stent deve priorizar:",
    options: [
      "a) Múltiplas sobreposições sem planejamento",
      "b) Otimização de sizing/landing zones, minimizar sobreposição desnecessária e garantir expansão adequada guiada por imagem",
      "c) Apenas balão sem stent sempre",
      "d) Stent muito maior que o vaso",
      "e) Evitar pós-dilatação"
    ],
    answer: 1,
    comment: "Lesões longas exigem planejamento, bom sizing e otimização para reduzir ISR e trombose.",
    source: "Princípios de PCI complexa (síntese)."
  },
  {
    q: "Q11-21) Em lesão intermediária, iFR e FFR divergentes (iFR positivo, FFR negativo) podem refletir:",
    options: [
      "a) Erro inevitável do equipamento",
      "b) Diferenças na fisiologia (repouso vs hiperemia), microcirculação e hemodinâmica; interpretar no contexto clínico",
      "c) Necessidade automática de stent",
      "d) Necessidade automática de CABG",
      "e) Apenas espasmo"
    ],
    answer: 1,
    comment: "Divergências existem; abordagem deve integrar sintomas, microvascular disease e qualidade da medida.",
    source: "DEFINE-FLAIR; iFR-SWEDEHEART (conceitos)."
  },
  {
    q: "Q11-22) Em doença multiarterial estável com sintomas refratários e anatomia favorável, a lógica de PCI completa é:",
    options: [
      "a) Não tem impacto sintomático",
      "b) Pode melhorar angina/qualidade de vida e reduzir necessidade de revascularização futura, com planejamento por fisiologia/imagem",
      "c) Aumenta mortalidade em todos",
      "d) Proíbe terapia médica",
      "e) Substitui prevenção secundária"
    ],
    answer: 1,
    comment: "Em estável, ganho sintomático é importante; prevenção secundária permanece essencial.",
    source: "COURAGE/ISCHEMIA/ORBITA (síntese)."
  },
  {
    q: "Q11-23) Em paciente com “borderline” LM e downstream disease, qual armadilha ao usar FFR no LM é clássica?",
    options: [
      "a) FFR sempre superestima gravidade do LM",
      "b) Lesões distais podem “mascarar” a gravidade do LM (FFR do LM pode ser falsamente alto); IVUS é frequentemente útil",
      "c) IVUS é proibido no LM",
      "d) FFR no LM não pode ser medido",
      "e) iFR é sempre inválido"
    ],
    answer: 1,
    comment: "Downstream stenoses reduzem hiperemia e alteram gradiente; IVUS ajuda a quantificar MLA/placa e guiar decisão.",
    source: "Documentos de LM physiology/imaging (síntese)."
  },
  {
    q: "Q11-24) Em PCI eletiva, a causa mais comum de “stent thrombosis” tardia hoje (DES moderno) é:",
    options: [
      "a) Apenas hipersensibilidade ao polímero",
      "b) Fatores mecânicos (subexpansão, malaposição persistente, edge disease) e interrupção de antitrombótico, mais do que falhas do polímero isoladamente",
      "c) Sempre contraste",
      "d) Sempre alergia alimentar",
      "e) Apenas hipocalemia"
    ],
    answer: 1,
    comment: "Em DES atuais, mecanismo mecânico e adesão/terapia têm grande peso.",
    source: "Consensos de trombose de stent; evidência de imagem-guided PCI (síntese)."
  },
  {
    q: "Q11-25) Em paciente com ISR focal em DES e mecanismo IVUS de subexpansão, a terapia que melhor trata causa é:",
    options: [
      "a) DCB sem corrigir subexpansão",
      "b) Expandir adequadamente (NC/high pressure ± IVL) guiado por imagem; depois decidir DCB vs DES conforme anatomia",
      "c) Apenas aumentar estatina por 1 semana",
      "d) Suspender P2Y12",
      "e) Apenas nitrato"
    ],
    answer: 1,
    comment: "Sem corrigir subexpansão, qualquer terapia antiproliferativa tem resultado inferior.",
    source: "Consensos ISR; princípios IVUS/OCT."
  },
  {
    q: "Q11-26) Em lesão ostial de CX, por que “coaxialidade” do guia é ainda mais crítica?",
    options: [
      "a) Porque reduz CI-AKI",
      "b) Porque evita trauma ostial e facilita entrega sem deep seating, reduzindo risco de dissecção ostial/TCE",
      "c) Porque aumenta LDL",
      "d) Porque elimina necessidade de heparina",
      "e) Porque substitui IVUS"
    ],
    answer: 1,
    comment: "Ostiais são vulneráveis; coaxialidade diminui forças laterais e trauma.",
    source: "Grossman & Baim (técnica)."
  },
  {
    q: "Q11-27) Em DAC estável, a indicação de PCI é mais forte quando:",
    options: [
      "a) Sintomas controlados e nenhuma isquemia",
      "b) Angina refratária apesar de terapia otimizada e/ou lesão de alto risco anatômico (ex.: TCE significativo) com decisão de Heart Team",
      "c) LDL alto isolado",
      "d) Apenas história familiar",
      "e) Troponina normal"
    ],
    answer: 1,
    comment: "PCI em estável é principalmente para controle sintomático e algumas anatomias de alto risco.",
    source: "ACC/AHA/SCAI Revascularization guideline; ISCHEMIA/COURAGE."
  },
  {
    q: "Q11-28) Em paciente com CKD e alto risco de contraste, estratégia “staged PCI” pode ser útil porque:",
    options: [
      "a) Aumenta contraste total sempre",
      "b) Permite limitar contraste por sessão e reduzir tempo de hipotensão, com reavaliação renal entre etapas",
      "c) Proíbe fisiologia",
      "d) Exige femoral",
      "e) Elimina necessidade de DAPT"
    ],
    answer: 1,
    comment: "Staging é ferramenta pragmática para reduzir carga por sessão e melhorar segurança renal/hemodinâmica.",
    source: "Princípios de proteção renal e planejamento de PCI."
  },
  {
    q: "Q11-29) Em PCI eletiva, qual estratégia reduz “contrast runs” durante posicionamento ostial preciso?",
    options: [
      "a) Cine contínuo em alta taxa",
      "b) Roadmap/last-image-hold, marcações por wire/IVUS e injeções pequenas seletivas",
      "c) Abrir colimação",
      "d) Aumentar magnificação sempre",
      "e) Projeções laterais fixas longas"
    ],
    answer: 1,
    comment: "Técnicas de roadmap e IVUS reduzem necessidade de múltiplas aquisições.",
    source: "ALARA + IVUS-guided PCI (síntese)."
  },
  {
    q: "Q11-30) Em paciente com dissecção coronária iatrogênica limitada e fluxo TIMI 3, a decisão de stentar vs observar depende principalmente de:",
    options: [
      "a) Peso do paciente",
      "b) Extensão/profundidade, estabilidade hemodinâmica, risco de progressão e avaliação por imagem; nem toda dissecção pequena exige stent",
      "c) LDL",
      "d) Cor do trombo",
      "e) Tipo de contraste"
    ],
    answer: 1,
    comment: "Dissecções pequenas podem ser observadas; as significativas exigem selamento para prevenir progressão/oclusão.",
    source: "Textos de complicações PCI; IVUS/OCT (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap11",
    icon: "🏥",
    title: "ICP Eletiva",
    description: "Técnica e estratégia de ICP eletiva, seleção de stent, preparo de lesão e otimização por imagem.",
    tags: ["ICP", "Eletiva", "Stent"],
    questions: questions
  });
})();
