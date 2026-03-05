// ═══════════════════════════════════════════════════════════
// CAPÍTULO 21 — DES e Drug Delivery
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q21-01) Qual é o principal mecanismo pelo qual DES reduz reestenose em comparação a BMS?",
    options: [
      "a) Aumentar migração e proliferação de CML",
      "b) Inibir proliferação/migração de CML e deposição de matriz via drogas antiproliferativas (limus/paclitaxel) com entrega local",
      "c) Aumentar trombina",
      "d) Aumentar vasoespasmo",
      "e) Induzir calcificação"
    ],
    answer: 1,
    comment: "DES atuam principalmente reduzindo hiperplasia neointimal por entrega local de antiproliferativos.",
    source: "RAVEL (NEJM 2002); SIRIUS (NEJM 2003) — conceito."
  },
  {
    q: "Q21-02) Em termos farmacológicos, sirolimus/everolimus/zotarolimus reduzem reestenose principalmente por atuação em:",
    options: [
      "a) Receptor P2Y12",
      "b) Eixo mTOR/ciclo celular (bloqueio de progressão do ciclo)",
      "c) Vitamina K",
      "d) Receptor alfa-1",
      "e) Canal de sódio"
    ],
    answer: 1,
    comment: "Limus inibem mTOR e bloqueiam proliferação de CML, reduzindo neoíntima.",
    source: "Farmacologia de DES; ensaios de DES de 1ª/2ª geração (síntese)."
  },
  {
    q: "Q21-03) Um trade-off histórico dos DES de 1ª geração foi:",
    options: [
      "a) ISR maior do que BMS",
      "b) Cicatrização mais lenta/struts expostos e risco aumentado de trombose tardia em comparação a BMS em alguns contextos",
      "c) Impossibilidade de uso em ACS",
      "d) Redução de necessidade de DAPT para 1 semana",
      "e) Ausência de qualquer inflamação local"
    ],
    answer: 1,
    comment: "DES iniciais reduziram muito ISR, porém com preocupação de cicatrização retardada e trombose tardia (mecanismos histopatológicos descritos).",
    source: "Joner M et al. J Am Coll Cardiol. 2006;48:193–202."
  },
  {
    q: "Q21-04) Qual inovação de plataforma tem melhor racional para reduzir trombose tardia mantendo baixa ISR (comparada a DES antigos)?",
    options: [
      "a) Struts mais espessos e polímero mais inflamatório",
      "b) Struts mais finos e polímeros mais biocompatíveis/bioabsorvíveis (ou eluição mais controlada)",
      "c) Aumentar comprimento do stent sistematicamente",
      "d) Reduzir dose de antiproliferativo para zero",
      "e) Coating pró-trombótico"
    ],
    answer: 1,
    comment: "Strut fino e polímeros mais biocompatíveis melhoram cicatrização e perfil trombótico, mantendo eficácia antiproliferativa.",
    source: "Literatura de DES contemporâneos (síntese)."
  },
  {
    q: "Q21-05) Em ISR de DES com boa expansão e sem necessidade de scaffolding adicional, qual opção de “drug delivery” evita metal extra e tem evidência em ISR?",
    options: [
      "a) BMS",
      "b) Drug-coated balloon (DCB)",
      "c) Apenas nitrato",
      "d) Protamina",
      "e) Trombólise"
    ],
    answer: 1,
    comment: "DCB entrega fármaco localmente sem adicionar metal, sendo útil em ISR selecionada após preparo adequado.",
    source: "ISAR-DESIRE 3; RIBS IV (síntese)."
  },
  {
    q: "Q21-06) Por que DCB exige “resultado pré-DCB” excelente (sem recoil/dissecção limitante) para funcionar bem?",
    options: [
      "a) Porque DCB é anticoagulante",
      "b) Porque não fornece suporte mecânico (scaffolding); o resultado depende do preparo e da patência obtida antes da entrega do fármaco",
      "c) Porque DCB aumenta força radial",
      "d) Porque DCB impede trombo",
      "e) Porque DCB elimina necessidade de heparina"
    ],
    answer: 1,
    comment: "Sem scaffolding, recoil/dissecção significativa compromete resultado, mesmo com fármaco local.",
    source: "Consensos DCB/ISR (síntese)."
  },
  {
    q: "Q21-07) Ensaios iniciais de DES (ex.: RAVEL/SIRIUS) demonstraram principalmente:",
    options: [
      "a) Aumento de restenose vs BMS",
      "b) Redução de late lumen loss/reestenose e TLR em comparação a BMS",
      "c) Redução de colesterol",
      "d) Eliminação de necessidade de antiagregantes",
      "e) Redução de CI-AKI"
    ],
    answer: 1,
    comment: "O benefício clássico dos DES é reduzir ISR/TLR, um desfecho muito relevante em PCI.",
    source: "RAVEL (NEJM 2002); SIRIUS (NEJM 2003)."
  },
  {
    q: "Q21-08) Um paciente HBR recebe DES contemporâneo. Qual estratégia de “drug delivery + antitrombótico” é mais alinhada ao estado da arte?",
    options: [
      "a) BMS + DAPT 12 meses em todos",
      "b) DES contemporâneo + DAPT curta (1–3 meses) seguida de monoterapia em selecionados, conforme risco isquêmico vs hemorrágico",
      "c) DES sem DAPT",
      "d) DAPT 24 meses em todos",
      "e) Apenas anticoagulante pleno"
    ],
    answer: 1,
    comment: "O avanço não foi “voltar ao BMS”, e sim combinar DES modernos com estratégias de DAPT mais curtas em HBR selecionado.",
    source: "ARC-HBR (Circulation 2019); diretrizes DAPT/PCI (síntese)."
  },
  {
    q: "Q21-09) Em pequenas artérias, por que DES/late loss tem maior impacto clínico do que em vasos grandes?",
    options: [
      "a) Porque late loss é sempre maior em vasos grandes",
      "b) Porque pequena perda absoluta no lúmen representa grande perda relativa (mais propensa a reestenose clínica) em vasos pequenos",
      "c) Porque não há neoíntima em vasos pequenos",
      "d) Porque vasos pequenos não trombosam",
      "e) Porque microvasculatura impede ISR"
    ],
    answer: 1,
    comment: "Vaso pequeno amplifica impacto de qualquer late loss; isso motiva atenção extrema a sizing/expansão e, em alguns cenários, DCB.",
    source: "Princípios de ISR em pequenos vasos (síntese)."
  },
  {
    q: "Q21-10) “Neoaterosclerose” após DES é:",
    options: [
      "a) Impossível, pois DES elimina aterosclerose",
      "b) Transformação aterosclerótica da neoíntima, podendo ocorrer mais precocemente em DES do que em BMS e causar eventos tipo SCA",
      "c) Sinônimo de trombose aguda",
      "d) Apenas espasmo",
      "e) Apenas calcificação nodular"
    ],
    answer: 1,
    comment: "Neoaterosclerose é mecanismo tardio de falha e pode se manifestar como ruptura intra-stent.",
    source: "Otsuka F et al. Eur Heart J. 2015."
  },

  // 20 adicionais
  {
    q: "Q21-11) Qual afirmação sobre polímeros em DES é mais correta do ponto de vista biológico?",
    options: [
      "a) Polímero não influencia cicatrização",
      "b) Polímero e sua biocompatibilidade influenciam inflamação local e cicatrização; polímeros mais biocompatíveis tendem a melhor perfil tardio",
      "c) Polímero define apenas cor do stent",
      "d) Polímero elimina necessidade de DAPT",
      "e) Polímero impede neoaterosclerose"
    ],
    answer: 1,
    comment: "Biocompatibilidade do polímero e cinética de eluição influenciam resposta inflamatória e cobertura endotelial.",
    source: "Literatura de DES e patologia (Joner 2006; síntese)."
  },
  {
    q: "Q21-12) Em DES, qual variável mecânica domina risco de ISR/trombose independentemente do fármaco?",
    options: [
      "a) LDL",
      "b) Subexpansão do stent",
      "c) Cor do polímero",
      "d) Tipo de contraste",
      "e) AAS"
    ],
    answer: 1,
    comment: "Mecânica (expansão/apposição) é um driver primário de falha, mesmo com droga excelente.",
    source: "IVUS-XPL; ULTIMATE (síntese)."
  },
  {
    q: "Q21-13) Em ISR de BMS “clássica” (hiperplasia homogênea), qual é a lógica de escolher DES em vez de repetir BMS?",
    options: [
      "a) DES aumenta hiperplasia",
      "b) DES entrega antiproliferativo e reduz recorrência de ISR em comparação a BMS",
      "c) BMS não pode ser usado duas vezes",
      "d) DES dispensa antiagregantes",
      "e) DES é contraindicado em ISR"
    ],
    answer: 1,
    comment: "Em ISR de BMS, DES (ou DCB) oferece terapia antiproliferativa superior ao repetir BMS.",
    source: "Ensaios de DES/ISR e consensos (síntese)."
  },
  {
    q: "Q21-14) Em DCB, a droga mais usada historicamente em coronária é:",
    options: [
      "a) Sirolimus (sempre e exclusivamente)",
      "b) Paclitaxel (clássico) em muitos estudos de DCB coronário, com surgimento de plataformas com limus em desenvolvimento/uso em alguns mercados",
      "c) Heparina",
      "d) Vitamina K",
      "e) Metoprolol"
    ],
    answer: 1,
    comment: "DCB coronário teve grande base com paclitaxel; há expansão de tecnologias com limus em diferentes contextos/mercados.",
    source: "Literatura DCB coronário (ISAR-DESIRE 3/RIBS; síntese)."
  },
  {
    q: "Q21-15) Em prevenção de restenose, qual armadilha é mais comum em lesão calcificada tratada com DES?",
    options: [
      "a) DCB inevitável",
      "b) Implante de DES sem preparo adequado do cálcio, resultando em subexpansão e falha tardia",
      "c) Uso de IVUS",
      "d) Pós-dilatação",
      "e) Controle agressivo de LDL"
    ],
    answer: 1,
    comment: "Sem preparo do cálcio, o DES não “vence” a física: subexpansão é o principal driver de ISR.",
    source: "Consensos de calcificação/ISR (síntese)."
  },
  {
    q: "Q21-16) Qual ensaio clássico com stent eluindo paclitaxel é frequentemente citado como marco de redução de ISR em comparação a BMS (histórico)?",
    options: [
      "a) TAXUS-IV",
      "b) CULPRIT-SHOCK",
      "c) TOTAL",
      "d) DOREMI",
      "e) COMPASS"
    ],
    answer: 0,
    comment: "TAXUS-IV foi um dos ensaios clássicos de DES com paclitaxel mostrando redução de restenose/TLR vs BMS na época.",
    source: "TAXUS-IV (NEJM, 2004 — histórico)."
  },
  {
    q: "Q21-17) Em DES, por que o “tempo de eluição” e a “dose” importam?",
    options: [
      "a) Só para reduzir contraste",
      "b) Porque determinam janela de inibição proliferativa vs cicatrização; eluição/dose inadequadas podem aumentar ISR (pouco) ou atrasar cicatrização (muito)",
      "c) Porque determinam ACT",
      "d) Porque determinam CKD",
      "e) Porque determinam pressão arterial"
    ],
    answer: 1,
    comment: "A otimização de cinética e dose busca reduzir hiperplasia sem comprometer endotelização.",
    source: "Princípios de farmacologia de DES (síntese)."
  },
  {
    q: "Q21-18) Em ISR de DES, escolher DES de “nova geração” vs DCB depende principalmente de:",
    options: [
      "a) Cor do stent",
      "b) Mecanismo (subexpansão, fratura, neoaterosclerose, edge disease) e necessidade de scaffolding adicional, idealmente definidos por IVUS/OCT",
      "c) HDL",
      "d) IMC",
      "e) Vitamina D"
    ],
    answer: 1,
    comment: "Estratégia moderna em ISR é mecanismo-dirigida: imagem decide se precisa de scaffolding ou apenas drug delivery.",
    source: "SCAI ISR consensus (síntese)."
  },
  {
    q: "Q21-19) Uma razão para DES ter reduzido a necessidade de revascularização repetida é o impacto em qual desfecho?",
    options: [
      "a) CI-AKI",
      "b) TLR (target lesion revascularization)",
      "c) Pneumonia",
      "d) Hipoglicemia",
      "e) Fratura de fêmur"
    ],
    answer: 1,
    comment: "Redução de TLR é o benefício mais consistente e clinicamente relevante dos DES.",
    source: "RAVEL/SIRIUS/TAXUS era; síntese."
  },
  {
    q: "Q21-20) Em bifurcação/TCE, por que DES “não basta” se a técnica for ruim?",
    options: [
      "a) Porque a droga não atua no TCE",
      "b) Porque geometria e expansão determinam fluxo, shear e áreas de estase; subexpansão/malapposição anulam benefício antiproliferativo e aumentam trombose/ISR",
      "c) Porque DES sempre trombosa no TCE",
      "d) Porque DCB é obrigatório",
      "e) Porque polímero é irrelevante"
    ],
    answer: 1,
    comment: "Mecânica final domina em anatomias críticas; drug delivery é adjuvante, não substituto de otimização.",
    source: "EBC consensus; IVUS-guided LM PCI (síntese)."
  },
  {
    q: "Q21-21) Em prevenção de restenose, qual intervenção sistêmica tem evidência mais consistente de reduzir eventos e progressão aterosclerótica (inclusive neoaterosclerose)?",
    options: [
      "a) Suspender estatina após 30 dias",
      "b) Controle agressivo de LDL (estatina alta potência ± ezetimiba/PCSK9 conforme meta) com adesão de longo prazo",
      "c) Aumentar LDL",
      "d) Apenas nitrato",
      "e) Apenas diurético"
    ],
    answer: 1,
    comment: "Prevenção secundária agressiva é parte do pacote: reduz eventos e progressão aterosclerótica.",
    source: "IMPROVE-IT (NEJM 2015); FOURIER (NEJM 2017); ODYSSEY OUTCOMES (NEJM 2018)."
  },
  {
    q: "Q21-22) Em DES, qual é a diferença conceitual entre “late lumen loss” e “reestenose clínica”?",
    options: [
      "a) São a mesma coisa sempre",
      "b) Late loss é medida angiográfica contínua; reestenose clínica envolve sintomas/ischemia e necessidade de TLR, dependente também de calibre do vaso",
      "c) Late loss mede LDL",
      "d) Reestenose clínica depende só de PPI",
      "e) Nenhuma depende de mecânica"
    ],
    answer: 1,
    comment: "A mesma late loss tem impacto clínico maior em vasos pequenos; por isso endpoints variam por anatomia.",
    source: "Princípios de endpoints em estudos de stents (síntese)."
  },
  {
    q: "Q21-23) Em “local drug delivery” sem stent (DCB), qual é a armadilha clássica em lesão com recoil significativo após preparo?",
    options: [
      "a) DCB corrige recoil",
      "b) DCB não fornece scaffolding: recoil compromete resultado e pode exigir DES",
      "c) DCB aumenta força radial",
      "d) DCB impede dissecção",
      "e) DCB elimina necessidade de heparina"
    ],
    answer: 1,
    comment: "DCB não corrige recoil. Se recoil/dissecção limitante persistem, o operador precisa scaffolding (frequentemente DES).",
    source: "Consensos DCB (síntese)."
  },
  {
    q: "Q21-24) Em DES, “polymer-free” ou “bioabsorbable polymer” visam principalmente:",
    options: [
      "a) Aumentar hiperplasia",
      "b) Reduzir inflamação/hipersensibilidade tardia potencial e melhorar cicatrização, mantendo eluição eficaz",
      "c) Eliminar necessidade de antiagregantes",
      "d) Aumentar contraste necessário",
      "e) Induzir no-reflow"
    ],
    answer: 1,
    comment: "A meta é reduzir estímulo inflamatório crônico mantendo entrega eficiente do fármaco.",
    source: "Literatura de polímeros em DES (síntese)."
  },
  {
    q: "Q21-25) Em pacientes com diabetes, por que a prevenção de restenose continua mais desafiadora mesmo com DES?",
    options: [
      "a) Porque DM reduz hiperplasia",
      "b) Porque DM associa-se a inflamação/disfunção endotelial e maior tendência a hiperplasia e doença difusa, elevando ISR e eventos",
      "c) Porque DM impede eluição",
      "d) Porque DM elimina necessidade de DAPT",
      "e) Porque DM impede uso de IVUS"
    ],
    answer: 1,
    comment: "DM é fator de risco para ISR e para doença difusa; estratégia deve ser técnica + prevenção secundária agressiva.",
    source: "Literatura de DAC em DM; diretrizes (síntese)."
  },
  {
    q: "Q21-26) Em lesão longa/difusa, qual fator aumenta risco de ISR apesar do DES e deve ser minimizado?",
    options: [
      "a) Overlap longo e subexpansões focais",
      "b) Controle agressivo de LDL",
      "c) Uso de IVUS",
      "d) POT final",
      "e) Roadmap"
    ],
    answer: 0,
    comment: "Metal redundante e subexpansão (especialmente no overlap) são pontos clássicos de falha; imagem reduz isso.",
    source: "Princípios de lesões longas/ISR (síntese)."
  },
  {
    q: "Q21-27) Em restenose, por que “drug delivery” local (DES/DCB) não substitui o diagnóstico do mecanismo por imagem?",
    options: [
      "a) Porque imagem aumenta LDL",
      "b) Porque se o mecanismo for subexpansão/cálcio/fratura/edge disease, apenas droga não corrige a causa e a recorrência é provável",
      "c) Porque imagem é proibida",
      "d) Porque DCB sempre falha",
      "e) Porque DES sempre trombosa"
    ],
    answer: 1,
    comment: "A lógica moderna é mecanismo-dirigida: primeiro corrigir mecânica, depois aplicar antiproliferativo.",
    source: "SCAI ISR consensus (síntese)."
  },
  {
    q: "Q21-28) Em DES, por que “strut thickness” importa para restenose e trombose?",
    options: [
      "a) Não importa",
      "b) Struts mais finos tendem a menor trauma/perturbação de fluxo e melhor cicatrização, reduzindo ISR e trombose em comparação a struts muito espessos",
      "c) Struts mais finos sempre fraturam",
      "d) Struts mais finos aumentam necessidade de contraste",
      "e) Struts mais finos aumentam espasmo"
    ],
    answer: 1,
    comment: "Física do fluxo e trauma vascular favorecem struts finos; design e material também influenciam deliverability e força radial.",
    source: "Literatura de plataforma de stent (síntese)."
  },
  {
    q: "Q21-29) Em DCB, qual variável do procedimento é determinante para eficácia (além de preparo)?",
    options: [
      "a) Cor do balão",
      "b) Tempo de insuflação e apposition/contato com a parede no segmento-alvo",
      "c) Saturação periférica",
      "d) QTc",
      "e) LDL"
    ],
    answer: 1,
    comment: "Entrega do fármaco depende de contato/tempo e preparação; técnica influencia muito o resultado.",
    source: "Consensos DCB (síntese)."
  },
  {
    q: "Q21-30) Resumo prático de prevenção de restenose em 1 frase:",
    options: [
      "a) DES resolve tudo, técnica não importa",
      "b) Restenose é reduzida por DES/DCB, mas o determinante mais modificável é resultado mecânico ótimo (expansão/landing zones) + prevenção secundária agressiva",
      "c) Basta nitrato",
      "d) Basta aumentar AAS",
      "e) Basta reduzir contraste"
    ],
    answer: 1,
    comment: "Drug delivery reduz hiperplasia, mas não corrige falhas mecânicas nem substitui prevenção secundária; o pacote completo reduz ISR e eventos.",
    source: "Ensaios de DES/DCB + consensos IVUS/ISR (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap21",
    icon: "💊",
    title: "DES e Drug Delivery",
    description: "Stents farmacológicos, eluição de droga, polímeros, DCB e prevenção de reestenose.",
    tags: ["DES", "Drug Delivery", "Polímero"],
    questions: questions
  });
})();
