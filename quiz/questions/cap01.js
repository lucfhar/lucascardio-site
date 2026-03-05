// ═══════════════════════════════════════════════════════════
// CAPÍTULO 01 — Biologia Vascular e Placa
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q1-01) Sobre placa vulnerável com grande núcleo lipídico/necrose (fibroateroma de capa fina), qual afirmação é FALSA?",
    options: [
      "a) A capa fibrosa costuma ter infiltrado de macrófagos e linfócitos em placas vulneráveis.",
      "b) A região necrótica/lipídica pode ser avaliada por métodos intracoronários como IVUS com análise de RF/NIRS e por OCT.",
      "c) Em microscopia com luz polarizada e Picrosirius red, fibras colágenas espessas podem aparecer em tons amarelo/alaranjado.",
      "d) A célula predominante na capa de placa vulnerável costuma ser a célula muscular lisa abundante e organizada."
    ],
    answer: 3,
    comment: "Placas vulneráveis (especialmente TCFA/plaque rupture substrate) tendem a ter capa fina com inflamação e relativamente poucas células musculares lisas na capa; técnicas intracoronárias podem caracterizar conteúdo lipídico.",
    source: "Interventional Cardiology — 1133 Questions (3ª ed.), Cap. 1; Finn AV et al. ATVB 2010;30:1282–1292.",
    images: ["images/cap01/q1-01_fig.png"]
  },
  {
    q: "Q1-02) Sobre estabilização de placa, qual afirmação é FALSA?",
    options: [
      "a) A remoção eficiente de células apoptóticas (eferocitose) favorece estabilização.",
      "b) Falhas na resolução de inflamação contribuem para progressão/instabilidade.",
      "c) Inflamação pode promover neovascularização intraplaca em placas complexas.",
      "d) Estabilização de placa se caracteriza por eferocitose defeituosa."
    ],
    answer: 3,
    comment: "Estabilização se associa a eferocitose efetiva (não defeituosa), reduzindo acúmulo de detritos/apoptose no core.",
    source: "Cap. 1; Tabas I. Nat Rev Immunol 2010;10:36–46."
  },
  {
    q: "Q1-03) Qual perfil é mais compatível com placa rota (ruptura) como substrato de SCA?",
    options: [
      "a) Alto colágeno na capa, baixo lipídio e baixa atividade de metaloproteinases.",
      "b) Baixo lipídio e core pequeno, com pouca inflamação e capa espessa.",
      "c) Pouca inflamação, ausência de metaloproteinases e core predominantemente fibroso.",
      "d) Menor colágeno, maior conteúdo lipídico e maior expressão de metaloproteinases."
    ],
    answer: 3,
    comment: "Ruptura se associa a core lipídico maior, capa mais frágil (menos colágeno) e maior atividade de MMP, favorecendo ruptura/trombose.",
    source: "Cap. 1; Finn AV et al. ATVB 2010;30:1282–1292.",
    images: ["images/cap01/q1-03_fig.png"]
  },
  {
    q: "Q1-04) Em geral, a ruptura de placa ocorre com maior frequência em qual região geométrica da placa?",
    options: [
      "a) Nas “bordas/ombros” (shoulders), onde o estresse circunferencial tende a ser maior.",
      "b) No centro exato da capa fibrosa, onde o fluxo é sempre máximo.",
      "c) Apenas no ponto de maior calcificação densa da placa.",
      "d) Exclusivamente na região de menor curvatura do vaso."
    ],
    answer: 0,
    comment: "Modelos biomecânicos e estudos histopatológicos apontam maior estresse/propensão à ruptura nas regiões de ombro da placa.",
    source: "Cap. 1; Arroyo LH et al. Cardiovasc Res 1999;41:369–375."
  },
  {
    q: "Q1-05) Paciente com sintomas e alterações isquêmicas recentes apresenta elevação de troponina; o cenário é mais compatível com:",
    options: [
      "a) Progressão rápida de placa estável em poucos dias, sem trombo.",
      "b) Ruptura de placa com trombo e microêmbolos distais como causa da necrose miocárdica.",
      "c) “Falso positivo” de troponina como explicação principal, apesar de clínica/ECG.",
      "d) Exclusivamente vasoespasmo como mecanismo único e obrigatório."
    ],
    answer: 1,
    comment: "Em contexto clínico típico, a explicação mais provável é ruptura/erosão com trombo e embolização distal; vasoespasmo pode coexistir, mas raramente explica tudo sozinho.",
    source: "Cap. 1; Braunwald E. Am J Respir Crit Care Med 2012;185:924–932."
  },
  {
    q: "Q1-06) Em angioscopia, qual padrão tende a diferenciar NSTEMI de STEMI no trombo coronário?",
    options: [
      "a) NSTEMI costuma ter trombo mais vermelho por fibrina e hemácias.",
      "b) STEMI costuma ter trombo branco/cinzento predominantemente plaquetário.",
      "c) NSTEMI tende a ser mais branco/cinzento (plaquetas); STEMI tende a ser mais vermelho (fibrina/hemácias sobre componente plaquetário).",
      "d) Não há diferença consistente descrita entre NSTEMI e STEMI."
    ],
    answer: 2,
    comment: "Descrições clássicas mostram NSTEMI com trombo mais plaquetário (branco) e STEMI com componente fibrina/hemácias mais proeminente (vermelho).",
    source: "Cap. 1; Mizuno K et al. N Engl J Med 1992;326:287–291."
  },
  {
    q: "Q1-07) Sobre o papel das células musculares lisas (CML) na capa fibrosa, qual afirmação é FALSA?",
    options: [
      "a) CML contribuem para síntese de matriz extracelular e reforço da capa fibrosa.",
      "b) Perda de CML pode reduzir a integridade mecânica da capa.",
      "c) CML estão associadas ao “fortalecimento” da capa em placas mais estáveis.",
      "d) CML são as principais responsáveis por enfraquecer a capa ao degradar colágeno e promover ruptura."
    ],
    answer: 3,
    comment: "Macrófagos/MMP e inflamação estão mais ligados ao enfraquecimento; CML, em geral, reforçam a capa por síntese de matriz.",
    source: "Cap. 1; conceitos de biologia de placa."
  },
  {
    q: "Q1-08) A presença de múltiplas placas complexas/instáveis em um mesmo paciente sugere principalmente:",
    options: [
      "a) Um processo puramente local e mecânico restrito a um único segmento coronário.",
      "b) Ausência de participação inflamatória sistêmica.",
      "c) Fenômeno raro, sem relevância para risco.",
      "d) Contribuição de inflamação sistêmica e “vulnerabilidade pan-coronária”."
    ],
    answer: 3,
    comment: "Pacientes com múltiplas placas complexas tendem a ter marcadores inflamatórios mais elevados, sugerindo componente sistêmico.",
    source: "Cap. 1; Goldstein JA et al. N Engl J Med 2000;343:915–922."
  },
  {
    q: "Q1-09) A proteína C reativa (PCR) é produzida principalmente:",
    options: [
      "a) No endotélio, em resposta a IL-4.",
      "b) No fígado, em resposta pró-inflamatória mediada especialmente por IL-6.",
      "c) Em plaquetas, como produto direto da agregação.",
      "d) No miocárdio, como marcador específico de necrose."
    ],
    answer: 1,
    comment: "PCR é um reagente de fase aguda sintetizado no fígado, induzido por citocinas como IL-6.",
    source: "Cap. 1; fisiologia de reagentes de fase aguda."
  },
  {
    q: "Q1-10) Sobre TCFA (thin-cap fibroatheroma), qual afirmação é VERDADEIRA?",
    options: [
      "a) Geralmente apresentam calcificação densa e extensa como principal característica.",
      "b) São invariavelmente placas pequenas, sem relevância para eventos agudos.",
      "c) Tipicamente têm core lipídico reduzido e capa muito espessa.",
      "d) Em média, têm menor grau de calcificação do que outras placas avançadas mais estáveis."
    ],
    answer: 3,
    comment: "TCFA se associa a core lipídico e capa fina; calcificação pode existir, mas tende a ser menos proeminente que em placas avançadas mais calcificadas/estáveis.",
    source: "Cap. 1; Virmani R et al. JACC 2006;47(Suppl):C13–C18."
  },
  {
    q: "Q1-11) Em prevenção primária, qual marcador melhor estratificou maior benefício relativo do AAS em estudos clássicos?",
    options: [
      "a) CK-MB basal.",
      "b) Troponina ultrasensível em repouso.",
      "c) Dímero-D isolado.",
      "d) PCR (particularmente em quintis mais altos)."
    ],
    answer: 3,
    comment: "Em análises clássicas, benefício do AAS em prevenção primária foi mais evidente em indivíduos com PCR mais elevada.",
    source: "Cap. 1; Ridker PM et al. N Engl J Med 1997;336:973–979."
  },
  {
    q: "Q1-12) Sobre remodelamento positivo (expansão da parede com preservação do lúmen), qual afirmação é mais correta?",
    options: [
      "a) Preserva o lúmen, mas não “protege” de eventos; é mais frequente em placas associadas a eventos agudos.",
      "b) É sinônimo de placa estável e baixo risco de ruptura.",
      "c) Implica necessariamente ausência de inflamação na placa.",
      "d) Sempre reduz a carga aterosclerótica total do vaso."
    ],
    answer: 0,
    comment: "Remodelamento positivo pode mascarar estenose no lúmen e se associa a fenótipo mais vulnerável em alguns estudos.",
    source: "Cap. 1; Schoenhagen P et al. Circulation 2000;101:598–603."
  },
  {
    q: "Q1-13) A neovascularização intraplaca (microvasos) surge principalmente a partir de:",
    options: [
      "a) Artérias coronárias epicárdicas diretamente para o core, sem vasa vasorum.",
      "b) Veias coronárias para dentro da placa.",
      "c) Capilares provenientes do lúmen endotelial em todos os casos.",
      "d) Vasa vasorum, associando-se a crescimento, hemorragia intraplaca e vulnerabilidade."
    ],
    answer: 3,
    comment: "Neovascularização intraplaca costuma originar-se do vasa vasorum e pode favorecer hemorragia e progressão da placa.",
    source: "Cap. 1; conceitos de biologia vascular/angiogênese intraplaca."
  },
  {
    q: "Q1-14) Uma placa com camada espessa e densa de tecido sobre o core lipídico é melhor classificada como:",
    options: [
      "a) Nódulo calcificado de alto risco obrigatório.",
      "b) Placa rota por definição.",
      "c) Fibroateroma de capa espessa (thick-cap fibroatheroma).",
      "d) Erosão endotelial com trombo vermelho."
    ],
    answer: 2,
    comment: "Capa mais espessa e rica em matriz sugere fenótipo mais estável (thick-cap).",
    source: "Cap. 1; classificação morfológica de placas."
  },
  {
    q: "Q1-15) A nitroglicerina promove vasodilatação coronária principalmente por:",
    options: [
      "a) Relaxamento endotelio-independente do músculo liso da túnica média (via NO/cGMP).",
      "b) Bloqueio de canais de cálcio tipo L no miocárdio como efeito primário.",
      "c) Ativação de receptores beta-2 endoteliais como mecanismo essencial.",
      "d) Inibição direta de agregação plaquetária como principal via."
    ],
    answer: 0,
    comment: "Nitratos atuam predominantemente no músculo liso vascular, independentemente de endotélio íntegro, via sinalização NO–cGMP.",
    source: "Cap. 1; farmacologia vascular."
  },
  {
    q: "Q1-16) A síntese de NO pelo endotélio (eNOS) envolve a conversão de:",
    options: [
      "a) L-arginina em L-citrulina, liberando NO.",
      "b) Nitrito (NO2) em NO como via principal obrigatória em condições basais.",
      "c) LDL em HDL com produção de NO.",
      "d) Colesterol em prostaciclina."
    ],
    answer: 0,
    comment: "A via clássica: L-arginina → L-citrulina + NO (eNOS).",
    source: "Cap. 1; bioquímica do NO."
  },
  {
    q: "Q1-17) O efeito vasodilatador intracelular do NO ocorre principalmente por:",
    options: [
      "a) Aumento de AMP cíclico (cAMP) via adenilato ciclase.",
      "b) Bloqueio direto de receptores alfa-adrenérgicos.",
      "c) Ativação de canais de sódio e influxo de cálcio.",
      "d) Ativação da guanilato ciclase solúvel e aumento de cGMP."
    ],
    answer: 3,
    comment: "NO ativa guanilato ciclase solúvel → ↑cGMP → relaxamento do músculo liso.",
    source: "Cap. 1; fisiologia do NO/cGMP."
  },
  {
    q: "Q1-18) Inflamação por macrófagos em placa vulnerável contribui diretamente para instabilidade ao aumentar:",
    options: [
      "a) Expressão de metaloproteinases de matriz (MMP), degradando matriz/capa.",
      "b) Síntese de colágeno tipo I e espessamento uniforme da capa.",
      "c) Produção exclusiva de HDL funcional.",
      "d) Formação de “tampão” fibrótico protetor imediato."
    ],
    answer: 0,
    comment: "Macrófagos ativados podem elevar MMP, enfraquecendo a capa e favorecendo ruptura.",
    source: "Cap. 1; biologia de MMP em placa."
  },
  {
    q: "Q1-19) Qual conjunto de características é mais típico da aterosclerose no diabetes?",
    options: [
      "a) Menor carga aterosclerótica e menor inflamação intraplaca.",
      "b) Redução de PCR e redução de infiltração macrofágica.",
      "c) Ausência de vias AGE/RAGE e menor estresse oxidativo.",
      "d) Maior carga aterosclerótica, maior inflamação (PCR), mais macrófagos intraplaca e upregulation de RAGE."
    ],
    answer: 3,
    comment: "Diabetes se associa a maior burden, inflamação e vias AGE/RAGE, contribuindo para risco e progressão.",
    source: "Cap. 1; Wendt T et al. Atherosclerosis 2006;185:70–77."
  },
  {
    q: "Q1-20) Preditores independentes de remodelamento positivo incluem, sobretudo:",
    options: [
      "a) Apenas tabagismo, sem relação com inflamação.",
      "b) Exclusivamente hipertensão, sem relação com morfologia da parede.",
      "c) Somente tamanho do lúmen, sem alterações na camada média.",
      "d) Inflamação, calcificação e atrofia da camada média."
    ],
    answer: 3,
    comment: "Estudos histopatológicos relacionam remodelamento positivo a inflamação e alterações estruturais da parede, incluindo atrofia medial.",
    source: "Cap. 1; Burke AP et al. Circulation 2002;105:297–303."
  },
  {
    q: "Q1-21) Na hiperplasia neointimal pós-stent, qual afirmação é mais correta?",
    options: [
      "a) Predomina colágeno tipo I e queda de colágeno tipo III.",
      "b) Há aumento relativo de colágeno tipo III como parte da resposta proliferativa/remodelamento.",
      "c) Não há participação de matriz extracelular, apenas edema.",
      "d) O processo depende exclusivamente de eosinófilos, sem CML."
    ],
    answer: 1,
    comment: "A resposta proliferativa envolve CML/matriz, com produção aumentada de colágeno tipo III em relação ao tipo I em fases específicas.",
    source: "Cap. 1; biologia vascular pós-implante."
  },
  {
    q: "Q1-22) Em angina instável/NSTEMI, a trombose coronária tende a ser predominantemente:",
    options: [
      "a) Trombo “vermelho” rico em fibrina como regra universal.",
      "b) Trombo puramente calcificado.",
      "c) Trombo rico em plaquetas (mais “branco”), e trombólise pode ser deletéria por ativação plaquetária.",
      "d) Sempre ausência de trombo detectável."
    ],
    answer: 2,
    comment: "UA/NSTEMI costuma envolver trombo mais plaquetário; trombólise não é recomendada e pode piorar por ativação plaquetária.",
    source: "Cap. 1; Fuster V et al. JACC 2005;46:937–954."
  },
  {
    q: "Q1-23) Qual fator se associou independentemente a maior infiltração macrofágica em estudos humanos de placa carotídea?",
    options: [
      "a) HDL elevado.",
      "b) Triglicerídeos baixos.",
      "c) LDL baixo com HDL alto.",
      "d) HDL baixo."
    ],
    answer: 3,
    comment: "HDL baixo se associou a maior infiltração inflamatória (macrófagos) em estudos de endarterectomia carotídea; placas trombóticas podem existir mesmo sem sintomas.",
    source: "Cap. 1; Mauriello A et al. Atherosclerosis 2010;208:572–580."
  },
  {
    q: "Q1-24) Em biomecânica de placa, qual afirmação é INCORRETA?",
    options: [
      "a) Tensões na capa dependem de geometria, espessura da capa e composição do core.",
      "b) Inflamação pode reduzir resistência mecânica da capa via degradação de matriz.",
      "c) Gradientes de estresse podem ser maiores em regiões de transição (ombros).",
      "d) Placas com capa mais fina tendem a suportar menor carga antes de falhar.",
      "e) A ruptura ocorre mais frequentemente no centro exato da capa fibrosa do que nos ombros."
    ],
    answer: 4,
    comment: "A ruptura é descrita com maior frequência nas regiões de ombro (shoulders), não no centro da capa.",
    source: "Cap. 1; Richardson PD et al. Lancet 1989;2:941–944."
  },
  {
    q: "Q1-25) No diabetes, o PAI-1 (inibidor do ativador do plasminogênio-1) em placas tende a estar:",
    options: [
      "a) Reduzido, favorecendo fibrinólise aumentada.",
      "b) Inexistente, sem relação com trombose.",
      "c) Normal e irrelevante para o fenótipo protrombótico.",
      "d) Aumentado, contribuindo para estado pró-trombótico/hipofibrinolítico."
    ],
    answer: 3,
    comment: "PAI-1 costuma estar aumentado em placas/estado metabólico diabético, reduzindo fibrinólise e favorecendo trombose.",
    source: "Cap. 1; Jax TW et al. Cardiovasc Diabetol 2009;8:48."
  },
  {
    q: "Q1-26) Sobre metaloproteinases (MMP) no infarto do miocárdio, qual afirmação é mais correta?",
    options: [
      "a) MMP “salvam” o miocárdio ao impedir remodelamento ventricular.",
      "b) MMP não participam de remodelamento pós-IAM.",
      "c) MMP são sempre protetoras e reduzem dilatação ventricular.",
      "d) MMP se associam a expansão/dilatação e remodelamento ventricular após IAM."
    ],
    answer: 3,
    comment: "MMP estão implicadas em degradação de matriz e remodelamento pós-IAM, podendo contribuir para dilatação/expansão ventricular.",
    source: "Cap. 1; Lindsey ML et al. Circulation 2002;105:753–758."
  },
  {
    q: "Q1-27) Durante apoptose, macrófagos podem aumentar trombogenicidade intraplaca principalmente por:",
    options: [
      "a) Aumentar HDL funcional localmente.",
      "b) Reduzir expressão de fator tecidual (tissue factor).",
      "c) Inibir cascata de coagulação por liberação de heparina endógena.",
      "d) Expressar fator tecidual, favorecendo ativação da coagulação."
    ],
    answer: 3,
    comment: "Macrófagos apoptóticos podem expressar fator tecidual, aumentando potencial trombogênico da placa.",
    source: "Cap. 1; conceitos de trombogenicidade intraplaca."
  },
  {
    q: "Q1-28) A calcificação vascular, em grande parte, se relaciona a qual mecanismo celular?",
    options: [
      "a) Transdiferenciação de CML vasculares (e pericitos) para fenótipo osteoblástico.",
      "b) Transformação de neutrófilos em condrócitos.",
      "c) Deposição exclusiva de cálcio por plaquetas em trombos recentes.",
      "d) Apenas precipitação físico-química passiva sem participação celular."
    ],
    answer: 0,
    comment: "Evidências apontam para processo ativo, com transdiferenciação osteogênica de CML/pericitos contribuindo para calcificação.",
    source: "Cap. 1; Johnson RC et al. Circ Res 2006;99:1044–1059."
  },
  {
    q: "Q1-29) Anos após DES, OCT mostra neoíntima com aspecto de placa excêntrica, com “capa” e core menos denso, lembrando aterosclerose nativa. O diagnóstico mais provável é:",
    options: [
      "a) Reestenose puramente por hiperplasia homogênea sem transformação aterosclerótica.",
      "b) Malaposição aguda sem tecido neointimal.",
      "c) Trombo recente isolado sem substrato de placa.",
      "d) Neoaterosclerose (neoatherosclerosis) intra-stent."
    ],
    answer: 3,
    comment: "Neoaterosclerose é transformação aterosclerótica da neoíntima, mais descrita após DES (especialmente gerações antigas) do que BMS, tipicamente tardia.",
    source: "Cap. 1; Otsuka F et al. Eur Heart J 2015;36:2147–2159.",
    images: ["images/cap01/q1-29_oct.png"]
  },
  {
    q: "Q1-30) Idoso com estenose aórtica importante, sopro típico, anemia/hemorragia digestiva sem fonte endoscópica evidente. Qual diátese hemorrágica é mais provável?",
    options: [
      "a) Trombocitopenia imune primária.",
      "b) Deficiência de fator V.",
      "c) Doença de von Willebrand adquirida (Síndrome de Heyde), frequentemente associada a angiodisplasias.",
      "d) Síndrome de Bernard–Soulier."
    ],
    answer: 2,
    comment: "Síndrome de Heyde: estenose aórtica → alto cisalhamento → alteração/depuração de multímeros de vWF → sangramento (frequentemente por angiodisplasia intestinal).",
    source: "Cap. 1; Loscalzo J. N Engl J Med 2013;368:579–580."
  },
{
    q: "Q1-V2-01) Em um paciente com SCA, OCT mostra ruptura de capa com cavidade comunicante com o lúmen e trombo predominantemente vermelho. Qual combinação histopatológica é MAIS compatível com esse achado?",
    options: [
      "a) Capa espessa rica em CML + baixa expressão de MMP + core pequeno",
      "b) Capa fina com macrófagos abundantes + core necrótico amplo + alta atividade de MMP",
      "c) Erosão endotelial com matriz rica em proteoglicanos + ausência de core necrótico",
      "d) Nódulo calcificado com calcificação lamelar extensa + trombo branco predominante",
      "e) Placa fibrosa estável com colágeno denso + pouca inflamação + trombo por estase"
    ],
    answer: 1,
    comment: "Ruptura típica: core necrótico amplo, inflamação (macrófagos), capa fina e degradação de matriz (MMP) → trombose frequentemente rica em fibrina/hemácias.",
    source: "Virmani R et al. J Am Coll Cardiol. 2006;47(Suppl):C13–C18; Finn AV et al. ATVB. 2010;30:1282–1292."
  },
  {
    q: "Q1-V2-02) Em estudo de placa vulnerável, qual afirmação reflete melhor a relação entre neovascularização intraplaca e eventos?",
    options: [
      "a) Neovascularização intraplaca é majoritariamente originada do lúmen e é protetora por aumentar oxigenação do core",
      "b) Microvasos frágeis do vasa vasorum associam-se a hemorragia intraplaca, expansão do core e maior vulnerabilidade",
      "c) Antiangiogênicos já demonstraram, de forma consistente, reduzir ruptura de placa em RCTs de prevenção secundária",
      "d) Hemorragia intraplaca é fenômeno tardio sem impacto em progressão/vulnerabilidade",
      "e) A densidade de neovasos não se correlaciona com inflamação intraplaca"
    ],
    answer: 1,
    comment: "Neovasos do vasa vasorum são frágeis e associados a hemorragia intraplaca, aumento do core e instabilidade; correlação com inflamação é frequente.",
    source: "Virmani R et al. JACC. 2006;47(Suppl):C13–C18."
  },
  {
    q: "Q1-V2-03) Em diabético com doença difusa, qual mecanismo contribui mais para fenótipo pró-trombótico/instável da placa?",
    options: [
      "a) Redução de AGE/RAGE e menor estresse oxidativo",
      "b) Aumento de eferocitose e redução de necrose do core",
      "c) Aumento de PAI-1 e disfunção endotelial com inflamação persistente",
      "d) Predominância de CML na capa fina com aumento de colágeno e maior estabilidade",
      "e) Redução de fator tecidual em macrófagos intraplaca"
    ],
    answer: 2,
    comment: "Diabetes associa-se a disfunção endotelial, inflamação, vias AGE/RAGE e estado hipofibrinolítico (PAI-1), favorecendo trombose e progressão.",
    source: "Wendt T et al. Atherosclerosis. 2006;185:70–77; Jax TW et al. Cardiovasc Diabetol. 2009;8:48."
  },
  {
    q: "Q1-V2-04) Após ruptura subclínica, “cicatrização” de placa pode levar a progressão luminal. Qual processo celular/molecular é mais associado a esse fenômeno?",
    options: [
      "a) Supressão de síntese de matriz por CML e completa ausência de colágeno",
      "b) Produção de matriz por CML (incluindo colágeno) e organização de trombo mural com aumento de espessura da placa",
      "c) Exclusão completa de inflamação local como requisito obrigatório",
      "d) Necessariamente regressão do core lipídico sem aumento de volume de placa",
      "e) Apenas calcificação nodular, sem remodelamento de matriz"
    ],
    answer: 1,
    comment: "Rupturas repetidas com cicatrização (SMC + matriz) podem ‘somar’ camadas e aumentar volume/estenose ao longo do tempo.",
    source: "Finn AV et al. ATVB. 2010;30:1282–1292."
  },
  {
    q: "Q1-V2-05) Em um paciente com NSTEMI, angioscopia sugere trombo predominantemente plaquetário (“branco”). Qual conduta farmacológica intraprocedimento é MAIS coerente com esse substrato, na ausência de contraindicação?",
    options: [
      "a) Trombólise sistêmica de rotina",
      "b) Potencial benefício de intensificação antiplaquetária (ex.: inibidor P2Y12 potente) e consideração de GPIIb/IIIa em bailout",
      "c) Suspender antiagregantes e manter apenas anticoagulante oral",
      "d) Evitar qualquer terapia antitrombótica por risco hemorrágico universal",
      "e) Priorizar apenas vasodilatador intracoronário como terapia causal"
    ],
    answer: 1,
    comment: "Trombo mais plaquetário favorece estratégia antiplaquetária robusta (P2Y12 potente; GPIIb/IIIa em situações selecionadas). Trombólise não é rotina em NSTEMI.",
    source: "ACC/AHA NSTEMI guideline (síntese conceitual); fisiopatologia clássica de trombo branco vs vermelho."
  },
  {
    q: "Q1-V2-06) PCR-us (hs-CRP) elevada em prevenção secundária: qual evidência clínica é MAIS consistente?",
    options: [
      "a) Intervenção anti-inflamatória sempre reduz MACE independentemente de via/medicação",
      "b) Redução de eventos pode ocorrer com inibição de IL-1β em pacientes com inflamação residual, sem efeito relevante em LDL",
      "c) Metotrexato reduziu eventos de forma robusta em RCT de CAD estável",
      "d) hs-CRP não possui valor prognóstico incremental em doença aterosclerótica",
      "e) hs-CRP elevada contraindica estatina em qualquer cenário"
    ],
    answer: 1,
    comment: "CANTOS mostrou redução de eventos com canakinumab (IL-1β) em inflamação residual; CIRT (metotrexato) foi negativo para eventos/biomarcadores inflamatórios.",
    source: "Ridker PM et al. N Engl J Med. 2017;377:1119–1131; Ridker PM et al. N Engl J Med. 2019;380:752–762."
  },
  {
    q: "Q1-V2-07) Positive remodeling (IVUS) e risco: qual afirmação é MAIS correta?",
    options: [
      "a) É sinônimo de baixo risco porque mantém lúmen preservado",
      "b) Está frequentemente associado a maior carga de placa, inflamação e fenótipo vulnerável, podendo “mascarar” gravidade angiográfica",
      "c) Exclui a possibilidade de core necrótico",
      "d) Implica, por definição, ausência de macrofágos",
      "e) Torna desnecessária avaliação fisiológica (FFR/iFR) em qualquer grau de estenose"
    ],
    answer: 1,
    comment: "Remodelamento positivo pode coexistir com grande carga de placa e vulnerabilidade, com estenose luminal menos evidente.",
    source: "Schoenhagen P et al. Circulation. 2000;101:598–603."
  },
  {
    q: "Q1-V2-08) Neoaterosclerose intra-stent: qual padrão temporal e mecanístico é mais aceitável?",
    options: [
      "a) Fenômeno exclusivamente agudo (<30 dias) por hiperplasia homogênea",
      "b) Processo tardio com formação de core lipídico/necrose dentro da neoíntima, associado a eventos tardios (ISR/trombose tardia)",
      "c) Ocorre apenas em BMS e é inexistente em DES",
      "d) Não tem relação com inflamação e disfunção endotelial",
      "e) Sempre exige tromboaspiração de rotina em reestenose"
    ],
    answer: 1,
    comment: "Neoaterosclerose é transformação aterosclerótica tardia da neoíntima (DES/BMS), associada a ISR e eventos tardios.",
    source: "Otsuka F et al. Eur Heart J. 2015;36:2147–2159."
  },
  {
    q: "Q1-V2-09) Em placa vulnerável, qual marcador intracoronário tem maior “assinatura” de conteúdo lipídico, quando disponível?",
    options: [
      "a) OCT isoladamente para lipídio (sem limitações)",
      "b) IVUS grayscale exclusivamente",
      "c) NIRS (near-infrared spectroscopy) para detecção de pool lipídico",
      "d) Angiografia convencional (haze) como método específico",
      "e) Pressão distal (Pd) em repouso"
    ],
    answer: 2,
    comment: "NIRS é especificamente voltada para conteúdo lipídico; OCT/IVUS têm outras vantagens e limitações de caracterização tecidual.",
    source: "Literatura de imagem intracoronária (síntese conceitual)."
  },
  {
    q: "Q1-V2-10) Síndrome de Heyde: qual mecanismo fisiopatológico conecta estenose aórtica e sangramento por angiodisplasia?",
    options: [
      "a) Hipertensão portal e varizes",
      "b) Consumo de fatores vitamina K dependentes",
      "c) Proteólise/depuração de multímeros de vWF por alto cisalhamento, levando a doença de von Willebrand adquirida",
      "d) Plaquetopenia por destruição esplênica",
      "e) Hemólise autoimune quente com coagulopatia secundária"
    ],
    answer: 2,
    comment: "Alto cisalhamento na EAo → perda de multímeros de vWF de alto peso molecular → sangramento (frequentemente por angiodisplasia).",
    source: "Loscalzo J. N Engl J Med. 2013;368:579–580."
  },

  // 20 questões adicionais avançadas (mantendo o nível), autorais:
  {
    q: "Q1-V2-11) Sobre erosão de placa (vs ruptura), qual perfil é MAIS compatível?",
    options: [
      "a) Core necrótico amplo + capa extremamente fina + macrófagos dominantes",
      "b) Matriz rica em proteoglicanos, menor core necrótico e trombo mais superficial, com menor evidência de ruptura de capa",
      "c) Calcificação nodular extensa como mecanismo dominante em todos os casos",
      "d) Necessariamente trombo vermelho volumoso em todas as apresentações",
      "e) Exclusiva de homens jovens tabagistas"
    ],
    answer: 1,
    comment: "Erosão tende a envolver trombo sobre superfície endotelial disfuncional/denudada, com menos ruptura franca e, frequentemente, menor core necrótico.",
    source: "Virmani R et al. JACC. 2006;47(Suppl):C13–C18."
  },
  {
    q: "Q1-V2-12) “Vulnerabilidade pan-coronária” em SCA implica qual conduta interpretativa ao ver múltiplas placas complexas na angiografia?",
    options: [
      "a) Considerar que só a lesão culpada importa e inflamação sistêmica é irrelevante",
      "b) Interpretar como marcador de risco global e reforçar estratégia intensiva de prevenção secundária (LDL e inflamação residual)",
      "c) Suspender estatina por risco de hemorragia intraplaca",
      "d) Indicar stent profilático em todas as placas não-obstrutivas",
      "e) Concluir que o evento é necessariamente embólico não aterosclerótico"
    ],
    answer: 1,
    comment: "Múltiplas placas complexas sugerem biologia sistêmica; traduz-se em intensificação de terapia de base, não em intervenção profilática indiscriminada.",
    source: "Goldstein JA et al. N Engl J Med. 2000;343:915–922."
  },
  {
    q: "Q1-V2-13) Em placa com grande core necrótico, eferocitose defeituosa promove:",
    options: [
      "a) Menor necrose do core e maior estabilidade",
      "b) Acúmulo de células apoptóticas, aumento de necrose secundária e ampliação do core",
      "c) Redução de fator tecidual e menor trombogenicidade",
      "d) Aumento de CML na capa fina como mecanismo protetor",
      "e) Regressão espontânea independentemente de LDL"
    ],
    answer: 1,
    comment: "Falha de eferocitose → detritos/apoptose persistem → necrose secundária → core cresce e placa torna-se mais vulnerável.",
    source: "Tabas I. Nat Rev Immunol. 2010;10:36–46."
  },
  {
    q: "Q1-V2-14) Em cenário de microembolização por ruptura com fluxo epicárdico preservado (TIMI 3), qual marcador angiográfico/microvascular é mais esperado reduzir?",
    options: [
      "a) Pressão sistólica aórtica",
      "b) TIMI frame count sempre normal",
      "c) Myocardial blush grade (MBG) e/ou TMPG podem piorar apesar de TIMI 3",
      "d) Necessariamente surge dissecção angiográfica",
      "e) Apenas melhora de perfusão subendocárdica"
    ],
    answer: 2,
    comment: "Microembolização pode preservar TIMI 3, mas reduzir blush/perfusão tecidual.",
    source: "Conceitos clássicos de microvasculatura/perfusão miocárdica."
  },
  {
    q: "Q1-V2-15) Quanto à trombogenicidade intraplaca, qual mecanismo é mais plausível em macrófagos ativados/apoptóticos?",
    options: [
      "a) Redução de expressão de fator tecidual",
      "b) Aumento de fator tecidual e amplificação da via extrínseca",
      "c) Aumento de antitrombina III intraplaca como mecanismo dominante",
      "d) Inibição de trombina por NO derivado de macrófagos",
      "e) Exclusão de coagulação por ausência de fosfolipídios"
    ],
    answer: 1,
    comment: "Macrófagos podem expressar fator tecidual, elevando trombogenicidade local após exposição do core ao lúmen.",
    source: "Biologia de placa (síntese conceitual)."
  },
  {
    q: "Q1-V2-16) Em avaliação de placa “de alto risco”, qual combinação é mais coerente com risco futuro em grandes coortes de imagem?",
    options: [
      "a) Lúmen amplo + baixa carga de placa + ausência de remodelamento",
      "b) Carga de placa elevada + remodelamento positivo + alto conteúdo lipídico",
      "c) Estenose 10% por QCA isoladamente",
      "d) Calcificação densa contínua como único preditor universal",
      "e) Apenas presença de espasmo em angiografia"
    ],
    answer: 1,
    comment: "Carga de placa e fenótipo vulnerável (incluindo remodelamento positivo e lipídio) são mais informativos do que estenose luminal isolada.",
    source: "Schoenhagen P et al. Circulation. 2000;101:598–603 (conceitos)."
  },
  {
    q: "Q1-V2-17) Em paciente com vasoespasmo importante responsivo a NTG IC, qual afirmação é FALSA?",
    options: [
      "a) NTG promove relaxamento endotelio-independente do músculo liso",
      "b) Bloqueadores de canal de cálcio de longa ação são terapia de base útil",
      "c) Implante de stent na área de espasmo pode não resolver e pode coexistir espasmo em segmentos não tratados",
      "d) O mecanismo principal do benefício da NTG é aumento de NO e ativação de cGMP",
      "e) A melhora pós-NTG prova que a lesão é aterosclerótica fixa grave"
    ],
    answer: 4,
    comment: "Resposta a NTG favorece componente funcional (espasmo); não “prova” estenose fixa grave.",
    source: "Farmacologia vascular (síntese)."
  },
  {
    q: "Q1-V2-18) A via de sinalização do NO que culmina em vasodilatação envolve principalmente:",
    options: [
      "a) Adenilato ciclase e aumento de cAMP como via dominante",
      "b) Guanilato ciclase solúvel e aumento de cGMP",
      "c) Ativação direta de receptores PAR-1",
      "d) Ativação de COX-2 como mecanismo primário",
      "e) Bloqueio de canais de sódio no músculo liso"
    ],
    answer: 1,
    comment: "NO → guanilato ciclase solúvel → ↑cGMP → relaxamento do músculo liso.",
    source: "Fisiologia do NO/cGMP (síntese)."
  },
  {
    q: "Q1-V2-19) TCFA em patologia (critérios clássicos) inclui qual elemento-chave?",
    options: [
      "a) Capa >200 µm e ausência de macrófagos",
      "b) Capa <~65 µm com macrófagos abundantes e CML escassas, sobre core necrótico",
      "c) Apenas calcificação densa como critério obrigatório",
      "d) Ausência de core necrótico por definição",
      "e) Necessariamente trombo oclusivo no momento da avaliação"
    ],
    answer: 1,
    comment: "TCFA: core necrótico + capa fina (~<65 µm) com inflamação macrofágica; é lesão de risco, não necessariamente trombosada no momento.",
    source: "Virmani R et al. JACC. 2006;47(Suppl):C13–C18."
  },
  {
    q: "Q1-V2-20) Em inflamação residual pós-SCA, qual biomarcador tem uso prognóstico clássico e melhor reprodutibilidade clínica?",
    options: [
      "a) Troponina I crônica como marcador específico de inflamação",
      "b) hs-CRP como reagente de fase aguda com valor prognóstico incremental",
      "c) CK total em repouso",
      "d) BNP como marcador primário de instabilidade de placa",
      "e) Hematócrito como marcador direto de vulnerabilidade"
    ],
    answer: 1,
    comment: "hs-CRP tem associação prognóstica robusta em diversos cenários aterotrombóticos.",
    source: "Ridker PM et al. N Engl J Med. 1997;336:973–979 (base histórica)."
  },

  // Para manter o bloco em 30, seguem Q1-V2-21 a Q1-V2-30 (alta complexidade, sem imagem):
  {
    q: "Q1-V2-21) Em paciente com múltiplas intervenções e inflamação persistente, qual estratégia é mais racional para reduzir risco de eventos relacionados a biologia de placa, além de otimizar LDL?",
    options: [
      "a) Substituir estatina por fibrato isolado como regra",
      "b) Considerar colchicina em prevenção secundária selecionada (quando apropriado) como alvo inflamatório",
      "c) Evitar qualquer intervenção anti-inflamatória por ausência completa de evidência",
      "d) Anticoagulação plena indefinida como terapia anti-inflamatória",
      "e) Suspender antiagregação para reduzir inflamação"
    ],
    answer: 1,
    comment: "Colchicina demonstrou redução de eventos em RCTs de prevenção secundária; não substitui controle intensivo de LDL, mas atua em inflamação residual selecionada.",
    source: "Tardif JC et al. N Engl J Med. 2019;381:2497–2505; Nidorf SM et al. N Engl J Med. 2020;383:1838–1847."
  },
  {
    q: "Q1-V2-22) Em OCT de neoaterosclerose intra-stent, qual achado é mais sugestivo de risco de trombose muito tardia?",
    options: [
      "a) Endotelização completa homogênea sem sinais de lipidização",
      "b) Neoíntima fina e homogênea com superfície lisa",
      "c) Neoíntima com sinal compatível com pool lipídico/necrose e possível ruptura intrastent",
      "d) Apenas struts bem aposicionados sem tecido",
      "e) Calcificação profunda sem interface luminal"
    ],
    answer: 2,
    comment: "Neoaterosclerose pode evoluir para ruptura intrastent e trombose tardia, especialmente com tecido lipidizado/necrose e descontinuidade superficial.",
    source: "Otsuka F et al. Eur Heart J. 2015;36:2147–2159."
  },
  {
    q: "Q1-V2-23) Em um paciente com “hazy lesion” e troponina elevada, qual mecanismo explica melhor necrose miocárdica com fluxo epicárdico preservado?",
    options: [
      "a) Artefato laboratorial como explicação mais provável",
      "b) Isquemia exclusivamente por aumento de demanda em repouso",
      "c) Microembolização distal a partir de trombo/ruptura, com obstrução microvascular",
      "d) Exclusivamente vasoespasmo sem trombo e sem microembolização",
      "e) Necessariamente oclusão total sustentada do vaso por horas"
    ],
    answer: 2,
    comment: "Microembolização e disfunção microvascular explicam troponina elevada com TIMI 3 e angiografia pouco expressiva.",
    source: "Fisiopatologia de SCA (síntese)."
  },
  {
    q: "Q1-V2-24) Se um estudo inclui IM periprocedimento no desfecho composto para comparar estratégia invasiva vs clínica, o viés MAIS provável é:",
    options: [
      "a) Favorecer a estratégia invasiva por reduzir eventos capturados",
      "b) Favorecer a estratégia clínica por “criar” eventos no braço invasivo que não podem ocorrer no braço clínico",
      "c) Tornar o estudo automaticamente inválido por definição",
      "d) Eliminar necessidade de ajuste por risco basal",
      "e) Aumentar poder estatístico sem mudar interpretação"
    ],
    answer: 1,
    comment: "Incluir IM periprocedimento pode penalizar o braço invasivo por definição, gerando “hazard” inicial.",
    source: "Conceitos de endpoints em ensaios; princípios epidemiológicos."
  },
  {
    q: "Q1-V2-25) Qual evento patológico é mais diretamente ligado a “expansão rápida” do core necrótico em placas avançadas?",
    options: [
      "a) Eferocitose eficiente e resolução inflamatória",
      "b) Hemorragia intraplaca recorrente e falha de eferocitose",
      "c) Aumento exclusivo de colágeno da capa",
      "d) Regressão de LDL sem alteração inflamatória",
      "e) Migração de CML com estabilização imediata"
    ],
    answer: 1,
    comment: "Hemorragia intraplaca e falha de remoção de apoptóticos ampliam core e vulnerabilidade.",
    source: "Tabas I. Nat Rev Immunol. 2010;10:36–46."
  },
  {
    q: "Q1-V2-26) Em placas vulneráveis, a região de maior estresse mecânico (e, portanto, maior propensão à ruptura) localiza-se tipicamente:",
    options: [
      "a) No centro da capa, sempre",
      "b) Nas regiões de “ombro” (transição), onde gradientes de estresse são maiores",
      "c) Apenas na calcificação profunda",
      "d) Exclusivamente em regiões sem macrófagos",
      "e) No segmento com menor curvatura por definição"
    ],
    answer: 1,
    comment: "Modelos biomecânicos apontam maior estresse em ombros/áreas de transição.",
    source: "Richardson PD et al. Lancet. 1989;2:941–944."
  },
  {
    q: "Q1-V2-27) Em disfunção endotelial, qual padrão de resposta vasomotora é MAIS típico ao estímulo dependente de endotélio (ex.: acetilcolina)?",
    options: [
      "a) Vasodilatação preservada, sempre",
      "b) Resposta paradoxal com vasoconstrição/espasmo em segmentos disfuncionais",
      "c) Efeito idêntico ao nitrato intracoronário",
      "d) Ausência completa de qualquer resposta em todos os pacientes",
      "e) Apenas efeito sobre veias, sem efeito arterial"
    ],
    answer: 1,
    comment: "Em disfunção endotelial, estímulos dependentes de endotélio podem gerar vasoconstrição paradoxal.",
    source: "Fisiologia endotelial (síntese)."
  },
  {
    q: "Q1-V2-28) Em paciente com alto risco trombótico e sangramento prévio, qual abordagem de prevenção secundária é mais alinhada a “reduzir risco global” sem extrapolar para intervenção profilática em placa não obstrutiva?",
    options: [
      "a) Stent profilático em qualquer placa com core lipídico",
      "b) Intensificação de terapia médica baseada em risco (LDL, antiagregação adequada, controle de DM/PA e inflamação residual selecionada)",
      "c) Suspender estatina e manter apenas antianginoso",
      "d) Anticoagulação plena indefinida como regra universal",
      "e) Evitar qualquer avaliação de risco adicional"
    ],
    answer: 1,
    comment: "O manejo do risco é sistêmico; intervenção preventiva em placa não obstrutiva não é padrão.",
    source: "Princípios de prevenção secundária (ACC/ESC)."
  },
  {
    q: "Q1-V2-29) Em diabéticos, qual achado intraplaca é mais esperado em comparação a não diabéticos, em estudos patológicos?",
    options: [
      "a) Menor infiltração de macrófagos",
      "b) Menor expressão de receptores ligados a AGE (RAGE)",
      "c) Menor inflamação sistêmica (hs-CRP)",
      "d) Maior carga aterosclerótica e maior inflamação macrofágica",
      "e) Ausência de disfunção endotelial"
    ],
    answer: 3,
    comment: "Diabetes associa-se a maior burden e inflamação; vias AGE/RAGE são relevantes.",
    source: "Wendt T et al. Atherosclerosis. 2006;185:70–77."
  },
  {
    q: "Q1-V2-30) Um anti-inflamatório cardiovascular “ideal” em aterosclerose deveria, conceitualmente:",
    options: [
      "a) Reduzir eventos aumentando LDL",
      "b) Reduzir inflamação residual sem penalizar infecção de forma inaceitável e sem piorar perfil aterogênico",
      "c) Ser pró-trombótico para “tamponar” placa",
      "d) Substituir completamente estatinas",
      "e) Ser usado apenas em prevenção primária de baixo risco"
    ],
    answer: 1,
    comment: "A janela terapêutica inflamação–infecção é crítica; terapias anti-inflamatórias eficazes precisam equilibrar benefício CV e segurança.",
    source: "Ridker PM et al. N Engl J Med. 2017;377:1119–1131 (segurança/infecção como conceito)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap01",
    icon: "🔬",
    title: "Biologia Vascular e Placa",
    description: "Biologia da placa aterosclerótica, placa vulnerável, TCFA, remodelamento e mecanismos de ruptura.",
    tags: ["Aterosclerose", "Placa Vulnerável", "Biologia Vascular"],
    questions: questions
  });
})();
