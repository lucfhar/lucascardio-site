// ═══════════════════════════════════════════════════════════
// CAPÍTULO 18 — Reestenose — Opções Percutâneas
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q18-01) O mecanismo MAIS comum e modificável de ISR em DES contemporâneo, identificado por IVUS/OCT, é:",
    options: [
      "a) Alergia alimentar",
      "b) Subexpansão do stent (mismatch com calcificação e preparo insuficiente)",
      "c) Infecção bacteriana",
      "d) Hipotireoidismo",
      "e) Hiperventilação"
    ],
    answer: 1,
    comment: "Subexpansão é um driver maior de ISR e também de trombose; corrigir mecânica é prioritário.",
    source: "Consensos SCAI ISR; IVUS/OCT-guided PCI (síntese)."
  },
  {
    q: "Q18-02) Em ISR, por que IVUS/OCT é “quase obrigatório” antes de escolher terapia (DCB vs DES vs atherectomy/IVL)?",
    options: [
      "a) Para medir DAP",
      "b) Para diferenciar mecanismo (subexpansão, neoaterosclerose, hiperplasia, fratura de stent, edge disease), que determina a terapia correta",
      "c) Para substituir P2Y12",
      "d) Para evitar heparina",
      "e) Para reduzir LDL"
    ],
    answer: 1,
    comment: "Tratamento de ISR é mecanismo-dirigido; sem imagem, há alto risco de repetir erro e piorar camadas metálicas.",
    source: "SCAI expert consensus on ISR; Otsuka F et al. Eur Heart J. 2015 (neoaterosclerose)."
  },
  {
    q: "Q18-03) Em ISR por subexpansão em calcificação severa, qual estratégia é mais coerente (mecanismo-dirigida) antes de qualquer antiproliferativo?",
    options: [
      "a) Implantar mais um DES imediatamente",
      "b) Corrigir expansão com balão NC de alta pressão e, se refratário, considerar IVL/atherectomy (conforme anatomia), guiado por imagem",
      "c) Apenas aumentar estatina por 1 semana",
      "d) Suspender P2Y12",
      "e) Apenas nitrato IC"
    ],
    answer: 1,
    comment: "Sem corrigir subexpansão, DES/DCB falham; IVL pode ser útil para fraturar cálcio e permitir expansão.",
    source: "Consensos ISR/calcificação; IVL evidence (síntese)."
  },
  {
    q: "Q18-04) Em ISR por neoaterosclerose com ruptura intrastent e trombo, qual abordagem é mais apropriada?",
    options: [
      "a) Tratar como DAC estável, ignorando trombo",
      "b) Manejo similar a SCA: otimização mecânica + antitrombótico adequado; considerar DCB vs DES conforme anatomia e camadas, guiado por imagem",
      "c) Apenas nitrato",
      "d) Apenas warfarina",
      "e) Suspender antiagregação"
    ],
    answer: 1,
    comment: "Neoaterosclerose pode se comportar como placa nativa; estratégia deve considerar trombo, estabilidade e mecânica do stent.",
    source: "Otsuka F et al. Eur Heart J. 2015; diretrizes ACS/PCI (síntese)."
  },
  {
    q: "Q18-05) Em “stent-in-stent” múltiplo, qual principal risco de longo prazo cresce progressivamente?",
    options: [
      "a) Redução de LDL",
      "b) Nova ISR e trombose por camadas metálicas, subexpansão persistente e menor compliance, além de dificuldade de futura reintervenção",
      "c) Eliminação de eventos",
      "d) Proteção contra neoaterosclerose",
      "e) Menor necessidade de DAPT"
    ],
    answer: 1,
    comment: "Camadas metálicas acumulam risco e dificultam correção mecânica posterior.",
    source: "SCAI ISR consensus; princípios de mecânica de stent."
  },
  {
    q: "Q18-06) DCB em ISR: o racional biológico é:",
    options: [
      "a) Adicionar metal para aumentar suporte",
      "b) Entregar antiproliferativo sem adicionar nova camada metálica/polímero, reduzindo hiperplasia",
      "c) Induzir trombo mural",
      "d) Aumentar calcificação",
      "e) Reduzir ACT"
    ],
    answer: 1,
    comment: "DCB evita metal adicional e entrega fármaco; exige preparo adequado e bom resultado angiográfico pré-DCB.",
    source: "Literatura DCB em ISR (ensaios/consensos)."
  },
  {
    q: "Q18-07) Em ISR por fratura de stent (stent fracture) detectada por fluoroscopia/IVUS, a terapia mais lógica costuma envolver:",
    options: [
      "a) Apenas DCB sem corrigir instabilidade",
      "b) Reforço/novo DES cobrindo área de fratura, após otimizar expansão e tratar mecanismos associados",
      "c) Apenas estatina",
      "d) Apenas nitrato",
      "e) Trombólise"
    ],
    answer: 1,
    comment: "Fratura é falha estrutural; frequentemente requer novo stent, além de correção de subexpansão/lesão.",
    source: "Consensos ISR; mecânica de stent (síntese)."
  },
  {
    q: "Q18-08) “Edge restenosis” (ISR na borda) sugere principalmente:",
    options: [
      "a) Alergia ao polímero",
      "b) Doença residual/landing zone inadequada (geographic miss) e gradiente de injúria na borda",
      "c) DAPT curta",
      "d) Hipotensão",
      "e) Uso de PPI"
    ],
    answer: 1,
    comment: "Edge restenosis é frequentemente técnica/landing zone; tratar exige cobrir doença residual e otimizar borda.",
    source: "Técnica PCI; ISR consensus (síntese)."
  },
  {
    q: "Q18-09) Em ISR focal em DES com expansão adequada e sem calcificação significativa, uma opção frequentemente aceitável é:",
    options: [
      "a) Apenas nitrato",
      "b) DCB ou novo DES (dependendo de camadas, anatomia e estratégia), guiado por imagem",
      "c) Suspender antiagregação",
      "d) Warfarina plena dose",
      "e) Trombólise"
    ],
    answer: 1,
    comment: "Quando mecânica é boa, terapia antiproliferativa (DCB/DES) pode ser suficiente; imagem ajuda a evitar metal desnecessário.",
    source: "Consensos ISR; literatura DCB/DES (síntese)."
  },
  {
    q: "Q18-10) Em ISR difusa (lesão longa dentro do stent), qual cenário torna DCB menos ideal e favorece DES (ou estratégia combinada)?",
    options: [
      "a) Lesão focal curta",
      "b) Recoil/instabilidade mecânica, ou necessidade de scaffolding adicional, ou resultado subótimo pós-preparo",
      "c) Vaso grande e sem calcificação",
      "d) IMC baixo",
      "e) LDL baixo"
    ],
    answer: 1,
    comment: "DCB não fornece scaffolding. Se resultado mecânico for subótimo, DES pode ser necessário.",
    source: "Consensos ISR; princípios DCB."
  },

  // Q18-11 a Q18-30
  {
    q: "Q18-11) Em ISR com subexpansão grave em calcificação concêntrica, qual técnica tem emergido como alternativa menos “agressiva” que rota/orbital em alguns cenários?",
    options: [
      "a) IVL",
      "b) Trombectomia",
      "c) Protamina",
      "d) Vitamina K",
      "e) Dipiridamol"
    ],
    answer: 0,
    comment: "IVL pode fraturar cálcio e facilitar expansão, inclusive em alguns stents subexpandidos (seleção é crítica).",
    source: "IVL trials/consensos (síntese)."
  },
  {
    q: "Q18-12) Em ISR por hiperplasia homogênea (BMS clássico) com boa expansão, qual terapia é frequentemente eficaz?",
    options: [
      "a) Apenas nitrato",
      "b) DCB (paclitaxel-based em muitos estudos) ou DES, conforme contexto",
      "c) Suspender P2Y12",
      "d) Apenas anticoagulação",
      "e) Apenas diurético"
    ],
    answer: 1,
    comment: "Hiperplasia homogênea responde bem a terapia antiproliferativa; escolha depende de anatomia e estratégia de metal.",
    source: "Ensaios/consensos ISR (síntese)."
  },
  {
    q: "Q18-13) Em ISR recorrente com múltiplas camadas, qual abordagem pode ser considerada em casos extremos (selecionados) para evitar mais metal?",
    options: [
      "a) Mais um DES sempre",
      "b) DCB após preparo muito cuidadoso; considerar estratégias como braquiterapia (onde disponível) em casos refratários",
      "c) Apenas nitrato",
      "d) Trombólise",
      "e) Sem tratamento"
    ],
    answer: 1,
    comment: "Braquiterapia intravascular pode ser opção em ISR refratária em alguns centros; DCB evita metal adicional.",
    source: "Consensos ISR; literatura de braquiterapia (síntese)."
  },
  {
    q: "Q18-14) Em ISR por malapposição tardia (LASM), a prioridade é:",
    options: [
      "a) Ignorar porque não importa",
      "b) Avaliar mecanismo por imagem, corrigir se associado a fluxo turbulento/trombose e otimizar terapia antitrombótica; decisão é caso-a-caso",
      "c) Trocar contraste",
      "d) Suspender DAPT",
      "e) Apenas diurético"
    ],
    answer: 1,
    comment: "LASM pode associar-se a trombose tardia; manejo depende de presença de trombo/instabilidade e anatomia.",
    source: "Joner M et al. JACC. 2006 (mecanismos); consensos (síntese)."
  },
  {
    q: "Q18-15) Em ISR, qual é a “sequência” mais correta antes de aplicar DCB?",
    options: [
      "a) Aplicar DCB em lesão não preparada",
      "b) Pré-dilatação/preparo para obter resultado angiográfico bom (sem recoil/dissecção limitante) e então aplicar DCB com tempo/pressão adequados",
      "c) DCB e depois pré-dilatação",
      "d) DCB substitui necessidade de imagem",
      "e) DCB com insuflação de 1 segundo"
    ],
    answer: 1,
    comment: "DCB exige preparo e bom resultado “pré-DCB” para maximizar entrega e reduzir recoil.",
    source: "Consensos DCB/ISR (síntese)."
  },
  {
    q: "Q18-16) Uma razão para ISR em DES apesar de boa técnica é:",
    options: [
      "a) Inexistência de hiperplasia em DES",
      "b) Biologia do paciente (DM, inflamação, CKD) e neoaterosclerose tardia, além de fatores mecânicos residuais",
      "c) Cor do stent",
      "d) Tipo de pressão arterial",
      "e) Uso de radial"
    ],
    answer: 1,
    comment: "ISR é multifatorial: técnica, biologia e tempo (neoaterosclerose) contribuem.",
    source: "Otsuka F et al. Eur Heart J. 2015; princípios clínicos."
  },
  {
    q: "Q18-17) Em reestenose no TCE, por que CABG pode ser preferível em alguns casos de ISR recorrente?",
    options: [
      "a) Porque CABG não tem riscos",
      "b) Porque ISR recorrente em TCE com múltiplas camadas e doença difusa pode ter alto risco de nova falha percutânea e grande território em risco",
      "c) Porque CABG elimina necessidade de estatina",
      "d) Porque CABG sempre é mais rápida",
      "e) Porque CABG não precisa de heparina"
    ],
    answer: 1,
    comment: "Decisão é de Heart Team; TCE tem alto território e ISR recorrente pode favorecer cirurgia em alguns perfis.",
    source: "Diretrizes revascularização (ACC/ESC – síntese)."
  },
  {
    q: "Q18-18) Em ISR com trombose subaguda associada, qual erro é mais perigoso?",
    options: [
      "a) Otimizar expansão por imagem",
      "b) Tratar como ISR estável e subestimar trombo/instabilidade, sem antitrombótico adequado",
      "c) Considerar bailout IIb/IIIa quando indicado",
      "d) Manter ACT adequado",
      "e) Considerar causa mecânica"
    ],
    answer: 1,
    comment: "ISR com trombo é SCA; manejo exige antitrombótico e correção mecânica.",
    source: "Diretrizes ACS/PCI; consensos ISR (síntese)."
  },
  {
    q: "Q18-19) Em ISR por “under-sizing” (stent pequeno para o vaso), o achado IVUS típico é:",
    options: [
      "a) MSA pequena com referência maior e possível malapposição, sugerindo necessidade de expansão e revisão de sizing",
      "b) MSA enorme",
      "c) Ausência de stent",
      "d) Apenas trombo sem stent",
      "e) DAP alto"
    ],
    answer: 0,
    comment: "Under-sizing e subexpansão geralmente coexistem; corrigir com NC/estratégias de modificação.",
    source: "Princípios IVUS em ISR (síntese)."
  },
  {
    q: "Q18-20) Se o mecanismo é neoaterosclerose dentro do stent, qual terapia sistêmica adicional é particularmente relevante além do tratamento local?",
    options: [
      "a) Aumentar LDL",
      "b) Intensificar prevenção secundária (LDL agressivo, cessar tabagismo, DM, inflamação residual selecionada)",
      "c) Suspender estatina",
      "d) Apenas diurético",
      "e) Apenas nitrato"
    ],
    answer: 1,
    comment: "Neoaterosclerose reflete biologia aterosclerótica sistêmica; terapia local não substitui prevenção secundária.",
    source: "Diretrizes dislipidemia/ACS (síntese)."
  },
  {
    q: "Q18-21) Em ISR com resultado subótimo pós-DCB (recoil significativo), qual conduta é mais coerente?",
    options: [
      "a) Finalizar e esperar",
      "b) Considerar DES (scaffold) após corrigir mecânica, pois DCB não fornece suporte estrutural",
      "c) Suspender anticoagulação",
      "d) Apenas nitrato",
      "e) Repetir DCB imediatamente várias vezes"
    ],
    answer: 1,
    comment: "Se recoil/dissecção limitante persistem, é preciso scaffolding, frequentemente com DES.",
    source: "Consensos DCB/ISR (síntese)."
  },
  {
    q: "Q18-22) Em ISR, qual é a principal razão para evitar “DES-in-DES” repetidamente sem imagem?",
    options: [
      "a) Porque reduz contraste",
      "b) Porque acumula metal e mascara subexpansão, elevando risco de recorrência e trombose e tornando reintervenções futuras mais difíceis",
      "c) Porque melhora expansão",
      "d) Porque reduz necessidade de DAPT",
      "e) Porque elimina neoaterosclerose"
    ],
    answer: 1,
    comment: "Camadas metálicas sem correção de mecanismo são receita para falha recorrente.",
    source: "SCAI ISR consensus (síntese)."
  },
  {
    q: "Q18-23) Se a imagem mostra hiperplasia homogênea com boa expansão, qual escolha evita metal adicional e pode ser preferível?",
    options: [
      "a) DCB",
      "b) Novo DES sempre",
      "c) Apenas nitrato",
      "d) Trombólise",
      "e) Protamina"
    ],
    answer: 0,
    comment: "DCB é atraente quando não há necessidade de scaffolding adicional.",
    source: "Literatura DCB/ISR (síntese)."
  },
  {
    q: "Q18-24) Em ISR por edge disease, qual estratégia é mais correta?",
    options: [
      "a) Tratar apenas o centro do stent",
      "b) Cobrir doença residual na borda (landing zone adequada) e otimizar expansão/apposição",
      "c) Apenas aumentar estatina por 1 semana",
      "d) Suspender P2Y12",
      "e) Evitar qualquer pós-dilatação"
    ],
    answer: 1,
    comment: "Edge disease exige correção da causa (cobertura/landing zone).",
    source: "Técnica PCI; ISR consensus (síntese)."
  },
  {
    q: "Q18-25) Qual fator do paciente aumenta risco de ISR e também influencia escolha de duração/intensidade de antitrombótico?",
    options: [
      "a) Miopia",
      "b) Diabetes mellitus e CKD",
      "c) Apendicectomia",
      "d) Rinite",
      "e) Cor dos olhos"
    ],
    answer: 1,
    comment: "DM/CKD elevam risco de ISR e eventos, e também risco hemorrágico em alguns perfis; individualizar.",
    source: "Literatura de DAC em DM/CKD (síntese)."
  },
  {
    q: "Q18-26) Em ISR, qual medida procedural reduz recorrência independentemente da tecnologia escolhida (DCB vs DES)?",
    options: [
      "a) Evitar imagem",
      "b) Otimização por imagem (expansão/apposição/identificação de mecanismo) e bom preparo da lesão",
      "c) Apenas aumentar dose de AAS",
      "d) Trocar contraste",
      "e) Aumentar FPS"
    ],
    answer: 1,
    comment: "Imagem e preparo reduzem falha por mecanismo não tratado.",
    source: "SCAI ISR consensus; IVUS/OCT-guided PCI (síntese)."
  },
  {
    q: "Q18-27) Em reestenose recorrente com múltiplas camadas e subexpansão intratável, qual opção definitiva pode ser necessária em alguns casos?",
    options: [
      "a) Repetir DCB infinitamente",
      "b) Considerar Heart Team e CABG se território e anatomia suportarem",
      "c) Apenas nitrato",
      "d) Suspender estatina",
      "e) Evitar qualquer decisão"
    ],
    answer: 1,
    comment: "Quando percutâneo entra em “beco sem saída” mecânico, cirurgia pode ser a saída.",
    source: "Diretrizes revascularização (ACC/ESC – síntese)."
  },
  {
    q: "Q18-28) Em ISR no contexto de alta reatividade plaquetária sob clopidogrel, qual ação pode reduzir risco de eventos trombóticos recorrentes após nova intervenção?",
    options: [
      "a) Suspender P2Y12",
      "b) Escalonar para P2Y12 mais potente (se não contraindicado) e revisar adesão/interações; considerar genótipo/função plaquetária em casos selecionados",
      "c) Trocar AAS por ibuprofeno",
      "d) Apenas diurético",
      "e) Apenas nitrato"
    ],
    answer: 1,
    comment: "Terapia antitrombótica adequada é parte do pacote; mas não substitui correção mecânica da ISR.",
    source: "Consensos antiplaquetários; TROPICAL-ACS/POPular Genetics (síntese)."
  },
  {
    q: "Q18-29) O principal motivo para ISR em BMS ser menos comum hoje é:",
    options: [
      "a) BMS não é usado",
      "b) DES contemporâneo reduz hiperplasia neointimal em comparação a BMS, com bom perfil de segurança",
      "c) BMS elimina trombose",
      "d) BMS é sempre melhor",
      "e) Contraste mudou"
    ],
    answer: 1,
    comment: "DES reduzem ISR vs BMS; BMS caiu em desuso por ISR elevada e DES modernos mais seguros.",
    source: "História de DES/BMS; diretrizes PCI (síntese)."
  },
  {
    q: "Q18-30) Resumo prático de ISR em uma frase:",
    options: [
      "a) ISR é sempre alergia",
      "b) ISR é um diagnóstico, não um mecanismo: tratar requer identificar causa por imagem, corrigir mecânica primeiro e depois aplicar terapia antiproliferativa adequada, evitando metal desnecessário",
      "c) ISR é resolvida por nitrato",
      "d) ISR não recorre nunca",
      "e) ISR é tratada apenas com estatina"
    ],
    answer: 1,
    comment: "A lógica “mecanismo-dirigida” é o padrão moderno: sem isso, a recorrência é alta.",
    source: "SCAI expert consensus on ISR; Otsuka F et al. Eur Heart J. 2015 (neoaterosclerose)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap18",
    icon: "🔄",
    title: "Reestenose — Opções Percutâneas",
    description: "Diagnóstico e tratamento da reestenose intrastent, mecanismos, DCB, DES e aterectomia.",
    tags: ["Reestenose", "ISR", "DCB"],
    questions: questions
  });
})();
