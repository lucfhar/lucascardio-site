// ═══════════════════════════════════════════════════════════
// CAPÍTULO 10 — Contraste e Nefropatia
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q10-01) Em CI-AKI (lesão renal aguda associada a contraste), qual é o mecanismo fisiopatológico mais aceito como “núcleo” do problema em pacientes de alto risco?",
    options: [
      "a) Trombose de arteríola aferente por ativação plaquetária direta do contraste",
      "b) Vasoconstrição intrarrenal medular + hipóxia medular, associadas a estresse oxidativo e toxicidade tubular direta",
      "c) Aumento sustentado de TFG por vasodilatação glomerular",
      "d) Deposição imune glomerular tipo lúpus",
      "e) Necrose cortical por embolização de colesterol como mecanismo típico"
    ],
    answer: 1,
    comment: "CI-AKI envolve hipóxia medular por vasoconstrição e aumento de viscosidade/consumo de O2, além de toxicidade tubular e estresse oxidativo.",
    source: "KDIGO AKI guideline (conceitos); textos padrão de nefrologia/intervenção."
  },
  {
    q: "Q10-02) Entre os fatores abaixo, qual tem o MAIOR peso prático para risco de CI-AKI em hemodinâmica (antes de qualquer escore)?",
    options: [
      "a) LDL basal",
      "b) eGFR baixo/CKD (especialmente <30 mL/min/1,73 m²) e AKI prévia",
      "c) História familiar de DAC",
      "d) HDL baixo",
      "e) IMC elevado isoladamente"
    ],
    answer: 1,
    comment: "Função renal basal (eGFR) é o determinante isolado mais forte; risco cresce com CKD avançada, diabetes e instabilidade hemodinâmica.",
    source: "KDIGO AKI guideline; Mehran risk score (síntese)."
  },
  {
    q: "Q10-03) Qual estratégia tem melhor evidência e é recomendada de forma mais consistente para reduzir CI-AKI em alto risco?",
    options: [
      "a) N-acetilcisteína (NAC) rotineira como pilar principal",
      "b) Hidratação com solução isotônica (salina) e minimização de volume de contraste",
      "c) Diurético de alça de rotina antes do contraste",
      "d) Bicarbonato sempre superior à salina em RCTs",
      "e) Hemodiálise profilática pós-contraste como padrão"
    ],
    answer: 1,
    comment: "Hidratação isotônica + reduzir contraste são as medidas mais robustas e consistentes. NAC e bicarbonato não mostraram benefício consistente em grandes RCTs.",
    source: "PRESERVE trial (NEJM); KDIGO AKI guideline."
  },
  {
    q: "Q10-04) PRESERVE trial: qual foi a mensagem clínica central sobre bicarbonato e NAC?",
    options: [
      "a) Ambos reduziram CI-AKI e necessidade de diálise",
      "b) Bicarbonato foi superior; NAC foi inferior",
      "c) NAC foi superior; bicarbonato foi inferior",
      "d) Nenhum mostrou benefício relevante vs salina/placebo em desfechos renais clínicos",
      "e) Ambos aumentaram mortalidade"
    ],
    answer: 3,
    comment: "PRESERVE não demonstrou benefício clínico de bicarbonato vs salina nem de NAC vs placebo em população estudada.",
    source: "PRESERVE trial (NEJM)."
  },
  {
    q: "Q10-05) Em prevenção de CI-AKI, qual é a recomendação mais comum quanto ao tipo de hidratação?",
    options: [
      "a) Solução hipotônica é superior",
      "b) Solução isotônica (salina 0,9%) é padrão; ajustar volume/velocidade conforme risco de congestão",
      "c) Glicose 5% é preferida",
      "d) Apenas bicarbonato em todos",
      "e) Hidratação é inútil se usar contraste iso-osmolar"
    ],
    answer: 1,
    comment: "Isotônica é o padrão; o desafio é individualizar em IC/CKD (risco de congestão).",
    source: "KDIGO AKI guideline; ESUR contrast guideline (síntese)."
  },
  {
    q: "Q10-06) POSEIDON (hidratação guiada por LVEDP) sugere qual princípio prático em alto risco com tendência à congestão?",
    options: [
      "a) Evitar hidratação sempre",
      "b) Hidratar de forma “personalizada” (guiada por hemodinâmica) pode reduzir CI-AKI vs regime fixo em população selecionada",
      "c) Hidratar com diurético simultâneo sem monitorização sempre é melhor",
      "d) Apenas bicarbonato guiado por PCWP",
      "e) Aumentar contraste para reduzir tempo de procedimento"
    ],
    answer: 1,
    comment: "Hidratação guiada por LVEDP é uma estratégia para equilibrar proteção renal e risco de congestão.",
    source: "POSEIDON trial (JACC); conceitos de hidratação guiada."
  },
  {
    q: "Q10-07) Em paciente com IC descompensada e CKD, qual abordagem é mais segura antes de cateterismo urgente (não emergente) para reduzir CI-AKI?",
    options: [
      "a) Grandes volumes de salina sem monitorização",
      "b) Individualizar hidratação (hemodinâmica/ultrassom/congestão), otimizar perfusão, reduzir contraste e usar técnicas de minimização",
      "c) Suspender qualquer fluidoterapia e usar diurético em altas doses indiscriminadamente",
      "d) Fazer hemodiálise profilática imediatamente",
      "e) Usar NAC como única medida"
    ],
    answer: 1,
    comment: "O alvo é manter perfusão renal sem precipitar congestão: hidratação personalizada + reduzir contraste + hemodinâmica.",
    source: "KDIGO AKI guideline; POSEIDON (síntese)."
  },
  {
    q: "Q10-08) O melhor marcador “à beira-leito” para planejar limite de contraste em CKD (princípio prático) é:",
    options: [
      "a) Número de stents",
      "b) Relação volume de contraste / eGFR (ou /CrCl) e/ou limite baseado em eGFR/CrCl",
      "c) Pressão de pulso",
      "d) Saturação periférica",
      "e) Hematócrito isolado"
    ],
    answer: 1,
    comment: "Diversos protocolos usam contraste/eGFR ou contraste/CrCl para guiar “limite” (não é absoluto, mas útil).",
    source: "Mehran risk score e literatura de limitação de contraste (síntese)."
  },
  {
    q: "Q10-09) Em paciente com CKD avançada (eGFR 22) e necessidade de PCI complexa, qual conduta reduz contraste sem comprometer resultado em muitos casos?",
    options: [
      "a) Evitar imagem intracoronária porque aumenta contraste",
      "b) Usar IVUS/OCT estrategicamente (IVUS pode ser “zero-contrast-friendly”), roadmap, injeções mínimas e validação por fisiologia/imagem",
      "c) Aumentar cine para documentação",
      "d) Fazer apenas angiografia múltipla em várias projeções",
      "e) Usar contraste hiperosmolar para reduzir volume"
    ],
    answer: 1,
    comment: "IVUS é especialmente útil para estratégias de baixo/zero contraste; OCT tipicamente exige contraste para “flush”, então o papel depende do objetivo.",
    source: "Literatura de IVUS-guided low/zero contrast PCI (síntese)."
  },
  {
    q: "Q10-10) Comparando contraste iso-osmolar e baixo-osmolar, a evidência clínica sugere que:",
    options: [
      "a) Iso-osmolar elimina CI-AKI, independentemente de hidratação/volume",
      "b) Diferenças são pequenas e dependem de população/estudo; o impacto prático maior costuma ser volume total e estado hemodinâmico",
      "c) Baixo-osmolar é sempre superior em CKD avançada",
      "d) Hiperosmolar é preferível em diabéticos",
      "e) Osmolalidade não importa em nenhuma circunstância"
    ],
    answer: 1,
    comment: "Há estudos comparativos, mas o determinante modificável maior é reduzir contraste e otimizar volume/perfusão.",
    source: "Ensaios comparativos (ex.: CARE) e diretrizes (síntese)."
  },
  {
    q: "Q10-11) Reação imediata ao contraste com urticária, broncoespasmo e hipotensão: conduta correta no laboratório inclui prioritariamente:",
    options: [
      "a) Apenas difenidramina e observação",
      "b) Epinefrina IM/IV conforme gravidade, suporte de via aérea/oxigênio, volume e broncodilatador; interromper exposição",
      "c) Diurético de alça",
      "d) Protamina",
      "e) Trombólise"
    ],
    answer: 1,
    comment: "Anafilaxia/anafilactoide: epinefrina é a terapia de primeira linha + suporte de via aérea e hemodinâmica.",
    source: "AHA ACLS; guidelines de anafilaxia (sociedades de alergia/anestesia)."
  },
  {
    q: "Q10-12) Qual quadro diferencia melhor reação vasovagal de anafilaxia durante injeção de contraste?",
    options: [
      "a) Vasovagal: taquicardia e hipertensão; anafilaxia: bradicardia e hipertensão",
      "b) Vasovagal: bradicardia, palidez, sudorese; anafilaxia: urticária/broncoespasmo/angioedema e hipotensão com taquicardia frequente",
      "c) Ambas são indistinguíveis",
      "d) Anafilaxia sempre tem bradicardia",
      "e) Vasovagal sempre tem urticária"
    ],
    answer: 1,
    comment: "Vasovagal é bradicárdico e melhora com atropina/posição/fluido; anafilaxia tem sinais cutâneos/respiratórios e requer epinefrina.",
    source: "AHA ACLS; prática de laboratório."
  },
  {
    q: "Q10-13) Premedicação para histórico de reação imediata a contraste iodado em procedimento eletivo: a mensagem mais correta é:",
    options: [
      "a) Premedicação zera risco e dispensa preparo",
      "b) Premedicação pode reduzir reações, mas não elimina risco; usar contraste alternativo quando possível e plano de emergência",
      "c) Premedicação é sempre inútil",
      "d) Premedicação substitui epinefrina na reação grave",
      "e) Premedicação impede CI-AKI"
    ],
    answer: 1,
    comment: "Premedicação é medida de redução de risco, não garantia; deve haver plano de manejo de anafilaxia.",
    source: "Diretrizes de contraste/alergia (ACR/ESUR – síntese)."
  },
  {
    q: "Q10-14) Metformina e contraste iodado: conduta correta (princípio) em alto risco de AKI é:",
    options: [
      "a) Manter sempre, sem exceção",
      "b) Considerar suspender no dia do procedimento e reavaliar função renal 48h; reiniciar se estável (especialmente se eGFR baixo/risco de AKI)",
      "c) Suspender por 6 meses",
      "d) Substituir por insulina em todos",
      "e) Aumentar dose para proteger rim"
    ],
    answer: 1,
    comment: "Objetivo é reduzir risco de acidose láctica se ocorrer AKI; a conduta varia conforme eGFR e risco.",
    source: "Diretrizes de contraste e metformina (sociedades de radiologia/endocrinologia)."
  },
  {
    q: "Q10-15) “Atheroembolismo por colesterol” pós-cateterismo diferencia-se de CI-AKI típica por:",
    options: [
      "a) Início muito precoce (horas) e recuperação rápida em dias",
      "b) Curso subagudo (dias-semanas), livedo/“blue toe”, eosinofilia e hipocomplementemia possíveis",
      "c) Ausência de qualquer achado sistêmico",
      "d) Resposta robusta a NAC",
      "e) Dependência exclusiva do tipo de contraste"
    ],
    answer: 1,
    comment: "Ateroembolismo é sistêmico, subagudo e pode ter sinais cutâneos/laboratoriais.",
    source: "Textos de nefrologia/complicações do cateterismo."
  },
  {
    q: "Q10-16) Em PCI “zero contrast” guiada por IVUS, qual erro crítico aumenta risco de perfuração/dissecção silenciosa?",
    options: [
      "a) Uso de roadmap e marcações",
      "b) Falta de referência angiográfica mínima em pontos-chave (óstio, colaterais, ramos) e ausência de checagem final seletiva quando necessária",
      "c) Uso de heparina",
      "d) Uso de stent contemporâneo",
      "e) Uso de cateter-guia"
    ],
    answer: 1,
    comment: "Zero-contrast exige disciplina: referências mínimas e checagens estratégicas para segurança.",
    source: "Literatura de zero-contrast PCI (síntese)."
  },
  {
    q: "Q10-17) Em extravasamento de contraste na punção periférica, a conduta inicial mais adequada é:",
    options: [
      "a) Massagem vigorosa e calor intenso imediato",
      "b) Elevar membro, compressa fria/observação, avaliar perfusão/dor, e acionar cirurgia/ortopedia se síndrome compartimental suspeita",
      "c) Fazer incisão e drenagem de rotina",
      "d) Anticoagular mais",
      "e) Aplicar nitrato tópico"
    ],
    answer: 1,
    comment: "A maioria é conservadora; síndrome compartimental é a preocupação maior.",
    source: "Diretrizes de extravasamento (radiologia/anestesia – síntese)."
  },
  {
    q: "Q10-18) Em paciente com CKD, por que “hipotensão” periprocedimento aumenta CI-AKI mesmo com contraste baixo?",
    options: [
      "a) Porque aumenta eGFR",
      "b) Porque reduz perfusão renal e agrava hipóxia medular, somando-se ao efeito do contraste",
      "c) Porque aumenta diurese",
      "d) Porque reduz estresse oxidativo",
      "e) Porque bloqueia vasoconstrição"
    ],
    answer: 1,
    comment: "Perfusão renal inadequada é um gatilho potente de AKI; contraste torna o rim mais vulnerável.",
    source: "KDIGO AKI guideline (conceitos)."
  },
  {
    q: "Q10-19) Uso rotineiro de diurético para “forçar diurese” sem sistema fechado de reposição (p.ex., sem RenalGuard) em alto risco:",
    options: [
      "a) É recomendado universalmente",
      "b) Pode piorar AKI por hipovolemia se não houver reposição rigorosa e monitorada",
      "c) Elimina risco de congestão e de AKI",
      "d) Substitui hidratação isotônica",
      "e) É irrelevante"
    ],
    answer: 1,
    comment: "Diurese forçada sem reposição adequada pode causar hipovolemia e piorar perfusão renal.",
    source: "KDIGO AKI guideline; estudos de diurese forçada/renal protection (síntese)."
  },
  {
    q: "Q10-20) DAP/Ka,r podem estar altos em PCI complexa. Qual decisão reduz simultaneamente dose e contraste em muitos casos?",
    options: [
      "a) Aumentar cine e repetir injeções",
      "b) Planejamento por IVUS e “stent optimization” com menos runs angiográficos e menos magnificação, usando last-image-hold/roadmap",
      "c) Prolongar projeção lateral fixa",
      "d) Aumentar FPS",
      "e) Abrir colimação"
    ],
    answer: 1,
    comment: "IVUS pode reduzir necessidade de múltiplos runs e re-checks, reduzindo radiação e contraste em casos selecionados.",
    source: "Princípios de ALARA e IVUS-guided PCI (síntese)."
  },
  {
    q: "Q10-21) Biomarcadores “precoces” de AKI (NGAL, etc.) podem detectar injúria antes da creatinina porque:",
    options: [
      "a) Creatinina sobe imediatamente após insulto",
      "b) Creatinina é marcador tardio e influenciado por volume/massa muscular; biomarcadores podem refletir injúria tubular precoce",
      "c) Creatinina não é filtrada",
      "d) Biomarcadores medem apenas inflamação sistêmica",
      "e) Biomarcadores substituem necessidade de hidratação"
    ],
    answer: 1,
    comment: "Creatinina é marcador funcional e tardio; biomarcadores podem antecipar injúria tubular.",
    source: "KDIGO AKI guideline (conceitos de biomarcadores)."
  },
  {
    q: "Q10-22) Em CKD avançada, por que OCT costuma “custar” mais contraste do que IVUS?",
    options: [
      "a) OCT exige flush para remover sangue do lúmen, frequentemente usando contraste/solução, aumentando volume",
      "b) IVUS sempre exige contraste maior",
      "c) OCT não funciona sem heparina",
      "d) IVUS só funciona com cine contínuo",
      "e) Nenhuma diferença"
    ],
    answer: 0,
    comment: "OCT requer “blood clearance”; IVUS não exige flush com contraste para aquisição.",
    source: "Textos de imagem intracoronária."
  },
  {
    q: "Q10-23) Em reação de contraste com broncoespasmo leve e urticária sem hipotensão, qual é a conduta mais adequada?",
    options: [
      "a) Epinefrina imediata em todos os casos, sem avaliar gravidade",
      "b) Antihistamínico + broncodilatador e observação, mantendo prontidão para epinefrina se houver progressão",
      "c) Diurético e alta",
      "d) Protamina",
      "e) Trombólise"
    ],
    answer: 1,
    comment: "Reações leves/moderadas podem ser tratadas com anti-H1/β2; sinais sistêmicos/hipotensão indicam epinefrina.",
    source: "Guias de reação a contraste/anafilaxia (síntese)."
  },
  {
    q: "Q10-24) Qual achado sugere mais “pseudo-CI-AKI” por hemodiluição (volume) do que injúria tubular verdadeira?",
    options: [
      "a) Creatinina sobe discretamente com grande expansão volêmica e retorna rapidamente, sem outros sinais, após reequilíbrio",
      "b) Oligúria persistente e cilindros granulosos",
      "c) Livedo reticularis",
      "d) Eosinofilia e hipocomplementemia",
      "e) Necessidade de diálise"
    ],
    answer: 0,
    comment: "Creatinina pode variar com volume; curso e contexto ajudam a distinguir de injúria tubular real.",
    source: "Nefrologia (conceitos)."
  },
  {
    q: "Q10-25) Entre os fatores abaixo, qual é mais “modificável” pelo operador no risco de CI-AKI durante PCI?",
    options: [
      "a) Idade",
      "b) eGFR basal",
      "c) Volume total de contraste e hemodinâmica/perfusão periprocedimento",
      "d) História familiar",
      "e) Sexo"
    ],
    answer: 2,
    comment: "Operador controla contraste, técnica e pode otimizar estabilidade hemodinâmica com time multidisciplinar.",
    source: "Princípios de prevenção CI-AKI."
  },
  {
    q: "Q10-26) Em paciente com eGFR 28 e anemia, qual decisão tende a reduzir risco global (renal + isquemia) antes de PCI complexa eletiva?",
    options: [
      "a) Fazer procedimento longo sem planejamento",
      "b) Planejar estratégia (imaging/physiology), reduzir runs, considerar staged PCI, otimizar hemodinâmica e evitar hipotensão prolongada",
      "c) Evitar anticoagulação",
      "d) Usar hiperosmolar por “menor volume”",
      "e) Suspender estatina"
    ],
    answer: 1,
    comment: "Planejamento e “staging” são ferramentas reais de redução de contraste e tempo de isquemia/hipotensão.",
    source: "Princípios de PCI complexa e proteção renal (síntese)."
  },
  {
    q: "Q10-27) Em diagnóstico de reação tardia cutânea ao contraste (exantema 24–72h), a mensagem correta é:",
    options: [
      "a) Sempre evolui para anafilaxia imediata",
      "b) Geralmente é autolimitada; pode requerer anti-histamínico/corticoide; isso não prediz necessariamente anafilaxia imediata futura, mas aumenta cautela",
      "c) É impossível",
      "d) Exige epinefrina em todos",
      "e) Impede qualquer procedimento futuro"
    ],
    answer: 1,
    comment: "Reações tardias são geralmente benignas; história é relevante para planejamento futuro.",
    source: "Diretrizes de reação a contraste (síntese)."
  },
  {
    q: "Q10-28) Em paciente com alergia grave prévia a contraste, qual alternativa diagnóstica/estratégia pode reduzir necessidade de contraste iodado em alguns cenários?",
    options: [
      "a) Aumentar volume de contraste e premedicar",
      "b) Considerar métodos alternativos conforme pergunta clínica (US/eco, RM sem gadolínio quando aplicável, CO2 em território periférico selecionado, e planejamento invasivo com minimização) + consulta alergia",
      "c) Sempre usar gadolínio intra-arterial como substituto seguro",
      "d) Evitar qualquer imagem",
      "e) Fazer trombólise"
    ],
    answer: 1,
    comment: "Estratégias dependem do território e da pergunta; gadolínio intra-arterial não é substituto “livre de risco” e não é rotina coronária.",
    source: "ESUR/ACR contrast guidance (síntese)."
  },
  {
    q: "Q10-29) Em paciente com CKD, qual é a prática correta quanto a “repetir contraste” em curto intervalo?",
    options: [
      "a) É sempre seguro se o volume individual for baixo",
      "b) Evitar repetição precoce quando possível; se inevitável, minimizar dose, otimizar hidratação/perfusão e monitorar função renal",
      "c) Repetir em 24h é preferível para “acostumar” rim",
      "d) Sempre fazer diálise após cada contraste",
      "e) Não há relação com risco"
    ],
    answer: 1,
    comment: "Exposição repetida aumenta risco cumulativo; timing e proteção devem ser considerados.",
    source: "Diretrizes de contraste/AKI (síntese)."
  },
  {
    q: "Q10-30) A melhor definição operacional para “CI-AKI” em estudos clínicos tipicamente se baseia em:",
    options: [
      "a) Dor lombar após contraste",
      "b) Queda de Hb",
      "c) Aumento de creatinina em 48–72h (ou 3–5 dias, dependendo da definição) sem outra causa clara",
      "d) Aumento de LDL",
      "e) Aumento de troponina"
    ],
    answer: 2,
    comment: "Definições variam, mas usam variação de creatinina em janela temporal pós-contraste; o desafio é atribuição causal.",
    source: "KDIGO AKI guideline; literatura de CI-AKI (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap10",
    icon: "💧",
    title: "Contraste e Nefropatia",
    description: "Agentes de contraste, nefropatia induzida por contraste e estratégias de nefroproteção.",
    tags: ["Contraste", "NIC", "Nefroproteção"],
    questions: questions
  });
})();
