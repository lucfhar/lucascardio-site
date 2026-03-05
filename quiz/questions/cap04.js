// ═══════════════════════════════════════════════════════════
// CAPÍTULO 04 — Inflamação e Lesão Arterial
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q4-01) Após implante de DES em DAC estável, OCT aos 3 meses mostra struts bem aposicionados, porém com cobertura incompleta e neoíntima muito fina. Qual interpretação é mais correta do ponto de vista de biologia de cicatrização?",
    options: [
      "a) É achado típico de BMS e implica hiperplasia exuberante",
      "b) Sugere atraso de endotelização/cobertura, potencialmente associado a risco trombótico (dependente de contexto e geração do stent)",
      "c) Exclui risco de trombose tardia porque a malaposição está ausente",
      "d) É compatível com neoaterosclerose estabelecida",
      "e) Indica ruptura de placa nativa como causa primária"
    ],
    answer: 1,
    comment: "Cobertura incompleta sugere cicatrização retardada (mecanismo relevante para trombose tardia, sobretudo em DES antigos).",
    source: "Joner M et al. J Am Coll Cardiol. 2006;48:193–202."
  },
  {
    q: "Q4-02) “Late-acquired stent malapposition” (LASM) após DES é mais frequentemente atribuída a qual mecanismo?",
    options: [
      "a) Contração aguda do vaso por espasmo persistente",
      "b) Recoil elástico do stent metálico ao longo de semanas",
      "c) Remodelamento positivo tardio e/ou reabsorção de trombo por trás dos struts",
      "d) Calcificação progressiva que empurra o stent para o lúmen",
      "e) Neoíntima hipertrófica que desloca o stent"
    ],
    answer: 2,
    comment: "LASM relaciona-se a remodelamento positivo e/ou resolução de trombo subjacente.",
    source: "Joner M et al. J Am Coll Cardiol. 2006;48:193–202."
  },
  {
    q: "Q4-03) Na cascata de resposta à lesão endotelial por balão/stent, qual evento ocorre mais precocemente e é central para trombose aguda?",
    options: [
      "a) Migração de CML da média para íntima",
      "b) Deposição de colágeno tipo III na neoíntima",
      "c) Adesão/ativação plaquetária sobre matriz subendotelial exposta (incluindo vWF) e geração de trombina",
      "d) Neoaterosclerose intra-stent",
      "e) Neovascularização intraplaca"
    ],
    answer: 2,
    comment: "Exposição de matriz subendotelial → adesão plaquetária (vWF), trombina e trombo inicial.",
    source: "Conteúdo clássico de biologia vascular; Virmani/ESC/ACC (síntese)."
  },
  {
    q: "Q4-04) Qual achado histopatológico é mais compatível com “hipersensibilidade” a polímero/medicação em DES de 1ª geração, associada a eventos tardios?",
    options: [
      "a) Infiltrado eosinofílico peristrut + inflamação persistente e cicatrização retardada",
      "b) Apenas CML abundantes e colágeno denso",
      "c) Ausência completa de células inflamatórias",
      "d) Trombo branco agudo sem inflamação crônica",
      "e) Calcificação nodular como mecanismo exclusivo"
    ],
    answer: 0,
    comment: "Reação de hipersensibilidade foi descrita com eosinófilos e inflamação crônica peristrut em DES iniciais.",
    source: "Joner M et al. J Am Coll Cardiol. 2006;48:193–202."
  },
  {
    q: "Q4-05) A principal diferença biológica entre reestenose por hiperplasia neointimal “clássica” e neoaterosclerose intra-stent é:",
    options: [
      "a) Neoaterosclerose ocorre apenas em BMS e nunca em DES",
      "b) Hiperplasia clássica é um processo predominantemente proliferativo/matriz; neoaterosclerose envolve formação de pool lipídico/necrose e pode “romper” como placa nativa",
      "c) Neoaterosclerose é sempre aguda (<30 dias)",
      "d) Hiperplasia clássica exige trombo oclusivo",
      "e) Ambas são indistinguíveis por OCT"
    ],
    answer: 1,
    comment: "Neoaterosclerose é transformação aterosclerótica da neoíntima, com fenótipo de placa.",
    source: "Otsuka F et al. Eur Heart J. 2015;36:2147–2159."
  },
  {
    q: "Q4-06) Em paciente com ISR recorrente após múltiplos stents (“stent-in-stent”), qual mecanismo se torna progressivamente mais relevante na perda luminal tardia?",
    options: [
      "a) Exclusivamente recoil do vaso nativo",
      "b) Somente espasmo persistente",
      "c) Subexpansão persistente + acúmulo de camadas metálicas + limitações de remodelamento e cicatrização",
      "d) Ruptura de placa nativa distante como única causa",
      "e) Efeito protetor de polímero bioabsorvível"
    ],
    answer: 2,
    comment: "Subexpansão e múltiplas camadas aumentam risco de ISR e eventos, exigindo estratégia de otimização (imagem/placa).",
    source: "SCAI expert consensus on ISR (síntese); princípios IVUS/OCT."
  },
  {
    q: "Q4-07) Qual fator está mais consistentemente associado a ISR/trombose por mecanismo “mecânico” e, portanto, altamente prevenível com IVUS/OCT?",
    options: [
      "a) LDL basal",
      "b) Sexo biológico",
      "c) Subexpansão do stent",
      "d) PCR elevada",
      "e) História familiar"
    ],
    answer: 2,
    comment: "Subexpansão é um dos preditores mais fortes e modificáveis por otimização guiada por imagem.",
    source: "IVUS-XPL; ULTIMATE; literatura de imagem intracoronária (síntese)."
  },
  {
    q: "Q4-08) Em lesão calcificada severa, o “barotrauma” por pós-dilatação agressiva sem preparação adequada tende a aumentar qual risco biológico/mecânico?",
    options: [
      "a) Menor inflamação e menor dissecção",
      "b) Dissecção profunda/ruptura de placa e necessidade de mais metal, além de maior inflamação local",
      "c) Redução de risco de no-reflow",
      "d) Menor trombogenicidade",
      "e) Inibição de MMP"
    ],
    answer: 1,
    comment: "Alta pressão em placa rígida sem fratura controlada aumenta dissecção/trauma e pode piorar desfechos.",
    source: "Princípios de lesão calcificada; consensos SCAI/ESC (síntese)."
  },
  {
    q: "Q4-09) Qual componente da resposta à lesão vascular contribui mais para “late lumen loss” em BMS?",
    options: [
      "a) Neoíntima proliferativa e deposição de matriz extracelular",
      "b) Recoil do stent metálico semanas após implante",
      "c) Apenas trombo vermelho persistente",
      "d) Exclusivamente vasoespasmo",
      "e) Efeito do P2Y12 na parede"
    ],
    answer: 0,
    comment: "BMS: neointimal hyperplasia/matriz é o mecanismo predominante de late loss.",
    source: "Biologia pós-angioplastia/stent (síntese)."
  },
  {
    q: "Q4-10) Em DES, a inibição do eixo mTOR (sirolimus/everolimus/analog.) reduz reestenose principalmente por:",
    options: [
      "a) Aumentar migração e proliferação de CML",
      "b) Inibir ciclo celular e proliferação de CML, reduzindo hiperplasia neointimal",
      "c) Aumentar fator tecidual e trombose",
      "d) Aumentar permeabilidade endotelial crônica",
      "e) Promover calcificação rápida"
    ],
    answer: 1,
    comment: "mTOR inhibitors reduzem proliferação de CML/neoíntima.",
    source: "Farmacologia de DES (síntese)."
  },
  {
    q: "Q4-11) Um paciente com CKD avançada apresenta maior risco de ISR e eventos. Qual mecanismo biológico é mais plausível?",
    options: [
      "a) Menor inflamação sistêmica",
      "b) Disfunção endotelial, estado pró-inflamatório/pró-trombótico e calcificação acelerada",
      "c) Melhor resposta ao NO endotelial",
      "d) Menor estresse oxidativo",
      "e) Menor ativação plaquetária"
    ],
    answer: 1,
    comment: "CKD associa-se a inflamação, disfunção endotelial e calcificação, piorando cicatrização e desfechos.",
    source: "KDIGO/ESC (síntese)."
  },
  {
    q: "Q4-12) “Edge restenosis” (reestenose na borda do stent) está mais associada a:",
    options: [
      "a) Hipersensibilidade apenas ao polímero",
      "b) Geografia de tratamento inadequada (lesão não coberta/“geographic miss”) e gradientes de injúria",
      "c) Exclusivamente trombose aguda",
      "d) Interação com omeprazol",
      "e) Apenas diabetes, independentemente de técnica"
    ],
    answer: 1,
    comment: "Cobertura incompleta da lesão e trauma nas bordas aumentam edge restenosis.",
    source: "Literatura de PCI técnica (síntese)."
  },
  {
    q: "Q4-13) Em OCT, qual padrão favorece “plaque rupture” intra-stent por neoaterosclerose, em oposição a hiperplasia homogênea?",
    options: [
      "a) Neoíntima homogênea, rica em sinal alto e regular",
      "b) Sinal de pool lipídico/necrose, possível descontinuidade superficial e trombo adjacente",
      "c) Struts completamente nus sem qualquer tecido",
      "d) Apenas calcificação profunda sem interface",
      "e) Apenas malaposição sem tecido"
    ],
    answer: 1,
    comment: "Neoaterosclerose mostra características ateroscleróticas (lipídio/necrose) e pode romper.",
    source: "Otsuka F et al. Eur Heart J. 2015;36:2147–2159."
  },
  {
    q: "Q4-14) Em pacientes com alta PCR persistente pós-SCA (inflamação residual), qual intervenção tem evidência de redução de eventos em RCT, com efeito mínimo em LDL?",
    options: [
      "a) Metotrexato",
      "b) Canakinumab (IL-1β) em população selecionada",
      "c) Vitamina E",
      "d) Niacina",
      "e) DHEA"
    ],
    answer: 1,
    comment: "CANTOS: canakinumab reduziu eventos em inflamação residual, com trade-off de infecção.",
    source: "Ridker PM et al. N Engl J Med. 2017;377:1119–1131."
  },
  {
    q: "Q4-15) Em inflamação residual, colchicina tem evidência de reduzir eventos em prevenção secundária. Um cuidado essencial é:",
    options: [
      "a) Interação com estatinas é impossível",
      "b) Interação com inibidores potentes de CYP3A4/P-gp (risco de toxicidade), além de cautela em insuficiência renal",
      "c) Colchicina aumenta inibição plaquetária e dispensa P2Y12",
      "d) Não há risco gastrointestinal",
      "e) É obrigatória em todos os pacientes pós-PCI"
    ],
    answer: 1,
    comment: "Colchicina: atenção a interações (CYP3A4/P-gp) e função renal.",
    source: "COLCOT; LoDoCo2; bula/label (síntese)."
  },
  {
    q: "Q4-16) Qual característica de stent/tecnologia tende a favorecer cicatrização mais “rápida” e menor risco trombótico tardio, comparada a DES de 1ª geração?",
    options: [
      "a) Polímero durável mais espesso e droga mais lipofílica em alta dose",
      "b) Struts mais finos e polímeros mais biocompatíveis/estratégias de eluição mais controladas",
      "c) Ausência de antiproliferativo",
      "d) Exclusivamente aumento de comprimento do stent",
      "e) Coating pró-trombótico"
    ],
    answer: 1,
    comment: "Strut fino e polímero biocompatível associam-se a melhor cicatrização e menor trombose tardia.",
    source: "Ensaios de DES contemporâneos (síntese)."
  },
  {
    q: "Q4-17) Em DCB (drug-coated balloon), o racional biológico para reduzir ISR sem metal adicional é:",
    options: [
      "a) Aumentar recoil crônico",
      "b) Entregar droga antiproliferativa à parede e evitar nova camada metálica/polímero",
      "c) Induzir trombo mural para “tamponar” a lesão",
      "d) Promover hiperplasia homogênea",
      "e) Aumentar calcificação"
    ],
    answer: 1,
    comment: "DCB entrega antiproliferativo sem implantar novo metal, útil em ISR selecionada.",
    source: "Diretrizes/consensos ISR; literatura DCB (síntese)."
  },
  {
    q: "Q4-18) Um paciente tem trombose muito tardia de DES com história de interrupção de P2Y12 e OCT mostra struts expostos. Qual mecanismo integra melhor biologia + farmacologia?",
    options: [
      "a) Hiperplasia excessiva protege contra trombose",
      "b) Cicatrização tardia/neoaterosclerose + struts expostos aumentam trombogenicidade; interrupção de P2Y12 remove proteção antitrombótica",
      "c) Apenas vasoespasmo é necessário para trombose",
      "d) A ausência de malaposição exclui trombose",
      "e) O evento é incompatível com DES"
    ],
    answer: 1,
    comment: "Struts expostos/neoaterosclerose são substratos trombogênicos; suspensão de P2Y12 aumenta risco.",
    source: "Joner M et al. J Am Coll Cardiol. 2006;48:193–202; Otsuka F et al. Eur Heart J. 2015;36:2147–2159."
  },
  {
    q: "Q4-19) Qual mediador inflamatório é mais central no eixo IL-1 → IL-6 → PCR na inflamação sistêmica aterosclerótica?",
    options: [
      "a) IL-4",
      "b) IL-6",
      "c) IL-10",
      "d) IFN-β",
      "e) TGF-β"
    ],
    answer: 1,
    comment: "IL-6 é o mediador direto mais ligado à produção hepática de PCR.",
    source: "Fisiologia de fase aguda; CANTOS (síntese)."
  },
  {
    q: "Q4-20) Um stent subexpandido em placa calcificada severa tende a gerar qual “assinatura” clínica mais frequente?",
    options: [
      "a) Menor risco de trombose e ISR",
      "b) Maior risco de ISR e trombose por áreas de estase, altos gradientes e falha mecânica",
      "c) Apenas espasmo transitório sem relevância",
      "d) Proteção contra neoaterosclerose",
      "e) Sempre melhora CFR"
    ],
    answer: 1,
    comment: "Subexpansão é fator maior para ISR/trombose e deve ser evitada com preparo/imagem.",
    source: "ULTIMATE; IVUS-XPL (conceitos)."
  },
  {
    q: "Q4-21) Em SCA com trombo grande, qual ação reduz a chance de “embolização distal” e inflamação microvascular por microtrombos?",
    options: [
      "a) Prolongar cine em alta taxa de frames",
      "b) Minimizar manipulação, aspirar seletivamente apenas em casos de bailout e otimizar antitrombótico (heparina/IIbIIIa conforme cenário)",
      "c) Evitar anticoagulação por risco de sangramento",
      "d) Implantar stent sem pré-dilatação sempre",
      "e) Usar nitrato como substituto de antitrombótico"
    ],
    answer: 1,
    comment: "Estratégia pragmática: antitrombótico adequado + técnica cuidadosa; trombectomia rotineira não é padrão.",
    source: "TOTAL trial; diretrizes STEMI/NSTEMI (síntese)."
  },
  {
    q: "Q4-22) A “disfunção endotelial” como fenômeno clínico se manifesta mais tipicamente por:",
    options: [
      "a) Resposta vasodilatadora normal à acetilcolina em todos os segmentos",
      "b) Vasoconstrição paradoxal/espasmo ao estímulo dependente de endotélio",
      "c) Resposta idêntica a nitratos",
      "d) Ausência total de influência sobre trombose",
      "e) Exclusão de inflamação vascular"
    ],
    answer: 1,
    comment: "ACh pode provocar vasoconstrição paradoxal em endotélio disfuncional.",
    source: "Fisiologia endotelial (síntese)."
  },
  {
    q: "Q4-23) Em paciente com ISR por subexpansão, qual estratégia tende a atacar melhor o mecanismo (ao invés de “apenas adicionar metal”)?",
    options: [
      "a) Implantar outro stent sem imagem e sem preparo",
      "b) Imagem intracoronária para confirmar mecanismo + modificação de placa (ex.: balão de alta pressão, cutting/scoring, IVL/aterectomia conforme anatomia) e então terapia definitiva",
      "c) Apenas aumentar dose de estatina por 1 semana",
      "d) Suspender P2Y12",
      "e) Somente nitrato intracoronário"
    ],
    answer: 1,
    comment: "Tratar mecanismo mecânico exige imagem + modificação de placa/expansão adequada.",
    source: "Consensos SCAI ISR; evidência IVUS/OCT-guided PCI (síntese)."
  },
  {
    q: "Q4-24) A “late catch-up” de reestenose em DES antigos foi associada, em parte, a:",
    options: [
      "a) Crescimento de CML totalmente suprimido para sempre",
      "b) Inflamação crônica e neoaterosclerose tardia, além de cicatrização prolongada",
      "c) Ausência de polímero",
      "d) Menor risco após 1 ano independentemente de tudo",
      "e) Exclusivamente espasmo tardio"
    ],
    answer: 1,
    comment: "DES antigos: inflamação crônica/neoaterosclerose contribuíram para eventos tardios.",
    source: "Otsuka F et al. Eur Heart J. 2015;36:2147–2159."
  },
  {
    q: "Q4-25) Qual célula é mais diretamente ligada à degradação de matriz da capa (MMP) e instabilidade de placa?",
    options: [
      "a) Eritrócito",
      "b) Macrófago ativado",
      "c) Mastócito como único determinante",
      "d) Neutrófilo como evento exclusivo em crônico",
      "e) Célula endotelial sempre protetora"
    ],
    answer: 1,
    comment: "Macrófagos produzem MMP, contribuindo para fragilidade da matriz.",
    source: "Biologia de placa (síntese)."
  },
  {
    q: "Q4-26) Em aterosclerose acelerada pós-transplante cardíaco (CAV), qual característica distingue o processo das placas nativas típicas?",
    options: [
      "a) Lesões focalizadas discretas predominantes",
      "b) Doença difusa concêntrica com componente imunológico/inflamatório importante",
      "c) Ausência de inflamação",
      "d) Predomínio exclusivo de calcificação nodular",
      "e) Igualdade completa ao fenótipo de placa vulnerável focal"
    ],
    answer: 1,
    comment: "CAV é difusa e imunomediada, com biologia distinta e diagnóstico por IVUS/OCT útil.",
    source: "Diretrizes/consensos CAV (síntese)."
  },
  {
    q: "Q4-27) Qual condição aumenta risco de hiperplasia neointimal e falha de cicatrização após PCI por componente metabólico-inflamatório?",
    options: [
      "a) Hipotireoidismo tratado",
      "b) Diabetes mellitus",
      "c) Miopia",
      "d) Apendicectomia prévia",
      "e) Rinite alérgica"
    ],
    answer: 1,
    comment: "Diabetes aumenta inflamação/disfunção endotelial e risco de ISR/eventos.",
    source: "Literatura de DAC no DM (síntese)."
  },
  {
    q: "Q4-28) Em placa com “calcificação fina e pontilhada” (microcalcificações) na capa, o efeito biomecânico mais aceito é:",
    options: [
      "a) Sempre protetor por reforçar a capa",
      "b) Pode aumentar concentração de estresse local e favorecer ruptura, dependendo de distribuição",
      "c) Elimina necessidade de antiagregação",
      "d) Induz regressão do core",
      "e) Não tem qualquer impacto mecânico"
    ],
    answer: 1,
    comment: "Microcalcificações podem concentrar estresse e contribuir para fragilidade local.",
    source: "Biomecânica de placa (síntese)."
  },
  {
    q: "Q4-29) Em pós-PCI, qual marcador/estratégia melhor “trava” risco por via lipídica e reduz progressão de aterosclerose/neoaterosclerose?",
    options: [
      "a) Elevar LDL para estimular cicatrização",
      "b) LDL intensivo (estatina alta potência ± ezetimiba/PCSK9 conforme metas) e adesão de longo prazo",
      "c) Suspender estatina após 30 dias",
      "d) Apenas aumentar beta-bloqueador",
      "e) Tratar apenas sintomas anginosos"
    ],
    answer: 1,
    comment: "Controle agressivo de LDL é o eixo mais comprovado de redução de eventos e progressão aterosclerótica.",
    source: "ESC Dyslipidemia/Chronic Coronary Syndromes; FOURIER/ODYSSEY (síntese)."
  },
  {
    q: "Q4-30) Qual afirmação integra melhor “mecânica” e “biologia” como pilares de PCI moderna para reduzir eventos tardios?",
    options: [
      "a) Apenas mecânica (stent grande) é suficiente",
      "b) Apenas biologia (estatinas) substitui técnica",
      "c) Otimização mecânica (expansão/apposição/lesão bem tratada) + modificação de risco sistêmico (LDL, inflamação, DM, tabagismo) são complementares",
      "d) Anticoagulação indefinida resolve ambos",
      "e) A imagem intracoronária é inútil se angiografia parece boa"
    ],
    answer: 2,
    comment: "Eventos tardios são combinação de fatores técnicos e sistêmicos; a abordagem é necessariamente dupla.",
    source: "Princípios de PCI guiada por imagem + prevenção secundária (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap04",
    icon: "🔥",
    title: "Inflamação e Lesão Arterial",
    description: "Cascata inflamatória, resposta à lesão arterial, citocinas e mediadores vasculares.",
    tags: ["Inflamação", "Lesão Arterial", "Resposta Vascular"],
    questions: questions
  });
})();
