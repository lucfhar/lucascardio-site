// ═══════════════════════════════════════════════════════════
// CAPÍTULO 15 — Oclusões Totais Crônicas (CTO)
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q15-01) “Estratégia híbrida” em CTO enfatiza principalmente:",
    options: [
      "a) Um único plano anterógrado fixo até o final",
      "b) Seleção inicial baseada em anatomia (cap proximal, comprimento, colaterais, alvo distal) e rápida troca entre abordagens (anterógrada wire escalation, anterógrada dissecção/re-entry, retrógrada) para maximizar sucesso com segurança",
      "c) Retrógrada em todos os casos",
      "d) Apenas balão sem fio",
      "e) Uso obrigatório de trombólise"
    ],
    answer: 1,
    comment: "O algoritmo híbrido busca eficiência: escolher e mudar estratégia cedo conforme anatomia e resposta intra-procedimento.",
    source: "EAPCI/EuroCTO consensus documents; princípios do hybrid CTO algorithm."
  },
  {
    q: "Q15-02) J-CTO score foi desenhado principalmente para:",
    options: [
      "a) Prever risco de CI-AKI",
      "b) Estimar dificuldade/tempo para cruzar a CTO com fio (complexidade técnica)",
      "c) Escolher P2Y12",
      "d) Definir dose de heparina",
      "e) Substituir angiografia"
    ],
    answer: 1,
    comment: "J-CTO agrega variáveis anatômicas (cap, calcificação, tortuosidade, comprimento, tentativa prévia) para prever dificuldade.",
    source: "J-CTO original; consensos CTO (síntese)."
  },
  {
    q: "Q15-03) Em geral, qual cenário aumenta mais chance de sucesso anterógrado “wire escalation” (AWE)?",
    options: [
      "a) Cap proximal ambíguo e longo segmento sem distal claro",
      "b) Cap proximal bem definido, CTO curta e bom vaso distal",
      "c) Tortuosidade extrema e calcificação severa longa",
      "d) Ausência de alvo distal",
      "e) Colaterais epicárdicas frágeis obrigatórias"
    ],
    answer: 1,
    comment: "AWE funciona melhor quando a anatomia é “amigável”: cap claro, curta e distal de boa qualidade.",
    source: "Consensos CTO/hybrid algorithm."
  },
  {
    q: "Q15-04) O maior “driver” anatômico para considerar abordagem retrógrada é:",
    options: [
      "a) CTO curta <10 mm",
      "b) Cap proximal ambíguo e/ou falha anterógrada, com colaterais utilizáveis (preferencialmente septais) e alvo distal adequado",
      "c) Ausência de colaterais",
      "d) Lesão não ocluída",
      "e) Apenas idade jovem"
    ],
    answer: 1,
    comment: "Retrógrada é indicada quando anterógrada é desfavorável e há vias colaterais seguras/viáveis, idealmente septais.",
    source: "EAPCI/EuroCTO consensus; hybrid CTO algorithm."
  },
  {
    q: "Q15-05) Por que colaterais septais são frequentemente preferidas às epicárdicas para cruzamento retrógrado?",
    options: [
      "a) Porque são sempre maiores",
      "b) Menor risco catastrófico: perfuração septal tende a ser mais contida, enquanto perfuração epicárdica pode causar tamponamento rapidamente",
      "c) Porque não precisam de microcateter",
      "d) Porque eliminam necessidade de anticoagulação",
      "e) Porque não têm tortuosidade"
    ],
    answer: 1,
    comment: "Perfuração epicárdica pode ser rapidamente fatal por tamponamento; septais geralmente têm perfil de risco mais “contido”.",
    source: "Consensos CTO; segurança em colaterais."
  },
  {
    q: "Q15-06) Em CTO, qual complicação é mais temida na abordagem retrógrada por colateral epicárdica?",
    options: [
      "a) Hipoglicemia",
      "b) Perfuração da colateral com tamponamento",
      "c) CI-AKI inevitável",
      "d) Bloqueio AV completo obrigatório",
      "e) Endocardite"
    ],
    answer: 1,
    comment: "Perfuração epicárdica pode causar sangramento no espaço pericárdico e tamponamento.",
    source: "Consensos CTO; prática de complicações."
  },
  {
    q: "Q15-07) Para minimizar risco trombótico em CTO longo, qual prática de anticoagulação intraprocedimento é típica em centros experientes?",
    options: [
      "a) Evitar heparina",
      "b) Manter ACT elevado e re-checar periodicamente, especialmente em casos longos e retrógrados",
      "c) Usar apenas AAS",
      "d) Suspender P2Y12",
      "e) Vitamina K"
    ],
    answer: 1,
    comment: "Casos longos e com microcateteres/colaterais exigem anticoagulação rigorosa com ACT monitorado.",
    source: "Consensos CTO; prática padrão em hemodinâmica."
  },
  {
    q: "Q15-08) Em CTO, “ADR” (anterógrada dissecção e re-entry) é mais apropriada quando:",
    options: [
      "a) CTO muito curta e cap claro (onde AWE costuma bastar)",
      "b) CTO longa, cap claro e alvo distal adequado, especialmente quando AWE é improvável",
      "c) Não existe distal",
      "d) Há risco extremo de perda de ramos distais importantes sem landing zone",
      "e) Apenas em vasos <2,0 mm"
    ],
    answer: 1,
    comment: "ADR requer landing zone distal e planejamento para minimizar perda de ramos e subintimal excessivo.",
    source: "Hybrid CTO algorithm; consensos CTO."
  },
  {
    q: "Q15-09) Qual é o principal risco técnico de ADR mal planejada?",
    options: [
      "a) Reduzir contraste",
      "b) Perda de ramos distais/side branches por extensa dissecção subintimal e re-entry em segmento inadequado",
      "c) Eliminar necessidade de stent",
      "d) Curar aterosclerose",
      "e) Reduzir radiação sempre"
    ],
    answer: 1,
    comment: "Dissecção extensa pode ocluir ramos e comprometer perfusão; re-entry deve ser controlado e planejado.",
    source: "Consensos CTO; técnica ADR."
  },
  {
    q: "Q15-10) Em CTO, qual é a utilidade mais importante do IVUS em casos selecionados?",
    options: [
      "a) Substituir anticoagulação",
      "b) Esclarecer cap proximal ambíguo, guiar re-entry e otimizar sizing/landing zones",
      "c) Medir DAP",
      "d) Tratar alergia a contraste",
      "e) Evitar qualquer fio"
    ],
    answer: 1,
    comment: "IVUS pode definir entrada, orientar re-entry e reduzir “tentativa e erro” em anatomias complexas.",
    source: "Consensos CTO; literatura de IVUS em CTO (síntese)."
  },

  // Q15-11 a Q15-30
  {
    q: "Q15-11) DECISION-CTO e EUROCTO, em síntese, sugerem que CTO PCI em comparação com OMT:",
    options: [
      "a) Reduz mortalidade de forma consistente em todos os estudos",
      "b) Tem benefício mais consistente em sintomas/qualidade de vida e angina, com impacto menos consistente em hard outcomes em RCTs",
      "c) É inferior e deve ser evitada sempre",
      "d) Elimina necessidade de terapia médica",
      "e) É indicada apenas em assintomáticos"
    ],
    answer: 1,
    comment: "RCTs mostram benefício mais claro em sintomas/QoL; hard outcomes são menos consistentes e dependem de seleção, crossovers e poder.",
    source: "DECISION-CTO; EUROCTO trials."
  },
  {
    q: "Q15-12) Em CTO, qual é a indicação clínica mais robusta para tentar recanalização (fora de cenários de prognóstico incerto)?",
    options: [
      "a) Troponina elevada sem sintomas",
      "b) Angina/sintomas limitantes ou isquemia/viabilidade em território relevante apesar de OMT",
      "c) LDL alto",
      "d) Apenas presença de colaterais",
      "e) Idade <50"
    ],
    answer: 1,
    comment: "Sintomas e isquemia significativa em território relevante são os motores mais aceitos para CTO PCI.",
    source: "ESC CCS guideline; EAPCI CTO consensus."
  },
  {
    q: "Q15-13) Em CTO do vaso não culpado no STEMI, o estudo EXPLORE sugeriu que recanalização precoce rotineira do CTO:",
    options: [
      "a) Melhorou função VE de forma robusta em todos",
      "b) Não mostrou benefício claro em função global VE/volumes no endpoint primário global, com nuances por subgrupos",
      "c) Reduziu AVC",
      "d) Eliminou necessidade de revascularização do vaso culpado",
      "e) Foi superior em choque cardiogênico"
    ],
    answer: 1,
    comment: "EXPLORE não demonstrou benefício global robusto em função VE, destacando complexidade do timing/seleção.",
    source: "EXPLORE trial."
  },
  {
    q: "Q15-14) Em CTO, qual fator procedural é o principal determinante de complicações por radiação e contraste?",
    options: [
      "a) Tipo de stent",
      "b) Duração/complexidade do procedimento, múltiplas tentativas sem troca de estratégia e ausência de critérios de stop",
      "c) LDL",
      "d) Cor do cateter",
      "e) IMC isolado"
    ],
    answer: 1,
    comment: "CTO é longo; gestão de tempo, estratégia e “stop rules” reduz dano por radiação/contraste e complicações.",
    source: "Consensos CTO (radiation/contrast management)."
  },
  {
    q: "Q15-15) Um princípio operacional do algoritmo híbrido para reduzir tempo improdutivo é:",
    options: [
      "a) Persistir indefinidamente na mesma técnica",
      "b) Definir critérios/tempo para mudar de abordagem (AWE→ADR→retro) quando progresso não ocorre",
      "c) Evitar microcateter",
      "d) Evitar dual injection",
      "e) Evitar ACT"
    ],
    answer: 1,
    comment: "Trocas precoces e criteriosas de estratégia aumentam eficiência e segurança.",
    source: "Hybrid CTO algorithm."
  },
  {
    q: "Q15-16) Em CTO, por que “dual injection” é frequentemente recomendada em casos complexos?",
    options: [
      "a) Aumenta contraste sem benefício",
      "b) Define cap distal, comprimento real, colaterais e landing zone, reduzindo dissecções extensas e erros de rota",
      "c) Substitui IVUS",
      "d) Elimina necessidade de microcateter",
      "e) É proibida em radial"
    ],
    answer: 1,
    comment: "Dual injection melhora compreensão anatômica e segurança, apesar de aumentar contraste (que deve ser gerido).",
    source: "Consensos CTO; prática de CTO."
  },
  {
    q: "Q15-17) Em abordagem retrógrada, qual é a finalidade do microcateter além de “suporte”?",
    options: [
      "a) Administrar trombolítico",
      "b) Troca de fios, injeção seletiva, proteção da colateral e controle do sistema retrógrado",
      "c) Medir LDL",
      "d) Reduzir ACT",
      "e) Aumentar DAP"
    ],
    answer: 1,
    comment: "Microcateter é peça central na retrógrada para troca segura de fios e controle do trajeto.",
    source: "Manuais/consensos CTO (síntese)."
  },
  {
    q: "Q15-18) Em CTO, qual é o risco mais importante de “subintimal tracking” não controlado?",
    options: [
      "a) Menor necessidade de stent",
      "b) Perda de ramos distais e perfuração, além de necessidade de stents longos",
      "c) Redução de contraste",
      "d) Melhora de perfusão microvascular",
      "e) Eliminação de reestenose"
    ],
    answer: 1,
    comment: "Subintimal extenso pode comprometer ramos e aumentar risco de perfuração e extensão de metal.",
    source: "Consensos CTO; técnica ADR."
  },
  {
    q: "Q15-19) Quando você deve ser particularmente cauteloso com colaterais epicárdicas no retrógrado?",
    options: [
      "a) Sempre que houver septal disponível",
      "b) Quando são muito tortuosas, finas e com trajeto superficial, aumentando risco de perfuração e tamponamento",
      "c) Quando ACT é adequado",
      "d) Quando o paciente é jovem",
      "e) Quando LDL é baixo"
    ],
    answer: 1,
    comment: "Epicárdicas frágeis/tortuosas elevam risco de perfuração com consequências graves.",
    source: "Consensos CTO; complicações."
  },
  {
    q: "Q15-20) Em CTO, qual é a finalidade do “re-entry” controlado em ADR?",
    options: [
      "a) Entrar no lúmen proximal novamente",
      "b) Retornar ao lúmen verdadeiro distal em landing zone planejada para preservar ramos e permitir stent otimizado",
      "c) Aumentar trombo",
      "d) Reduzir ACT",
      "e) Aumentar CI-AKI"
    ],
    answer: 1,
    comment: "ADR moderno visa re-entry controlado, minimizando subintimal e preservando ramos.",
    source: "Hybrid CTO algorithm; consensos CTO."
  },
  {
    q: "Q15-21) Em CTO, qual é o maior determinante de “benefício clínico” percebido pelo paciente quando o procedimento é bem-sucedido?",
    options: [
      "a) Queda imediata de LDL",
      "b) Redução de angina e melhora de qualidade de vida/capacidade funcional em pacientes sintomáticos",
      "c) Eliminação de diabetes",
      "d) Redução garantida de mortalidade em qualquer cenário",
      "e) Redução de CI-AKI"
    ],
    answer: 1,
    comment: "O benefício mais consistente é sintomático/QoL em pacientes adequadamente selecionados.",
    source: "EUROCTO; DECISION-CTO (síntese)."
  },
  {
    q: "Q15-22) Qual parâmetro angiográfico é crucial para planejamento de CTO e está diretamente ligado a escolha de estratégia (AWE vs ADR)?",
    options: [
      "a) Número de stents prévios",
      "b) Comprimento estimado da oclusão e qualidade do vaso distal/landing zone",
      "c) Pressão arterial",
      "d) Saturação periférica",
      "e) Hemoglobina"
    ],
    answer: 1,
    comment: "Comprimento e distal definem viabilidade e segurança de dissecção/re-entry e chance de AWE.",
    source: "J-CTO; consensos CTO."
  },
  {
    q: "Q15-23) Em CTO de RCA com cap proximal ambíguo, qual ferramenta aumenta segurança de “entrada”?",
    options: [
      "a) Injeção sob damping",
      "b) IVUS para definir cap e guiar puntura/entrada, quando aplicável",
      "c) Apenas nitrato",
      "d) Apenas beta-bloqueador",
      "e) Trocar contraste"
    ],
    answer: 1,
    comment: "IVUS é muito útil para cap ambíguo, reduzindo perfuração e subintimal não planejado.",
    source: "Consensos CTO; IVUS em CTO (síntese)."
  },
  {
    q: "Q15-24) Em CTO, qual complicação é mais associada a perfuração em geral e exige preparo imediato de manejo?",
    options: [
      "a) Hipoglicemia",
      "b) Tamponamento (especialmente em perfurações epicárdicas/retrógradas), exigindo pericardiocentese pronta e materiais de selamento",
      "c) Endocardite",
      "d) Pneumotórax",
      "e) AVC hemorrágico imediato por contraste"
    ],
    answer: 1,
    comment: "Perfuração pode levar a tamponamento; centros de CTO devem ter plano e equipamentos para manejo imediato.",
    source: "Consensos CTO; manejo de perfuração coronária."
  },
  {
    q: "Q15-25) Em CTO, por que “stop rules” são essenciais?",
    options: [
      "a) Para reduzir LDL",
      "b) Para limitar radiação/contraste e evitar escalada de complicações quando o progresso técnico estagnou",
      "c) Para aumentar tempo de sala",
      "d) Para evitar heparina",
      "e) Para trocar P2Y12"
    ],
    answer: 1,
    comment: "A segurança do paciente depende de limites claros quando a chance marginal de sucesso cai e riscos acumulam.",
    source: "Consensos CTO; ALARA/contraste (síntese)."
  },
  {
    q: "Q15-26) Em CTO com CKD avançada, qual estratégia é mais coerente para reduzir contraste sem sacrificar segurança?",
    options: [
      "a) Evitar qualquer imagem",
      "b) Planejar rigorosamente, usar IVUS quando possível, dual injection seletiva/mini-injeções, roadmap e limites de contraste por sessão (staging)",
      "c) Aumentar runs para “não errar”",
      "d) Fazer apenas OCT",
      "e) Diálise profilática rotineira"
    ],
    answer: 1,
    comment: "Redução de contraste é viável com disciplina técnica e uso estratégico de IVUS/roadmap; staging ajuda.",
    source: "Consensos CTO; proteção renal (síntese)."
  },
  {
    q: "Q15-27) Em CTO multissegmentar e tortuoso, qual é a principal vantagem de centros com alto volume/experiência?",
    options: [
      "a) Menor necessidade de anticoagulação",
      "b) Maior taxa de sucesso com menor complicação por seleção/anatomia, domínio do algoritmo híbrido e gestão de complicações",
      "c) Menor CI-AKI por tipo de contraste",
      "d) Menor necessidade de consentimento",
      "e) Eliminação de reestenose"
    ],
    answer: 1,
    comment: "CTO é fortemente dependente de expertise e volume do operador/centro.",
    source: "Consensos CTO e registros de CTO (síntese)."
  },
  {
    q: "Q15-28) Em CTO, o que define “cap proximal ambíguo” de forma prática?",
    options: [
      "a) Sempre que o vaso é dominante",
      "b) Quando não é possível identificar claramente o ponto de entrada no lúmen verdadeiro proximal pela angiografia (mesmo com múltiplas projeções/dual injection)",
      "c) Quando há calcificação leve",
      "d) Quando o paciente tem dor",
      "e) Quando ACT está baixo"
    ],
    answer: 1,
    comment: "Cap ambíguo aumenta risco de perfuração e favorece IVUS/retro em alguns casos.",
    source: "Consensos CTO; hybrid algorithm."
  },
  {
    q: "Q15-29) Em CTO, qual é a razão para preferir “re-entry” em segmento distal com bom calibre e sem ramos críticos próximos?",
    options: [
      "a) Porque aumenta contraste",
      "b) Porque reduz risco de ocluir ramos e facilita expansão/otimização do stent em segmento saudável",
      "c) Porque evita heparina",
      "d) Porque reduz FC",
      "e) Porque aumenta LDL"
    ],
    answer: 1,
    comment: "Landing zone adequada preserva ramos e melhora resultado mecânico do stent.",
    source: "ADR principles; CTO consensus."
  },
  {
    q: "Q15-30) Em resumo, CTO PCI moderna exige:",
    options: [
      "a) Persistência cega na técnica inicial",
      "b) Seleção clínica (sintomas/isquemia), planejamento anatômico (J-CTO), algoritmo híbrido, controle rigoroso de anticoagulação e gestão de radiação/contraste",
      "c) Trombólise rotineira",
      "d) Apenas stent direto sem imagem",
      "e) Evitar microcateter"
    ],
    answer: 1,
    comment: "O sucesso sustentável em CTO decorre de seleção, algoritmo e segurança operacional.",
    source: "EAPCI/EuroCTO consensus; J-CTO; ensaios DECISION-CTO/EUROCTO."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap15",
    icon: "🎯",
    title: "Oclusões Totais Crônicas (CTO)",
    description: "Estratégia e técnica de recanalização de CTO, algoritmos de abordagem e suporte de imagem.",
    tags: ["CTO", "Oclusão Crônica", "Técnica Avançada"],
    questions: questions
  });
})();
