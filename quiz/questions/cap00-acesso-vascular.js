// ═══════════════════════════════════════════════════════════
// ACESSO VASCULAR — Radial, Femoral e Complicações
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
        q: "Durante a avaliação para acesso radial, o teste de Barbeau é realizado para avaliar a perviedade do arco palmar. Um resultado tipo C indica:",
        options: [
          "a) Ausência de amortecimento da onda de pulso após compressão da artéria radial.",
          "b) Amortecimento da onda de pulso, que se recupera em menos de 2 minutos.",
          "c) Perda da onda de pulso, seguida de recuperação em menos de 2 minutos.",
          "d) Perda da onda de pulso sem recuperação em 2 minutos."
        ],
        answer: 2,
        comment: "O teste de Barbeau classifica a resposta da oximetria de pulso após a compressão da artéria radial. O tipo C representa uma resposta transitória de perda de fluxo, mas com recuperação, indicando uma circulação colateral adequada, embora não tão robusta quanto o tipo A ou B.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual das seguintes anomalias anatômicas da artéria radial é a mais frequentemente encontrada, com uma incidência de aproximadamente 8.3%?",
        options: [
          "a) Artéria radial recorrente (pseudo-radial)",
          "b) Alça radial (radial loop)",
          "c) Bifurcação alta da artéria braquial",
          "d) Artéria radial tortuosa"
        ],
        answer: 0,
        comment: "A artéria radial recorrente é a anomalia mais comum, onde um ramo sobe paralelamente à artéria braquial. Durante o procedimento, o fio-guia pode entrar inadvertidamente neste ramo, dificultando a progressão e aumentando o risco de perfuração.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Ao realizar um acesso femoral guiado por fluoroscopia, qual é o ponto de referência ósseo ideal para a punção da artéria femoral comum (AFC) para minimizar o risco de complicações como pseudoaneurisma e fístula AV?",
        options: [
          "a) A borda superior da cabeça femoral.",
          "b) O terço médio da cabeça femoral.",
          "c) A borda inferior da cabeça femoral.",
          "d) A junção da cabeça com o colo femoral."
        ],
        answer: 1,
        comment: "A punção no terço médio da cabeça femoral garante que a agulha entre na AFC acima da bifurcação da artéria femoral profunda e abaixo da origem da artéria epigástrica inferior. Isso permite uma compressão hemostática eficaz contra uma estrutura óssea, reduzindo o risco de complicações.",
        source: "Practical Handbook of Advanced Interventional Cardiology, 2013"
      },
      {
        q: "Em um paciente com doença arterial periférica e pulsos femorais ausentes, qual a melhor estratégia para obter acesso arterial para uma intervenção coronária percutânea (ICP)?",
        options: [
          "a) Punção da artéria femoral guiada por ultrassom.",
          "b) Acesso pela artéria braquial por dissecção (cutdown).",
          "c) Acesso transradial, se o teste de Allen/Barbeau for favorável.",
          "d) Acesso translombar aórtico."
        ],
        answer: 2,
        comment: "O acesso transradial tornou-se a abordagem de primeira linha em muitos centros devido à menor taxa de complicações vasculares, especialmente em pacientes com doença arterial periférica, obesidade ou coagulopatia. A ausência de pulsos femorais torna o acesso radial a opção mais segura e preferível.",
        source: "Grossman & Baim's Cardiac Catheterization, 2020"
      },
      {
        q: "Qual é a principal desvantagem do uso de introdutores de maior calibre (> 6 Fr) no acesso radial?",
        options: [
          "a) Maior risco de espasmo da artéria radial.",
          "b) Maior incidência de perfuração da artéria.",
          "c) Aumento do risco de oclusão da artéria radial (OAR) pós-procedimento.",
          "d) Dificuldade na navegação de cateteres-guia."
        ],
        answer: 2,
        comment: "A relação entre o diâmetro do introdutor e o diâmetro da artéria radial é um preditor chave para a ocorrência de OAR. Introdutores maiores causam mais lesão endotelial e trombose, levando a uma maior taxa de oclusão.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Durante um procedimento via femoral, o paciente desenvolve um hematoma retroperitoneal. Qual dos seguintes sinais clínicos é o mais específico para essa complicação?",
        options: [
          "a) Dor lombar ipsilateral e hipotensão.",
          "b) Taquicardia e queda do hematócrito.",
          "c) Presença de massa pulsátil na região inguinal.",
          "d) Náuseas e vômitos."
        ],
        answer: 0,
        comment: "O sangramento para o retroperitônio por uma punção femoral alta (acima do ligamento inguinal) classicamente se manifesta com dor lombar ou no flanco, associada a instabilidade hemodinâmica. A queda do hematócrito é um achado posterior e menos específico.",
        source: "Grossman & Baim's Cardiac Catheterization, 2020"
      },
      {
        q: "A técnica de \"hemostasia patente\" (patent hemostasis) após o acesso radial visa principalmente:",
        options: [
          "a) Acelerar o tempo de hemostasia.",
          "b) Reduzir a dor no local da punção.",
          "c) Prevenir a formação de hematoma.",
          "d) Manter o fluxo anterógrado na artéria radial para reduzir o risco de oclusão."
        ],
        answer: 3,
        comment: "A técnica de hemostasia patente envolve a aplicação de pressão suficiente para parar o sangramento no local da punção, enquanto se confirma a manutenção do fluxo na artéria radial (geralmente por oximetria de pulso no dedo polegar). Isso previne a estase sanguínea e a trombose, reduzindo significativamente a incidência de OAR.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual a incidência aproximada de alça radial (radial loop), uma anomalia que pode dificultar a passagem do fio-guia?",
        options: [
          "a) < 1%",
          "b) 2%",
          "c) 5%",
          "d) 10%"
        ],
        answer: 1,
        comment: "A alça radial é uma curva acentuada de 360° na artéria, ocorrendo em cerca de 2% dos pacientes. Representa um desafio técnico, com maior chance de falha na progressão do material e necessidade de manobras específicas ou troca de acesso.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Em um paciente obeso, a fluoroscopia para guiar a punção femoral pode ser desafiadora. Qual a principal vantagem da utilização do ultrassom para guiar o acesso femoral neste cenário?",
        options: [
          "a) Reduzir a exposição à radiação para o operador.",
          "b) Identificar a bifurcação da artéria femoral e evitar punções na artéria femoral superficial ou profunda.",
          "c) Diminuir o tempo do procedimento.",
          "d) Todas as alternativas acima."
        ],
        answer: 3,
        comment: "O ultrassom permite a visualização em tempo real da anatomia vascular, identificando a localização exata da AFC e sua bifurcação, mesmo em pacientes obesos. Isso aumenta a taxa de sucesso na primeira tentativa, reduz o risco de complicações, diminui o tempo do procedimento e elimina a necessidade de radiação para guiar o acesso.",
        source: "Practical Handbook of Advanced Interventional Cardiology, 2013"
      },
      {
        q: "Qual é a complicação vascular mais comum associada ao acesso femoral para intervenções cardíacas?",
        options: [
          "a) Hematoma retroperitoneal.",
          "b) Pseudoaneurisma.",
          "c) Fístula arteriovenosa.",
          "d) Hematoma no local da punção (>5 cm)."
        ],
        answer: 3,
        comment: "Embora complicações graves como hematoma retroperitoneal e pseudoaneurisma sejam mais temidas, a formação de hematomas significativos no local da punção é a complicação mais frequente, ocorrendo em 2-6% dos casos, dependendo da definição e da população estudada.",
        source: "Grossman & Baim's Cardiac Catheterization, 2020"
      },
      {
        q: "A administração de um \"coquetel\" de vasodilatadores na artéria radial antes da introdução do cateter é uma prática comum para prevenir o espasmo. Qual das seguintes combinações é a mais utilizada e eficaz?",
        options: [
          "a) Nitroglicerina e Verapamil",
          "b) Adenosina e Diltiazem",
          "c) Nitroprussiato e Lidocaína",
          "d) Apenas solução salina heparinizada"
        ],
        answer: 0,
        comment: "A combinação de um nitrato (nitroglicerina) e um bloqueador de canal de cálcio (verapamil) é a mais estudada e comprovadamente eficaz na prevenção do espasmo da artéria radial. A adenosina e o nitroprussiato não são de uso rotineiro para esta finalidade.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Em qual das seguintes situações o acesso femoral seria preferível ao acesso radial para uma intervenção coronária?",
        options: [
          "a) Paciente em uso de anticoagulação oral com INR terapêutico.",
          "b) Necessidade de suporte circulatório com balão intra-aórtico (BIA).",
          "c) Paciente com fístula arteriovenosa para hemodiálise no membro superior não dominante.",
          "d) Histórico de cirurgia de revascularização miocárdica com enxerto de artéria mamária interna esquerda (LIMA)."
        ],
        answer: 1,
        comment: "A necessidade de dispositivos de grande calibre, como o balão intra-aórtico, geralmente exige um acesso femoral, pois a artéria radial não acomoda introdutores de diâmetro tão grande. As outras opções são cenários onde o acesso radial é frequentemente preferido ou possível.",
        source: "Grossman & Baim's Cardiac Catheterization, 2020"
      },
      {
        q: "Qual é o mecanismo de ação dos dispositivos de fechamento vascular (VCDs) baseados em sutura, como o Perclose ProGlide?",
        options: [
          "a) Entregam uma sutura de polipropileno que aproxima as bordas da arteriotomia.",
          "b) Utilizam um plug de colágeno para selar o local da punção.",
          "c) Aplicam um clipe de nitinol para fechar a arteriotomia.",
          "d) Induzem a trombose local através de um agente pró-trombótico."
        ],
        answer: 0,
        comment: "Dispositivos como o Perclose ProGlide utilizam uma técnica de pré-fechamento, posicionando suturas que são apertadas ao final do procedimento para aproximar mecanicamente as bordas da arteriotomia, promovendo uma hemostasia primária.",
        source: "Practical Handbook of Advanced Interventional Cardiology, 2013"
      },
      {
        q: "A perfuração da artéria radial ou braquial com o fio-guia é uma complicação rara, mas potencialmente grave. Qual é a conduta inicial mais apropriada ao identificar uma perfuração contida (sem extravasamento significativo)?",
        options: [
          "a) Retirar imediatamente todo o material e aplicar compressão externa.",
          "b) Tentar selar a perfuração com a insuflação prolongada de um balão de angioplastia no local.",
          "c) Prosseguir com o procedimento, monitorando o paciente para sinais de expansão do hematoma.",
          "d) Converter imediatamente para acesso femoral e solicitar avaliação da cirurgia vascular."
        ],
        answer: 1,
        comment: "Para perfurações contidas, a insuflação de um balão de angioplastia de tamanho apropriado no local da perfuração por vários minutos pode selar o defeito (tampão com balão). Esta é uma abordagem eficaz e menos invasiva do que a cirurgia. A retirada do material sem controle interno pode agravar o sangramento.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual das seguintes características anatômicas da artéria femoral é um fator de risco para falha do dispositivo de fechamento vascular (VCD)?",
        options: [
          "a) Punção na artéria femoral comum (AFC).",
          "b) Presença de calcificação significativa na parede anterior da artéria.",
          "c) Diâmetro da artéria > 8 mm.",
          "d) Ausência de doença aterosclerótica significativa."
        ],
        answer: 1,
        comment: "A calcificação na parede anterior da artéria pode impedir a correta implantação dos componentes do VCD (seja a âncora, o clipe ou a passagem da agulha de sutura), levando à falha do dispositivo e complicações como sangramento ou dissecção.",
        source: "Practical Handbook of Advanced Interventional Cardiology, 2013"
      },
      {
        q: "O que é o fenômeno de \"pseudo-oclusão\" da artéria radial após um procedimento?",
        options: [
          "a) Uma oclusão transitória causada por espasmo severo, que se resolve com vasodilatadores.",
          "b) Uma imagem angiográfica que simula oclusão devido ao fluxo competitivo do arco palmar.",
          "c) Uma oclusão trombótica da artéria que recanaliza espontaneamente em 24-48 horas.",
          "d) A ausência de pulso palpável com manutenção de fluxo documentado pelo Doppler."
        ],
        answer: 3,
        comment: "A pseudo-oclusão, ou oclusão \"assintomática\", refere-se à situação em que o pulso radial não é palpável, mas o exame com Doppler ou ultrassom demonstra que a artéria permanece pérvia, embora com fluxo reduzido. É importante diferenciar da oclusão verdadeira.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Ao realizar um acesso transradial esquerdo, qual cateter diagnóstico pré-moldado é frequentemente preferido para a canulação da artéria coronária direita (ACD)?",
        options: [
          "a) Judkins Right 4 (JR4)",
          "b) Amplatz Left 2 (AL2)",
          "c) Judkins Left 3.5 (JL3.5)",
          "d) Um cateter específico para acesso radial esquerdo, como o Tiger ou Kimny."
        ],
        answer: 3,
        comment: "Do acesso radial esquerdo, a orientação da aorta e a origem da ACD são diferentes. Cateteres universais ou específicos para essa abordagem, como o Tiger, Kimny ou Ikari Left, são projetados para canular ambas as coronárias a partir do braço esquerdo com maior facilidade e suporte.",
        source: "Grossman & Baim's Cardiac Catheterization, 2020"
      },
      {
        q: "Qual é a principal vantagem do uso de introdutores hidrofílicos \"sem bainha\" (sheathless guides) no acesso radial?",
        options: [
          "a) Reduzem o perfil externo do cateter, permitindo o uso de guias de maior lúmen interno em artérias de menor calibre.",
          "b) Eliminam a necessidade de heparina durante o procedimento.",
          "c) Reduzem o risco de perfuração da artéria.",
          "d) São mais baratos que os sistemas com bainha convencionais."
        ],
        answer: 0,
        comment: "Os guias sem bainha possuem um perfil externo menor para um determinado lúmen interno (por exemplo, um guia 6 Fr sem bainha tem um diâmetro externo semelhante a um introdutor 5 Fr). Isso permite a realização de intervenções complexas que exigem cateteres-guia maiores, minimizando o trauma e o risco de oclusão em artérias radiais de menor diâmetro.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Um pseudoaneurisma femoral é diagnosticado 3 dias após uma intervenção coronária. Qual das seguintes opções é o tratamento de primeira linha para um pseudoaneurisma pequeno (< 3 cm) com colo estreito?",
        options: [
          "a) Compressão guiada por ultrassom.",
          "b) Injeção de trombina guiada por ultrassom.",
          "c) Reparo cirúrgico aberto.",
          "d) Implante de stent recoberto."
        ],
        answer: 1,
        comment: "A injeção de trombina guiada por ultrassom tornou-se o tratamento de escolha para pseudoaneurismas femorais não complicados. É um procedimento minimamente invasivo com altas taxas de sucesso (>95%) e baixo risco de complicações, sendo superior à compressão guiada por ultrassom em termos de eficácia e conforto para o paciente.",
        source: "Grossman & Baim's Cardiac Catheterization, 2020"
      },
      {
        q: "A \"artéria radial de origem alta\" (high-origin radial artery) é uma variação anatômica onde a artéria radial se origina:",
        options: [
          "a) Da artéria axilar.",
          "b) Da porção média ou proximal da artéria braquial.",
          "c) Diretamente do arco aórtico.",
          "d) Da artéria subclávia."
        ],
        answer: 1,
        comment: "Normalmente, a artéria braquial se bifurca na fossa antecubital. Em uma origem alta, essa bifurcação ocorre mais proximalmente no braço. Essa variante, presente em até 7% dos indivíduos, pode estar associada a um trajeto mais tortuoso e um calibre menor da artéria radial, apresentando desafios técnicos para o acesso transradial.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual o principal objetivo da manobra de \"troca de fios\" (wire exchange) ao encontrar resistência durante a passagem inicial do fio-guia no acesso radial?",
        options: [
          "a) Confirmar que o acesso é intravascular.",
          "b) Ultrapassar uma área de espasmo ou tortuosidade, trocando um fio J por um fio hidrofílico.",
          "c) Dilatar o vaso para facilitar a passagem do introdutor.",
          "d) Medir o comprimento da artéria radial."
        ],
        answer: 1,
        comment: "Se o fio-guia padrão (J) não progride facilmente, a resistência pode ser devida a espasmo, tortuosidade ou uma pequena alça. A troca por um fio-guia hidrofílico, que é mais lubrificado e flexível, geralmente permite navegar por essas áreas desafiadoras com mais segurança e sucesso.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "A infecção no sítio de acesso femoral é uma complicação rara, mas grave. Qual dos seguintes fatores é o maior preditor de risco para o desenvolvimento de infecção?",
        options: [
          "a) Duração do procedimento > 2 horas.",
          "b) Uso de dispositivo de fechamento vascular (VCD).",
          "c) Hematoma no local da punção.",
          "d) Diabetes mellitus mal controlado."
        ],
        answer: 2,
        comment: "Um hematoma no local da punção atua como um meio de cultura ideal para o crescimento bacteriano. A evacuação inadequada ou a contaminação durante as tentativas de hemostasia aumentam significativamente o risco de infecção local ou de corrente sanguínea.",
        source: "Practical Handbook of Advanced Interventional Cardiology, 2013"
      },
      {
        q: "Durante uma intervenção coronária via radial, o operador nota amortecimento persistente da curva de pressão no cateter-guia. Qual é a causa mais provável e a primeira ação a ser tomada?",
        options: [
          "a) Causa: Oclusão trombótica do guia. Ação: Aspirar o cateter.",
          "b) Causa: Dissecção da artéria coronária. Ação: Realizar uma angiografia para confirmar.",
          "c) Causa: Espasmo severo da artéria radial ou braquial. Ação: Administrar vasodilatadores intra-arteriais e aguardar.",
          "d) Causa: Contato do cateter-guia com a parede da aorta (damping). Ação: Retirar e rotacionar o cateter."
        ],
        answer: 2,
        comment: "O amortecimento da curva de pressão no acesso radial é um sinal clássico de espasmo arterial, onde a artéria se contrai ao redor do cateter, impedindo o fluxo sanguíneo adequado e a transmissão da pressão. A administração de mais vasodilatadores (nitroglicerina/verapamil) é a primeira medida para aliviar o espasmo.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual a definição de \"punção femoral alta\" e por que ela aumenta o risco de hematoma retroperitoneal?",
        options: [
          "a) Punção acima do terço médio da cabeça femoral; a artéria não é calibrosa o suficiente.",
          "b) Punção acima da bifurcação femoral; risco de punção da artéria femoral profunda.",
          "c) Punção acima do ligamento inguinal; a artéria não tem o assoalho ósseo da cabeça femoral para compressão eficaz.",
          "d) Punção medial à artéria femoral; risco de atingir a veia femoral."
        ],
        answer: 2,
        comment: "Uma punção acima do ligamento inguinal entra na artéria ilíaca externa. Nesta localização, a artéria fica no retroperitônio e não tem a cabeça femoral posteriormente para servir como um anteparo para a compressão manual. Qualquer sangramento no local da punção extravasa livremente para o espaço retroperitoneal.",
        source: "Grossman & Baim's Cardiac Catheterization, 2020"
      },
      {
        q: "O uso do acesso \"snuffbox\" (tabaqueira anatômica) é uma alternativa ao acesso radial padrão no punho. Qual é a principal vantagem potencial desta técnica?",
        options: [
          "a) A artéria radial distal é sempre de maior calibre.",
          "b) Reduz o risco de oclusão da artéria radial no punho, preservando o fluxo para o arco palmar superficial.",
          "c) É uma técnica mais fácil e com maior taxa de sucesso na primeira punção.",
          "d) Elimina o risco de espasmo arterial."
        ],
        answer: 1,
        comment: "A punção na tabaqueira anatômica é realizada na artéria radial distal, após a origem do ramo palmar superficial. Uma possível oclusão neste local preservaria o fluxo para a mão através do arco palmar, teoricamente reduzindo a isquemia e a incidência de oclusão sintomática da artéria radial.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual das seguintes é uma contraindicação absoluta para o uso de um dispositivo de fechamento vascular (VCD) do tipo plug de colágeno (ex: Angio-Seal)?",
        options: [
          "a) Punção na artéria femoral superficial (AFS) ou profunda (AFP).",
          "b) Obesidade mórbida.",
          "c) Doença arterial periférica severa.",
          "d) Uso de inibidores da glicoproteína IIb/IIIa."
        ],
        answer: 0,
        comment: "A implantação de um plug de colágeno dentro de um vaso de menor calibre como a AFS ou AFP pode causar isquemia aguda do membro por obstrução. Portanto, a punção fora da artéria femoral comum é uma contraindicação clara para este tipo de dispositivo.",
        source: "Practical Handbook of Advanced Interventional Cardiology, 2013"
      },
      {
        q: "A neuropatia femoral é uma complicação rara do acesso femoral, geralmente causada por:",
        options: [
          "a) Compressão direta do nervo femoral por um grande hematoma ou pseudoaneurisma.",
          "b) Lesão direta do nervo pela agulha de punção.",
          "c) Reação inflamatória ao material do dispositivo de fechamento.",
          "d) Isquemia do nervo devido à oclusão da artéria femoral."
        ],
        answer: 0,
        comment: "O nervo femoral corre lateralmente à artéria femoral. Um hematoma em expansão ou um grande pseudoaneurisma pode comprimir o nervo contra as estruturas pélvicas, levando à neuropatia compressiva, que se manifesta com fraqueza do quadríceps e perda sensorial na coxa anterior.",
        source: "Grossman & Baim's Cardiac Catheterization, 2020"
      },
      {
        q: "No contexto de uma intervenção coronária primária para infarto agudo do miocárdio com supradesnível do segmento ST (IAMCSST), por que o acesso radial é considerado superior ao femoral?",
        options: [
          "a) Permite a deambulação mais precoce do paciente.",
          "b) Reduz significativamente as taxas de sangramento maior e a mortalidade por todas as causas.",
          "c) Reduz o tempo porta-balão.",
          "d) Diminui a necessidade de heparina."
        ],
        answer: 1,
        comment: "Grandes ensaios clínicos randomizados (como o RIVAL e o MATRIX) demonstraram que, em pacientes com IAMCSST, o acesso radial reduz as complicações de sangramento maior e, como consequência, a mortalidade, quando comparado ao acesso femoral.",
        source: "Grossman & Baim's Cardiac Catheterization, 2020"
      },
      {
        q: "Qual é a conduta recomendada ao encontrar uma alça (loop) na artéria radial que impede a passagem do fio-guia hidrofílico?",
        options: [
          "a) Abortar o procedimento e converter para acesso femoral.",
          "b) Tentar forçar a passagem do fio-guia com mais vigor.",
          "c) Utilizar um balão de angioplastia de baixo perfil para retificar a alça.",
          "d) Tentar manobras com o fio-guia (formando uma alça na ponta) ou usar um cateter de suporte para cruzar a alça."
        ],
        answer: 3,
        comment: "Várias técnicas podem ser usadas para cruzar uma alça radial. Manobrar o fio-guia para formar uma pequena alça na ponta pode ajudar a navegar a curva. Alternativamente, avançar um cateter de suporte até a alça pode fornecer o suporte necessário para que o fio-guia a atravesse. Forçar o fio pode causar dissecção ou perfuração.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Após a remoção de um introdutor femoral, a compressão manual é aplicada. Qual é o ponto de compressão correto para garantir uma hemostasia eficaz?",
        options: [
          "a) Diretamente sobre o local da incisão na pele.",
          "b) 1-2 cm acima do local da incisão na pele, para comprimir a arteriotomia contra a cabeça femoral.",
          "c) 1-2 cm abaixo do local da incisão na pele, para evitar a formação de hematoma distal.",
          "d) Com pressão intermitente para permitir o fluxo sanguíneo."
        ],
        answer: 1,
        comment: "Devido ao trajeto subcutâneo da agulha e do introdutor, a arteriotomia (o furo na artéria) está localizada mais proximalmente (1-2 cm acima) do que a incisão na pele. A compressão deve ser aplicada neste ponto proximal para ser eficaz, utilizando a cabeça femoral como anteparo.",
        source: "Practical Handbook of Advanced Interventional Cardiology, 2013"
      },
      {
        q: "Qual é a complicação mais comum associada ao acesso radial para intervenções coronárias percutâneas?",
        options: [
          "a) Espasmo da artéria radial",
          "b) Oclusão da artéria radial (OAR)",
          "c) Perfuração da artéria radial",
          "d) Hematoma no local de acesso"
        ],
        answer: 1,
        comment: "A oclusão da artéria radial é a complicação mais frequente após o procedimento transradial, embora muitas vezes seja assintomática devido à circulação colateral da mão. A incidência pode ser reduzida com o uso de bainhas menores, anticoagulação adequada e técnica de hemostasia patente.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Durante o acesso femoral, a punção ideal da artéria femoral comum (AFC) deve ser realizada em que nível anatômico para minimizar complicações?",
        options: [
          "a) Acima do ligamento inguinal",
          "b) Ao nível da metade superior da cabeça femoral",
          "c) Abaixo da bifurcação da artéria femoral",
          "d) Diretamente sobre o ligamento inguinal"
        ],
        answer: 1,
        comment: "A punção da AFC na altura da metade superior da cabeça femoral permite uma compressão eficaz contra uma estrutura óssea, reduzindo o risco de hematoma e pseudoaneurisma. Punções altas (acima do ligamento inguinal) aumentam o risco de hemorragia retroperitoneal.",
        source: "Grossman & Baim's Cardiac Catheterization, Angiography, and Intervention, 9th Ed."
      },
      {
        q: "Qual das seguintes anomalias anatômicas da artéria radial é a mais encontrada e pode dificultar a navegação do cateter?",
        options: [
          "a) Origem alta da artéria radial",
          "b) Artéria radial hipoplásica",
          "c) Alça radioulnar (loop)",
          "d) Tortuosidade da artéria subclávia"
        ],
        answer: 0,
        comment: "A origem alta da artéria radial a partir da artéria braquial ou axilar é a anomalia mais comum, ocorrendo em até 10-15% dos casos. Embora geralmente não impeça o procedimento, pode criar um ângulo agudo que dificulta a passagem do fio-guia e do cateter.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "O que é a 'hemostasia patente' e qual seu principal objetivo após um procedimento transradial?",
        options: [
          "a) Ocluir completamente a artéria radial para garantir a cessação do sangramento.",
          "b) Aplicar pressão suficiente para parar o sangramento, mantendo o fluxo sanguíneo através da artéria ulnar.",
          "c) Aplicar pressão suficiente para parar o sangramento no local da punção, enquanto se confirma a manutenção do fluxo anterógrado na artéria radial.",
          "d) Utilizar um dispositivo de fechamento vascular para selar o arteriotomia."
        ],
        answer: 2,
        comment: "A hemostasia patente visa reduzir a incidência de oclusão da artéria radial (OAR). A técnica envolve a aplicação de pressão no local da punção apenas o suficiente para controlar o sangramento, enquanto se verifica (geralmente com oximetria de pulso no polegar) que o fluxo sanguíneo distal na artéria radial é preservado.",
        source: "Cardiac Catheterization Handbook, 6th Ed."
      },
      {
        q: "Uma hemorragia retroperitoneal é uma complicação grave e temida de qual tipo de acesso vascular?",
        options: [
          "a) Acesso radial distal ('snuffbox')",
          "b) Acesso ulnar",
          "c) Acesso femoral com punção alta",
          "d) Acesso braquial"
        ],
        answer: 2,
        comment: "A hemorragia retroperitoneal ocorre quando a artéria femoral é puncionada acima do ligamento inguinal. O sangue extravasa para o espaço retroperitoneal, onde pode acumular-se um grande volume antes que os sinais clínicos se tornem aparentes, levando a choque hipovolêmico.",
        source: "Grossman & Baim's Cardiac Catheterization, Angiography, and Intervention, 9th Ed."
      },
      {
        q: "Qual é a principal vantagem do uso de um 'cocktail' farmacológico (geralmente contendo um vasodilatador e um anticoagulante) durante o acesso radial?",
        options: [
          "a) Prevenir a trombose do cateter",
          "b) Reduzir a dor no local da punção",
          "c) Diminuir a incidência de espasmo da artéria radial",
          "d) Acelerar a hemostasia pós-procedimento"
        ],
        answer: 2,
        comment: "O espasmo da artéria radial é uma contração súbita e dolorosa da artéria que pode impedir a manipulação do cateter. A administração intra-arterial de um cocktail, tipicamente com verapamil ou nitroglicerina, relaxa a musculatura lisa da artéria, prevenindo ou tratando o espasmo.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "No contexto de um Infarto Agudo do Miocárdio com Supradesnivelamento do Segmento ST (IAMCSST), por que o acesso radial é frequentemente preferido em relação ao femoral?",
        options: [
          "a) Permite o uso de cateteres de maior calibre.",
          "b) Reduz significativamente o tempo porta-balão.",
          "c) Diminui as taxas de sangramento maior e melhora a sobrevida.",
          "d) É tecnicamente mais fácil em pacientes em choque cardiogênico."
        ],
        answer: 2,
        comment: "Grandes estudos randomizados, como o MATRIX e o RIVAL, demonstraram que em pacientes com SCA, especialmente IAMCSST, o acesso radial reduz as complicações de sangramento maior e está associado a uma redução na mortalidade por todas as causas em comparação com o acesso femoral.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "O que é um pseudoaneurisma e qual a sua causa mais comum no acesso femoral?",
        options: [
          "a) Uma dilatação verdadeira de todas as camadas da parede arterial; causado por fraqueza congênita.",
          "b) Uma coleção de sangue pulsátil contida pelos tecidos moles circundantes, comunicando-se com o lúmen arterial; causado por uma punção que não cicatriza adequadamente.",
          "c) Uma fístula entre a artéria e a veia femoral; causado pela punção simultânea de ambos os vasos.",
          "d) Um hematoma localizado que não tem comunicação com a artéria; causado por compressão inadequada."
        ],
        answer: 1,
        comment: "Um pseudoaneurisma (ou falso aneurisma) resulta de uma laceração na parede arterial que não se fecha. O sangue vaza e forma uma cavidade nos tecidos adjacentes que permanece conectada ao lúmen arterial, criando uma massa pulsátil.",
        source: "Cardiac Catheterization Handbook, 6th Ed."
      },
      {
        q: "A técnica de acesso radial distal, na 'tabaqueira anatômica' (anatomical snuffbox), oferece qual vantagem potencial sobre o acesso radial convencional no antebraço?",
        options: [
          "a) Utiliza uma artéria de maior calibre, facilitando a punção.",
          "b) Reduz o risco de isquemia da mão em caso de oclusão.",
          "c) Preserva a artéria radial mais proximal para um futuro enxerto de bypass coronário.",
          "d) Permite uma hemostasia mais rápida e confortável para o paciente."
        ],
        answer: 3,
        comment: "O acesso na tabaqueira anatômica permite que a hemostasia seja feita sem a necessidade de um dispositivo de compressão que imobilize o punho, aumentando o conforto do paciente. Além disso, em caso de oclusão, o segmento proximal da artéria radial permanece pérvio.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual é a finalidade do uso de ultrassom em tempo real para guiar a punção da artéria radial?",
        options: [
          "a) Apenas para medir o diâmetro da artéria antes do procedimento.",
          "b) Para visualizar a agulha entrando no lúmen da artéria, aumentando a taxa de sucesso na primeira tentativa e evitando a punção da parede posterior.",
          "c) Para avaliar a presença de fluxo colateral da artéria ulnar.",
          "d) Para administrar o cocktail vasodilatador com mais precisão."
        ],
        answer: 1,
        comment: "O ultrassom em tempo real permite a visualização direta da artéria, da agulha e das estruturas adjacentes. Isso aumenta a precisão da punção, diminui o número de tentativas, reduz o risco de hematomas e pode ser particularmente útil em artérias de pequeno calibre ou não palpáveis.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Após um procedimento via femoral, o paciente se queixa de dor súbita e intensa no flanco e hipotensão. Qual complicação deve ser suspeitada imediatamente?",
        options: [
          "a) Pseudoaneurisma da artéria femoral",
          "b) Trombose venosa profunda",
          "c) Hemorragia retroperitoneal",
          "d) Reação vagal"
        ],
        answer: 2,
        comment: "Dor no flanco, hipotensão e queda do hematócrito após um acesso femoral, especialmente com punção alta, são sinais clássicos de hemorragia retroperitoneal. O diagnóstico é confirmado com uma tomografia computadorizada de abdômen e pelve sem contraste.",
        source: "Grossman & Baim's Cardiac Catheterization, Angiography, and Intervention, 9th Ed."
      },
      {
        q: "Qual das seguintes opções NÃO é uma contraindicação absoluta para o acesso radial?",
        options: [
          "a) Ausência de pulso radial palpável.",
          "b) Teste de Allen anormal (resultado tipo D no Barbeau).",
          "c) Presença de uma fístula arteriovenosa para hemodiálise no mesmo braço.",
          "d) Necessidade de usar um dispositivo de suporte circulatório percutâneo que exige uma bainha de grande calibre (>7 Fr)."
        ],
        answer: 1,
        comment: "Embora um teste de circulação colateral anormal seja uma contraindicação relativa e exija cautela, estudos como o RADIAL-CABG mostraram que o procedimento pode ser realizado com segurança em alguns casos. As outras opções são geralmente consideradas contraindicações absolutas ou de alto risco.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "A 'síndrome do compartimento' é uma complicação rara mas devastadora do acesso radial. Qual é o seu principal mecanismo fisiopatológico?",
        options: [
          "a) Reação alérgica ao contraste iodado.",
          "b) Oclusão trombótica aguda da artéria ulnar.",
          "c) Sangramento no antebraço que aumenta a pressão dentro de um compartimento fascial fechado, comprometendo a perfusão muscular e nervosa.",
          "d) Embolização de ar durante a remoção da bainha."
        ],
        answer: 2,
        comment: "A síndrome do compartimento ocorre quando um hematoma em expansão dentro dos compartimentos fasciais do antebraço eleva a pressão a um nível que excede a pressão de perfusão capilar, levando à isquemia e necrose de músculos e nervos. Requer diagnóstico e tratamento de emergência (fasciotomia).",
        source: "Cardiac Catheterization Handbook, 6th Ed."
      },
      {
        q: "Para intervenções coronárias complexas que podem exigir cateteres-guia de maior suporte ou o uso de dois cateteres (técnica 'ping-pong'), qual acesso é tradicionalmente preferido?",
        options: [
          "a) Acesso radial",
          "b) Acesso femoral",
          "c) Acesso ulnar",
          "d) Acesso braquial"
        ],
        answer: 1,
        comment: "O acesso femoral permite o uso de bainhas de maior diâmetro (8 Fr ou mais), que acomodam cateteres-guia maiores e mais robustos, essenciais para o suporte em angioplastias complexas, como em oclusões totais crônicas ou lesões de bifurcação. Embora técnicas 'slender' tenham expandido as capacidades do acesso radial, o femoral ainda é o padrão para suporte máximo.",
        source: "Grossman & Baim's Cardiac Catheterization, Angiography, and Intervention, 9th Ed."
      },
      {
        q: "Qual é o tratamento de primeira linha para um pseudoaneurisma femoral pequeno (< 2-3 cm) e não complicado?",
        options: [
          "a) Reparo cirúrgico aberto imediato.",
          "b) Injeção de trombina guiada por ultrassom.",
          "c) Compressão guiada por ultrassom.",
          "d) Observação e acompanhamento seriado com ultrassom."
        ],
        answer: 2,
        comment: "Para pseudoaneurismas pequenos, a compressão guiada por ultrassom é uma abordagem eficaz e menos invasiva. A pressão é aplicada diretamente sobre o colo do pseudoaneurisma para induzir a trombose. A injeção de trombina é uma alternativa, geralmente para casos em que a compressão falha ou é inadequada.",
        source: "Cardiac Catheterization Handbook, 6th Ed."
      },
      {
        q: "A perfuração da artéria radial com um fio-guia durante a canulação é geralmente uma complicação benigna. Qual é a conduta recomendada?",
        options: [
          "a) Interromper o procedimento imediatamente e converter para acesso femoral.",
          "b) Retirar o fio-guia, manter a bainha no lugar e administrar protamina.",
          "c) Retirar o fio-guia para dentro da bainha, aguardar alguns minutos e tentar avançar novamente, possivelmente com um fio-guia hidrofílico.",
          "d) Chamar um cirurgião vascular para reparo imediato."
        ],
        answer: 2,
        comment: "Pequenas perfurações por fio-guia em ramos da artéria radial raramente causam sangramento significativo ou síndrome do compartimento. A conduta expectante, com uma nova tentativa cuidadosa após um curto período, geralmente é segura e bem-sucedida.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual fator é o preditor mais forte de falha no acesso transradial?",
        options: [
          "a) Sexo feminino",
          "b) Baixo peso corporal",
          "c) Diâmetro da artéria radial < 2.0 mm",
          "d) Idade avançada"
        ],
        answer: 2,
        comment: "Um diâmetro arterial pequeno é um dos preditores mais importantes de falha na punção e no procedimento transradial. A relação entre o diâmetro da bainha e o diâmetro da artéria (relação bainha/artéria > 1) está fortemente associada ao risco de espasmo e oclusão da artéria radial.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "O que é uma fístula arteriovenosa (FAV) como complicação do acesso femoral?",
        options: [
          "a) Uma comunicação direta entre a artéria e a veia femoral, geralmente causada pela punção simultânea de ambos os vasos.",
          "b) Um coágulo que se forma na veia femoral após compressão prolongada da artéria.",
          "c) Uma infecção no local de acesso que se espalha para a veia.",
          "d) Um hematoma que comprime a veia femoral."
        ],
        answer: 0,
        comment: "Uma FAV iatrogênica ocorre quando a agulha de punção atravessa tanto a artéria quanto a veia adjacente, criando um trajeto fistuloso. O diagnóstico é feito por ultrassom Doppler, que mostra um fluxo turbulento de alta velocidade da artéria para a veia.",
        source: "Grossman & Baim's Cardiac Catheterization, Angiography, and Intervention, 9th Ed."
      },
      {
        q: "Em pacientes com enxerto de artéria mamária interna esquerda (AMIE) para a artéria descendente anterior, qual acesso arterial é preferível para cateterizar o enxerto?",
        options: [
          "a) Acesso radial direito",
          "b) Acesso radial esquerdo",
          "c) Acesso femoral",
          "d) Acesso ulnar esquerdo"
        ],
        answer: 1,
        comment: "O acesso radial esquerdo oferece um trajeto mais direto e favorável para a artéria subclávia esquerda, de onde se origina a AMIE. Isso facilita a canulação seletiva do enxerto com cateteres específicos (como o cateter IMA), em comparação com o trajeto mais tortuoso vindo do acesso radial direito ou femoral.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual é a principal desvantagem do acesso braquial em comparação com os acessos radial e femoral?",
        options: [
          "a) Maior risco de sangramento maior.",
          "b) Maior risco de dano neurológico mediano e trombose arterial com isquemia grave do membro.",
          "c) Dificuldade técnica para canular as artérias coronárias.",
          "d) Maior exposição à radiação para o operador."
        ],
        answer: 1,
        comment: "A artéria braquial está em proximidade direta com o nervo mediano, tornando-o vulnerável a lesões durante a punção ou por compressão de um hematoma. Além disso, a artéria braquial tem pouca ou nenhuma circulação colateral, de modo que uma oclusão trombótica pode levar à isquemia crítica do membro, uma complicação muito mais rara no acesso radial.",
        source: "Cardiac Catheterization Handbook, 6th Ed."
      },
      {
        q: "A embolia distal de colesterol (síndrome do dedo azul) é uma complicação potencial do acesso femoral, especialmente em pacientes com:",
        options: [
          "a) Doença arterial periférica aterosclerótica grave da aorta e artérias ilíacas.",
          "b) Estenose da artéria renal.",
          "c) Hipertensão arterial sistêmica não controlada.",
          "d) Insuficiência cardíaca congestiva."
        ],
        answer: 0,
        comment: "A manipulação de fios-guia e cateteres através de uma aorta e artérias ilíacas severamente ateroscleróticas pode desalojar debris de colesterol, que embolizam para as artérias digitais dos pés, causando isquemia e a aparência cianótica característica (dedo azul).",
        source: "Grossman & Baim's Cardiac Catheterization, Angiography, and Intervention, 9th Ed."
      },
      {
        q: "Qual é a principal razão para a menor taxa de complicações vasculares no acesso radial em comparação com o femoral em idosos?",
        options: [
          "a) Os idosos têm artérias radiais maiores que os jovens.",
          "b) A artéria radial é superficial e facilmente compressível contra o osso rádio, enquanto a anatomia femoral pode ser distorcida pela obesidade e flacidez dos tecidos.",
          "c) Os idosos recebem doses menores de anticoagulantes no acesso radial.",
          "d) O tempo de procedimento é sempre menor via radial."
        ],
        answer: 1,
        comment: "A compressibilidade da artéria radial contra uma estrutura óssea subjacente permite uma hemostasia mais controlada e eficaz. Em contraste, no acesso femoral em idosos, a localização da artéria pode ser difícil e a compressão menos eficaz, aumentando o risco de hematomas e outras complicações.",
        source: "Cardiac Catheterization Handbook, 6th Ed."
      },
      {
        q: "Em um paciente com pulso radial direito ausente e pulso ulnar presente, qual seria a abordagem de acesso preferencial para o membro superior direito?",
        options: [
          "a) Tentar o acesso radial direito com guia de ultrassom.",
          "b) Proceder com o acesso ulnar direito, se a circulação colateral for adequada.",
          "c) Desistir do membro superior direito e usar o acesso femoral.",
          "d) Tentar o acesso na artéria interóssea."
        ],
        answer: 1,
        comment: "O acesso ulnar é uma alternativa viável quando o acesso radial não é possível. A artéria ulnar é geralmente de maior calibre que a radial. No entanto, é tecnicamente mais desafiador devido à sua localização mais profunda e proximidade com o nervo ulnar. A avaliação da perviedade do arco palmar continua sendo importante.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual dispositivo de fechamento vascular (VCD) para acesso femoral funciona criando uma sutura percutânea para aproximar as bordas da arteriotomia?",
        options: [
          "a) Angio-Seal",
          "b) MynxGrip",
          "c) Perclose ProGlide",
          "d) StarClose"
        ],
        answer: 2,
        comment: "O sistema Perclose ProGlide utiliza agulhas e um guia para passar uma sutura de polipropileno através da parede do vaso, permitindo que a arteriotomia seja fechada mecanicamente, de forma semelhante a uma sutura cirúrgica. Isso o diferencia dos VCDs baseados em âncora/colágeno ou selantes extravasculares.",
        source: "Grossman & Baim's Cardiac Catheterization, Angiography, and Intervention, 9th Ed."
      },
      {
        q: "A 'artéria subclávia lusória' é uma anomalia congênita que pode complicar o acesso radial. O que a caracteriza?",
        options: [
          "a) A artéria subclávia se origina diretamente do arco aórtico distal.",
          "b) A artéria subclávia direita tem uma origem anômala como o último ramo do arco aórtico e cruza o mediastino posteriormente.",
          "c) A artéria subclávia é extremamente tortuosa e calcificada.",
          "d) Ausência congênita da artéria subclávia."
        ],
        answer: 1,
        comment: "Em uma artéria subclávia lusória, o trajeto anômalo vindo do acesso radial direito cria uma dificuldade significativa para alcançar a aorta ascendente. Frequentemente, é necessário trocar para o acesso radial esquerdo ou femoral para completar o procedimento.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual é a conduta inicial para um hematoma grande, mas não em expansão, no local do acesso femoral após a remoção da bainha?",
        options: [
          "a) Evacuação cirúrgica imediata.",
          "b) Marcar as bordas do hematoma com uma caneta, aplicar compressão manual ou mecânica e monitorar de perto a expansão e os sinais vitais.",
          "c) Iniciar transfusão de sangue profilática.",
          "d) Realizar uma angiografia para identificar o ponto de sangramento."
        ],
        answer: 1,
        comment: "A maioria dos hematomas não expansivos pode ser gerenciada de forma conservadora. A demarcação das bordas permite uma avaliação objetiva da progressão. A compressão ajuda a limitar o sangramento adicional. A vigilância é fundamental para detectar a expansão que pode exigir uma intervenção mais agressiva.",
        source: "Cardiac Catheterization Handbook, 6th Ed."
      },
      {
        q: "O uso de bainhas hidrofílicas no acesso radial tem como principal objetivo:",
        options: [
          "a) Melhorar a visualização no ultrassom.",
          "b) Reduzir o atrito e o trauma na parede da artéria radial, diminuindo o risco de espasmo e dor.",
          "c) Conduzir eletricidade para procedimentos de eletrofisiologia.",
          "d) Liberar heparina localmente para prevenir trombose."
        ],
        answer: 1,
        comment: "O revestimento hidrofílico, quando ativado pela água, torna a superfície da bainha extremamente lisa. Isso facilita sua passagem através da artéria radial, especialmente em vasos tortuosos ou de menor calibre, minimizando a irritação endotelial e, consequentemente, o espasmo arterial.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      },
      {
        q: "Qual é a principal limitação dos dispositivos de fechamento vascular (VCDs) no acesso femoral?",
        options: [
          "a) São menos eficazes que a compressão manual para alcançar a hemostasia.",
          "b) Aumentam o tempo de deambulação do paciente.",
          "c) Podem ter falhas, causar infecção, embolização do dispositivo ou estenose arterial, e seu uso pode ser limitado por anatomia desfavorável (ex: punção na bifurcação).",
          "d) São significativamente mais caros que a compressão manual, sem nenhum benefício comprovado."
        ],
        answer: 2,
        comment: "Embora os VCDs possam acelerar a hemostasia e a deambulação, eles têm seu próprio espectro de complicações potenciais, incluindo falha no fechamento, infecção do local, embolização de componentes do dispositivo e lesão vascular. A seleção cuidadosa do paciente e a técnica adequada são cruciais.",
        source: "Grossman & Baim's Cardiac Catheterization, Angiography, and Intervention, 9th Ed."
      },
      {
        q: "A dor intensa durante a injeção do 'cocktail' radial pode ser atenuada por qual medida?",
        options: [
          "a) Injetar o cocktail o mais rápido possível.",
          "b) Misturar o verapamil com lidocaína e injetar lentamente.",
          "c) Usar água estéril em vez de soro fisiológico para diluir os medicamentos.",
          "d) Evitar o uso de nitroglicerina."
        ],
        answer: 1,
        comment: "O verapamil pode causar uma sensação de queimação quando injetado na artéria radial. A diluição com sangue arterial e a mistura com um anestésico local como a lidocaína, juntamente com uma injeção lenta, podem mitigar significativamente esse desconforto para o paciente.",
        source: "Cardiac Catheterization Handbook, 6th Ed."
      },
      {
        q: "Qual é a definição de 'falha do acesso' em um procedimento transradial?",
        options: [
          "a) Qualquer complicação vascular que ocorra durante ou após o procedimento.",
          "b) A incapacidade de puncionar a artéria radial após 3 tentativas.",
          "c) A incapacidade de completar o procedimento diagnóstico ou terapêutico a partir do acesso radial inicial, exigindo a conversão para um acesso alternativo (como o femoral).",
          "d) A ocorrência de oclusão da artéria radial documentada após o procedimento."
        ],
        answer: 2,
        comment: "A falha do acesso é definida pelo insucesso em finalizar o procedimento pela via de acesso escolhida. As causas podem incluir falha na punção, espasmo arterial intratável, tortuosidade severa ou outras anomalias anatômicas que impedem a navegação do cateter até as artérias coronárias.",
        source: "Transradial Approach for Percutaneous Interventions, 2017"
      }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "acesso_vascular",
    icon: "🩸",
    title: "Acesso Vascular para Hemodinâmica",
    description: "Acesso radial, femoral, complicações vasculares, dispositivos de fechamento e variantes anatômicas.",
    tags: ["Radial", "Femoral", "Complicações", "VCD", "Anatomia"],
    questions: questions
  });
})();
