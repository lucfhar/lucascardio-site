// ═══════════════════════════════════════════════════════════
// CAPÍTULO 16 — Lesões Ostiais e Bifurcações
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q16-01) Em bifurcação verdadeira (Medina 1,1,1) com ramo lateral (RL) grande e longo segmento doente, qual estratégia de 2 stents tem melhor evidência/adoção em TCE distal (quando 2 stents é claramente necessário)?",
    options: [
      "a) T-stent “clássico” como padrão",
      "b) DK-crush em centros experientes",
      "c) Provisional sempre, independente de anatomia",
      "d) Apenas balão no RL, sem stent",
      "e) Apenas CABG"
    ],
    answer: 1,
    comment: "Em TCE distal com anatomia complexa e necessidade de 2 stents, DK-crush tem evidência forte em vários ensaios comparativos vs outras técnicas, quando bem executada.",
    source: "DKCRUSH trials (JACC/NEJM – síntese); diretrizes/consensos de bifurcação."
  },
  {
    q: "Q16-02) Em bifurcação “provisional” com stent no vaso principal, qual passo é mais crítico para otimizar a geometria proximal e facilitar re-cross no RL?",
    options: [
      "a) Kissing balloon obrigatório antes do stent",
      "b) Proximal Optimization Technique (POT)",
      "c) Trocar contraste",
      "d) Aumentar FPS",
      "e) Evitar pós-dilatação"
    ],
    answer: 1,
    comment: "POT reexpande o segmento proximal do stent ao diâmetro do vaso proximal, melhora apposição e facilita re-cross para o RL.",
    source: "Consensos EBC; princípios de POT."
  },
  {
    q: "Q16-03) Em re-cross para RL após stent no vaso principal, a melhor prática para reduzir risco de “carina shift”/malapposição é preferir cruzar por:",
    options: [
      "a) Célula proximal sempre",
      "b) Célula distal (mais próxima da carina), quando tecnicamente possível",
      "c) Qualquer célula é equivalente",
      "d) Fora do stent (subintimal)",
      "e) Não cruzar; dilatar através do stent sem fio"
    ],
    answer: 1,
    comment: "Re-cross pela célula distal tende a resultar em melhor abertura e menor deformação do stent na carina.",
    source: "EBC consensus; evidência de OCT/bench testing (síntese)."
  },
  {
    q: "Q16-04) Em TCE distal, qual armadilha clássica ao usar FFR para “side branch” e decisões de 2º stent no agudo?",
    options: [
      "a) FFR é sempre inválido em RL",
      "b) Medidas podem ser influenciadas por microvascular dysfunction e pelo próprio stent/geométrico; decisão deve integrar IVUS/OCT e clínica",
      "c) iFR é sempre superior e elimina necessidade de imagem",
      "d) FFR no RL é sempre baixo",
      "e) FFR no RL sempre normal"
    ],
    answer: 1,
    comment: "Após stent, geometria e hemodinâmica mudam; fisiologia ajuda, mas é complementada por imagem e avaliação do RL (tamanho/território).",
    source: "Documentos de fisiologia em bifurcação; EBC consensus (síntese)."
  },
  {
    q: "Q16-05) Em lesão aorto-ostial de RCA, qual erro técnico mais predispõe a dissecção aórtica/ostial?",
    options: [
      "a) Stent com mínimo protrusion",
      "b) Engajamento agressivo com damping e injeção sob amortecimento/ventricularização",
      "c) Uso de IVUS",
      "d) Acesso radial",
      "e) Uso de heparina titulada por ACT"
    ],
    answer: 1,
    comment: "Injeção sob damping em ostial crítico pode propagar dissecção ao seio/aorta; segurança do engajamento é chave.",
    source: "Grossman & Baim; complicações aorto-ostiais (síntese)."
  },
  {
    q: "Q16-06) Em ostial LCx (bifurcação com TCE), qual consideração anatômica torna o caso particularmente delicado?",
    options: [
      "a) LCx não perfunde miocárdio",
      "b) Risco de “jail”/comprometimento do TCE/DA e necessidade de precisão em landing zone no TCE",
      "c) LCx não tem ramos",
      "d) LCx sempre tem FFR normal",
      "e) Não existe risco de dissecção"
    ],
    answer: 1,
    comment: "Ostial LCx é, por definição, bifurcação com TCE; qualquer falha pode comprometer grandes territórios.",
    source: "Consensos de TCE/bifurcação (síntese)."
  },
  {
    q: "Q16-07) Qual critério torna “provisional stenting” mais apropriado em bifurcação não TCE?",
    options: [
      "a) RL muito pequeno, curto e com doença limitada no óstio",
      "b) RL grande com doença longa e calcificada",
      "c) Bifurcação com ângulo extremamente desfavorável e RL dominante",
      "d) TCE distal 1,1,1 com RL grande",
      "e) CTO no RL"
    ],
    answer: 0,
    comment: "Provisional é default quando RL é menor/menos doente; 2 stents é reservado para RL grande e doente (verdadeira) com risco de oclusão.",
    source: "EBC consensus; ensaios bifurcação (síntese)."
  },
  {
    q: "Q16-08) O objetivo do “final kissing balloon inflation” (FKBI) após 2 stents em bifurcação é principalmente:",
    options: [
      "a) Reduzir LDL",
      "b) Otimizar abertura do RL e reconfigurar a carina/struts para reduzir malapposição e melhorar fluxo",
      "c) Aumentar contraste",
      "d) Substituir POT",
      "e) Aumentar trombo"
    ],
    answer: 1,
    comment: "FKBI ajuda a otimizar geometria e reduzir deformação/obstrução do RL em técnicas de 2 stents.",
    source: "EBC consensus; bench/OCT data (síntese)."
  },
  {
    q: "Q16-09) “POT–side–POT” em provisional é uma sequência racional porque:",
    options: [
      "a) Potencializa a dissecção",
      "b) POT otimiza proximal; dilatação do RL abre struts/carina; POT final restaura forma proximal e reduz malapposição",
      "c) Elimina necessidade de fio no RL",
      "d) Evita anticoagulação",
      "e) Reduz tempo diastólico"
    ],
    answer: 1,
    comment: "Sequência melhora conformação do stent e limita deformação proximal após intervenção no RL.",
    source: "Consensos EBC (síntese)."
  },
  {
    q: "Q16-10) Em bifurcação, o “carina shift” é melhor descrito como:",
    options: [
      "a) Migração de trombo para distal",
      "b) Deslocamento do tecido na carina/redistribuição após expansão do vaso principal, podendo estreitar o óstio do RL sem necessariamente haver placa no RL",
      "c) Dissecção aórtica",
      "d) Oclusão do guia",
      "e) No-reflow"
    ],
    answer: 1,
    comment: "Carina shift pode causar “pinching” do RL mesmo sem doença relevante no óstio do RL.",
    source: "Fisiologia/angiografia de bifurcação (síntese)."
  },

  // Q16-11 a Q16-30
  {
    q: "Q16-11) Em ostial LAD (com TCE), qual erro de “landing zone” aumenta risco de restenose e reintervenção?",
    options: [
      "a) Cobrir adequadamente o óstio com margem mínima no TCE quando necessário",
      "b) Deixar “gap” entre stent e óstio (geographic miss) ou protrusão excessiva no TCE sem planejamento",
      "c) Uso de IVUS",
      "d) Pós-dilatação com NC adequada",
      "e) Anticoagulação adequada"
    ],
    answer: 1,
    comment: "Geographic miss ostial causa edge restenosis e eventos. Em ostiais, precisão é determinante.",
    source: "Textos de técnica PCI; consensos de lesões ostiais."
  },
  {
    q: "Q16-12) Em TCE distal, qual papel do IVUS é mais “prático” e com maior impacto em desfechos?",
    options: [
      "a) Apenas medir DAP",
      "b) Definir referência e diâmetros/áreas, otimizar expansão (MSA) e identificar doença nas bordas (landing zones)",
      "c) Substituir P2Y12",
      "d) Eliminar necessidade de POT",
      "e) Evitar qualquer pós-dilatação"
    ],
    answer: 1,
    comment: "IVUS-guided LM PCI melhora sizing e expansão e reduz eventos em estudos/consensos.",
    source: "IVUS em LM PCI: literatura e diretrizes (síntese)."
  },
  {
    q: "Q16-13) Em bifurcação complexa, qual é a principal razão para escolher 7F em vez de 6F (quando acesso permite)?",
    options: [
      "a) Melhor cine",
      "b) Maior compatibilidade para técnicas de 2 stents, balões simultâneos e dispositivos (microcateter/IVUS) com melhor suporte",
      "c) Menor sangramento sempre",
      "d) Menor espasmo radial",
      "e) Menor contraste obrigatório"
    ],
    answer: 1,
    comment: "Maior ID facilita simultaneidade e entrega de dispositivos; trade-off é acesso/complicações.",
    source: "Grossman & Baim; compatibilidade de sistemas (síntese)."
  },
  {
    q: "Q16-14) Em lesão ostial verdadeira de RCA, uma técnica para posicionamento preciso minimizando protrusão aórtica é:",
    options: [
      "a) Injetar sob damping e soltar no escuro",
      "b) Usar projeção ortogonal e/ou marcador (wire/balloon) e, quando apropriado, “aorto-ostial stenting” com mínima protrusão controlada e pós-dilatação ostial",
      "c) Evitar qualquer pós-dilatação",
      "d) Usar apenas OCT",
      "e) Fazer trombectomia"
    ],
    answer: 1,
    comment: "Ostial exige projeção correta e controle de protrusão. Pós-dilatação ostial é frequentemente necessária para otimizar expansão.",
    source: "Técnica PCI ostial (síntese)."
  },
  {
    q: "Q16-15) Em bifurcação, quando o RL “pinchado” após stent no vaso principal deve receber tratamento adicional?",
    options: [
      "a) Sempre, independente de fluxo e território",
      "b) Quando há fluxo comprometido/ischemia, RL grande com território relevante, dissecção significativa ou fisiologia sugestiva de relevância",
      "c) Nunca",
      "d) Apenas quando LDL é alto",
      "e) Apenas em mulheres"
    ],
    answer: 1,
    comment: "Nem todo pinching exige intervenção; decisão é por fluxo, isquemia, território e anatomia/dissecção.",
    source: "EBC consensus; prática de bifurcação."
  },
  {
    q: "Q16-16) Em bifurcação TCE, o erro mais associado a trombose de stent tardia/reestenose é frequentemente:",
    options: [
      "a) POT bem feito",
      "b) Subexpansão no TCE/proximal e/ou falha de otimização final (POT final, FKBI quando indicado)",
      "c) Uso de IVUS",
      "d) Acesso radial",
      "e) DAPT adequada"
    ],
    answer: 1,
    comment: "Subexpansão e geometria inadequada são determinantes mecânicos fortes em TCE/bifurcação.",
    source: "EBC consensus; IVUS-guided PCI (síntese)."
  },
  {
    q: "Q16-17) Culotte: vantagem principal é:",
    options: [
      "a) Não precisa de recross",
      "b) Boa cobertura de ambos os ramos em bifurcações com diâmetros similares, mas cria dupla camada proximal (exigindo otimização)",
      "c) Elimina necessidade de FKBI",
      "d) Sempre superior a DK-crush em LM",
      "e) Evita stent no RL"
    ],
    answer: 1,
    comment: "Culotte é útil em ramos de diâmetro semelhante; exige técnica e otimização por dupla camada proximal.",
    source: "Consensos/bench tests de bifurcação (síntese)."
  },
  {
    q: "Q16-18) Mini-crush/DK-crush: a razão para “double kissing” é:",
    options: [
      "a) Aumentar contraste",
      "b) Melhorar abertura do RL e reduzir deformação/metal redundante na carina, diminuindo restenose do RL",
      "c) Evitar anticoagulação",
      "d) Reduzir DAP",
      "e) Proibir POT"
    ],
    answer: 1,
    comment: "Os beijos (kissing) em momentos específicos melhoram geometria e resultados no RL na técnica DK-crush.",
    source: "DKCRUSH trials; EBC consensus (síntese)."
  },
  {
    q: "Q16-19) Em lesões aorto-ostiais, qual complicação específica deve ser ativamente vigiada durante canulação e após PCI?",
    options: [
      "a) Endocardite",
      "b) Dissecção do seio/aorta (iatrogênica) e sua progressão",
      "c) Miocardite",
      "d) Pneumonia",
      "e) Hepatite"
    ],
    answer: 1,
    comment: "Dissecções aorto-ostiais podem se propagar e requerem reconhecimento e manejo imediatos.",
    source: "Complicações do cateterismo/PCI (Grossman & Baim)."
  },
  {
    q: "Q16-20) Em bifurcação não TCE com RL pequeno, por que “jailing” do RL frequentemente é aceitável?",
    options: [
      "a) Porque RL não perfunde nada",
      "b) Porque o benefício de evitar complexidade/metal extra geralmente supera o risco em RL pequeno e sem território relevante, desde que fluxo permaneça adequado",
      "c) Porque sempre há colaterais",
      "d) Porque FFR sempre é normal",
      "e) Porque RL não pode ocluir"
    ],
    answer: 1,
    comment: "Provisional evita complexidade e metal extra; RL pequeno pode ser observado se fluxo/território forem pouco relevantes.",
    source: "EBC consensus; prática de bifurcação."
  },
  {
    q: "Q16-21) Um RL “jailed” com oclusão após stent no vaso principal: primeira conduta é:",
    options: [
      "a) Ignorar e finalizar",
      "b) Avaliar território/instabilidade, re-cross cuidadoso, dilatação do RL se necessário e considerar 2º stent se dissecção/fluxo ruim persistir",
      "c) Trombólise",
      "d) Protamina",
      "e) Apenas nitrato"
    ],
    answer: 1,
    comment: "A revascularização do RL depende de fluxo/território e estabilidade; re-cross e dilatação são passos iniciais.",
    source: "EBC consensus; técnica de bifurcação."
  },
  {
    q: "Q16-22) Em TCE, qual parâmetro de IVUS é frequentemente citado para decisão/otimização (conceito), embora thresholds variem?",
    options: [
      "a) LDL",
      "b) Área luminal mínima (MLA) e área mínima do stent (MSA) em segmentos críticos",
      "c) DAP",
      "d) Creatinina",
      "e) QTc"
    ],
    answer: 1,
    comment: "MLA/MSA são parâmetros-chave em LM para decisão e otimização; valores exatos dependem de literatura e população.",
    source: "Literatura IVUS em LM; consensos (síntese)."
  },
  {
    q: "Q16-23) Em bifurcação, “kissing balloon” após provisional é:",
    options: [
      "a) Obrigatório em todos",
      "b) Reservado para cenários selecionados (RL comprometido, dissecção, necessidade de otimização), muitas vezes após POT e re-cross apropriado",
      "c) Contraindicado",
      "d) Substitui POT",
      "e) Elimina necessidade de fio no RL"
    ],
    answer: 1,
    comment: "FKBI não é rotina em provisional; é seletivo e técnica-dependente.",
    source: "EBC consensus."
  },
  {
    q: "Q16-24) Em ostial LCx, por que o risco de “stent too short” é alto?",
    options: [
      "a) Porque LCx é sempre longa",
      "b) Porque a doença frequentemente envolve a carina/TCE; stent curto pode deixar doença residual no óstio (geographic miss)",
      "c) Porque LCx não tem placa",
      "d) Porque IVUS não funciona",
      "e) Porque RL nunca reocluí"
    ],
    answer: 1,
    comment: "Ostial LCx frequentemente é bifurcação complexa; landing zone e cobertura adequada são críticos.",
    source: "Técnica de TCE/bifurcação (síntese)."
  },
  {
    q: "Q16-25) Em bifurcação, qual técnica reduz risco de deformação proximal do stent após intervenções no RL?",
    options: [
      "a) Evitar POT",
      "b) POT final",
      "c) Aumentar contraste",
      "d) Trocar P2Y12",
      "e) Usar apenas balão complacente"
    ],
    answer: 1,
    comment: "POT final restaura geometria proximal após dilatação do RL e reduz malapposição.",
    source: "EBC consensus."
  },
  {
    q: "Q16-26) Em lesão aorto-ostial, por que “side-holes” no guia pode ser armadilha?",
    options: [
      "a) Porque sempre causa dissecção",
      "b) Porque pode mascarar damping e dar falsa sensação de segurança, levando a injeções sob engajamento perigoso",
      "c) Porque reduz contraste",
      "d) Porque aumenta ACT",
      "e) Porque impede FKBI"
    ],
    answer: 1,
    comment: "Side-holes podem reduzir damping aparente; ainda assim o óstio pode estar comprometido mecanicamente.",
    source: "Grossman & Baim; experiência em lesões ostiais."
  },
  {
    q: "Q16-27) Em bifurcação, a decisão por 2 stents vs provisional deve considerar principalmente:",
    options: [
      "a) LDL e idade",
      "b) Tamanho/território do RL, extensão de doença no RL, ângulo e risco de oclusão, e capacidade técnica do operador",
      "c) Tipo de contraste",
      "d) Cor do stent",
      "e) Pressão arterial"
    ],
    answer: 1,
    comment: "Anatomia do RL e risco de comprometimento determinam a necessidade de estratégia mais complexa.",
    source: "EBC consensus."
  },
  {
    q: "Q16-28) Em DK-crush, um erro técnico que mais compromete resultado é:",
    options: [
      "a) Fazer POT",
      "b) Não realizar “first kiss” adequadamente e/ou falhar no recross correto para o segundo kiss",
      "c) Usar heparina por ACT",
      "d) Acesso radial",
      "e) Uso de IVUS"
    ],
    answer: 1,
    comment: "DK-crush é técnica-dependente; falhas nos beijos/recross degradam geometria e desfechos.",
    source: "DKCRUSH trials; EBC consensus (síntese)."
  },
  {
    q: "Q16-29) Em bifurcação com RL dominante e doente, qual benefício de imagem (OCT/IVUS) é mais relevante?",
    options: [
      "a) Medir DAP",
      "b) Confirmar expansão/apposição, identificar underexpansion e guiar POT/otimização de struts na carina",
      "c) Substituir anticoagulação",
      "d) Tratar alergia a contraste",
      "e) Medir pressão arterial"
    ],
    answer: 1,
    comment: "Imagem é particularmente útil para garantir expansão e geometria final adequadas em bifurcações complexas.",
    source: "EBC/consensos; dados de OCT/IVUS em bifurcação (síntese)."
  },
  {
    q: "Q16-30) Em resumo: a maior causa “modificável” de falha tardia em bifurcação/TCE é:",
    options: [
      "a) PCR",
      "b) Subexpansão/malapposição e otimização final inadequada (POT/FKBI quando indicado) + seleção inadequada de estratégia",
      "c) Cor do contraste",
      "d) Eixo elétrico",
      "e) Vitamina D"
    ],
    answer: 1,
    comment: "A mecânica final (expansão, geometria) é um driver modificável importante de restenose e trombose tardia.",
    source: "Consensos de bifurcação; IVUS-guided PCI (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap16",
    icon: "🔀",
    title: "Lesões Ostiais e Bifurcações",
    description: "Técnicas para lesões ostiais e em bifurcação, TCE não protegido e estratégias de stent.",
    tags: ["Bifurcação", "Ostial", "TCE"],
    questions: questions
  });
})();
