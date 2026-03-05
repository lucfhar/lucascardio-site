/* ══════════════════════════════════════════════════════════
   OCT — Atlas of OCT: Princípios, Imagem e Casos Clínicos
   Pushes to window.QUIZ_REGISTRY (loaded by index.html)
══════════════════════════════════════════════════════════ */
(window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || []).push({
  id: "oct_image_1",
  icon: "🔬",
  title: "OCT Intravascular — Análise de Imagem",
  description: "Interpretação de achados em imagens de Tomografia de Coerência Óptica (OCT) intravascular: placa vulnerável, stent, artefatos e síndromes coronarianas agudas.",
  tags: ["OCT", "Imagem Intravascular", "Cardiologia Intervencionista"],
  questions: [
    {
      q: "A imagem de OCT demonstra qual dos seguintes achados?",
      options: [
        "a) Dissecção de borda de stent",
        "b) Trombo vermelho",
        "c) Acúmulo de macrófagos e cristais de colesterol",
        "d) Prolapso de tecido entre as hastes do stent"
      ],
      answer: 2,
      comment: "A imagem exibe acúmulo de macrófagos, que aparecem como regiões focais puntiformes ricas em sinal, e cristais de colesterol, que se apresentam como regiões lineares de alta intensidade. Macrófagos superficiais podem sombrear o tecido subjacente, criando aparência de núcleo necrótico. Cristais de colesterol são frequentemente associados a uma capa fibrosa e um núcleo necrótico.",
      source: "Atlas of OCT, Fig. 1.5",
      images: ["images/oct_q1.jpg"]
    },
    {
      q: "A imagem de OCT demonstra um tipo de placa vulnerável. Qual é o achado apontado pela seta?",
      options: [
        "a) Nódulo calcificado",
        "b) Erosão de placa",
        "c) Ruptura de placa com trombo sobreposto",
        "d) Trombo branco"
      ],
      answer: 2,
      comment: "A Fig. 1.6a mostra ruptura de placa com características de laceração da íntima e disrupção da capa fibrosa, com trombo sobreposto — achado frequente em lesões TCFA. Este é um dos principais mecanismos fisiopatológicos das síndromes coronarianas agudas. A erosão de placa, ao contrário, caracteriza-se por trombo sobre superfície luminal irregular sem ruptura da capa fibrosa.",
      source: "Atlas of OCT, Fig. 1.6a",
      images: ["images/oct_q2.jpg"]
    },
    {
      q: "A imagem de OCT mostra um stent coronário implantado. As setas indicam um achado comum após o implante. O que elas representam?",
      options: [
        "a) Fratura do stent",
        "b) Malaposição do stent",
        "c) Trombose intra-stent",
        "d) Dissecção da borda do stent"
      ],
      answer: 1,
      comment: "A Fig. 1.8a demonstra malaposição do stent, que ocorre quando a distância entre a haste do stent e a superfície luminal é maior que a espessura da própria haste. As hastes metálicas aparecem como estruturas brilhantes com sombra dorsal; a malaposição é definida quando há gap entre a haste e a parede do vaso sem cobertura tissular.",
      source: "Atlas of OCT, Fig. 1.8a",
      images: ["images/oct_q3.jpg"]
    },
    {
      q: "A imagem de OCT ilustra um padrão de reestenose intra-stent. Qual é a característica do tecido neointimal mostrada?",
      options: [
        "a) Padrão heterogêneo",
        "b) Padrão em camadas (layered)",
        "c) Padrão homogêneo",
        "d) Neoaterosclerose calcificada"
      ],
      answer: 2,
      comment: "A Fig. 1.9d exibe tecido neointimal homogêneo, caracterizado por alta retrodifusão (backscatter) e aparência uniforme sem focos de diferentes intensidades — o padrão mais comum na maioria das lesões de reestenose. O padrão heterogêneo e o layered refletem composições tissulares distintas; a neoaterosclerose calcificada é um achado tardio com focos de alta intensidade.",
      source: "Atlas of OCT, Fig. 1.9d",
      images: ["images/oct_q4.jpg"]
    },
    {
      q: "A imagem de OCT mostra um artefato comum. O que a seta indica?",
      options: [
        "a) Sombra do fio-guia",
        "b) Artefato de saturação",
        "c) Reflexões múltiplas",
        "d) Sangue residual"
      ],
      answer: 0,
      comment: "A Fig. 1.10a mostra o artefato de sombra do fio-guia (guidewire artifact), que se apresenta como uma sombra radial escura que mascara completamente estruturas subjacentes da parede do vaso. É o artefato mais reconhecível no OCT e deve ser distinguido de achados patológicos como trombo ou dissecção.",
      source: "Atlas of OCT, Fig. 1.10a",
      images: ["images/oct_q5.jpg"]
    },
    {
      q: "A imagem de OCT mostra um artefato de imagem. O que a seta indica?",
      options: [
        "a) Artefato de 'sew-up'",
        "b) Descarte de sinal tangencial (tangential signal dropout)",
        "c) Sombra de sangue residual",
        "d) Dobra ('fold-over')"
      ],
      answer: 1,
      comment: "A Fig. 1.10j ilustra o tangential signal dropout, que ocorre quando o cateter de OCT está posicionado próximo à parede do vaso e o feixe de luz incide quase paralelamente à superfície luminal, resultando em queda de sinal. Uma área escura radial pode surgir no sítio de incidência oblíqua, podendo ser confundida com trombo ou dissecção — importante reconhecer para evitar interpretação errônea.",
      source: "Atlas of OCT, Fig. 1.10j",
      images: ["images/oct_q6.jpg"]
    },
    {
      q: "A imagem de OCT revela a causa de um evento coronariano agudo. O que a seta indica?",
      options: [
        "a) Trombo branco não oclusivo",
        "b) Nódulo calcificado protruindo para o lúmen",
        "c) Ruptura da capa fibrosa",
        "d) Dissecção espontânea da artéria coronária"
      ],
      answer: 2,
      comment: "A Fig. 2.1c mostra ruptura da capa fibrosa com cavidade subjacente exposta ao lúmen — caso de homem de 45 anos que faleceu subitamente após jogging, com confirmação histológica de ruptura de placa com trombo fibrina-rico sobreposto e macrófagos CD68+ na capa fibrosa disrompida. Este é o mecanismo mais comum de SCA em aterosclerose avançada.",
      source: "Atlas of OCT, Fig. 2.1c",
      images: ["images/oct_q7.jpg"]
    },
    {
      q: "A imagem de OFDI mostra um achado em uma artéria coronária de necrópsia. O que as setas brancas indicam?",
      options: [
        "a) Múltiplas rupturas de placa",
        "b) Áreas de trombo sobre superfície luminal irregular, consistentes com erosão de placa",
        "c) Infiltração de macrófagos na parede do vaso",
        "d) Hastes de stent mal apostas"
      ],
      answer: 1,
      comment: "A Fig. 2.2 (OFDI, técnica similar ao OCT) demonstra irregularidade da superfície luminal com trombo platelet-rico sobreposto (setas brancas) sem evidência de ruptura de capa fibrosa — padrão diagnóstico de erosão de placa. O trombo na erosão é caracterizado por baixa atenuação com bordas bem definidas, diferente do trombo vermelho rico em hemácias que apresenta alta atenuação com sombra.",
      source: "Atlas of OCT, Fig. 2.2",
      images: ["images/oct_q8.jpg"]
    },
    {
      q: "A imagem de OCT mostra um achado em um paciente com IAMSEST (49 anos, 90–95% estenose na ACD distal). O que a seta aponta?",
      options: [
        "a) Uma capa fibrosa espessa e intacta",
        "b) Um nódulo calcificado",
        "c) Uma ruptura de placa",
        "d) Uma área de reestenose intra-stent"
      ],
      answer: 2,
      comment: "A Fig. 2.3b2 mostra ruptura de placa (seta) proximal ao sítio de área luminal mínima (MLA). A capa fibrosa fina íntegra era visível proximalmente ao sítio de ruptura (b1), e grandes trombos vermelhos foram detectados proximal e distalmente à MLA. Este caso ilustra como o OCT identifica a etiologia exata da SCA com precisão superior à angiografia isolada.",
      source: "Atlas of OCT, Fig. 2.3b2",
      images: ["images/oct_q9.jpg"]
    },
    {
      q: "A imagem de OCT foi obtida após ICP em IAMSEST por ruptura de placa. O que as pontas de seta indicam?",
      options: [
        "a) Malaposição do stent",
        "b) Pequenas protrusões de tecido no sítio da área mínima do stent (MSA)",
        "c) Trombose intra-stent",
        "d) Dissecção da borda do stent"
      ],
      answer: 1,
      comment: "A Fig. 2.4b mostra o resultado pós-ICP com stent everolimus 3,5/28 mm com MSA de 4,8 mm² e boa expansão e aposição. As pontas de seta indicam pequenas protrusões de tecido no sítio da MSA — achado frequente correspondente a prolapso tissular entre as hastes, clinicamente relevante pois pode contribuir para trombose quando extenso. O OCT pós-stent foi fundamental para confirmar resultado ótimo.",
      source: "Atlas of OCT, Fig. 2.4b",
      images: ["images/oct_q10.jpg"]
    },
    {
      q: "Em paciente com angina instável (homem 53 anos, estenose 50–60% na DA proximal), a imagem de OCT revela a etiologia. O que a seta indica?",
      options: [
        "a) Aneurisma coronário",
        "b) Ruptura da capa fibrosa",
        "c) Trombo branco oclusivo",
        "d) Placa com capa fibrosa espessa (thick-cap fibroatheroma)"
      ],
      answer: 1,
      comment: "A Fig. 2.5b2 demonstra ruptura da capa fibrosa (seta) distal ao sítio da MLA de 2,1 mm². Um trombo luminal vermelho não oclusivo foi detectado distal ao sítio de ruptura. Este caso é paradigmático: a estenose era subcrítica pela angiografia, mas o OCT revelou ruptura de placa vulnerável como causa da angina instável — evidenciando a superioridade do OCT sobre a angiografia para etiologia da SCA.",
      source: "Atlas of OCT, Fig. 2.5b2",
      images: ["images/oct_q11.jpg"]
    },
    {
      q: "A imagem de OCT foi obtida após o tratamento da lesão da Fig. 2.5 (stent everolimus 3,25/33 mm na DA proximal). O que a imagem demonstra?",
      options: [
        "a) Reestenose intra-stent",
        "b) Boa aposição e expansão do stent com MSA de 5,3 mm²",
        "c) Trombose residual significativa",
        "d) Fratura do stent"
      ],
      answer: 1,
      comment: "A Fig. 2.6b confirma excelente resultado pós-ICP: stent bem expandido e aposto na DA proximal com MSA de 5,3 mm². O OCT pós-stent neste caso não só verificou a expansão ótima como clarificou que a etiologia da SCA foi ruptura de placa aterosclerótica vulnerável — informação que impacta diretamente a escolha da duração de DAPT.",
      source: "Atlas of OCT, Fig. 2.6b",
      images: ["images/oct_q12.jpg"]
    },
    {
      q: "Em IAMCSST (homem 33 anos, oclusão trombótica total da DA proximal), a imagem de OCT foi obtida após trombectomia. O que a seta sugere?",
      options: [
        "a) Um grande trombo vermelho residual",
        "b) Um possível sítio de ruptura da capa fibrosa",
        "c) Uma dissecção coronária iatrogênica",
        "d) Uma placa de ateroma com capa fibrosa espessa"
      ],
      answer: 1,
      comment: "A Fig. 2.7b3 aponta para possível sítio de ruptura da capa fibrosa em poucos frames adjacentes — achado difícil de identificar porque o trombo residual volumoso obscureceu a parede do vaso na maioria das imagens. Este caso destaca um desafio do OCT no IAMCSST: a carga trombótica elevada limita a visualização, mas ainda assim a OCT pós-trombectomia orientou o dimensionamento do stent pelas zonas de referência.",
      source: "Atlas of OCT, Fig. 2.7b3",
      images: ["images/oct_q13.jpg"]
    },
    {
      q: "A imagem de OCT foi obtida após o tratamento definitivo do IAMCSST da Fig. 2.7 (stent everolimus 4/15 mm na DA proximal). O que a imagem demonstra?",
      options: [
        "a) Reestenose intra-stent grave",
        "b) Boa aposição e expansão do stent com MSA de 8,7 mm²",
        "c) Trombo oclusivo residual",
        "d) Dissecção da borda distal do stent"
      ],
      answer: 1,
      comment: "A Fig. 2.8b mostra resultado final excelente: boa aposição e expansão do stent na DA proximal com MSA de 8,7 mm². O OCT neste caso de IAMCSST serviu para: (1) identificar o substrato fisiopatológico (ruptura de placa), (2) avaliar extensão do trombo residual pós-trombectomia e (3) dimensionar o stent com base nas zonas de referência proximal (4,3 mm) e distal (4,7 mm).",
      source: "Atlas of OCT, Fig. 2.8b",
      images: ["images/oct_q14.jpg"]
    },
    {
      q: "A imagem de OCT, de paciente com IAMCSST por oclusão subtotal da ACD proximal (mulher 51 anos, HAS, TVP), mostra a causa do evento. O que a seta indica?",
      options: [
        "a) Uma grande massa irregular rica em sinal protruindo para o lúmen, característica de trombo branco",
        "b) Ruptura de uma placa com capa fibrosa fina",
        "c) Um artefato de sombra do fio-guia",
        "d) Uma dissecção da artéria coronária"
      ],
      answer: 0,
      comment: "A Fig. 2.9b2 mostra massa irregular de baixa atenuação com bordas bem definidas protruindo para o lúmen — características do trombo branco (platelet-rich). Ao contrário dos casos anteriores, não houve evidência de ruptura de placa ou grande núcleo lipídico, e o exame não detectou proeminente sombra. A MLA foi 2,8 mm². A ausência de ruptura e grande núcleo lipídico sugere erosão de placa como mecanismo da SCA.",
      source: "Atlas of OCT, Fig. 2.9b2",
      images: ["images/oct_q15.jpg"]
    },
    {
      q: "A imagem de OCT mostra o resultado final após ICP para tratar a lesão da Fig. 2.9 (stent platinum-chromium everolimus 3,5/12 mm na ACD proximal). O que confirma?",
      options: [
        "a) Malaposição do stent e trombose residual",
        "b) Stent bem expandido com MSA de 8,5 mm² e sem malaposição",
        "c) Fratura do stent com prolapso de tecido",
        "d) Reestenose intra-stent precoce"
      ],
      answer: 1,
      comment: "A Fig. 2.10b confirma implante bem-sucedido na ACD proximal: stent bem expandido, sem malaposição, MSA de 8,5 mm². O OCT pós-ICP foi essencial para verificar o resultado ótimo neste caso de IAMCSST por erosão de placa — etiologia de SCA particularmente importante em mulheres jovens, onde uma abordagem conservadora (sem stent) pode ser considerada se o trombo resolver com anticoagulação.",
      source: "Atlas of OCT, Fig. 2.10b",
      images: ["images/oct_q16.jpg"]
    },
    {
      q: "A imagem de OCT, de paciente com IAMSEST (mulher 40 anos, HAS, tabagista, artrite reumatoide, cTnI 7,7 ng/mL), mostra um achado sutil. O que as setas indicam?",
      options: [
        "a) Múltiplos trombos brancos pequenos aderidos à parede do vaso sobre uma placa fibrosa",
        "b) Ruptura de placa com grande exposição do núcleo lipídico",
        "c) Dissecção da íntima",
        "d) Nódulos calcificados"
      ],
      answer: 0,
      comment: "A Fig. 2.11b2 mostra vários trombos brancos pequenos (setas) sobre superfície luminal irregular de uma placa fibrosa — padrão diagnóstico de erosão de placa. A OCT não detectou ruptura de placa. O IVUS confirmou placa fibrótica com remodelamento negativo (RI 0,85) e o NIRS mostrou lipid core block index (maxLCBI4mm) de 231, sugestivo de placa não vulnerável. Este caso exemplifica a erosão de placa como mecanismo de SCA em mulher jovem fumante.",
      source: "Atlas of OCT, Fig. 2.11b2",
      images: ["images/oct_q17.jpg"]
    },
    {
      q: "A imagem de OCT mostra o resultado pós-ICP no caso da Fig. 2.11 (stent everolimus 3/38 mm cobrindo lesões proximal e média da ACD). O que demonstra?",
      options: [
        "a) Stent bem expandido e aposto com MSA de 4,8 mm² pelo OCT",
        "b) Trombose aguda do stent",
        "c) Malaposição significativa do stent",
        "d) Dissecção da borda do stent não tratada"
      ],
      answer: 0,
      comment: "A Fig. 2.12b confirma stent bem expandido e aposto com MSA de 4,8 mm² pelo OCT (e 5,9 mm² pelo IVUS — diferença esperada entre as modalidades). O NIRS pós-stent mostrou maxLCBI4mm de 262, indicando lipid core residual fora do stent. Este caso de IAMSEST por erosão de placa em mulher jovem ilustra a estratégia multimodalidade (OCT + IVUS + NIRS) para caracterização completa da lesão culpada.",
      source: "Atlas of OCT, Fig. 2.12b",
      images: ["images/oct_q18.jpg"]
    }
  ]
});
