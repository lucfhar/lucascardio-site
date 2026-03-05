// ═══════════════════════════════════════════════════════════
// CAPÍTULO 03 — Radiação em Hemodinâmica
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q3-01) Em fluoroscopia intervencionista, a principal fonte de exposição ocupacional do operador é:",
    options: [
      "a) Feixe primário direto",
      "b) Radiação espalhada (scatter) gerada no paciente/mesa",
      "c) Radiação cósmica",
      "d) Radiação proveniente do detector",
      "e) Radiação emitida pelo avental plumbífero"
    ],
    answer: 1,
    comment: "A exposição do operador é majoritariamente por scatter do paciente, não por feixe primário (que é colimado ao detector).",
    source: "Princípios de radioproteção em hemodinâmica; ver discussão de scatter em capítulos de física/radiação."
  },
  {
    q: "Q3-02) Inverse square law: se você dobra a distância do operador à fonte efetiva de scatter, a exposição aproximadamente:",
    options: [
      "a) Dobra",
      "b) Cai pela metade",
      "c) Cai para 1/4",
      "d) Cai para 1/8",
      "e) Não muda"
    ],
    answer: 2,
    comment: "Exposição ~ 1/d²; dobrar distância → 1/4 da dose.",
    source: "Física básica de radiação (conceitos)."
  },
  {
    q: "Q3-03) Em geral, para reduzir dose ao paciente e ao operador durante uma CTO longa, qual combinação é mais efetiva?",
    options: [
      "a) Aumentar frame rate do cine e abrir colimação",
      "b) Minimizar cine, usar fluoroscopia pulsada com menor frame rate, colimar e otimizar geometria (detector próximo do paciente, tubo mais distante)",
      "c) Manter projeção lateral contínua para melhor imagem",
      "d) Aumentar kVp ao máximo sempre",
      "e) Desativar todos os filtros e aumentar magnificação"
    ],
    answer: 1,
    comment: "Reduzir cine, usar pulso baixo, colimação e boa geometria são intervenções de maior impacto.",
    source: "Princípios ALARA em cardiologia intervencionista."
  },
  {
    q: "Q3-04) Determinística vs estocástica: qual par está corretamente classificado?",
    options: [
      "a) Câncer — determinístico; eritema cutâneo — estocástico",
      "b) Catarata — estocástico puro sem limiar; eritema — estocástico",
      "c) Eritema/lesão cutânea — efeito determinístico com limiar; câncer — efeito estocástico (probabilidade aumenta com dose)",
      "d) Ambos são determinísticos com limiar idêntico",
      "e) Ambos são estocásticos sem relação com dose"
    ],
    answer: 2,
    comment: "Efeitos teciduais (pele, cristalino) têm limiar; câncer é estocástico (risco aumenta com dose).",
    source: "ICRP (conceitos de tissue reactions vs stochastic effects)."
  },
  {
    q: "Q3-05) Qual métrica é MAIS diretamente relacionada ao risco de lesão cutânea (pico de dose em pele), especialmente em procedimento prolongado?",
    options: [
      "a) Dose efetiva (mSv) estimada",
      "b) Air kerma acumulado no ponto de referência (Ka,r)",
      "c) Produto dose-área (DAP) isolado",
      "d) Número de stents implantados",
      "e) Tempo total de sala (door-to-out)"
    ],
    answer: 1,
    comment: "Ka,r correlaciona-se melhor com risco de efeitos cutâneos; DAP relaciona-se mais à energia total e risco estocástico populacional.",
    source: "Radioproteção em procedimentos guiados por fluoroscopia (conceitos)."
  },
  {
    q: "Q3-06) DAP elevado com Ka,r moderado sugere, mais provavelmente:",
    options: [
      "a) Alta dose concentrada em pequena área de pele",
      "b) Energia total alta distribuída em área maior (maior campo), com risco estocástico relativo maior do que risco determinístico localizado",
      "c) Erro do equipamento obrigatório",
      "d) Ausência de exposição ao operador",
      "e) Necessidade de aumentar magnificação"
    ],
    answer: 1,
    comment: "DAP reflete energia total (dose × área). Ka,r reflete dose mais local (risco cutâneo).",
    source: "Física aplicada (conceitos)."
  },
  {
    q: "Q3-07) Para reduzir exposição do operador, qual ajuste geométrico é mais efetivo?",
    options: [
      "a) Aproximar o tubo do paciente e afastar o detector",
      "b) Afastar o tubo do paciente e aproximar o detector do paciente",
      "c) Aumentar magnificação",
      "d) Abrir colimação",
      "e) Aumentar frame rate do cine"
    ],
    answer: 1,
    comment: "Detector próximo reduz necessidade de dose; tubo mais distante reduz intensidade no paciente/pele e scatter em várias configurações.",
    source: "Radioproteção prática (conceitos)."
  },
  {
    q: "Q3-08) Cine vs fluoroscopia: qual afirmação é mais correta?",
    options: [
      "a) Cine geralmente entrega dose menor que fluoroscopia",
      "b) Cine e fluoroscopia têm doses idênticas por frame",
      "c) Cine (aquisição) costuma entregar dose significativamente maior que fluoroscopia (especialmente low-dose/pulsada)",
      "d) Cine não contribui para dose cutânea",
      "e) Fluoroscopia não produz scatter"
    ],
    answer: 2,
    comment: "Aquisição (cine) usa maior dose por frame para qualidade de arquivo; fluoroscopia tende a ser menor dose.",
    source: "Física de aquisição fluoroscópica (conceitos)."
  },
  {
    q: "Q3-09) “Quantum mottle” em imagem fluoroscópica de baixa dose reflete principalmente:",
    options: [
      "a) Falta de foco do sistema",
      "b) Variabilidade estatística por baixo número de fótons detectados (ruído quântico)",
      "c) Artefato de movimento do operador",
      "d) Falha do contraste iodado",
      "e) Necessidade obrigatória de aumentar kVp"
    ],
    answer: 1,
    comment: "Quantum mottle é ruído por contagem baixa de fótons; pode ser sinal de uso de dose baixa apropriada.",
    source: "Conceitos de física de imagem."
  },
  {
    q: "Q3-10) Em fluoroscopia, aumentar mA (mantendo kVp) tende a:",
    options: [
      "a) Aumentar número de fótons (reduz ruído) sem mudar muito o espectro de energia",
      "b) Deslocar o espectro para fótons de maior energia como principal efeito",
      "c) Reduzir dose ao paciente",
      "d) Não alterar dose",
      "e) Eliminar scatter"
    ],
    answer: 0,
    comment: "mA controla quantidade (fótons), kVp controla energia média/penetração do feixe.",
    source: "Física básica: relação kVp/mA."
  },

  // Q3-11 a Q3-30 (ALARA + cenários práticos de hemodinâmica):
  {
    q: "Q3-11) Qual medida reduz mais dose cutânea em cenário de projeção fixa prolongada?",
    options: [
      "a) Manter ângulo fixo para “não perder tempo”",
      "b) Alternar projeções/ângulos para distribuir dose em áreas diferentes de pele",
      "c) Aumentar magnificação para ver melhor",
      "d) Abrir colimação para não cortar estruturas",
      "e) Aumentar cine para documentação"
    ],
    answer: 1,
    comment: "Variar angulações ajuda a distribuir dose e reduzir pico cutâneo (PSD), embora possa aumentar DAP total dependendo do caso.",
    source: "Princípios ALARA (conceitos)."
  },
  {
    q: "Q3-12) Em paciente obeso, por que a dose aumenta de forma relevante?",
    options: [
      "a) Porque o detector reduz automaticamente o ganho",
      "b) Porque maior espessura exige mais fótons (mA/pulso) e/ou kVp para manter qualidade (controle automático de brilho)",
      "c) Porque o contraste iodado absorve toda radiação",
      "d) Porque scatter desaparece",
      "e) Porque a distância tubo-paciente sempre aumenta"
    ],
    answer: 1,
    comment: "ABC/AERC aumentam saída do tubo para manter imagem em pacientes mais atenuantes.",
    source: "Física aplicada (controle automático de brilho)."
  },
  {
    q: "Q3-13) Qual cenário aumenta mais a exposição do operador, mantendo tempo de fluoro constante?",
    options: [
      "a) Colimação estreita",
      "b) Detector próximo ao paciente",
      "c) Projeção com feixe entrando pelo lado mais próximo ao operador (entrada do feixe próxima ao operador)",
      "d) Uso de proteção suspensa e cortinas",
      "e) Menor magnificação"
    ],
    answer: 2,
    comment: "Scatter é maior próximo ao ponto de entrada do feixe; geometria pode aproximar scatter do operador.",
    source: "Radioproteção prática (conceitos)."
  },
  {
    q: "Q3-14) Qual é a justificativa física para colimação reduzir dose e melhorar imagem?",
    options: [
      "a) Aumenta scatter",
      "b) Reduz área irradiada → reduz DAP e scatter → melhora contraste (menos radiação espalhada)",
      "c) Aumenta mA automaticamente sempre",
      "d) Reduz resolução espacial",
      "e) Não muda nada, é apenas estética"
    ],
    answer: 1,
    comment: "Menor campo irradiado reduz scatter e DAP e frequentemente melhora contraste.",
    source: "Física de imagem (conceitos)."
  },
  {
    q: "Q3-15) Qual combinação protege melhor o operador em termos de princípios básicos?",
    options: [
      "a) Distância + barreiras (proteção suspensa/cortinas) + minimizar tempo (ALARA)",
      "b) Apenas aumentar tempo para concluir rápido",
      "c) Apenas reduzir distância para ver melhor",
      "d) Apenas aumentar cine para registrar",
      "e) Apenas usar óculos sem avental"
    ],
    answer: 0,
    comment: "Tempo, distância e blindagem são pilares de proteção.",
    source: "Princípios ALARA."
  },
  {
    q: "Q3-16) Em termos de dosimetria ocupacional, qual prática é mais adequada?",
    options: [
      "a) Usar dosímetro sobre o avental e outro sob o avental conforme protocolo institucional",
      "b) Usar dosímetro apenas no bolso",
      "c) Não usar dosímetro em procedimentos curtos",
      "d) Usar dosímetro apenas no paciente",
      "e) Dosímetro substitui proteção plumbífera"
    ],
    answer: 0,
    comment: "Protocolos frequentemente usam dois dosímetros para estimar dose efetiva e dose no cristalino/pele; depende de norma local.",
    source: "Radioproteção ocupacional (conceitos)."
  },
  {
    q: "Q3-17) Qual afirmação sobre cristalino (catarata) e hemodinâmica é mais correta?",
    options: [
      "a) Não há risco por scatter ser desprezível",
      "b) Óculos plumbíferos e proteção suspensa podem reduzir dose no cristalino de forma relevante",
      "c) Apenas avental protege olhos",
      "d) Catarata é puramente estocástica sem limiar",
      "e) Não há recomendação de monitoramento em operadores"
    ],
    answer: 1,
    comment: "Proteção ocular e barreiras reduzem dose no cristalino; há preocupação crescente com limites ocupacionais.",
    source: "ICRP/boas práticas de radioproteção."
  },
  {
    q: "Q3-18) Ao reduzir frame rate da fluoroscopia pulsada (ex.: 15 → 7,5 fps), o efeito esperado é:",
    options: [
      "a) Aumento de dose proporcional",
      "b) Redução de dose, com potencial custo em suavidade temporal/movimento",
      "c) Nenhuma mudança em dose",
      "d) Aumento obrigatório de kVp",
      "e) Eliminação de ruído quântico"
    ],
    answer: 1,
    comment: "Menor fps reduz número de pulsos e dose, podendo afetar percepção de movimento.",
    source: "Física de fluoroscopia pulsada (conceitos)."
  },
  {
    q: "Q3-19) Qual é a relação mais correta entre magnificação e dose?",
    options: [
      "a) Magnificação sempre reduz dose",
      "b) Magnificação tende a aumentar dose (menor campo efetivo e necessidade de maior saída para manter qualidade)",
      "c) Magnificação elimina scatter",
      "d) Magnificação não altera nada no ABC",
      "e) Magnificação só afeta resolução, não dose"
    ],
    answer: 1,
    comment: "Magnificação frequentemente aumenta dose ao paciente e, portanto, scatter ao operador.",
    source: "Física de aquisição (conceitos)."
  },
  {
    q: "Q3-20) Em relato pós-procedimento, qual indicador você documenta prioritariamente para rastrear risco de lesão cutânea e necessidade de follow-up?",
    options: [
      "a) Tempo de sala",
      "b) Número de cateteres usados",
      "c) Ka,r (air kerma) e/ou estimativa de PSD, além de DAP",
      "d) Tipo de contraste",
      "e) Número de punções"
    ],
    answer: 2,
    comment: "Ka,r e DAP são métricas usuais; Ka,r é mais correlacionada com risco cutâneo local.",
    source: "Boas práticas em radioproteção."
  },
  {
    q: "Q3-21) Se a imagem está muito ruidosa (quantum mottle) e você precisa melhorar detectabilidade de bordas, a intervenção física mais direta é:",
    options: [
      "a) Aumentar mA/pulso (mais fótons)",
      "b) Reduzir colimação para irradiar área maior",
      "c) Aumentar distância do detector",
      "d) Aumentar tempo de cine",
      "e) Aumentar angulação extrema sempre"
    ],
    answer: 0,
    comment: "Mais fótons (mA/pulso) reduz ruído quântico, ao custo de dose maior.",
    source: "Física de ruído quântico."
  },
  {
    q: "Q3-22) Qual fator aumenta risco de lesão cutânea mesmo com Ka,r “moderado”?",
    options: [
      "a) Distribuição de dose em múltiplos ângulos",
      "b) Procedimentos repetidos em curto intervalo somando dose em área semelhante",
      "c) Colimação estreita",
      "d) Detector próximo",
      "e) Uso de fluoroscopia pulsada"
    ],
    answer: 1,
    comment: "Exposições repetidas podem somar dose na pele, elevando risco de efeitos determinísticos mesmo se cada sessão isolada for moderada.",
    source: "Princípios de dose cumulativa."
  },
  {
    q: "Q3-23) Em projeção lateral, por que a dose pode subir acentuadamente?",
    options: [
      "a) Menor espessura atravessada",
      "b) Maior espessura/atenuação atravessada → ABC aumenta saída do tubo",
      "c) Scatter desaparece",
      "d) kVp cai automaticamente",
      "e) Não há mudança física relevante"
    ],
    answer: 1,
    comment: "Mais atenuação → sistema aumenta saída para manter brilho/qualidade.",
    source: "Física de atenuação e ABC."
  },
  {
    q: "Q3-24) Barreiras: a proteção suspensa (teto) é mais eficiente quando posicionada:",
    options: [
      "a) Longe do operador, próxima ao teto",
      "b) Entre paciente (fonte de scatter) e a cabeça/torso do operador, o mais próximo possível da fonte",
      "c) Atrás do operador",
      "d) Encostada no detector",
      "e) No chão ao lado do pedal"
    ],
    answer: 1,
    comment: "O ideal é interceptar scatter entre fonte (paciente) e operador, minimizando “vazamentos” laterais.",
    source: "Radioproteção prática."
  },
  {
    q: "Q3-25) Qual intervenção reduz simultaneamente dose ao paciente e ao operador sem custo significativo de informação em muitos passos do procedimento?",
    options: [
      "a) Abrir colimação",
      "b) Usar “last image hold” e reduzir cine desnecessário",
      "c) Aumentar magnificação",
      "d) Aumentar fps",
      "e) Manter feixe contínuo para “fluidez”"
    ],
    answer: 1,
    comment: "Last image hold e parcimônia com cine são ganhos fáceis sem sacrificar tomada de decisão na maior parte do tempo.",
    source: "ALARA (conceitos)."
  },
  {
    q: "Q3-26) Em termos de qualidade de imagem vs dose, o melhor princípio geral é:",
    options: [
      "a) Sempre maximizar qualidade independentemente de dose",
      "b) Ajustar para a menor dose que permita responder à pergunta clínica/procedimental (ALARA)",
      "c) Manter parâmetros fixos em todos os pacientes",
      "d) Preferir cine para toda navegação",
      "e) Evitar colimação para não “perder detalhe”"
    ],
    answer: 1,
    comment: "ALARA: menor dose compatível com a tarefa.",
    source: "ALARA."
  },
  {
    q: "Q3-27) Um operador faz RAO/cranial extremo por tempo prolongado. Uma estratégia pragmática para reduzir PSD é:",
    options: [
      "a) Manter exatamente o mesmo ângulo para evitar reposicionamento",
      "b) Alternar para projeções menos anguladas quando possível e distribuir ângulos",
      "c) Aumentar magnificação",
      "d) Abrir colimação",
      "e) Aumentar fps"
    ],
    answer: 1,
    comment: "Distribuir ângulos e evitar extremos sustentados reduz pico cutâneo e frequentemente dose.",
    source: "Boas práticas ALARA."
  },
  {
    q: "Q3-28) Em paciente com braço próximo ao tubo em projeção lateral, o risco adicional é:",
    options: [
      "a) Nenhum, porque o braço não recebe dose relevante",
      "b) Aumento de dose local na pele do braço (proximidade do tubo) e potencial lesão cutânea localizada",
      "c) Redução de scatter",
      "d) Melhora automática de qualidade sem custo",
      "e) Redução de Ka,r"
    ],
    answer: 1,
    comment: "Partes do corpo próximas ao tubo podem receber doses mais altas do que o esperado pela calibração padrão.",
    source: "Radioproteção em fluoroscopia (conceitos)."
  },
  {
    q: "Q3-29) Qual é o raciocínio correto sobre “tempo de fluoroscopia” como métrica de risco?",
    options: [
      "a) É a melhor métrica isolada para lesão cutânea em todos os casos",
      "b) Tem correlação imperfeita: mesma duração pode implicar doses muito diferentes conforme ângulos, paciente e parâmetros; Ka,r/DAP são mais informativos",
      "c) Não tem nenhuma utilidade",
      "d) Substitui Ka,r e DAP",
      "e) Só importa em cine"
    ],
    answer: 1,
    comment: "Tempo é grosseiro; métricas dosimétricas (Ka,r/DAP) são superiores para risco.",
    source: "Boas práticas ALARA."
  },
  {
    q: "Q3-30) Ao final de um caso complexo com Ka,r elevado, qual conduta organizacional é mais adequada?",
    options: [
      "a) Não registrar nada para evitar preocupação",
      "b) Registrar métricas, orientar follow-up de pele quando indicado e revisar pontos de otimização (colimação, ângulos, cine) para melhoria contínua",
      "c) Suspender todos os procedimentos do laboratório por 1 mês",
      "d) Ignorar porque efeitos cutâneos são impossíveis em hemodinâmica moderna",
      "e) Repetir o procedimento na semana seguinte para “diluir dose”"
    ],
    answer: 1,
    comment: "Registro, rastreio e melhoria de processo fazem parte de programas de qualidade e segurança em radioproteção.",
    source: "Programas de qualidade/radioproteção (conceitos)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap03",
    icon: "☢️",
    title: "Radiação em Hemodinâmica",
    description: "Princípios de radiação ionizante, proteção radiológica, dose e otimização em procedimentos.",
    tags: ["Radiação", "Proteção Radiológica", "Fluoroscopia"],
    questions: questions
  });
})();
