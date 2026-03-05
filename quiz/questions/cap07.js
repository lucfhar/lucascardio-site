// ═══════════════════════════════════════════════════════════
// CAPÍTULO 07 — Antiarrítmicos, Sedativos e Lipídicos
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q7-01) Durante PCI de CD proximal, ocorre bradicardia intensa e hipotensão após manipulação ostial. Qual combinação de mecanismos e conduta imediata é MAIS coerente?",
    options: [
      "a) Bradicardia por aumento de pós-carga; tratar com nitroprussiato",
      "b) Reflexo vagal/ischemia nodal; atropina e otimizar perfusão (fluido/vasopressor se necessário), além de checar oclusão do ramo nodal",
      "c) Torsades por QT longo; tratar com magnésio e overdrive pacing",
      "d) Exclusivamente efeito do contraste; aguardar sem intervenção"
    ],
    answer: 1,
    comment: "Bradicardia em CD pode ser vagal e/ou por isquemia do nó AV/SA; atropina e suporte hemodinâmico são medidas iniciais, além de corrigir causa coronária.",
    source: "AHA ACLS Guidelines (última atualização); Grossman & Baim (hemodinâmica e complicações)."
  },
  {
    q: "Q7-02) Em VT monomórfica sustentada com instabilidade durante PCI, a abordagem MAIS apropriada é:",
    options: [
      "a) Adenosina em bolus como primeira linha universal",
      "b) Cardioversão elétrica sincronizada imediata; antiarrítmico IV como adjuvante (ex.: amiodarona) após estabilização",
      "c) Apenas beta-bloqueador oral",
      "d) Observação até terminar o stent"
    ],
    answer: 1,
    comment: "Instabilidade hemodinâmica em VT sustentada indica cardioversão sincronizada imediata; antiarrítmico IV pode prevenir recorrência.",
    source: "AHA ACLS Guidelines; ESC Ventricular Arrhythmias Guideline (última atualização)."
  },
  {
    q: "Q7-03) VF durante injeção em TCE por damping severo: qual intervenção é MAIS importante para prevenir recorrência imediata?",
    options: [
      "a) Aumentar pressão de injeção para “melhorar” imagem",
      "b) Desengajar imediatamente o guia, ventilar/oxigenar, desfibrilar e só retomar após corrigir coaxialidade/damping",
      "c) Administrar verapamil IC como primeira linha",
      "d) Suspender heparina"
    ],
    answer: 1,
    comment: "Damping/ventricularização em TCE pode causar isquemia global e VF; desengajar e corrigir mecânica é essencial, além de choque elétrico e suporte.",
    source: "Grossman & Baim (cateterismo e complicações); AHA ACLS."
  },
  {
    q: "Q7-04) Adenosina para hiperemia (FFR) é MENOS apropriada em qual cenário?",
    options: [
      "a) BAV avançado sem MP funcional ou pausa significativa prévia",
      "b) Uso de cafeína nas últimas 12–24h",
      "c) IAM recente",
      "d) Paciente em estatina alta potência"
    ],
    answer: 0,
    comment: "Adenosina pode induzir bloqueio AV/bradicardia; BAV avançado sem MP é contraindicação relativa/absoluta conforme gravidade.",
    source: "SCAI/ACC documentos de fisiologia coronária; label adenosina."
  },
  {
    q: "Q7-05) Caffeine e adenosina: o efeito esperado é:",
    options: [
      "a) Potencializar hiperemia e reduzir FFR falsamente",
      "b) Atenuar hiperemia (antagonismo de receptores), com risco de falso-negativo (FFR artificialmente alto)",
      "c) Não ter efeito algum",
      "d) Causar bloqueio AV inevitável"
    ],
    answer: 1,
    comment: "Cafeína antagoniza receptores de adenosina e pode reduzir resposta hiperêmica.",
    source: "Documentos SCAI/ACC sobre FFR; farmacologia de adenosina."
  },
  {
    q: "Q7-06) Dipiridamol e adenosina para FFR: qual afirmação é correta?",
    options: [
      "a) Dipiridamol reduz efeito da adenosina e deve ser usado como antídoto",
      "b) Dipiridamol pode potencializar efeitos/tempo de ação da adenosina (via bloqueio de recaptação), aumentando risco de efeitos adversos",
      "c) Não há interação plausível",
      "d) Dipiridamol torna adenosina ineficaz"
    ],
    answer: 1,
    comment: "Dipiridamol interfere na recaptação/metabolismo de adenosina, podendo aumentar efeito e eventos (broncoespasmo/bloqueio).",
    source: "Farmacologia cardiovascular (Grossman & Baim; labels)."
  },
  {
    q: "Q7-07) Torsades de pointes após QT prolongado no laboratório: conduta inicial MAIS apropriada é:",
    options: [
      "a) Amiodarona como primeira linha sempre",
      "b) Sulfato de magnésio IV e correção de K/Mg; considerar overdrive pacing/isoproterenol se recorrente",
      "c) Verapamil IC",
      "d) Adenosina"
    ],
    answer: 1,
    comment: "Torsades por QT longo: magnésio e correção eletrolítica; aumentar FC reduz pausas e recorrência.",
    source: "AHA ACLS; ESC Ventricular Arrhythmias Guideline."
  },
  {
    q: "Q7-08) Em FA com pré-excitação (WPW) e resposta ventricular rápida instável, qual fármaco é EVITADO por risco de degenerar para VF?",
    options: [
      "a) Procainamida",
      "b) Ibutilida",
      "c) Verapamil/diltiazem (bloqueadores nodais AV)",
      "d) Cardioversão elétrica"
    ],
    answer: 2,
    comment: "Bloqueadores do nó AV podem aumentar condução via via acessória. Instável: cardioversão é preferida.",
    source: "AHA/ACC/HRS AF Guideline; ACLS."
  },
  {
    q: "Q7-09) Amiodarona: a interação MAIS clássica e clinicamente relevante é com:",
    options: [
      "a) Metformina",
      "b) Varfarina e digoxina (aumenta níveis/efeito)",
      "c) AAS",
      "d) Ezetimiba"
    ],
    answer: 1,
    comment: "Amiodarona aumenta INR com varfarina e níveis de digoxina; monitorização/ajuste é necessário.",
    source: "AHA/ACC AF guideline; labels amiodarona/varfarina/digoxina."
  },
  {
    q: "Q7-10) Em sedação no laboratório, capnografia (EtCO2) adiciona maior valor para:",
    options: [
      "a) Detectar hipoventilação/apneia precocemente, antes de dessaturação no oximetro",
      "b) Medir diretamente débito cardíaco",
      "c) Prever trombose de stent",
      "d) Substituir monitorização de PA"
    ],
    answer: 0,
    comment: "Capnografia detecta hipoventilação precoce, especialmente com opioides/benzodiazepínicos e em OSA.",
    source: "ASA Practice Guidelines for Moderate Procedural Sedation (atualização mais recente)."
  },
  {
    q: "Q7-11) Propofol em paciente com estenose aórtica grave: principal risco imediato é:",
    options: [
      "a) Bradicardia benigna sem impacto",
      "b) Hipotensão por vasodilatação/efeito inotrópico negativo, com colapso hemodinâmico",
      "c) Hipertensão severa",
      "d) Aumento de pós-carga e melhora do gradiente"
    ],
    answer: 1,
    comment: "Propofol pode reduzir SVR e contractilidade; EAo grave é altamente dependente de pré-carga e SVR.",
    source: "ASA sedation guidance; fisiologia hemodinâmica (Grossman & Baim)."
  },
  {
    q: "Q7-12) Reversão de benzodiazepínico (midazolam) com flumazenil: qual cuidado é MAIS importante?",
    options: [
      "a) Não há risco de ressedaçao",
      "b) Risco de ressedaçao (meia-vida do flumazenil menor) e convulsão em uso crônico de BZD",
      "c) Sempre causa hipotensão refratária",
      "d) É contraindicado em qualquer sedação"
    ],
    answer: 1,
    comment: "Flumazenil pode precipitar convulsões em dependência e pode haver ressedaçao; observar e redosar conforme necessidade.",
    source: "ASA sedation guidance; label flumazenil."
  },
  {
    q: "Q7-13) Reversão de opioide (fentanil) com naloxona: qual é a armadilha MAIS comum?",
    options: [
      "a) Naloxona tem meia-vida maior que fentanil",
      "b) Reversão abrupta pode causar dor, hipertensão, taquicardia e ressedaçao quando naloxona “passa” antes do opioide",
      "c) Naloxona piora broncoespasmo por mecanismo direto",
      "d) Naloxona é sedativa"
    ],
    answer: 1,
    comment: "Titular naloxona para ventilação, evitando reversão completa desnecessária e ressedaçao posterior.",
    source: "ASA sedation guidance; label naloxona."
  },
  {
    q: "Q7-14) Dexmedetomidina: efeito hemodinâmico MAIS típico em dose/infusão moderada é:",
    options: [
      "a) Taquicardia sustentada e hipertensão",
      "b) Bradicardia e hipotensão (ou hipertensão transitória com bolus rápido), com mínima depressão respiratória",
      "c) Depressão respiratória profunda inevitável",
      "d) Aumento importante de inotropismo"
    ],
    answer: 1,
    comment: "Agonista alfa-2: bradicardia/hipotensão são comuns; grande vantagem é menor depressão respiratória.",
    source: "ASA sedation guidance; label dexmedetomidina."
  },
  {
    q: "Q7-15) Lidocaína (anestésico local) para infiltração: toxicidade sistêmica (LAST) é sugerida por:",
    options: [
      "a) Apenas dor local",
      "b) Sintomas neurológicos (zumbido, gosto metálico, convulsão) e colapso cardiovascular em casos graves",
      "c) Hiperglicemia isolada",
      "d) Aumento de LDL"
    ],
    answer: 1,
    comment: "LAST pode ser neuro e cardiotóxica; manejo inclui suporte e emulsão lipídica IV em casos graves conforme protocolos.",
    source: "ASRA Practice Advisory on Local Anesthetic Systemic Toxicity (atualização mais recente)."
  },
  {
    q: "Q7-16) Alta intensidade de estatina antes de PCI em ACS: qual conclusão é MAIS consistente com evidência?",
    options: [
      "a) Não há benefício em nenhum cenário",
      "b) Pode reduzir eventos peri-PCI/recorrência em subgrupos e é recomendada como terapia padrão em ACS; “loading” é estratégia possível",
      "c) Aumenta trombose de stent",
      "d) É contraindicada por 30 dias após ACS"
    ],
    answer: 1,
    comment: "Estatina alta potência é padrão em ACS; estratégias de loading foram estudadas (efeitos variáveis), sem substituir terapia de longo prazo.",
    source: "ESC ACS Guideline; SECURE-PCI (N Engl J Med. 2018)."
  },
  {
    q: "Q7-17) IMPROVE-IT demonstrou que, em pós-ACS, adicionar ezetimiba à estatina:",
    options: [
      "a) Não alterou LDL e aumentou mortalidade",
      "b) Reduziu LDL e reduziu eventos cardiovasculares (benefício absoluto modesto)",
      "c) Aumentou AVC hemorrágico",
      "d) Foi inferior a placebo em MACE"
    ],
    answer: 1,
    comment: "IMPROVE-IT: simvastatina+ezetimiba reduziu eventos vs simvastatina isolada em pós-ACS.",
    source: "Cannon CP et al. N Engl J Med. 2015."
  },
  {
    q: "Q7-18) FOURIER e ODYSSEY OUTCOMES, em conjunto, sustentam que PCSK9i em muito alto risco:",
    options: [
      "a) Reduz LDL e reduz eventos, com segurança global favorável no seguimento dos estudos",
      "b) Aumenta eventos por LDL muito baixo",
      "c) Não reduz LDL",
      "d) Só funciona em prevenção primária"
    ],
    answer: 0,
    comment: "Evolocumab/alirocumab reduziram LDL e eventos em pacientes de alto risco, incluindo pós-ACS (ODYSSEY).",
    source: "Sabatine MS et al. N Engl J Med. 2017; Schwartz GG et al. N Engl J Med. 2018."
  },
  {
    q: "Q7-19) Meta terapêutica de LDL na diretriz ESC para muito alto risco (regra geral) é:",
    options: [
      "a) <100 mg/dL",
      "b) <70 mg/dL",
      "c) <55 mg/dL e redução ≥50% do basal (e alvo ainda menor em recorrência)",
      "d) Qualquer valor é aceitável se assintomático"
    ],
    answer: 2,
    comment: "ESC very high risk: LDL <55 mg/dL e ≥50% de redução; em recorrência, alvo mais baixo pode ser recomendado.",
    source: "ESC Guidelines on Dyslipidaemias (atualização mais recente)."
  },
  {
    q: "Q7-20) Inclisiran se diferencia por:",
    options: [
      "a) Ser inibidor oral de PCSK9 com dose diária",
      "b) Ser siRNA com esquema de doses espaçadas (administração intermitente) e redução sustentada de LDL",
      "c) Ser fibrato",
      "d) Aumentar LDL por mecanismo hepático"
    ],
    answer: 1,
    comment: "Inclisiran é siRNA anti-PCSK9 com doses espaçadas e redução sustentada de LDL.",
    source: "ORION trials (N Engl J Med. 2020)."
  },
  {
    q: "Q7-21) Bempedoic acid: perfil correto é:",
    options: [
      "a) Anticorpo monoclonal anti-PCSK9",
      "b) Inibidor de ACL, pró-fármaco ativado principalmente no fígado; pode reduzir LDL e eventos em população selecionada",
      "c) Inibidor de CETP",
      "d) Contraindicado em intolerância a estatina por piorar mialgia invariavelmente"
    ],
    answer: 1,
    comment: "Bempedoic acid (ACL inhibitor) é ativado no fígado, menor exposição muscular; CLEAR Outcomes mostrou redução de eventos em alguns cenários.",
    source: "CLEAR Outcomes (N Engl J Med. 2023)."
  },
  {
    q: "Q7-22) Em hipertrigliceridemia persistente (TG alto) com DAC, evidência de redução de eventos com terapia específica é mais forte para:",
    options: [
      "a) Niacina",
      "b) Icosapent ethyl (EPA) em população selecionada",
      "c) Ômega-3 genérico de baixa dose",
      "d) Gemfibrozil em qualquer cenário pós-ACS como padrão"
    ],
    answer: 1,
    comment: "REDUCE-IT mostrou redução de eventos com icosapent ethyl (EPA) em pacientes selecionados com TG elevado e terapia otimizada.",
    source: "Bhatt DL et al. N Engl J Med. 2019."
  },
  {
    q: "Q7-23) Em paciente com bradicardia e BAV após ticagrelor, qual explicação é mais plausível?",
    options: [
      "a) Efeito anticolinérgico direto",
      "b) Aumento de adenosina endógena por inibição de recaptação (hipótese), associado a pausas/bradicardia em alguns pacientes",
      "c) Bloqueio beta",
      "d) Hipercalemia inevitável"
    ],
    answer: 1,
    comment: "Ticagrelor pode associar-se a pausas/bradicardia em alguns; mecanismo proposto envolve adenosina.",
    source: "PLATO (N Engl J Med. 2009); label ticagrelor."
  },
  {
    q: "Q7-24) Para controle de dor/ansiedade com sedação moderada, combinação de midazolam + opioide exige atenção principal a:",
    options: [
      "a) Hiperventilação",
      "b) Depressão respiratória sinérgica e obstrução de via aérea, especialmente em OSA/obesidade",
      "c) Hipertensão refratária",
      "d) Aumento de contratilidade"
    ],
    answer: 1,
    comment: "BZD + opioide aumenta risco de hipoventilação/apneia; monitorização e titulação são essenciais.",
    source: "ASA Practice Guidelines for Moderate Procedural Sedation."
  },
  {
    q: "Q7-25) Em paciente com choque e necessidade de sedação para ICP/impella/IABP, a melhor prática é:",
    options: [
      "a) Bolus grandes de propofol como regra",
      "b) Titulação incremental, preferir agentes com menor depressão hemodinâmica e garantir analgesia/ventilação; considerar via aérea avançada conforme risco",
      "c) Evitar qualquer sedação",
      "d) Usar apenas benzodiazepínico em dose alta"
    ],
    answer: 1,
    comment: "Em choque, sedativos podem colapsar SVR/inotropismo; titulação e estratégia de via aérea são críticas.",
    source: "ASA sedation guidance; princípios de choque (AHA/ESC)."
  },
  {
    q: "Q7-26) Em peri-PCI, qual antiarrítmico é preferido para FA com RVR em paciente com IC sistólica descompensada (EV muito reduzida)?",
    options: [
      "a) Verapamil IV",
      "b) Diltiazem IV em alta dose",
      "c) Amiodarona IV (ou cardioversão conforme instabilidade)",
      "d) Flecainida IV"
    ],
    answer: 2,
    comment: "Bloqueadores de canal de cálcio não-DHP podem piorar IC; amiodarona (ou choque elétrico se instável) é opção.",
    source: "AHA/ACC/HRS AF Guideline."
  },
  {
    q: "Q7-27) Flecainida/propafenona: principal contraindicação estrutural é:",
    options: [
      "a) Hipertensão leve",
      "b) Doença arterial coronária/infarto prévio com cicatriz (risco pró-arrítmico)",
      "c) Dislipidemia",
      "d) Asma"
    ],
    answer: 1,
    comment: "Classe IC é evitada em cardiopatia estrutural/isquêmica por risco pró-arrítmico.",
    source: "AHA/ACC/HRS AF Guideline."
  },
  {
    q: "Q7-28) Em um paciente com LDL muito baixo (<25 mg/dL) sob PCSK9i e estatina, a evidência de segurança nos grandes RCTs sugere:",
    options: [
      "a) Aumento consistente de hemorragia intracraniana e demência",
      "b) Segurança global aceitável no horizonte estudado, sem sinal robusto de dano neurocognitivo clinicamente relevante",
      "c) Necessidade obrigatória de reduzir terapia",
      "d) Proibição de LDL <40 mg/dL"
    ],
    answer: 1,
    comment: "FOURIER/ODYSSEY não mostraram sinal robusto de dano neurocognitivo; decisões individuais ainda consideram contexto.",
    source: "FOURIER (NEJM 2017); ODYSSEY OUTCOMES (NEJM 2018)."
  },
  {
    q: "Q7-29) Em paciente pós-ACS com meta LDL não atingida, a escada terapêutica mais coerente (evidence-based) é:",
    options: [
      "a) Estatina baixa dose → nada mais",
      "b) Estatina alta potência → adicionar ezetimiba → considerar PCSK9i se ainda acima da meta",
      "c) Apenas fibrato",
      "d) Apenas niacina"
    ],
    answer: 1,
    comment: "Sequência baseada em evidência e diretrizes: estatina alta potência, depois ezetimiba, depois PCSK9i conforme meta/risco.",
    source: "ESC Dyslipidaemia Guideline; IMPROVE-IT; FOURIER; ODYSSEY OUTCOMES."
  },
  {
    q: "Q7-30) Em sedação, a distinção mais útil entre sedação moderada e profunda é:",
    options: [
      "a) Moderada: paciente responde a estímulo verbal; via aérea geralmente mantida sem intervenção",
      "b) Profunda: sempre responde a estímulo verbal simples",
      "c) Moderada: sempre requer via aérea avançada",
      "d) Profunda: não há risco de hipoventilação"
    ],
    answer: 0,
    comment: "Moderada preserva resposta a estímulo verbal e reflexos de via aérea em geral; profunda aumenta risco de hipoventilação e necessidade de intervenção.",
    source: "ASA Practice Guidelines for Moderate Procedural Sedation."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap07",
    icon: "💉",
    title: "Antiarrítmicos, Sedativos e Lipídicos",
    description: "Antiarrítmicos, agentes sedativos em hemodinâmica e terapia hipolipemiante.",
    tags: ["Antiarrítmicos", "Sedação", "Estatinas"],
    questions: questions
  });
})();
