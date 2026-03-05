// ═══════════════════════════════════════════════════════════
// CAPÍTULO 17 — Lesões Longas e Difusas
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q17-01) Em lesão longa difusa (≥40–50 mm) em vaso de médio calibre, qual fator mais aumenta risco de falha tardia (ISR/trombose) e é altamente modificável?",
    options: [
      "a) LDL no dia do procedimento",
      "b) Subexpansão do stent e sizing inadequado, especialmente em segmentos com remodelamento/calcificação",
      "c) Cor do fio",
      "d) Tipo de contraste",
      "e) IMC"
    ],
    answer: 1,
    comment: "Lesões longas amplificam o impacto de subexpansão/under-sizing; IVUS/OCT melhora sizing e expansão.",
    source: "IVUS-XPL; ULTIMATE (síntese); princípios de PCI complexa."
  },
  {
    q: "Q17-02) Em doença difusa, por que “angiografia” subestima gravidade e pode levar a stent “curto demais”?",
    options: [
      "a) Porque angiografia mede parede",
      "b) Porque remodelamento positivo e referência “doente” (diffuse reference disease) tornam o “normal” aparente enganoso",
      "c) Porque angiografia sempre superestima",
      "d) Porque contraste é hiperosmolar",
      "e) Porque cine é em baixa resolução"
    ],
    answer: 1,
    comment: "Em difusa, segmentos de referência também têm placa; imagem intracoronária quantifica burden e ajuda landing zones.",
    source: "Princípios IVUS/OCT em doença difusa (síntese)."
  },
  {
    q: "Q17-03) “Geographic miss” em lesão longa aumenta principalmente:",
    options: [
      "a) HDL",
      "b) Edge restenosis/dissection e necessidade de revascularização futura",
      "c) Saturação",
      "d) Hipoglicemia",
      "e) Bloqueio AV"
    ],
    answer: 1,
    comment: "Lesão longa exige landing zone adequada; miss aumenta falhas na borda.",
    source: "Técnica PCI (síntese)."
  },
  {
    q: "Q17-04) Sobre sobreposição de stents em doença longa, qual afirmação é mais correta em DES modernos?",
    options: [
      "a) Sobreposição é sempre proibida",
      "b) Sobreposição aumenta metal/polímero e pode aumentar risco de ISR/trombose; minimizar e otimizar expansão é o objetivo",
      "c) Sobreposição elimina necessidade de pós-dilatação",
      "d) Sobreposição reduz necessidade de DAPT",
      "e) Sobreposição melhora fluxo microvascular"
    ],
    answer: 1,
    comment: "Sobreposição pode ser necessária, mas deve ser minimizada e bem expandida (imagem ajuda).",
    source: "Princípios de DES e mecânica de stent (síntese)."
  },
  {
    q: "Q17-05) Em vaso com tapering importante (proximal maior que distal), qual estratégia reduz subexpansão distal ou oversizing proximal?",
    options: [
      "a) Usar um único diâmetro fixo sem otimização",
      "b) Escolher diâmetro pelo distal e realizar POT (e possivelmente estratégia de stent adequada) para adaptar ao proximal",
      "c) Oversize pelo proximal e aceitar dissecção distal",
      "d) Apenas balão complacente",
      "e) Evitar qualquer pós-dilatação"
    ],
    answer: 1,
    comment: "Sizing pelo distal e POT adaptam o proximal sem traumatizar distal.",
    source: "Técnicas de bifurcação e POT; princípios de sizing."
  },
  {
    q: "Q17-06) Em lesão longa com calcificação moderada, qual preparo reduz risco de subexpansão e necessidade de stent-in-stent?",
    options: [
      "a) Apenas inflations em alta pressão sem imagem",
      "b) Scoring/cutting balloon e/ou IVL conforme anatomia, guiado por IVUS/OCT para confirmar fratura/capacidade de expansão",
      "c) Evitar qualquer preparo",
      "d) Trocar contraste",
      "e) Suspender heparina"
    ],
    answer: 1,
    comment: "Preparação controlada (scoring/IVL) melhora expansão e reduz barotrauma.",
    source: "Consensos de calcificação; IVL trials (síntese)."
  },
  {
    q: "Q17-07) Em doença difusa, por que fisiologia (FFR/iFR pullback) é útil?",
    options: [
      "a) Porque substitui angiografia",
      "b) Porque identifica gradiente distribuído vs focal e pode ajudar a decidir extensão real de tratamento (focal vs longo) e prever ganho hemodinâmico",
      "c) Porque reduz LDL",
      "d) Porque elimina necessidade de imagem",
      "e) Porque mede calcificação"
    ],
    answer: 1,
    comment: "Pullback fisiológico distingue doença focal de difusa e orienta se PCI extensa terá benefício hemodinâmico.",
    source: "Documentos de fisiologia com pullback; prática em doença difusa (síntese)."
  },
  {
    q: "Q17-08) Em “diffuse disease” com gradiente contínuo, o risco de PCI muito extensa é:",
    options: [
      "a) Sempre benefício prognóstico",
      "b) Pouco ganho hemodinâmico incremental, maior metal/risco e necessidade de reintervenção; terapia médica e estratégia focal podem ser preferíveis",
      "c) Eliminar qualquer necessidade de estatina",
      "d) Reduzir sangramento",
      "e) Curar aterosclerose"
    ],
    answer: 1,
    comment: "Tratamento de doença difusa extensa pode trazer pouco ganho e mais risco; decisões devem ser hemodinamicamente orientadas.",
    source: "Conceitos de fisiologia e decisão em DAC estável."
  },
  {
    q: "Q17-09) Em lesão longa, qual parâmetro de IVUS é mais diretamente associado à segurança tardia?",
    options: [
      "a) DAP",
      "b) Área mínima do stent (MSA) adequada ao longo do segmento e sem subexpansões focais",
      "c) Número de projeções",
      "d) QTc",
      "e) Hemoglobina"
    ],
    answer: 1,
    comment: "Subexpansão focal é ponto de falha (ISR/trombose).",
    source: "IVUS-XPL; ULTIMATE (síntese)."
  },
  {
    q: "Q17-10) Em vasos pequenos com lesão longa, qual fenômeno explica maior risco de ISR mesmo com técnica adequada?",
    options: [
      "a) Menor relação área/volume e maior impacto de pequena perda luminal (late loss) em calibre pequeno",
      "b) Menor inflamação",
      "c) Maior diástole",
      "d) Maior colateralização imediata",
      "e) Menor burden"
    ],
    answer: 0,
    comment: "Em vaso pequeno, qualquer late loss resulta em grande impacto relativo no lúmen.",
    source: "Princípios de ISR em vasos pequenos (síntese)."
  },

  // Q17-11 a Q17-30
  {
    q: "Q17-11) Em lesões longas, por que “direct stenting” (sem pré-dilatação) é raramente uma boa estratégia se há calcificação/rigidez?",
    options: [
      "a) Porque sempre aumenta contraste",
      "b) Porque aumenta risco de subexpansão e falha tardia ao implantar stent sobre placa não preparada",
      "c) Porque reduz embolização",
      "d) Porque elimina dissecções",
      "e) Porque reduz necessidade de POT"
    ],
    answer: 1,
    comment: "Sem preparação, o stent pode ficar subexpandido e “preso” em placa rígida.",
    source: "Consensos de calcificação e mecânica de stent."
  },
  {
    q: "Q17-12) Em doença difusa da DA, a decisão de “stentar tudo” versus estratégia focal deve considerar principalmente:",
    options: [
      "a) Preferência estética na angiografia",
      "b) Pullback fisiológico, território e potencial de melhora de sintomas, além de risco de metal extenso",
      "c) Tipo de contraste",
      "d) Cor do fio",
      "e) Presença de miopia"
    ],
    answer: 1,
    comment: "Tratamento extenso em difusa deve ser guiado por ganho hemodinâmico/sintomas e risco.",
    source: "Conceitos de DAC estável e fisiologia (síntese)."
  },
  {
    q: "Q17-13) Em lesão longa com necessidade de 2 stents em série, como minimizar risco de falha na zona de overlap?",
    options: [
      "a) Deixar gap entre stents",
      "b) Overlap curto e bem expandido, com pós-dilatação NC e, idealmente, confirmação por IVUS/OCT",
      "c) Overlap muito longo para “reforçar”",
      "d) Evitar pós-dilatação",
      "e) Apenas nitrato"
    ],
    answer: 1,
    comment: "Overlap curto e otimizado reduz metal redundante e subexpansão focal, que são pontos de falha.",
    source: "Princípios de stent overlap e otimização por imagem."
  },
  {
    q: "Q17-14) Em lesão longa com múltiplos segmentos de diâmetro diferente, uma abordagem correta é:",
    options: [
      "a) Escolher stent pelo maior diâmetro e aceitar trauma distal",
      "b) Escolher pelo distal e adaptar proximal com POT; considerar estratégia de stents com diâmetros adequados quando necessário",
      "c) Evitar qualquer ajuste",
      "d) Usar apenas balão complacente",
      "e) Não anticoagular"
    ],
    answer: 1,
    comment: "Sizing distal + POT é o princípio para vasos afunilados; imagem ajuda a definir diâmetros reais.",
    source: "Técnicas POT; imagem intracoronária (síntese)."
  },
  {
    q: "Q17-15) Em doença difusa, qual evidência reforça que desfechos “hard” podem não melhorar com estratégia invasiva inicial em muitos casos selecionados?",
    options: [
      "a) TOTAL",
      "b) ISCHEMIA",
      "c) CULPRIT-SHOCK",
      "d) SAFER",
      "e) STREAM"
    ],
    answer: 1,
    comment: "ISCHEMIA sugere ausência de redução robusta de hard outcomes com invasivo inicial em população selecionada, com benefício sintomático em parte.",
    source: "ISCHEMIA trial (NEJM)."
  },
  {
    q: "Q17-16) Em difusa com microvascular disease, FFR pode ser:",
    options: [
      "a) Sempre impossível",
      "b) Falsamente alto se hiperemia for limitada por disfunção microvascular; integrar com clínica, iFR/pullback e imagem",
      "c) Sempre baixo",
      "d) Igual ao LDL",
      "e) Substituído por troponina"
    ],
    answer: 1,
    comment: "Disfunção microvascular pode limitar hiperemia e afetar FFR; interpretação exige contexto.",
    source: "Documentos de fisiologia coronária (síntese)."
  },
  {
    q: "Q17-17) Em lesões longas, qual fator aumenta risco de trombose tardia por “mecânica”?",
    options: [
      "a) LDL baixo",
      "b) Subexpansão focal e malapposição persistente, especialmente em segmentos calcificados/overlap",
      "c) Uso de PPI",
      "d) Oximetria normal",
      "e) Projeção AP"
    ],
    answer: 1,
    comment: "Trombose tardia é fortemente ligada a falhas mecânicas, especialmente em casos complexos/longos.",
    source: "Consensos de trombose de stent; imagem-guided PCI (síntese)."
  },
  {
    q: "Q17-18) Em vaso muito pequeno e lesão longa, qual estratégia alternativa pode ser considerada em cenários selecionados (quando anatomia e evidência suportam)?",
    options: [
      "a) Stent longo sempre",
      "b) DCB (drug-coated balloon) em cenários apropriados (ex.: pequenos vasos/ISR) com preparo adequado e sem necessidade de metal",
      "c) Evitar qualquer terapia",
      "d) Trombólise",
      "e) Apenas diurético"
    ],
    answer: 1,
    comment: "DCB pode ser alternativa em pequenos vasos/ISR e em alguns territórios, dependendo de disponibilidade e evidência; exige preparo adequado.",
    source: "Literatura DCB/pequenos vasos (síntese)."
  },
  {
    q: "Q17-19) Em lesão longa, como reduzir exposição a contraste e radiação sem comprometer resultado?",
    options: [
      "a) Repetir múltiplos cines para “garantir”",
      "b) Planejar por IVUS, usar roadmap/last-image-hold, minimizar runs e otimizar de primeira (menos retrabalho)",
      "c) Aumentar FPS",
      "d) Projeção lateral fixa prolongada",
      "e) Abrir colimação"
    ],
    answer: 1,
    comment: "Planejamento e imagem reduzem retrabalho e, portanto, radiação/contraste.",
    source: "ALARA; IVUS-guided PCI (síntese)."
  },
  {
    q: "Q17-20) Se você precisa escolher entre “stent mais curto” deixando doença residual e “stent longo” cobrindo tudo em difusa leve, qual princípio guia a decisão?",
    options: [
      "a) Sempre stent mais longo",
      "b) Avaliar se a doença residual é hemodinamicamente relevante e se há landing zones adequadas; não tratar doença difusa leve se não agrega benefício hemodinâmico/sintomático",
      "c) Tratar tudo para prevenir infarto em todos",
      "d) Decidir por LDL",
      "e) Evitar fisiologia"
    ],
    answer: 1,
    comment: "O objetivo é tratar lesões relevantes com landing zones adequadas e evitar metal desnecessário em difusa não significativa.",
    source: "Princípios de fisiologia e DAC estável (síntese)."
  },
  {
    q: "Q17-21) Em lesão longa, o uso de “buddy wire” ajuda principalmente por:",
    options: [
      "a) Reduzir ACT",
      "b) Aumentar suporte e facilitar entrega de balões/stents em tortuosidade/calcificação",
      "c) Reduzir LDL",
      "d) Evitar contraste",
      "e) Aumentar no-reflow"
    ],
    answer: 1,
    comment: "Buddy wire aumenta suporte e reduz “buckling”, facilitando delivery.",
    source: "Técnicas de suporte em PCI (síntese)."
  },
  {
    q: "Q17-22) Em lesão longa, uma causa subestimada de ISR é:",
    options: [
      "a) DAPT adequada",
      "b) Falta de cobertura completa de segmentos doentes nas bordas (geographic miss) e subexpansão no overlap",
      "c) Estatina alta",
      "d) Colimação",
      "e) Uso de radial"
    ],
    answer: 1,
    comment: "Edge disease e subexpansão no overlap são pontos clássicos de falha.",
    source: "Técnica PCI e ISR (síntese)."
  },
  {
    q: "Q17-23) Em difusa com grande burden, qual achado IVUS pode levar a evitar PCI extensa por baixo ganho potencial?",
    options: [
      "a) Grande MSA",
      "b) Burden difuso sem “culprit” focal e pullback fisiológico mostrando gradiente distribuído sem queda focal acentuada",
      "c) Stent bem expandido",
      "d) Malapposição",
      "e) Dissecção"
    ],
    answer: 1,
    comment: "Quando o problema é difuso e o ganho focal é pequeno, PCI extensa pode trazer mais risco do que benefício.",
    source: "Conceitos de pullback fisiológico e doença difusa (síntese)."
  },
  {
    q: "Q17-24) Em lesões longas, qual tipo de balão é mais útil para “pré-tratamento” e reduzir slippage em placa fibrocalcificada?",
    options: [
      "a) Balão complacente grande",
      "b) Scoring/cutting balloon",
      "c) Balão subdimensionado sempre",
      "d) Nenhum balão",
      "e) Balão de oclusão venosa"
    ],
    answer: 1,
    comment: "Scoring/cutting melhoram controle de fratura e reduzem slippage, favorecendo expansão do stent.",
    source: "Consensos de modificação de placa (síntese)."
  },
  {
    q: "Q17-25) Em stent longo com múltiplos segmentos calcificados, qual tecnologia permite fratura controlada após stent subexpandido com menor barotrauma em alguns casos?",
    options: [
      "a) IVL (intravascular lithotripsy) em cenários selecionados",
      "b) Apenas nitrato",
      "c) Apenas diurético",
      "d) Protamina",
      "e) Vitamina K"
    ],
    answer: 0,
    comment: "IVL pode ajudar expansão em calcificação, inclusive em alguns casos de stent subexpandido (dependendo da anatomia e experiência).",
    source: "IVL trials/consensos (síntese)."
  },
  {
    q: "Q17-26) Em lesão longa, qual é o efeito de uma pequena subexpansão focal no prognóstico?",
    options: [
      "a) Irrelevante",
      "b) Pode se tornar “weak link” para ISR/trombose, mesmo que o restante esteja bem expandido",
      "c) Protege contra trombose",
      "d) Reduz necessidade de DAPT",
      "e) Elimina edge restenosis"
    ],
    answer: 1,
    comment: "Subexpansão focal é um driver de eventos; imagem busca identificar e corrigir esses pontos.",
    source: "IVUS/OCT-guided PCI (síntese)."
  },
  {
    q: "Q17-27) Em difusa severa com múltiplos segmentos, por que CABG pode ser preferível em alguns pacientes (além de prognóstico)?",
    options: [
      "a) Porque CABG não tem riscos",
      "b) Porque oferece revascularização mais completa de territórios difusamente doentes onde PCI exigiria metal extenso com alto risco de falha",
      "c) Porque CABG elimina necessidade de estatina",
      "d) Porque CABG reduz CI-AKI sempre",
      "e) Porque CABG é sempre mais barata"
    ],
    answer: 1,
    comment: "Difusa complexa pode favorecer CABG; decisão é de Heart Team.",
    source: "Diretrizes de revascularização (ACC/ESC – síntese)."
  },
  {
    q: "Q17-28) Em lesões longas, qual decisão reduz risco de edge dissection ao final?",
    options: [
      "a) Pós-dilatar além da borda do stent com balão grande",
      "b) Selecionar landing zones em segmentos menos doentes e evitar oversizing abrupto na borda",
      "c) Não anticoagular",
      "d) Aumentar contraste",
      "e) Evitar POT"
    ],
    answer: 1,
    comment: "Edges em segmentos doentes e mismatch de diâmetro favorecem dissecção de borda.",
    source: "Técnica PCI (síntese)."
  },
  {
    q: "Q17-29) Em doença difusa, “functional SYNTAX score” difere do SYNTAX anatômico porque:",
    options: [
      "a) Exclui angiografia",
      "b) Reclassifica lesões conforme relevância fisiológica (FFR/iFR), frequentemente reduzindo complexidade “funcional” vs anatômica",
      "c) Mede LDL",
      "d) É baseado em troponina",
      "e) Não tem utilidade"
    ],
    answer: 1,
    comment: "Integrar fisiologia reduz o número de lesões que realmente precisam ser tratadas, alterando planejamento de revascularização.",
    source: "FAME substudy sobre functional SYNTAX (síntese)."
  },
  {
    q: "Q17-30) Resumo: em lesão longa/difusa, a tríade de sucesso é:",
    options: [
      "a) Stent longo + sem imagem + alta pressão",
      "b) Seleção correta (fisiologia), preparo adequado (modificação de placa) e otimização mecânica (imagem, expansão, landing zones)",
      "c) Trocar contraste",
      "d) Aumentar FPS",
      "e) Apenas aumentar DAPT"
    ],
    answer: 1,
    comment: "Lesões longas amplificam falhas; fisiologia e imagem reduzem metal desnecessário e melhoram expansão e bordas.",
    source: "Princípios PCI complexa; FAME; IVUS-XPL/ULTIMATE (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap17",
    icon: "📏",
    title: "Lesões Longas e Difusas",
    description: "Manejo de lesões longas e difusas, planejamento de stent, overlap e otimização por imagem.",
    tags: ["Lesões Longas", "Doença Difusa", "Stent Longo"],
    questions: questions
  });
})();
