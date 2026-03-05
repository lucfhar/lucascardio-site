// ═══════════════════════════════════════════════════════════
// CAPÍTULO 08 — Inotrópicos, Vasopressores e Vasodilatadores
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q8-01) Em choque cardiogênico, qual vasopressor é mais frequentemente recomendado como primeira linha para atingir MAP alvo, por perfil de eficácia e menor arritmogenicidade relativa?",
    options: [
      "a) Dopamina",
      "b) Norepinefrina",
      "c) Isoproterenol",
      "d) Nitroprussiato"
    ],
    answer: 1,
    comment: "Norepinefrina é frequentemente preferida; dopamina associa-se a mais arritmias em ensaios de choque (sobretudo séptico, mas extrapolado para prática).",
    source: "SOAP II (N Engl J Med. 2010); AHA/ESC documentos de choque (síntese)."
  },
  {
    q: "Q8-02) SOAP II: principal achado comparando dopamina vs norepinefrina em choque foi:",
    options: [
      "a) Dopamina reduziu mortalidade e arritmias",
      "b) Norepinefrina reduziu arritmias; mortalidade global similar, com sinal desfavorável à dopamina em subgrupos",
      "c) Dopamina foi claramente superior em choque cardiogênico",
      "d) Norepinefrina causou mais FV/TV"
    ],
    answer: 1,
    comment: "SOAP II mostrou mais arritmias com dopamina; mortalidade global semelhante, com subanálises relevantes.",
    source: "De Backer D et al. N Engl J Med. 2010."
  },
  {
    q: "Q8-03) DOREMI (milrinona vs dobutamina em choque cardiogênico): conclusão principal foi:",
    options: [
      "a) Milrinona foi superior com grande redução de mortalidade",
      "b) Dobutamina foi superior com grande redução de mortalidade",
      "c) Não houve diferença significativa no desfecho composto primário",
      "d) Ambas foram contraindicadas e o estudo foi interrompido precocemente"
    ],
    answer: 2,
    comment: "DOREMI não mostrou diferença significativa entre milrinona e dobutamina no composto primário.",
    source: "Mathew R et al. N Engl J Med. 2021."
  },
  {
    q: "Q8-04) Em paciente em beta-bloqueador de alta dose, com baixo débito e SVR alto, qual inotrópico tende a ter desempenho mais previsível (conceitualmente) para aumentar contratilidade?",
    options: [
      "a) Dobutamina (β-agonista puro, sempre eficaz)",
      "b) Milrinona (PDE3, menos dependente de receptor β)",
      "c) Fenilefrina",
      "d) Nitroprussiato isolado"
    ],
    answer: 1,
    comment: "Milrinona atua via PDE3 aumentando cAMP independentemente do receptor β, podendo ser útil em presença de betabloqueio (com risco de hipotensão/arrítmias).",
    source: "DOREMI (contexto); farmacologia cardiovascular (Grossman & Baim)."
  },
  {
    q: "Q8-05) Em falência de VD com hipertensão pulmonar importante (pós-PCI/TAVI/TEP), qual estratégia farmacológica é mais coerente?",
    options: [
      "a) Aumentar SVR com fenilefrina como regra",
      "b) Considerar inodilatador (milrinona) e/ou vasodilatação pulmonar seletiva (NO inalatório/epoprostenol inalatório) com suporte de MAP",
      "c) Usar apenas nitrato sistêmico em alta dose",
      "d) Suspender oxigênio"
    ],
    answer: 1,
    comment: "Falência de VD/PHT: reduzir pós-carga pulmonar seletivamente e melhorar inotropismo, preservando perfusão coronária do VD com MAP adequada.",
    source: "AHA scientific statement on RV failure (síntese); fisiologia hemodinâmica (Grossman & Baim)."
  },
  {
    q: "Q8-06) Vasopressina adicionada à norepinefrina em choque: efeito esperado é",
    options: [
      "a) Sempre aumento de arritmias ventriculares",
      "b) Redução da dose de catecolamina necessária (catecholamine-sparing), com perfil hemodinâmico específico",
      "c) Queda obrigatória de MAP",
      "d) Aumento direto de inotropismo"
    ],
    answer: 1,
    comment: "Vasopressina pode reduzir necessidade de NE; seu papel em cardiogênico é individualizado (extrapolações de séptico).",
    source: "VASST (N Engl J Med. 2008, contexto de choque séptico); farmacologia vasopressina."
  },
  {
    q: "Q8-07) Epinefrina em choque cardiogênico é frequentemente evitada como primeira linha porque:",
    options: [
      "a) Não aumenta MAP",
      "b) Pode aumentar lactato e arritmias, além de elevar demanda miocárdica",
      "c) É vasodilatadora pura",
      "d) Reduz consumo de O2 do miocárdio"
    ],
    answer: 1,
    comment: "Epinefrina pode aumentar lactato (efeito β2), taquiarritmias e MVO2; uso é reservado/selecionado.",
    source: "AHA/ESC choque (síntese); farmacologia catecolaminas."
  },
  {
    q: "Q8-08) Fenilefrina: melhor uso hemodinâmico típico em laboratório é:",
    options: [
      "a) Choque cardiogênico com baixo débito (primeira linha)",
      "b) Hipotensão por vasodilatação (ex.: anestésico) com taquicardia importante onde aumento de SVR e reflexo vagal podem ajudar, com cuidado no débito",
      "c) Falência de VD com PHT grave",
      "d) Sempre em edema agudo"
    ],
    answer: 1,
    comment: "Fenilefrina é alfa-1 pura: aumenta SVR e pode reduzir FC; pode piorar débito em baixo output verdadeiro.",
    source: "Farmacologia cardiovascular; AHA/ASA sedation hemodynamics (síntese)."
  },
  {
    q: "Q8-09) Nitroprussiato: risco toxicológico relevante em infusões prolongadas/altas doses é:",
    options: [
      "a) Hipercalemia",
      "b) Intoxicação por cianeto/tiocianato, especialmente em insuficiência renal/hepática",
      "c) Bloqueio AV de alto grau inevitável",
      "d) Rabdomiólise"
    ],
    answer: 1,
    comment: "Nitroprussiato pode gerar cianeto/tiocianato; risco aumenta com altas doses e disfunção renal/hepática.",
    source: "Label nitroprussiato; farmacologia vasodilatadores."
  },
  {
    q: "Q8-10) Em edema agudo de pulmão hipertensivo (pós-ACS) com MAP muito elevada, qual vasodilatador IV é classicamente útil para reduzir pré/pós-carga rapidamente (com monitorização)?",
    options: [
      "a) Norepinefrina",
      "b) Nitroglicerina IV",
      "c) Dopamina",
      "d) Fenilefrina"
    ],
    answer: 1,
    comment: "NTG IV (e, em casos selecionados, nitroprussiato) reduz congestão e pós-carga; monitorar hipotensão e perfusão coronária.",
    source: "Diretrizes de insuficiência cardíaca aguda (ESC/AHA) – síntese."
  },
  {
    q: "Q8-11) Nitroglicerina: qual efeito predomina em doses baixas vs altas?",
    options: [
      "a) Baixas: vasodilatação arterial; altas: venodilatação",
      "b) Baixas: venodilatação (reduz pré-carga); altas: mais vasodilatação arterial (reduz pós-carga) e coronariana",
      "c) Baixas e altas são idênticas",
      "d) Nenhum efeito hemodinâmico relevante"
    ],
    answer: 1,
    comment: "NTG é predominantemente venodilatadora em doses baixas; em doses maiores, aumenta componente arterial.",
    source: "Farmacologia cardiovascular (textos padrão)."
  },
  {
    q: "Q8-12) Dobutamina pode piorar isquemia em ACS porque:",
    options: [
      "a) Reduz frequência cardíaca e demanda",
      "b) Aumenta contratilidade e FC (β1), elevando MVO2, podendo precipitar isquemia",
      "c) É vasoconstritora alfa-1 pura",
      "d) Bloqueia receptor P2Y12"
    ],
    answer: 1,
    comment: "Dobutamina aumenta demanda; deve ser usada com cautela e com suporte pressórico se necessário.",
    source: "Farmacologia catecolaminas; diretrizes choque/IC (síntese)."
  },
  {
    q: "Q8-13) Milrinona: efeito adverso hemodinâmico mais típico que limita uso em choque com SVR já baixo é:",
    options: [
      "a) Hipertensão",
      "b) Vasodilatação sistêmica e hipotensão",
      "c) Bradicardia profunda",
      "d) Aumento de SVR"
    ],
    answer: 1,
    comment: "Milrinona é inodilatadora; pode causar hipotensão, especialmente se SVR baixo.",
    source: "DOREMI; farmacologia PDE3."
  },
  {
    q: "Q8-14) Em choque cardiogênico com hipoperfusão e lactato alto, qual “ponto de falha” terapêutico sugere necessidade de suporte mecânico (MCS) além de fármacos?",
    options: [
      "a) MAP 65 atingida com doses baixas e lactato caindo rapidamente",
      "b) Necessidade crescente de múltiplos vasopressores/inotrópicos com persistência de hipoperfusão (lactato/saturação venosa) apesar de correção causal",
      "c) FC 60 com boa diurese",
      "d) LDL elevado"
    ],
    answer: 1,
    comment: "Refratariedade a catecolaminas com hipoperfusão sugere necessidade de MCS e/ou reavaliação de causa mecânica.",
    source: "AHA/ESC scientific statements on cardiogenic shock (síntese)."
  },
  {
    q: "Q8-15) Em falência de VD, qual parâmetro hemodinâmico invasivo costuma ser alvo para otimizar perfusão coronária do VD e débito?",
    options: [
      "a) Reduzir RAP a zero sempre",
      "b) Manter MAP adequada e otimizar pré-carga (RAP moderada), evitando hiper/hipovolemia; considerar PVR",
      "c) Aumentar PVR para melhorar perfusão",
      "d) Manter PCWP alta para “empurrar” o VD"
    ],
    answer: 1,
    comment: "VD é sensível a pré-carga e pós-carga pulmonar; equilíbrio de volume e MAP é crítico.",
    source: "AHA RV failure statement (síntese); Grossman & Baim."
  },
  {
    q: "Q8-16) Levosimendana: característica farmacológica que a diferencia (quando disponível) é:",
    options: [
      "a) β-agonista puro de curta duração",
      "b) Sensibilizador de troponina C + abertura de KATP, com efeito inotrópico e vasodilatador",
      "c) Inibidor P2Y12",
      "d) Antagonista de aldosterona"
    ],
    answer: 1,
    comment: "Levosimendana atua como sensibilizador de cálcio e vasodilatador; uso varia por disponibilidade e evidência heterogênea.",
    source: "Farmacologia; revisões/ensaios em IC aguda (síntese)."
  },
  {
    q: "Q8-17) Em hipertensão grave periprocedimento com isquemia/edema, agente IV de fácil titulação e meia-vida muito curta (alternativa a NTG) é:",
    options: [
      "a) Clevidipina (CCB di-hidropiridínico ultracurto)",
      "b) Digoxina",
      "c) Varfarina",
      "d) Amiodarona"
    ],
    answer: 0,
    comment: "Clevidipina é CCB ultracurto, titrável para controle pressórico rápido.",
    source: "Guidelines de hipertensão em emergência; farmacologia clevidipina."
  },
  {
    q: "Q8-18) Nitroprussiato em estenose aórtica crítica com hipotensão: principal risco é:",
    options: [
      "a) Melhora garantida do débito",
      "b) Colapso hemodinâmico por queda de SVR/perfusão coronária",
      "c) Bradiarritmia por bloqueio nodal direto",
      "d) Hiperglicemia"
    ],
    answer: 1,
    comment: "EAo crítica é dependente de SVR e perfusão coronária; vasodilatação potente pode causar colapso.",
    source: "Fisiologia hemodinâmica (Grossman & Baim); diretrizes valvares (ESC/ACC)."
  },
  {
    q: "Q8-19) Em choque séptico concomitante a DAC/PCI, por que norepinefrina é preferida a dopamina?",
    options: [
      "a) Porque dopamina não eleva MAP",
      "b) Menor risco de arritmias e melhor perfil em RCTs",
      "c) Porque NE é inotrópica pura",
      "d) Porque NE é anticoagulante"
    ],
    answer: 1,
    comment: "SOAP II: mais arritmias com dopamina; NE é vasopressor de primeira linha em séptico e frequentemente preferida em comorbidades cardíacas.",
    source: "SOAP II (N Engl J Med. 2010); Surviving Sepsis Campaign (síntese)."
  },
  {
    q: "Q8-20) Em paciente com vasoplegia pós-TAVI/choque distributivo, o uso de vasopressina é especialmente lógico quando:",
    options: [
      "a) Há taquiarritmia catecolamino-dependente com necessidade de “poupar” NE",
      "b) Há bradicardia severa",
      "c) Há hiperpotassemia por heparina",
      "d) Há necessidade de reduzir SVR"
    ],
    answer: 0,
    comment: "Vasopressina pode reduzir necessidade de catecolaminas e arritmias relacionadas em vasoplegia.",
    source: "Farmacologia vasopressina; prática em vasoplegia (síntese)."
  },
  {
    q: "Q8-21) “Afterload mismatch” em MR aguda: qual estratégia pode ser útil como ponte?",
    options: [
      "a) Aumentar SVR com fenilefrina",
      "b) Vasodilatação cuidadosa (ex.: nitroprussiato/NTG) + suporte inotrópico conforme necessidade, preparando intervenção definitiva",
      "c) Beta-bloqueador em alta dose imediata",
      "d) Suspender oxigênio"
    ],
    answer: 1,
    comment: "Reduzir pós-carga pode reduzir regurgitação e melhorar débito efetivo, com monitorização rigorosa.",
    source: "Diretrizes valvares (ACC/ESC) – princípios de MR aguda; Grossman & Baim."
  },
  {
    q: "Q8-22) Em choque cardiogênico, objetivo de MAP “mínimo” costuma ser individualizado; uma prática comum inicial é:",
    options: [
      "a) MAP 40 para reduzir trabalho cardíaco",
      "b) MAP ~65 mmHg como ponto de partida, ajustando conforme perfusão e comorbidades (ex.: HAS crônica)",
      "c) MAP 100 obrigatória",
      "d) MAP não importa"
    ],
    answer: 1,
    comment: "MAP alvo é individualizado; 65 mmHg é ponto inicial frequente, ajustado por perfusão renal/cerebral e história de HAS.",
    source: "AHA/ESC shock statements (síntese)."
  },
  {
    q: "Q8-23) Inalatório NO/epoprostenol em falência de VD atua primariamente por:",
    options: [
      "a) Aumentar SVR sistêmica",
      "b) Vasodilatação pulmonar seletiva, reduzindo PVR sem hipotensão sistêmica relevante",
      "c) Aumentar inotropismo do VE diretamente",
      "d) Anticoagulação"
    ],
    answer: 1,
    comment: "Vasodilatação pulmonar seletiva reduz pós-carga do VD com menor efeito sistêmico.",
    source: "AHA RV failure statement (síntese)."
  },
  {
    q: "Q8-24) Dobutamina vs milrinona: principal diferença hemodinâmica prática é:",
    options: [
      "a) Ambas aumentam SVR",
      "b) Dobutamina tende a aumentar FC e inotropismo; milrinona é inodilatadora com maior risco de hipotensão",
      "c) Milrinona reduz contractilidade",
      "d) Dobutamina é vasoconstritora alfa-1 pura"
    ],
    answer: 1,
    comment: "Escolha depende de SVR, ritmo, betabloqueio e perfil de VD/PHT.",
    source: "DOREMI (NEJM 2021); farmacologia."
  },
  {
    q: "Q8-25) Em choque com acidose grave, catecolaminas podem ser menos eficazes principalmente por:",
    options: [
      "a) Aumento de afinidade receptor-ligante",
      "b) Redução de responsividade adrenérgica e pior contratilidade; correção da acidose e suporte avançado podem ser necessários",
      "c) Aumento de efeito beta-1",
      "d) Conversão em vasodilatadores"
    ],
    answer: 1,
    comment: "Acidose reduz resposta a catecolaminas e piora função miocárdica.",
    source: "Fisiologia de choque (textos críticos); AHA shock (síntese)."
  },
  {
    q: "Q8-26) Em hipotensão por sedação (vasodilatação) com boa contratilidade, o melhor fármaco “direcionado” ao mecanismo é:",
    options: [
      "a) Inodilatador (milrinona)",
      "b) Vasopressor (norepinefrina/fenilefrina conforme cenário)",
      "c) Nitroprussiato",
      "d) Diurético"
    ],
    answer: 1,
    comment: "Vasoplegia por sedação: corrigir SVR (vasopressor) e volume, mantendo oxigenação/ventilação.",
    source: "ASA sedation guidance; farmacologia vasopressores."
  },
  {
    q: "Q8-27) Norepinefrina em altas doses: complicação relevante a monitorar é:",
    options: [
      "a) Hipoglicemia",
      "b) Isquemia periférica/mesentérica por vasoconstrição intensa, além de extravasamento com necrose",
      "c) Hiponatremia",
      "d) Aumento de HDL"
    ],
    answer: 1,
    comment: "Vasoconstrição intensa pode causar isquemia distal; cuidado com acesso e dose.",
    source: "Farmacologia catecolaminas; prática UTI."
  },
  {
    q: "Q8-28) “Inotropic score” alto e catecolaminas múltiplas associam-se a:",
    options: [
      "a) Melhor prognóstico sempre",
      "b) Pior prognóstico e maior risco de eventos (arrítmias/isquemia), reforçando avaliação para MCS",
      "c) Redução de lactato por mecanismo direto",
      "d) Menor risco hemorrágico"
    ],
    answer: 1,
    comment: "Maior carga catecolamínica associa-se a pior prognóstico; serve como gatilho de escalonamento terapêutico.",
    source: "AHA/ESC shock statements (síntese)."
  },
  {
    q: "Q8-29) Em choque cardiogênico pós-IAM com vasodilatação concomitante (mista), qual combinação é mais comum na prática inicial?",
    options: [
      "a) Apenas nitroprussiato",
      "b) Norepinefrina para MAP + inotrópico (dobutamina ou milrinona) se baixo débito persistente, com reavaliação contínua",
      "c) Apenas fenilefrina",
      "d) Apenas beta-bloqueador"
    ],
    answer: 1,
    comment: "Combinar suporte pressórico (NE) e suporte de fluxo (inotrópico) é abordagem prática em choque misto.",
    source: "AHA/ESC shock statements (síntese); DOREMI (NEJM 2021)."
  },
  {
    q: "Q8-30) Em hipertensão severa periprocedimento com dissecção aórtica suspeita, a prioridade farmacológica inicial é:",
    options: [
      "a) Vasodilatador isolado antes de controlar FC",
      "b) Controle de FC/contratilidade com beta-bloqueador IV (quando possível) antes/associado a vasodilatação para reduzir dP/dt",
      "c) Dopamina",
      "d) Amiodarona"
    ],
    answer: 1,
    comment: "Em suspeita de dissecção, reduzir dP/dt e FC é prioritário; depois ajustar PA com vasodilatação conforme necessidade.",
    source: "Diretrizes de dissecção aórtica (AHA/ACC/ESC) – princípios."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap08",
    icon: "⚡",
    title: "Inotrópicos, Vasopressores e Vasodilatadores",
    description: "Farmacologia do suporte hemodinâmico, vasopressores e vasodilatadores em procedimentos complexos.",
    tags: ["Inotrópicos", "Vasopressores", "Choque"],
    questions: questions
  });
})();
