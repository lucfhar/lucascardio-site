// ═══════════════════════════════════════════════════════════
// CAPÍTULO 06 — Farmacogenômica e Interações
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q6-01) Um paciente com trombose de stent em uso de clopidogrel, adesão confirmada, apresenta genótipo CYP2C19 *2/*2. Qual interpretação e conduta são mais coerentes?",
    options: [
      "a) Genótipo não afeta resposta ao clopidogrel; manter igual",
      "b) LOF importante reduz geração do metabólito ativo; considerar troca para ticagrelor/prasugrel (se não contraindicado)",
      "c) Aumentar AAS para 300 mg resolve",
      "d) Trocar estatina por fibrato",
      "e) Suspender P2Y12"
    ],
    answer: 1,
    comment: "CYP2C19 LOF reduz ativação do clopidogrel e aumenta risco isquêmico; trocar para P2Y12 não dependente é racional.",
    source: "POPular Genetics (N Engl J Med. 2019;381:1621–1631); CPIC guideline CYP2C19–clopidogrel (síntese)."
  },
  {
    q: "Q6-02) Qual P2Y12 NÃO depende de ativação por CYP2C19 para efeito clínico?",
    options: [
      "a) Clopidogrel",
      "b) Prasugrel (depende de bioativação, mas menos sensível ao CYP2C19 isoladamente)",
      "c) Ticagrelor",
      "d) Todos dependem igualmente de CYP2C19",
      "e) Nenhum depende"
    ],
    answer: 2,
    comment: "Ticagrelor é ativo (não pró-fármaco). Prasugrel é pró-fármaco, mas menos impactado por CYP2C19 LOF isolado do que clopidogrel.",
    source: "PLATO (NEJM 2009); TRITON-TIMI 38 (NEJM 2007); CPIC (síntese)."
  },
  {
    q: "Q6-03) Interação clopidogrel–IBP: qual afirmação é mais correta do ponto de vista de plausibilidade farmacológica?",
    options: [
      "a) Qualquer IBP bloqueia completamente clopidogrel em todos",
      "b) IBPs que inibem mais CYP2C19 (ex.: omeprazol/esomeprazol) têm maior potencial de reduzir ativação do clopidogrel; impacto clínico depende de contexto",
      "c) IBP aumenta efeito do clopidogrel invariavelmente",
      "d) IBP é contraindicado em qualquer pós-PCI",
      "e) IBP elimina risco de trombose de stent"
    ],
    answer: 1,
    comment: "Interação é mais plausível com inibidores fortes de CYP2C19; uso de PPI é recomendado quando risco GI alto, ponderando escolha.",
    source: "FDA/EMA communications; diretrizes DAPT/IBP (síntese)."
  },
  {
    q: "Q6-04) Ticagrelor + indutor potente de CYP3A (ex.: rifampicina) tende a:",
    options: [
      "a) Aumentar níveis e sangramento",
      "b) Reduzir níveis e potencialmente reduzir eficácia antiagregante",
      "c) Não ter efeito",
      "d) Converter ticagrelor em clopidogrel",
      "e) Aumentar INR"
    ],
    answer: 1,
    comment: "Indução de CYP3A reduz exposição ao ticagrelor.",
    source: "Label ticagrelor; farmacologia CYP3A."
  },
  {
    q: "Q6-05) Prasugrel é contraindicado em qual cenário clássico?",
    options: [
      "a) DAC estável eletiva",
      "b) AVC/TIA prévio",
      "c) Diabetes",
      "d) Obesidade",
      "e) Tabagismo"
    ],
    answer: 1,
    comment: "Prasugrel: contraindicado em AVC/TIA prévio.",
    source: "TRITON-TIMI 38; label prasugrel."
  },
  {
    q: "Q6-06) Clopidogrel é pró-fármaco e exige bioativação hepática. Em um paciente com uso de inibidor potente de CYP2C19 (ex.: alguns azóis), a consequência esperada é:",
    options: [
      "a) Maior efeito antiagregante",
      "b) Menor formação do metabólito ativo e maior risco de eventos trombóticos",
      "c) Conversão em ticagrelor",
      "d) Aumento de efeito do AAS",
      "e) Nenhuma consequência"
    ],
    answer: 1,
    comment: "Inibição de CYP2C19 reduz ativação do clopidogrel.",
    source: "CPIC CYP2C19–clopidogrel; farmacologia (síntese)."
  },
  {
    q: "Q6-07) Estatina e P2Y12: qual cenário é mais relevante do ponto de vista de interação via CYP?",
    options: [
      "a) Rosuvastatina com clopidogrel (interação CYP major)",
      "b) Simvastatina/atorvastatina (CYP3A4) com ticagrelor (CYP3A) pode aumentar níveis de alguns substratos; monitorar conforme dose/label",
      "c) Todas estatinas são proibidas com qualquer P2Y12",
      "d) Estatinas anulam efeito do AAS",
      "e) Não existe qualquer interação possível"
    ],
    answer: 1,
    comment: "Interações dependem de via metabólica e dose; clinicamente, estatina é padrão em pós-ACS, mas atenção a doses altas e substratos CYP3A.",
    source: "Labels (ticagrelor/estatinas); PLATO (síntese)."
  },
  {
    q: "Q6-08) Em doente com FA em apixabana e indicação de claritromicina (inibidor forte de CYP3A/P-gp), o risco é:",
    options: [
      "a) Redução do nível de apixabana e trombose",
      "b) Aumento do nível de apixabana e sangramento",
      "c) Nenhuma mudança",
      "d) Apixabana vira varfarina",
      "e) INR cai"
    ],
    answer: 1,
    comment: "Inibidores fortes de CYP3A/P-gp podem aumentar níveis de DOAC e risco hemorrágico; avaliar alternativa/ajuste conforme label.",
    source: "Label apixabana; farmacologia CYP3A/P-gp."
  },
  {
    q: "Q6-09) Em paciente com stent e necessidade de carbamazepina (indutor forte), qual risco farmacológico é mais relevante em esquemas com DOAC/ticagrelor?",
    options: [
      "a) Aumento de níveis e sangramento",
      "b) Redução de níveis e perda de eficácia (mais eventos tromboembólicos/iscêmicos)",
      "c) Nenhuma interação",
      "d) Apenas náusea",
      "e) Apenas aumento de LDL"
    ],
    answer: 1,
    comment: "Indutores fortes reduzem exposição a substratos CYP3A/P-gp, podendo reduzir eficácia de DOAC/ticagrelor.",
    source: "Labels DOAC/ticagrelor; farmacologia CYP/P-gp."
  },
  {
    q: "Q6-10) Estratégia “genótipo guiado” pós-PCI para escolha de P2Y12 mostrou, em RCT, qual conclusão geral?",
    options: [
      "a) Aumentou sangramento sem benefício",
      "b) Foi inferior à estratégia padrão",
      "c) Pode reduzir sangramento (ao evitar P2Y12 potente em não-LOF) sem aumentar eventos isquêmicos de forma relevante em populações selecionadas",
      "d) É inútil e deve ser proibida",
      "e) Só funciona em pediatria"
    ],
    answer: 2,
    comment: "POPular Genetics sugere que estratégia guiada pode reduzir sangramento mantendo não inferioridade para eventos isquêmicos em cenário estudado.",
    source: "POPular Genetics (N Engl J Med. 2019;381:1621–1631)."
  },

  // Completar 30:
  {
    q: "Q6-11) Clopidogrel e tabagismo (“smoker’s paradox” farmacocinético) se relaciona a:",
    options: [
      "a) Redução da ativação por inibição de CYP1A2",
      "b) Potencial aumento de ativação via indução enzimática (ex.: CYP1A2), fenômeno não usado como estratégia terapêutica",
      "c) Conversão em ticagrelor",
      "d) Ausência total de qualquer efeito enzimático",
      "e) Contraindicação absoluta"
    ],
    answer: 1,
    comment: "Tabagismo pode induzir enzimas e aumentar ativação do clopidogrel, mas não é indicação/estratégia.",
    source: "Farmacologia clopidogrel (síntese)."
  },
  {
    q: "Q6-12) Vorapaxar (antagonista PAR-1): principal limitação prática em doença aterosclerótica é:",
    options: [
      "a) Não reduz eventos em nenhum estudo",
      "b) Aumento relevante de sangramento, especialmente intracraniano; contraindicado em AVC/TIA prévio",
      "c) Causa bradicardia fatal em todos",
      "d) Substitui P2Y12 em PCI recente",
      "e) Não tem efeito plaquetário"
    ],
    answer: 1,
    comment: "Vorapaxar reduz eventos em alguns contextos, mas sangramento (incluindo ICH) limita uso; contraindicações importantes.",
    source: "TRA 2°P–TIMI 50 (N Engl J Med. 2012); label."
  },
  {
    q: "Q6-13) Interação clássica relevante com varfarina (se usada), aumentando INR de forma importante:",
    options: [
      "a) Rifampicina",
      "b) Amiodarona",
      "c) Carbamazepina",
      "d) Erva de São João",
      "e) Fenitoína"
    ],
    answer: 1,
    comment: "Amiodarona inibe metabolismo da varfarina e aumenta INR; indutores (rifampicina/carbamazepina) tendem a reduzir INR.",
    source: "Farmacologia/labels varfarina e amiodarona."
  },
  {
    q: "Q6-14) Em paciente em ticagrelor, qual fármaco é tipicamente evitado por risco de bradicardia/bloqueio (efeito aditivo em alguns pacientes)?",
    options: [
      "a) AAS",
      "b) Verapamil/diltiazem em pacientes com predisposição (cautela clínica, não “proibição universal”)",
      "c) Pantoprazol",
      "d) Ezetimiba",
      "e) Dipirona"
    ],
    answer: 1,
    comment: "Ticagrelor pode associar-se a pausas/bradicardia em alguns; cuidado com bloqueadores nodais em predispostos.",
    source: "PLATO; label ticagrelor (síntese)."
  },
  {
    q: "Q6-15) Clopidogrel: quais alelos CYP2C19 são classicamente “loss-of-function” mais comuns?",
    options: [
      "a) *1 e *17",
      "b) *2 e *3",
      "c) *17 e *35",
      "d) *1 e *2 (ambos funcionais)",
      "e) *4 e *5 como únicos relevantes"
    ],
    answer: 1,
    comment: "*2 e *3 são LOF clássicos; *17 é gain-of-function.",
    source: "CPIC CYP2C19–clopidogrel (síntese)."
  },
  {
    q: "Q6-16) Em paciente com genótipo CYP2C19 *17/*17 (GOF) em uso de clopidogrel, o risco teórico é:",
    options: [
      "a) Menor ativação e mais trombose",
      "b) Maior ativação e potencial aumento de sangramento",
      "c) Nenhum efeito",
      "d) Conversão em prasugrel",
      "e) Necessidade obrigatória de tripla terapia"
    ],
    answer: 1,
    comment: "GOF pode aumentar formação do metabólito ativo e sangramento, embora decisão dependa de cenário clínico.",
    source: "CPIC; farmacogenética (síntese)."
  },
  {
    q: "Q6-17) Interação de DOAC (rivaroxabana/apixabana) com inibidores fortes de P-gp/CYP3A4 tende a:",
    options: [
      "a) Reduzir níveis e trombose",
      "b) Aumentar níveis e sangramento",
      "c) Não alterar nada",
      "d) Apenas causar dor de cabeça",
      "e) Melhorar função renal"
    ],
    answer: 1,
    comment: "Inibidores fortes aumentam exposição e sangramento; avaliar alternativa/ajuste conforme label.",
    source: "Labels DOAC."
  },
  {
    q: "Q6-18) Em paciente pós-PCI com necessidade de anticonvulsivante indutor (ex.: fenitoína), qual P2Y12 é mais vulnerável a perda de efeito por indução metabólica?",
    options: [
      "a) Ticagrelor (CYP3A)",
      "b) Cangrelor (IV, não depende desse metabolismo para eficácia imediata)",
      "c) AAS",
      "d) Dipiridamol",
      "e) Nenhum"
    ],
    answer: 0,
    comment: "Indutores podem reduzir níveis de ticagrelor; atenção a eficácia.",
    source: "Label ticagrelor; farmacologia CYP3A."
  },
  {
    q: "Q6-19) Em paciente com necessidade de antifúngico azólico forte (inibidor CYP3A), qual risco aumenta com ticagrelor?",
    options: [
      "a) Perda de eficácia",
      "b) Aumento de níveis e sangramento",
      "c) Nenhuma interação",
      "d) Aumento de INR",
      "e) Hipertensão severa obrigatória"
    ],
    answer: 1,
    comment: "Inibidores potentes de CYP3A podem aumentar exposição ao ticagrelor e sangramento.",
    source: "Label ticagrelor."
  },
  {
    q: "Q6-20) Interação “clopidogrel + omeprazol”: conduta mais pragmática em paciente com alto risco GI e necessidade de PPI?",
    options: [
      "a) Proibir PPI sempre",
      "b) Usar PPI quando indicado e, se possível, preferir opção com menor inibição CYP2C19 (ex.: pantoprazol) ou ajustar estratégia antiplaquetária conforme risco",
      "c) Substituir PPI por AINE",
      "d) Suspender clopidogrel e manter AAS apenas",
      "e) Trocar para varfarina"
    ],
    answer: 1,
    comment: "PPI é importante em risco GI; escolha/estratégia deve equilibrar proteção GI e risco isquêmico.",
    source: "Diretrizes DAPT/IBP; farmacologia CYP2C19."
  },
  {
    q: "Q6-21) Clopidogrel: qual classe de fármacos frequentemente reduz ativação por competição/inibição enzimática e pode ser relevante em contexto clínico?",
    options: [
      "a) IBP (alguns)",
      "b) IECA",
      "c) Diurético tiazídico",
      "d) Estatina hidrofílica sempre",
      "e) Nitratos"
    ],
    answer: 0,
    comment: "Alguns IBPs inibem CYP2C19; impacto clínico varia, mas é relevante em alguns cenários.",
    source: "Diretrizes/labels (síntese)."
  },
  {
    q: "Q6-22) Farmacogenômica em anticoagulação: qual gene é classicamente relevante para dose de varfarina (se usada)?",
    options: [
      "a) CYP2C19",
      "b) VKORC1 (e CYP2C9)",
      "c) HLA-B*57:01",
      "d) CFTR",
      "e) BRCA1"
    ],
    answer: 1,
    comment: "VKORC1 e CYP2C9 influenciam sensibilidade/metabolismo da varfarina.",
    source: "Farmacogenômica varfarina (síntese)."
  },
  {
    q: "Q6-23) Em paciente com stent e uso concomitante de AINE não seletivo, o principal problema é:",
    options: [
      "a) Redução de LDL",
      "b) Aumento de risco de sangramento e potencial interferência com função plaquetária/efeito GI",
      "c) Proteção contra trombose",
      "d) Aumento de eficácia do P2Y12",
      "e) Redução de pressão arterial diastólica obrigatória"
    ],
    answer: 1,
    comment: "AINE aumenta sangramento (GI e geral) e pode interagir com hemostasia.",
    source: "Diretrizes de segurança medicamentosa CV (síntese)."
  },
  {
    q: "Q6-24) Em paciente com alto risco de eventos e necessidade de P2Y12 potente, qual situação favorece ticagrelor sobre prasugrel?",
    options: [
      "a) AVC/TIA prévio",
      "b) Peso <60 kg",
      "c) Idade ≥75",
      "d) Todas as anteriores podem favorecer evitar prasugrel; ticagrelor pode ser opção conforme perfil",
      "e) Nenhuma"
    ],
    answer: 3,
    comment: "Prasugrel tem contraindicação AVC/TIA e cautelas em idade/peso; ticagrelor pode ser alternativa conforme caso.",
    source: "TRITON-TIMI 38; PLATO; labels."
  },
  {
    q: "Q6-25) Em paciente em clopidogrel com PRU alto (alta reatividade) e sem contraindicação, qual conduta mais alinhada ao mecanismo?",
    options: [
      "a) Aumentar apenas AAS",
      "b) Trocar para P2Y12 mais potente (ticagrelor/prasugrel) ou estratégia guiada por genótipo/função",
      "c) Suspender P2Y12",
      "d) Trocar por dipiridamol",
      "e) Manter e ignorar"
    ],
    answer: 1,
    comment: "Alta reatividade sob clopidogrel sugere baixa resposta; escalonar é racional em risco isquêmico alto.",
    source: "TROPICAL-ACS; consensos (síntese)."
  },
  {
    q: "Q6-26) Em paciente em DOAC, a combinação com verapamil (P-gp inibidor) pode:",
    options: [
      "a) Reduzir níveis do DOAC",
      "b) Aumentar níveis do DOAC e risco de sangramento, dependendo do DOAC e dose",
      "c) Ser sempre proibida",
      "d) Não ter qualquer efeito em nenhum DOAC",
      "e) Aumentar INR"
    ],
    answer: 1,
    comment: "Inibição de P-gp pode elevar exposição a alguns DOACs; seguir label e função renal.",
    source: "Labels DOAC; farmacologia P-gp."
  },
  {
    q: "Q6-27) Em terapia antiplaquetária, qual afirmação é correta sobre variabilidade interindividual?",
    options: [
      "a) Clopidogrel tem menor variabilidade que ticagrelor",
      "b) Clopidogrel tem maior variabilidade por depender de bioativação e fatores genéticos/interações",
      "c) Ticagrelor não interage com nenhum fármaco",
      "d) Prasugrel não tem risco de sangramento",
      "e) Todos têm variabilidade zero"
    ],
    answer: 1,
    comment: "Clopidogrel depende de bioativação e é mais afetado por genótipo/interações.",
    source: "CPIC; farmacologia (síntese)."
  },
  {
    q: "Q6-28) Em paciente pós-PCI com necessidade de antirretroviral potente inibidor de CYP3A, qual P2Y12 tende a ser mais problemático por interação metabólica?",
    options: [
      "a) Ticagrelor",
      "b) AAS",
      "c) Cangrelor",
      "d) Dipiridamol",
      "e) Nenhum"
    ],
    answer: 0,
    comment: "Inibidores fortes CYP3A podem elevar níveis de ticagrelor → sangramento; muitas combinações são evitadas conforme label.",
    source: "Label ticagrelor; farmacologia CYP3A."
  },
  {
    q: "Q6-29) Em paciente com múltiplas medicações, qual é a abordagem mais segura para interações clinicamente relevantes em hemodinâmica?",
    options: [
      "a) Ignorar interações porque são raras",
      "b) Checar sistematicamente CYP/P-gp, função renal/hepática e labels, principalmente para DOACs e P2Y12 potentes",
      "c) Trocar tudo por varfarina sempre",
      "d) Usar apenas fitoterápicos",
      "e) Duplicar dose de todas para compensar"
    ],
    answer: 1,
    comment: "Interações com DOAC/P2Y12 são clinicamente relevantes e devem ser checadas sistematicamente.",
    source: "Labels; boas práticas de segurança medicamentosa."
  },
  {
    q: "Q6-30) Qual afirmação resume melhor a utilidade clínica atual de farmacogenômica em PCI?",
    options: [
      "a) Substitui julgamento clínico e diretrizes",
      "b) É inútil em qualquer cenário",
      "c) Pode ser útil em cenários selecionados (alto risco isquêmico, eventos sob clopidogrel, necessidade de evitar sangramento) para escolher P2Y12 de forma mais personalizada",
      "d) Deve ser aplicada obrigatoriamente em todos os pacientes em 24h",
      "e) Só é válida em pesquisa animal"
    ],
    answer: 2,
    comment: "Uso é “targeted”, não universal: seleciona melhor quem pode se beneficiar.",
    source: "POPular Genetics (NEJM 2019); CPIC CYP2C19–clopidogrel (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap06",
    icon: "🧬",
    title: "Farmacogenômica e Interações",
    description: "Variabilidade genética na resposta a fármacos, interações medicamentosas e resistência a antiagregantes.",
    tags: ["Farmacogenômica", "Interações", "Clopidogrel"],
    questions: questions
  });
})();
