// ═══════════════════════════════════════════════════════════
// CAPÍTULO 09 — Seleção de Cateter-Guia
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q9-01) Durante canulação do TCE com EBU, ocorre damping/ventricularização ao mínimo contato. Qual é a conduta imediata MAIS segura?",
    options: [
      "a) Injetar contraste rapidamente para “confirmar” posição",
      "b) Desengajar/recuar o guia, corrigir coaxialidade e considerar guia menos agressivo (ou com side-holes em cenários selecionados), evitando injeção sob damping",
      "c) Prosseguir com wiring sem corrigir",
      "d) Aumentar sedação e continuar"
    ],
    answer: 1,
    comment: "Injetar sob damping no TCE pode causar isquemia global e VF. Corrigir engajamento e suporte é prioritário.",
    source: "Grossman & Baim (cateter-guia e complicações); prática de PCI guiada por pressão."
  },
  {
    q: "Q9-02) “Back-up support” de um guia aumenta tipicamente com:",
    options: [
      "a) Menor curva e menor contato com parede aórtica",
      "b) Curvas mais agressivas (ex.: Amplatz/XB/EBU), maior ponto de apoio na aorta e coaxialidade adequada",
      "c) Sempre com guias 5F comparados a 7F",
      "d) Desengajamento frequente"
    ],
    answer: 1,
    comment: "Suporte depende de geometria, calibre, coaxialidade e pontos de apoio na aorta.",
    source: "Grossman & Baim; manuais de técnica PCI (textos padrão)."
  },
  {
    q: "Q9-03) Para lesão ostial do TCE, qual princípio de seleção/uso do guia é MAIS importante?",
    options: [
      "a) Deep seating para maximizar suporte",
      "b) Evitar deep seating; manter coaxialidade e estabilidade sem trauma ostial, com injeções cuidadosas",
      "c) Usar sempre Amplatz esquerdo agressivo e engajar profundamente",
      "d) Usar apenas 5F para reduzir risco"
    ],
    answer: 1,
    comment: "Lesões ostiais exigem controle fino e evitar dissecção ostial; suporte pode ser obtido por técnicas alternativas (wire/anchor/extension).",
    source: "Grossman & Baim (técnica e complicações)."
  },
  {
    q: "Q9-04) Em RCA com take-off alto e ângulo (“shepherd’s crook”), qual estratégia é mais frequentemente útil?",
    options: [
      "a) JR padrão sempre resolve",
      "b) Considerar Amplatz Right/Multipurpose/Ikari ou ajustes de curva e técnica (rotação/posicionamento) para coaxialidade e suporte",
      "c) Evitar qualquer guia e usar apenas diagnóstico",
      "d) Engajar profundamente com injeção sob damping"
    ],
    answer: 1,
    comment: "Anatomia desfavorável pode exigir guias alternativos e técnica para coaxialidade e suporte sem trauma.",
    source: "Grossman & Baim; compêndios de cateteres-guia (textos padrão)."
  },
  {
    q: "Q9-05) Em acesso radial direito, qual guia é classicamente muito usado para coronária esquerda diagnóstica por “universalidade” (dependendo de anatomia)?",
    options: [
      "a) IMA",
      "b) Tiger/Jacky (cateter único) em diagnósticos selecionados",
      "c) AL2 para todos os casos",
      "d) MP para TCE sempre"
    ],
    answer: 1,
    comment: "Cateteres universais podem reduzir trocas em diagnóstico radial, mas PCI frequentemente requer guias específicos.",
    source: "Textos de acesso radial e cateterismo (síntese)."
  },
  {
    q: "Q9-06) Para PCI complexa (CTO/bifurcação TCE) com necessidade de múltiplos dispositivos, a escolha de 7F/8F se justifica principalmente por:",
    options: [
      "a) Melhor “imagem” do cine",
      "b) Maior lúmen interno para compatibilidade simultânea (microcateter, IVUS/OCT, dual-lumen, balões) e maior suporte",
      "c) Menor risco de sangramento sempre",
      "d) Menor risco de espasmo radial"
    ],
    answer: 1,
    comment: "Maior French = maior ID (dependendo do fabricante) e suporte; trade-off é acesso/complicações.",
    source: "Grossman & Baim; manuais de CTO/PCI complexa (textos padrão)."
  },
  {
    q: "Q9-07) Técnica “anchor balloon” aumenta suporte do guia por:",
    options: [
      "a) Diminuir fricção e reduzir suporte",
      "b) Criar ponto de ancoragem distal/proximal que estabiliza o sistema e permite avanço de equipamentos",
      "c) Aumentar contraste intramiocárdico",
      "d) Reduzir necessidade de heparina"
    ],
    answer: 1,
    comment: "Ancoragem com balão (em ramo adequado) fornece suporte extra para cruzar lesões rígidas/tortuosas.",
    source: "Textos de técnica PCI (Grossman & Baim; CTO manuals)."
  },
  {
    q: "Q9-08) “Guide extension catheter” (ex.: GuideLiner/Guidezilla) é mais útil quando o problema dominante é:",
    options: [
      "a) Anticoagulação insuficiente",
      "b) Falta de suporte coaxial e necessidade de “delivery” em tortuosidade/calcificação, evitando deep seating do guia principal",
      "c) Necessidade de reduzir radiação",
      "d) Diagnóstico de vasoespasmo"
    ],
    answer: 1,
    comment: "Extensão aumenta suporte e coaxialidade “distal” sem necessidade de engajar agressivamente o óstio com o guia base.",
    source: "Textos de técnica PCI; experiência consolidada em guias de extensão."
  },
  {
    q: "Q9-09) Maior risco clássico ao usar guide extension é:",
    options: [
      "a) Aumentar LDL",
      "b) Dissecção/trauma do vaso e/ou deformação/“shearing” de stent, especialmente ao recapturar/avançar em segmentos calcificados",
      "c) Bradicardia por efeito vagal",
      "d) Hiperglicemia"
    ],
    answer: 1,
    comment: "Extensores podem traumatizar íntima e deformar stents se manuseados inadequadamente, sobretudo em calcificação severa.",
    source: "Textos de técnica PCI (síntese)."
  },
  {
    q: "Q9-10) Em LIMA para DA (bypass), qual guia é mais apropriado em geral para engajamento seletivo (dependendo do acesso e anatomia)?",
    options: [
      "a) IMA (internal mammary) guide/catheter",
      "b) JR4 padrão",
      "c) EBU 4.0",
      "d) AL1"
    ],
    answer: 0,
    comment: "Cateter/guia tipo IMA é desenhado para engajar mamária interna.",
    source: "Grossman & Baim (enxertos e cateteres)."
  },

  // 20 adicionais avançadas
  {
    q: "Q9-11) Um guia muito agressivo pode aumentar risco de dissecção ostial principalmente por:",
    options: [
      "a) Coaxialidade perfeita sempre protege",
      "b) Trauma mecânico repetido/pressão na parede ostial, especialmente com engajamento profundo e injeções sob damping",
      "c) Uso de heparina",
      "d) Uso de IBP"
    ],
    answer: 1,
    comment: "Dissecção ostial é complicação mecânica; escolha de curva e técnica (injeção/pressão) são determinantes.",
    source: "Grossman & Baim; complicações do cateterismo."
  },
  {
    q: "Q9-12) Para coronária esquerda em aorta dilatada, o efeito mais comum na escolha do guia é:",
    options: [
      "a) Guias menores sempre engajam melhor",
      "b) Pode ser necessário guia com curva maior (ex.: JL “maior”, EBU/XB adequado) para alcançar e manter coaxialidade",
      "c) Não muda nada",
      "d) Sempre usar Amplatz esquerdo profundo"
    ],
    answer: 1,
    comment: "Aorta dilatada altera distância/ângulos; pode exigir ajustes de curva/tamanho para estabilidade.",
    source: "Textos de cateteres-guia (Grossman & Baim)."
  },
  {
    q: "Q9-13) Em radial, espasmo severo limita 7F. Qual estratégia preserva capacidade de dispositivos sem aumentar French do introdutor?",
    options: [
      "a) Abandonar PCI sempre",
      "b) Usar sistema sheathless/guia sheathless (quando disponível) ou guia 6F com técnicas de suporte (extension/anchor) e seleção de dispositivos compatíveis",
      "c) Aumentar contraste",
      "d) Suspender heparina"
    ],
    answer: 1,
    comment: "Sheathless e otimização de suporte com 6F podem viabilizar PCI complexa com menor trauma radial.",
    source: "Literatura de acesso radial (textos padrão)."
  },
  {
    q: "Q9-14) Para bifurcação distal de TCE (Medina 1,1,1) com estratégia de 2 stents e necessidade de kissing/rewiring repetidos, qual é a escolha mais prática em muitos laboratórios?",
    options: [
      "a) 5F",
      "b) 6F pode ser suficiente em alguns, mas 7F frequentemente facilita compatibilidade e manobras (depende de técnica e devices)",
      "c) Apenas diagnóstico",
      "d) Cateter pigtail"
    ],
    answer: 1,
    comment: "Complexidade e necessidade de simultaneidade favorecem maior ID; decisão depende de acesso e materiais.",
    source: "Textos de bifurcação (DK-crush/culotte) e compatibilidade de sistemas."
  },
  {
    q: "Q9-15) “Coaxialidade” é crítica porque:",
    options: [
      "a) Apenas melhora estética da angiografia",
      "b) Reduz trauma ostial, evita damping e aumenta eficiência de transmissão de força (suporte) para entrega de dispositivos",
      "c) Elimina necessidade de anticoagulação",
      "d) Reduz CKD"
    ],
    answer: 1,
    comment: "Coaxialidade melhora segurança (menos trauma) e eficácia (mais suporte).",
    source: "Grossman & Baim."
  },
  {
    q: "Q9-16) Em lesão muito proximal de DA com óstio estreito, uma manobra para melhorar suporte SEM deep seating do guia é:",
    options: [
      "a) Injeção sob damping",
      "b) Buddy wire e/ou anchor em ramo diagonal + extensão de guia se necessário",
      "c) Reduzir heparina",
      "d) Administrar adenosina"
    ],
    answer: 1,
    comment: "Buddy/anchor/extension aumentam suporte com menor agressividade ostial.",
    source: "Textos de técnica PCI (síntese)."
  },
  {
    q: "Q9-17) Em CTO com necessidade de dupla injeção (contralateral), a seleção de guias geralmente prioriza:",
    options: [
      "a) Menor suporte possível",
      "b) Boa coaxialidade e suporte estável em ambos os sistemas, frequentemente com 7F (ou 6F bem planejado) e cateteres adequados a cada óstio",
      "c) Apenas cateter diagnóstico",
      "d) Evitar qualquer injeção"
    ],
    answer: 1,
    comment: "CTO requer estabilidade e compatibilidade para microcateteres, fios e dual injection.",
    source: "Textos de CTO (principais manuais)."
  },
  {
    q: "Q9-18) “Side-holes” no guia: quando podem ser considerados (com ressalvas)?",
    options: [
      "a) Como padrão em qualquer TCE",
      "b) Em situações de damping recorrente em óstio crítico onde fluxo precisa ser mantido, porém podendo mascarar damping e aumentar risco de injeção não segura se mal interpretado",
      "c) Para reduzir necessidade de P2Y12",
      "d) Para medir FFR"
    ],
    answer: 1,
    comment: "Side-holes podem reduzir damping, mas podem mascarar engajamento perigoso; exigem cautela.",
    source: "Grossman & Baim; prática consolidada de hemodinâmica."
  },
  {
    q: "Q9-19) Guia “Amplatz Left” (AL) oferece grande suporte principalmente por:",
    options: [
      "a) Ser coaxial em qualquer anatomia",
      "b) Criar amplo ponto de apoio na parede oposta da aorta e maior força de back-up",
      "c) Ser o menor diâmetro possível",
      "d) Ser cateter venoso"
    ],
    answer: 1,
    comment: "AL pode ser muito útil em RCA ou coronária esquerda em anatomias específicas, mas aumenta risco de trauma se mal coaxial.",
    source: "Grossman & Baim."
  },
  {
    q: "Q9-20) Em anomalia de coronária (ex.: origem anômala da RCA do seio esquerdo), o princípio mais importante é:",
    options: [
      "a) Usar sempre JR4",
      "b) Identificar o padrão de origem e escolher guia que permita engajamento seletivo sem trauma, frequentemente com cateteres não usuais (MP/AL/JL modificados) e fluoroscopia cuidadosa",
      "c) Fazer deep seating obrigatório",
      "d) Evitar qualquer tentativa"
    ],
    answer: 1,
    comment: "Coronárias anômalas exigem estratégia baseada em anatomia e segurança (evitar dissecção ostial).",
    source: "Textos de anatomia angiográfica e técnica PCI (Grossman & Baim)."
  },
  {
    q: "Q9-21) Para SVG (safena) para CD, a seleção de guia geralmente prioriza:",
    options: [
      "a) Engajar profundamente o enxerto sempre",
      "b) Engajamento suave e coaxial, evitando trauma; frequentemente JR/MP/Amplatz conforme origem aórtica do enxerto",
      "c) EBU para qualquer enxerto",
      "d) IMA para safena"
    ],
    answer: 1,
    comment: "Enxertos são frágeis; trauma ostial e dissecção são preocupações. Escolha depende do takeoff do enxerto.",
    source: "Grossman & Baim (enxertos)."
  },
  {
    q: "Q9-22) Se o problema é “device delivery” em segmento muito tortuoso, qual sequência de escalonamento é mais coerente antes de trocar para acesso maior?",
    options: [
      "a) Apenas aumentar força e empurrar stent",
      "b) Melhorar suporte: buddy wire → anchor → guide extension → considerar troca de guia/curva; só depois considerar upgrade de French/acesso",
      "c) Suspender heparina",
      "d) Trocar contraste"
    ],
    answer: 1,
    comment: "Escalonamento técnico reduz complicações e evita escalada de acesso desnecessária.",
    source: "Textos de técnica PCI (síntese)."
  },
  {
    q: "Q9-23) Em TCE curto com ângulo desfavorável para EBU, um guia que frequentemente melhora coaxialidade é:",
    options: [
      "a) Pigtail",
      "b) JL apropriado ao tamanho da aorta (ou XB), dependendo do takeoff e acesso",
      "c) IMA",
      "d) Swan-Ganz"
    ],
    answer: 1,
    comment: "Seleção depende de anatomia; JL pode ser mais “suave” e coaxial em alguns TCE curtos/takeoffs específicos.",
    source: "Grossman & Baim."
  },
  {
    q: "Q9-24) Qual achado hemodinâmico/angiográfico deve levar você a suspeitar de engajamento seletivo perigoso (damping) antes de injetar?",
    options: [
      "a) Onda de pressão normal e estável",
      "b) Queda de pressão sistólica/diastólica no transdutor do guia (“ventricularização”) ou amortecimento acentuado",
      "c) SpO2 normal",
      "d) ACT adequado"
    ],
    answer: 1,
    comment: "Damping/ventricularização indica obstrução parcial do óstio pelo guia; injetar pode precipitar isquemia e VF.",
    source: "Grossman & Baim."
  },
  {
    q: "Q9-25) Por que guias 7F podem aumentar risco de complicação de acesso radial?",
    options: [
      "a) Porque reduzem tempo de procedimento",
      "b) Porque maior diâmetro aumenta trauma/espasmo e risco de oclusão radial, especialmente em artérias pequenas",
      "c) Porque reduzem necessidade de heparina",
      "d) Porque melhoram patência radial"
    ],
    answer: 1,
    comment: "Maior diâmetro aumenta risco de espasmo/oclusão; seleção deve considerar calibre radial e hemostasia.",
    source: "Literatura de acesso radial (textos padrão)."
  },
  {
    q: "Q9-26) Para rotablator/atherectomy (quando indicada), a escolha de guia deve considerar:",
    options: [
      "a) Apenas o formato da curva",
      "b) Compatibilidade de lúmen interno (ID) com burr/tamanho e necessidade de flush, além de suporte",
      "c) Apenas cor do cateter",
      "d) Apenas pressão arterial"
    ],
    answer: 1,
    comment: "Aterectomia exige compatibilidade de ID e suporte estável; planejamento evita “não passa” e complicações.",
    source: "Textos de aterectomia e compatibilidade de sistemas (síntese)."
  },
  {
    q: "Q9-27) Um guia “coaxial porém instável” que tende a sair do óstio ao avançar balão: primeira medida mais simples é:",
    options: [
      "a) Trocar imediatamente para 8F femoral",
      "b) Ajustar rotação/profundidade mínima, usar wire mais suporte (ex.: stiff) e considerar buddy wire/anchor",
      "c) Aumentar cine",
      "d) Suspender sedação"
    ],
    answer: 1,
    comment: "Antes de grandes mudanças, ajustar técnica e suporte com fios/ancoragem costuma resolver.",
    source: "Textos de técnica PCI."
  },
  {
    q: "Q9-28) Em RCA dominante com lesão ostial severa, um erro técnico comum é:",
    options: [
      "a) Manter guia estável e coaxial",
      "b) Engajar profundamente e injetar sob damping, precipitando dissecção ostial e isquemia",
      "c) Usar wire de trabalho",
      "d) Anticoagular"
    ],
    answer: 1,
    comment: "Lesões ostiais exigem cuidado extremo com engajamento e injeção.",
    source: "Grossman & Baim."
  },
  {
    q: "Q9-29) Em acesso femoral, uma razão prática para escolher guia mais agressivo do que no radial é:",
    options: [
      "a) Femoral reduz necessidade de coaxialidade",
      "b) Femoral frequentemente oferece caminho mais reto e permite uso de French maior com mais suporte para dispositivos complexos",
      "c) Femoral aumenta espasmo coronário",
      "d) Femoral impede uso de guide extension"
    ],
    answer: 1,
    comment: "Acesso e French impactam suporte; femoral facilita 7–8F em casos complexos.",
    source: "Textos de acesso e técnica PCI."
  },
  {
    q: "Q9-30) Em lesão muito calcificada e ostial de CX, com guia não agressivo (JL) insuficiente, a escalada mais segura tende a ser:",
    options: [
      "a) Deep seat e injetar forte",
      "b) Trocar para guia de maior suporte (EBU/XB adequado), mantendo coaxialidade, e usar técnicas auxiliares (anchor/extension) antes de aumentar agressividade ostial",
      "c) Suspender anticoagulação",
      "d) Trocar contraste"
    ],
    answer: 1,
    comment: "Escalar suporte preservando segurança ostial e coaxialidade é preferível a manobras agressivas sob risco de dissecção.",
    source: "Grossman & Baim; técnica PCI (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap09",
    icon: "🔧",
    title: "Seleção de Cateter-Guia",
    description: "Princípios de seleção de cateter-guia, suporte, geometria e estratégias de ancoragem.",
    tags: ["Cateter-Guia", "Técnica", "Seleção de Material"],
    questions: questions
  });
})();
