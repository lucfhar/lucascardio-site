// ═══════════════════════════════════════════════════════════
// CAPÍTULO 13 — ICP Primária, Resgate e Facilitada
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q13-01) Em STEMI até 3 h do início, com centro sem hemodinâmica e previsão realista de FMC-to-device >120 min, qual estratégia é mais alinhada à evidência e diretrizes (quando fibrinólise não é contraindicada)?",
    options: [
      "a) Aguardar transferência para PCI primária, independentemente do atraso",
      "b) Fibrinólise imediata e estratégia farmacoinvasiva (angiografia/PCI precoce) em vez de “watchful waiting”",
      "c) Facilitação com GPIIb/IIIa e transferência sem fibrinólise",
      "d) Fibrinólise e alta domiciliar sem angiografia",
      "e) Apenas heparina e observação"
    ],
    answer: 1,
    comment: "Quando o atraso para PCI primária é grande, fibrinólise precoce seguida de estratégia farmacoinvasiva reduz falha de reperfusão e eventos em redes bem estruturadas.",
    source: "ESC STEMI Guideline; STREAM trial (farmacoinvasiva)."
  },
  {
    q: "Q13-02) “Rescue PCI” é indicada principalmente quando, após fibrinólise, há:",
    options: [
      "a) Qualquer elevação de troponina",
      "b) Falha de reperfusão (ex.: <50% de resolução do ST em 60–90 min), instabilidade hemodinâmica/arrítmica ou isquemia recorrente",
      "c) Dor resolvida em 10 min e ST normalizado",
      "d) Apenas bradicardia vagal",
      "e) Apenas idade avançada"
    ],
    answer: 1,
    comment: "Rescue PCI é a estratégia para falha de reperfusão ou deterioração clínica pós-lítico.",
    source: "ESC/ACC STEMI guidelines; CARESS-in-AMI; TRANSFER-AMI (conceitos)."
  },
  {
    q: "Q13-03) Qual parâmetro eletrocardiográfico é mais usado na prática para “triagem” de reperfusão pós-fibrinólise antes de decidir rescue PCI?",
    options: [
      "a) QTc",
      "b) Resolução do supra de ST (≥50% em 60–90 min, conforme protocolo)",
      "c) Presença de ondas Q",
      "d) Eixo elétrico",
      "e) PR"
    ],
    answer: 1,
    comment: "Resolução do ST é um marcador simples e útil de reperfusão miocárdica.",
    source: "Diretrizes STEMI; literatura de reperfusão pós-lítico."
  },
  {
    q: "Q13-04) “Facilitated PCI” (fibrinólise de rotina ou lítico + GPIIb/IIIa antes da PCI planejada) em grandes ensaios foi associada a:",
    options: [
      "a) Redução consistente de mortalidade e sangramento",
      "b) Maior sangramento/complicações e ausência de benefício clínico robusto em comparação à PCI primária",
      "c) Eliminação de trombose de stent",
      "d) Necessidade de menos anticoagulação",
      "e) Benefício apenas quando door-to-balloon é <30 min"
    ],
    answer: 1,
    comment: "Ensaios como FINESSE e ASSENT-4 PCI não sustentaram facilitated PCI rotineira; houve mais sangramento e sem benefício clínico claro.",
    source: "FINESSE; ASSENT-4 PCI."
  },
  {
    q: "Q13-05) Em rede de STEMI com trombólise pré-hospitalar, qual estratégia de cateterismo pós-lítico é mais coerente quando há reperfusão aparente (ST resolve, dor cessa) e estabilidade?",
    options: [
      "a) Nenhuma angiografia é necessária",
      "b) Angiografia/PCI “de rotina” precoce (farmacoinvasiva) dentro de janela protocolar, não apenas “se piorar”",
      "c) Apenas teste ergométrico em 6 semanas",
      "d) CABG obrigatória",
      "e) Alta imediata em 2 horas"
    ],
    answer: 1,
    comment: "Farmacoinvasiva prevê angiografia precoce mesmo com reperfusão aparente, reduzindo reinfarto e isquemia recorrente em muitos cenários.",
    source: "STREAM; TRANSFER-AMI; diretrizes STEMI."
  },
  {
    q: "Q13-06) Qual cenário define, na prática, “tempo perdido” em STEMI e desloca o balanço a favor de fibrinólise inicial?",
    options: [
      "a) Door-to-balloon 30 min",
      "b) Atraso prolongado para PCI primária (ex.: FMC-to-device >120 min) em paciente elegível a lítico",
      "c) Centro com hemodinâmica 24/7 e equipe pronta",
      "d) ECG com supra muito pequeno",
      "e) Troponina negativa"
    ],
    answer: 1,
    comment: "Diretrizes usam limiares de atraso previstos para decidir lítico vs transferência para PCI primária.",
    source: "ESC/ACC STEMI guidelines."
  },
  {
    q: "Q13-07) Em fibrinólise, qual é a complicação hemorrágica mais temida e que domina contraindicações absolutas?",
    options: [
      "a) Hematoma local",
      "b) Hemorragia intracraniana",
      "c) Epistaxe",
      "d) Hematúria microscópica",
      "e) Equimose"
    ],
    answer: 1,
    comment: "Hemorragia intracraniana é o evento mais grave e guia contraindicações.",
    source: "Diretrizes STEMI; farmacologia trombólise."
  },
  {
    q: "Q13-08) Em estratégia farmacoinvasiva com tenecteplase, qual ajuste clássico é realizado em idosos para reduzir hemorragia?",
    options: [
      "a) Dobrar a dose",
      "b) Reduzir dose (estratégia usada em estudos/recomendações específicas) conforme idade/risco",
      "c) Trocar por alteplase sempre",
      "d) Proibir anticoagulante",
      "e) Administrar vitamina K"
    ],
    answer: 1,
    comment: "Protocolos (p.ex., STREAM) ajustaram dose em idosos para reduzir HIC, reforçando individualização por risco.",
    source: "STREAM trial; diretrizes STEMI (síntese)."
  },
  {
    q: "Q13-09) Após fibrinólise, qual achado clínico/ECG define “reperfusão bem-sucedida” com maior especificidade prática?",
    options: [
      "a) Troponina subindo",
      "b) Resolução do ST ≥50% e alívio sustentado de dor, com estabilidade hemodinâmica",
      "c) Febre",
      "d) QT prolongado",
      "e) Bradicardia persistente"
    ],
    answer: 1,
    comment: "Combinação de resolução do ST e melhora clínica é o padrão operacional de reperfusão.",
    source: "Diretrizes STEMI; literatura de reperfusão."
  },
  {
    q: "Q13-10) Qual é o erro mais comum ao interpretar “door-to-balloon” na decisão de rede de STEMI?",
    options: [
      "a) Considerar apenas tempo intrahospitalar e ignorar atraso total (FMC-to-device)",
      "b) Medir FMC",
      "c) Fazer ECG no pré-hospitalar",
      "d) Protocolar transporte direto",
      "e) Acionar hemodinâmica cedo"
    ],
    answer: 0,
    comment: "O parâmetro relevante é o atraso total até reperfusão mecânica (FMC-to-device), não apenas door-to-balloon.",
    source: "ESC/ACC STEMI guidelines."
  },

  // Q13-11 a Q13-30
  {
    q: "Q13-11) Em suspeita de STEMI, qual intervenção logística mais reduz tempo até reperfusão em redes maduras?",
    options: [
      "a) Esperar confirmação por troponina",
      "b) Diagnóstico por ECG no pré-hospitalar + ativação antecipada do laboratório + transporte direto para sala (bypass ER quando apropriado)",
      "c) Fazer eco antes de qualquer decisão",
      "d) Transferir sempre para hospital sem hemodinâmica",
      "e) Sedar antes do ECG"
    ],
    answer: 1,
    comment: "Ativação precoce e bypass do pronto-socorro, quando seguro, reduzem atrasos.",
    source: "Diretrizes STEMI; programas de redes de reperfusão (síntese)."
  },
  {
    q: "Q13-12) Em estratégia farmacoinvasiva, qual anticoagulante tem longa tradição de uso associado à fibrinólise e reduz reinfarto em estudos clássicos?",
    options: [
      "a) Varfarina",
      "b) Enoxaparina (em esquemas específicos) ou UFH conforme protocolo",
      "c) Apixabana",
      "d) Rivaroxabana plena dose",
      "e) Dabigatrana"
    ],
    answer: 1,
    comment: "Esquemas com UFH/enoxaparina foram extensivamente estudados e compõem protocolos de fibrinólise; escolha depende de diretriz/local.",
    source: "Diretrizes STEMI; ensaios de fibrinólise e anticoagulação (síntese)."
  },
  {
    q: "Q13-13) Em facilitated PCI, qual componente foi particularmente implicado no aumento de sangramento em comparação à PCI primária?",
    options: [
      "a) Uso de AAS",
      "b) Lítico sistêmico (± GPIIb/IIIa) antes da PCI",
      "c) Heparina em dose padrão",
      "d) Nitrato IC",
      "e) Estatina"
    ],
    answer: 1,
    comment: "Lítico pré-PCI aumenta sangramento e não mostrou benefício robusto quando PCI primária é viável em tempo adequado.",
    source: "FINESSE; ASSENT-4 PCI."
  },
  {
    q: "Q13-14) Em cenário rural, paciente com STEMI e contraindicação absoluta a lítico, e tempo previsto para PCI 150 min. Melhor estratégia é:",
    options: [
      "a) Lítico mesmo assim",
      "b) Transferência para PCI primária com maximização logística (mesmo com atraso) e terapia antitrombótica adequada",
      "c) Apenas terapia médica e alta",
      "d) Trombólise local",
      "e) Esperar 24h e repetir ECG"
    ],
    answer: 1,
    comment: "Quando lítico é contraindicado, resta otimizar transferência e realizar PCI primária quando possível.",
    source: "Diretrizes STEMI."
  },
  {
    q: "Q13-15) Pós-fibrinólise, qual é o risco “clínico” mais importante de não realizar angiografia/PCI planejada mesmo com reperfusão aparente?",
    options: [
      "a) Hipoglicemia",
      "b) Reoclusão/reinfarto e isquemia recorrente",
      "c) CI-AKI por contraste inexistente",
      "d) Endocardite",
      "e) TEP"
    ],
    answer: 1,
    comment: "Sem estratégia farmacoinvasiva, há maior risco de reoclusão e eventos recorrentes após lítico.",
    source: "TRANSFER-AMI; diretrizes STEMI (síntese)."
  },
  {
    q: "Q13-16) Em “rescue PCI”, a lesão culpada costuma ter qual cenário angiográfico mais comum?",
    options: [
      "a) TIMI 3 e ausência de trombo sempre",
      "b) Fluxo TIMI 0–1 persistente ou reoclusão, frequentemente com trombo residual importante",
      "c) Apenas espasmo sem lesão",
      "d) Dissecção aórtica",
      "e) Aneurisma coronário"
    ],
    answer: 1,
    comment: "Falha de reperfusão geralmente reflete persistência de oclusão/trombo ou reoclusão precoce.",
    source: "Diretrizes STEMI; estudos de rescue PCI (síntese)."
  },
  {
    q: "Q13-17) Qual métrica resume melhor a qualidade de uma rede de STEMI (além do tempo) para comparar sistemas?",
    options: [
      "a) Número de cateteres usados",
      "b) Proporção de pacientes reperfundidos dentro da janela-alvo (FMC-to-device ou FMC-to-needle), e mortalidade ajustada",
      "c) Volume de contraste",
      "d) Tipo de stent",
      "e) Cor do guia"
    ],
    answer: 1,
    comment: "A proporção dentro da janela, mais desfechos ajustados, reflete performance real da rede.",
    source: "Diretrizes STEMI; qualidade em sistemas de reperfusão (síntese)."
  },
  {
    q: "Q13-18) Em farmacoinvasiva, qual janela para angiografia pós-lítico é geralmente recomendada (ordem de grandeza), se não houver falha/instabilidade?",
    options: [
      "a) 7–14 dias",
      "b) 24–72 horas ou mais tarde sempre",
      "c) Precoce, tipicamente dentro de 2–24 horas conforme protocolo/diretriz",
      "d) Apenas se troponina subir",
      "e) Nunca"
    ],
    answer: 2,
    comment: "Farmacoinvasiva prevê angiografia precoce programada em janela horas–1 dia (varia por diretriz).",
    source: "ESC STEMI guideline; estudos farmacoinvasivos."
  },
  {
    q: "Q13-19) Em STEMI, qual situação torna fibrinólise particularmente atraente do ponto de vista de “tempo é músculo”?",
    options: [
      "a) Sintomas há 14 horas, sem dor",
      "b) Início muito precoce (primeiras horas) com atraso grande para PCI primária",
      "c) Contraindicação absoluta a lítico",
      "d) Choque cardiogênico em hospital com PCI imediata",
      "e) TCE suspeito"
    ],
    answer: 1,
    comment: "Benefício do lítico é maior em apresentações muito precoces, quando PCI não pode ser realizada em tempo adequado.",
    source: "Diretrizes STEMI; estudos de fibrinólise precoce."
  },
  {
    q: "Q13-20) Em paciente com STEMI e choque cardiogênico em centro com PCI disponível, qual reperfusão é preferida?",
    options: [
      "a) Fibrinólise como primeira escolha",
      "b) PCI primária imediata (com suporte hemodinâmico conforme necessidade)",
      "c) Sem reperfusão",
      "d) Apenas nitrato",
      "e) Apenas anticoagulação"
    ],
    answer: 1,
    comment: "Choque favorece PCI primária quando disponível, por maior eficácia e controle de complicações.",
    source: "Diretrizes STEMI; CULPRIT-SHOCK (contexto multiarterial)."
  },
  {
    q: "Q13-21) Qual estratégia reduz risco de “falso resgate” (achar que falhou e levar para rescue sem necessidade)?",
    options: [
      "a) Decidir baseado em dor isolada",
      "b) Usar combinação: ST resolution + quadro clínico +, quando dúvida, avaliação adicional (ex.: angiografia precoce programada conforme rede)",
      "c) Esperar 24h para decidir sempre",
      "d) Usar troponina isolada",
      "e) Decidir por idade"
    ],
    answer: 1,
    comment: "A avaliação integrada reduz erros; redes farmacoinvasivas mitigam a necessidade de “decisão binária” tardia.",
    source: "Diretrizes STEMI; conceitos de reperfusão."
  },
  {
    q: "Q13-22) Em facilitated PCI, por que “melhor patência” pré-PCI não se traduziu em melhores desfechos clínicos?",
    options: [
      "a) Porque patência não importa em STEMI",
      "b) Porque o custo em sangramento e complicações superou o ganho, e PCI primária moderna já é altamente eficaz quando o tempo é adequado",
      "c) Porque não havia stents",
      "d) Porque GPIIb/IIIa é placebo",
      "e) Porque anticoagulação era proibida"
    ],
    answer: 1,
    comment: "O trade-off (sangramento/ICH) e a alta eficácia da PCI primária explicam falta de benefício líquido.",
    source: "FINESSE; ASSENT-4 PCI."
  },
  {
    q: "Q13-23) Em fibrinólise, qual erro aumenta risco de sangramento sem ganho isquêmico?",
    options: [
      "a) Ajustar dose por peso/idade quando recomendado",
      "b) Administrar lítico fora de janela/sem critérios claros de STEMI e sem exclusão de contraindicações",
      "c) Checar PA e história neurológica",
      "d) Obter ECG seriado",
      "e) Usar rede farmacoinvasiva"
    ],
    answer: 1,
    comment: "Seleção inadequada aumenta risco hemorrágico sem benefício.",
    source: "Diretrizes STEMI; farmacologia trombólise."
  },
  {
    q: "Q13-24) Em estratégia farmacoinvasiva, qual é a principal função do P2Y12 (clopidogrel historicamente) associado ao lítico?",
    options: [
      "a) Prevenir CI-AKI",
      "b) Reduzir reoclusão e eventos trombóticos após fibrinólise",
      "c) Aumentar pressão arterial",
      "d) Reduzir QT",
      "e) Tratar broncoespasmo"
    ],
    answer: 1,
    comment: "A agregação plaquetária contribui para reoclusão pós-lítico; P2Y12 reduz esse risco.",
    source: "Ensaios clássicos de clopidogrel em fibrinólise (síntese); diretrizes STEMI."
  },
  {
    q: "Q13-25) Em cenário de “PCI primária tardia” (apresentação tardia e vaso ocluído), a indicação mais forte para intervenção é:",
    options: [
      "a) Oclusão estável assintomática sem isquemia, >24h",
      "b) Isquemia persistente, instabilidade hemodinâmica/arrítmica ou complicações mecânicas",
      "c) Troponina baixa",
      "d) LDL alto",
      "e) Apenas idade <50"
    ],
    answer: 1,
    comment: "Em late presenters, a decisão é guiada por isquemia/instabilidade, não por “abrir por abrir”.",
    source: "Diretrizes STEMI; estudos de late PCI (síntese)."
  },
  {
    q: "Q13-26) Qual componente da “qualidade” em PCI primária reduz mortalidade além do tempo (processo)?",
    options: [
      "a) Magnificação máxima",
      "b) Minimizar complicações (no-reflow, dissecção, sangramento), otimizar antitrombótico e acesso (radial quando apropriado)",
      "c) Contraste iso-osmolar em todos",
      "d) Sedação profunda sempre",
      "e) Evitar ACT"
    ],
    answer: 1,
    comment: "Processos que reduzem sangramento e complicações periprocedimento impactam prognóstico em ACS.",
    source: "Diretrizes STEMI/PCI; evidência de acesso radial em ACS (síntese)."
  },
  {
    q: "Q13-27) Em paciente com contraindicação relativa a lítico (risco hemorrágico moderado) e atraso previsto borderline, qual abordagem é mais correta?",
    options: [
      "a) Lítico obrigatório",
      "b) Individualizar: pesar risco hemorrágico vs atraso, buscar reduzir tempo de transferência; PCI primária pode ser preferida se atraso pode ser encurtado",
      "c) Sem reperfusão",
      "d) Apenas heparina",
      "e) Facilitar com GPIIb/IIIa"
    ],
    answer: 1,
    comment: "Decisão é de risco-benefício; redes devem reduzir atrasos para tornar PCI primária viável.",
    source: "Diretrizes STEMI."
  },
  {
    q: "Q13-28) Em pós-fibrinólise, qual é o maior erro de manejo de anticoagulação/antiagregação?",
    options: [
      "a) Seguir protocolo por tempo definido",
      "b) Interromper precocemente sem motivo e sem planejar angiografia, aumentando reoclusão",
      "c) Monitorar sangramento",
      "d) Ajustar dose por função renal",
      "e) Planejar transferência"
    ],
    answer: 1,
    comment: "Interrupção inadequada aumenta reoclusão/reinfarto.",
    source: "Diretrizes STEMI; estudos farmacoinvasivos (síntese)."
  },
  {
    q: "Q13-29) Em STEMI, “fibrinólise de resgate” (repetir lítico após falha) é geralmente:",
    options: [
      "a) Preferida a rescue PCI",
      "b) Menos preferida; rescue PCI é estratégia recomendada em falha de reperfusão",
      "c) Isenta de sangramento",
      "d) Obrigatória em todos",
      "e) Sempre superior"
    ],
    answer: 1,
    comment: "Rescue PCI é a abordagem padrão para falha; repetir lítico aumenta sangramento e tem menor eficácia global.",
    source: "Diretrizes STEMI (síntese)."
  },
  {
    q: "Q13-30) Em resumo, a decisão entre PCI primária e farmacoinvasiva deve priorizar:",
    options: [
      "a) Preferência do operador apenas",
      "b) Tempo total até reperfusão (FMC-to-device), contraindicações a lítico, risco hemorrágico e capacidade real da rede",
      "c) Tipo de stent",
      "d) Tipo de contraste",
      "e) Nível de troponina"
    ],
    answer: 1,
    comment: "Reperfusão eficaz e rápida, com segurança, é o objetivo; a rede define a melhor estratégia.",
    source: "ESC/ACC STEMI guidelines."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap13",
    icon: "🆘",
    title: "ICP Primária, Resgate e Facilitada",
    description: "ICP primária no STEMI, fibrinólise, resgate e estratégias de reperfusão.",
    tags: ["STEMI", "ICP Primária", "Resgate"],
    questions: questions
  });
})();
