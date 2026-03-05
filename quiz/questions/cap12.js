// ═══════════════════════════════════════════════════════════
// CAPÍTULO 12 — ICP na SCA
// Quiz de Hemodinâmica | Dr. Lucas Silva
// ═══════════════════════════════════════════════════════════
(function () {
  const questions = [
{
    q: "Q12-01) Em STEMI multiarterial hemodinamicamente estável, qual estratégia tem melhor respaldo de evidência para reduzir eventos futuros?",
    options: [
      "a) Tratar apenas a lesão culpada e nunca revascularizar o restante",
      "b) Revascularização completa (culpada + não culpadas significativas), frequentemente de forma estagiada/planejada",
      "c) CABG emergencial em todos",
      "d) Trombólise após PCI",
      "e) Stent profilático em todas as placas não obstrutivas"
    ],
    answer: 1,
    comment: "Ensaios como COMPLETE sustentam completa revascularização em STEMI estável, com timing individualizado.",
    source: "COMPLETE trial (NEJM)."
  },
  {
    q: "Q12-02) Em choque cardiogênico com IAM e doença multiarterial, a evidência (CULPRIT-SHOCK) favorece inicialmente:",
    options: [
      "a) Revascularização completa imediata de todas as lesões",
      "b) PCI apenas da culpada (com possibilidade de estágio posterior), evitando multivaso imediato na fase de choque",
      "c) Trombólise antes da PCI",
      "d) Nenhuma intervenção",
      "e) CABG imediata em todos"
    ],
    answer: 1,
    comment: "CULPRIT-SHOCK mostrou melhor desfecho com estratégia culpada-only inicial em choque.",
    source: "CULPRIT-SHOCK (NEJM)."
  },
  {
    q: "Q12-03) Tromboaspiração em STEMI: a mensagem dos grandes ensaios (TOTAL, etc.) é:",
    options: [
      "a) Deve ser rotineira em todos",
      "b) Não deve ser rotineira; pode ser considerada como bailout em trombo muito grande/no-reflow selecionado",
      "c) É contraindicada em qualquer cenário",
      "d) Substitui DAPT",
      "e) Elimina risco de AVC"
    ],
    answer: 1,
    comment: "Rotina não; uso seletivo em bailout pode ser razoável.",
    source: "TOTAL trial (NEJM); diretrizes STEMI (síntese)."
  },
  {
    q: "Q12-04) No-reflow em STEMI: qual combinação terapêutica é mais prática (além de corrigir causa mecânica)?",
    options: [
      "a) Apenas aumentar pressão do balão",
      "b) Vasodilatadores intracoronários (adenosina, verapamil, nitroprussiato, conforme protocolo) + otimizar anticoagulação e reduzir embolização",
      "c) Suspender heparina",
      "d) Apenas diurético",
      "e) Apenas AAS"
    ],
    answer: 1,
    comment: "No-reflow é microvascular; terapia IC é adjuvante, com foco em reduzir embolização e otimizar técnica.",
    source: "Diretrizes STEMI/PCI; textos de microcirculação (síntese)."
  },
  {
    q: "Q12-05) Em NSTEMI, “pretratamento” rotineiro com P2Y12 antes de conhecer anatomia (principalmente se risco de CABG) é:",
    options: [
      "a) Sempre recomendado",
      "b) Controverso; muitas diretrizes sugerem individualizar e evitar pretratamento rotineiro em estratégia invasiva precoce",
      "c) Obrigatório com prasugrel",
      "d) Substituído por trombólise",
      "e) Recomendado apenas se troponina negativa"
    ],
    answer: 1,
    comment: "O trade-off é sangramento/cirurgia vs isquemia; tendência é individualização.",
    source: "Diretrizes NSTE-ACS (ESC/ACC – síntese); ensaios de estratégia invasiva."
  },
  {
    q: "Q12-06) TIMACS (NSTE-ACS): qual conclusão geral é mais correta sobre timing invasivo precoce vs tardio?",
    options: [
      "a) Precoce é sempre superior em todos os pacientes",
      "b) Benefício mais evidente em subgrupos de alto risco (ex.: GRACE alto), enquanto no geral diferenças podem ser modestas",
      "c) Invasivo precoce aumenta mortalidade em todos",
      "d) Timing é irrelevante",
      "e) Apenas troponina define tudo"
    ],
    answer: 1,
    comment: "Efeito do timing depende de risco; alto risco tende a se beneficiar mais de abordagem precoce.",
    source: "TIMACS trial (NEJM) e diretrizes NSTE-ACS (síntese)."
  },
  {
    q: "Q12-07) Em STEMI inferior com suspeita de infarto de VD (hipotensão, pulmões limpos), a conduta hemodinâmica inicial mais correta é:",
    options: [
      "a) Nitrato IV em alta dose",
      "b) Otimizar pré-carga (volume cauteloso), manter MAP e evitar vasodilatadores que reduzam pré-carga; reperfusão é essencial",
      "c) Diurético agressivo",
      "d) Nitroprussiato",
      "e) Betabloqueador IV em alta dose como regra"
    ],
    answer: 1,
    comment: "Infarto de VD é pré-carga-dependente; nitratos/diuréticos podem colapsar débito.",
    source: "Diretrizes STEMI; fisiologia hemodinâmica."
  },
  {
    q: "Q12-08) Em STEMI com multivaso, qual armadilha ao usar FFR no cenário agudo (culpada vs não culpadas)?",
    options: [
      "a) FFR é sempre inválido em qualquer vaso",
      "b) Disfunção microvascular aguda pode alterar hiperemia e tornar interpretação mais complexa; timing e contexto importam",
      "c) FFR sempre superestima lesão não culpada",
      "d) FFR sempre subestima lesão não culpada",
      "e) FFR substitui angiografia"
    ],
    answer: 1,
    comment: "No agudo, microvasculatura pode estar alterada; decisões frequentemente usam angiografia e estágio planejado/condições mais estáveis.",
    source: "Ensaios de completa revascularização e fisiologia em STEMI (síntese)."
  },
  {
    q: "Q12-09) Em oclusão trombótica com grande burden e risco de embolização, qual tática mecânica reduz microembolização em muitos casos?",
    options: [
      "a) Múltiplas pré-dilatações agressivas",
      "b) Estratégia “gentle”: wiring cuidadoso, evitar barotrauma, considerar stent direto em casos selecionados e uso seletivo de tromboaspiração/bailout",
      "c) Suspender anticoagulação",
      "d) Injetar contraste em alta pressão repetidamente",
      "e) Magnificação máxima contínua"
    ],
    answer: 1,
    comment: "Menos manipulação e menor barotrauma podem reduzir embolização; a escolha depende do contexto anatômico e de fluxo.",
    source: "Diretrizes STEMI/PCI (síntese)."
  },
  {
    q: "Q12-10) Em paciente pós-ROSC (parada cardíaca) com suspeita de IAM, decisão de cateterismo imediato depende principalmente de:",
    options: [
      "a) LDL",
      "b) ECG (supra), instabilidade hemodinâmica/arrítmica e probabilidade de causa coronária, além de logística e prognóstico neurológico",
      "c) Cor do trombo",
      "d) Tipo de contraste",
      "e) Somente idade"
    ],
    answer: 1,
    comment: "Supra e instabilidade favorecem estratégia imediata; sem supra, seleção é mais complexa e depende de probabilidade clínica.",
    source: "AHA/ESC postarresto (síntese)."
  },

  // Q12-11 a Q12-30
  {
    q: "Q12-11) Em STEMI, acesso radial vs femoral: qual mensagem geral dos grandes estudos/macroevidência em ACS?",
    options: [
      "a) Radial aumenta mortalidade",
      "b) Radial reduz sangramento e pode reduzir mortalidade em ACS em alguns estudos, especialmente onde sangramento impacta prognóstico",
      "c) Femoral é sempre superior",
      "d) Acesso não influencia nada",
      "e) Radial é proibido em STEMI"
    ],
    answer: 1,
    comment: "MATRIX e outros sustentam benefício de radial, sobretudo por reduzir sangramento/complicações.",
    source: "MATRIX trial (Lancet/NEJM – síntese); diretrizes ACS."
  },
  {
    q: "Q12-12) Em choque cardiogênico por IAM, por que vasopressores/inotrópicos “em escalada” podem piorar prognóstico?",
    options: [
      "a) Porque reduzem FC e demanda",
      "b) Porque aumentam MVO2, arritmias e vasoconstrição, e indicam falência de suporte farmacológico (gatilho para MCS)",
      "c) Porque reduzem lactato sempre",
      "d) Porque melhoram microcirculação",
      "e) Porque eliminam necessidade de reperfusão"
    ],
    answer: 1,
    comment: "Carga catecolamínica alta é marcador de gravidade e aumenta eventos; considerar MCS e correção causal.",
    source: "AHA/ESC shock statements; DOREMI/SOAP II (conceitos)."
  },
  {
    q: "Q12-13) Em NSTEMI com GRACE alto e sinais de instabilidade (dor recorrente, ST dinâmico), timing invasivo preferido é:",
    options: [
      "a) Sempre após 7 dias",
      "b) Muito precoce (horas) / estratégia invasiva urgente conforme instabilidade",
      "c) Apenas após teste ergométrico",
      "d) Nunca invasivo",
      "e) Apenas se troponina negativa"
    ],
    answer: 1,
    comment: "Instabilidade clínica/alto risco favorecem abordagem precoce/urgente.",
    source: "Diretrizes NSTE-ACS (ESC/ACC – síntese)."
  },
  {
    q: "Q12-14) Em STEMI com “desequilíbrio” entre oferta e demanda e espasmo importante (MINOCA/vasoespasmo), qual é a armadilha mais perigosa?",
    options: [
      "a) Usar nitrato",
      "b) Assumir que toda elevação de troponina é placa rota tratável com stent sem avaliação adequada do mecanismo",
      "c) Fazer eco",
      "d) Monitorar ECG",
      "e) Usar bloqueador de canal de cálcio"
    ],
    answer: 1,
    comment: "Em SCA sem obstrução, mecanismo deve ser definido (espasmo, dissecção, miocardite, etc.) antes de “stentar por reflexo”.",
    source: "Diretrizes MINOCA/ACS (síntese)."
  },
  {
    q: "Q12-15) Em SCAD (dissecção coronária espontânea) no contexto de SCA, a estratégia usual (quando estável e com fluxo preservado) é:",
    options: [
      "a) PCI imediata em todos",
      "b) Conservadora (observação/terapia médica) quando possível, porque PCI tem maior taxa de complicações técnicas",
      "c) Trombólise rotineira",
      "d) CABG em todos",
      "e) Stent profilático em toda a artéria"
    ],
    answer: 1,
    comment: "SCAD frequentemente cicatriza; PCI é tecnicamente desafiadora e pode propagar dissecção.",
    source: "AHA scientific statement SCAD (síntese)."
  },
  {
    q: "Q12-16) Em STEMI com grande trombo e TIMI 0, após wiring ocorre no-reflow. Melhor “sequência” inicial costuma ser:",
    options: [
      "a) Pós-dilatação em alta pressão imediatamente",
      "b) Excluir dissecção/oclusão mecânica, administrar vasodilatadores IC e considerar estratégia de trombo/bailout, mantendo ACT adequado",
      "c) Suspender heparina",
      "d) Trocar contraste",
      "e) Implantar stent longo sem ver"
    ],
    answer: 1,
    comment: "No-reflow requer abordagem sistemática: mecânico vs microvascular.",
    source: "Diretrizes STEMI/PCI (síntese)."
  },
  {
    q: "Q12-17) Em STEMI com doença triarterial, após reperfusão bem-sucedida, a decisão de completar revascularização deve considerar:",
    options: [
      "a) Apenas vontade do operador",
      "b) Estabilidade clínica, complexidade (SYNTAX), risco renal/contraste, e possibilidade de estágio com fisiologia/imagem",
      "c) Apenas LDL",
      "d) Apenas idade",
      "e) Apenas sexo"
    ],
    answer: 1,
    comment: "Completar revascularização é benéfico em muitos estáveis, mas deve ser individualizado.",
    source: "COMPLETE; diretrizes STEMI (síntese)."
  },
  {
    q: "Q12-18) Em choque cardiogênico pós-IAM, por que “multivaso imediato” pode ser prejudicial (conceito do CULPRIT-SHOCK)?",
    options: [
      "a) Porque reduz contraste",
      "b) Porque aumenta tempo de procedimento, contraste e instabilidade, potencialmente piorando perfusão e complicações",
      "c) Porque reduz revascularização total",
      "d) Porque impede uso de vasopressor",
      "e) Porque elimina necessidade de MCS"
    ],
    answer: 1,
    comment: "Em choque, simplicidade inicial (culpada-only) reduz carga de procedimento/contraste e pode melhorar desfechos.",
    source: "CULPRIT-SHOCK (NEJM)."
  },
  {
    q: "Q12-19) Em NSTE-ACS, escolha de stent (DES contemporâneo) versus BMS hoje é guiada principalmente por:",
    options: [
      "a) Necessidade de evitar DAPT (BMS sempre melhor)",
      "b) DES contemporâneo é padrão pela menor reestenose e boa segurança; duração de DAPT pode ser encurtada em HBR com DES modernos",
      "c) BMS reduz trombose sempre",
      "d) BMS elimina necessidade de antiagregantes",
      "e) Tipo de contraste"
    ],
    answer: 1,
    comment: "DES modernos dominaram; a discussão atual é duração/estratégia de antiagregação em HBR.",
    source: "Diretrizes PCI/DAPT; ARC-HBR (síntese)."
  },
  {
    q: "Q12-20) Em STEMI com falha de reperfusão após fibrinólise, a estratégia recomendada é:",
    options: [
      "a) Repetir fibrinólise em todos",
      "b) Rescue PCI",
      "c) Aguardar 48h sempre",
      "d) Apenas nitrato",
      "e) Nenhuma intervenção"
    ],
    answer: 1,
    comment: "Rescue PCI é indicada na falha de reperfusão pós-lítico.",
    source: "Diretrizes STEMI (ESC/ACC – síntese)."
  },
  {
    q: "Q12-21) Em NSTEMI, qual situação aumenta mais risco de sangramento com estratégia antitrombótica intensa (impactando escolha de P2Y12/DAPT)?",
    options: [
      "a) HDL baixo",
      "b) ARC-HBR/idade avançada/CKD/anemia/sangramento prévio",
      "c) História familiar",
      "d) Miopia",
      "e) Rinossinusite"
    ],
    answer: 1,
    comment: "Perfil HBR determina duração e intensidade de antitrombótico.",
    source: "ARC-HBR consensus."
  },
  {
    q: "Q12-22) Em SCA, a principal causa de mortalidade precoce que a reperfusão imediata visa reduzir em STEMI é:",
    options: [
      "a) ISR tardia",
      "b) Necrose miocárdica extensa levando a choque/arrítmias malignas e falência mecânica",
      "c) CI-AKI",
      "d) Hipoglicemia",
      "e) Endocardite"
    ],
    answer: 1,
    comment: "Tempo é músculo: reduzir necrose reduz choque, FV/TV e complicações mecânicas.",
    source: "Diretrizes STEMI (síntese)."
  },
  {
    q: "Q12-23) Em STEMI, “door-to-balloon” é relevante porque:",
    options: [
      "a) Afeta apenas sintomas",
      "b) Tempo para reperfusão correlaciona-se com tamanho de infarto e mortalidade/IC",
      "c) Afeta apenas CI-AKI",
      "d) Não importa após 6h",
      "e) Só importa em mulheres"
    ],
    answer: 1,
    comment: "Redução do tempo de isquemia melhora desfechos.",
    source: "Diretrizes STEMI; literatura de tempo-isquemia (síntese)."
  },
  {
    q: "Q12-24) Em “late presenter” STEMI (muitas horas após início) sem isquemia/instabilidade, a decisão de PCI tardia do vaso ocluído é:",
    options: [
      "a) Sempre indicada",
      "b) Depende: em geral não é rotina para oclusão estável tardia sem isquemia, mas há indicações em isquemia, instabilidade, arritmias ou viabilidade/angina",
      "c) Sempre proibida",
      "d) Exige trombólise",
      "e) Exige CABG"
    ],
    answer: 1,
    comment: "Rotina de abrir vaso ocluído tardio estável não é padrão; indicações existem em cenários selecionados.",
    source: "Diretrizes STEMI; estudos de late PCI (síntese)."
  },
  {
    q: "Q12-25) Em NSTE-ACS com CKD avançada, o dilema invasivo vs conservador envolve:",
    options: [
      "a) Apenas risco de alergia a contraste",
      "b) Balanço entre risco isquêmico alto (benefício potencial de invasivo) e risco renal/hemorrágico; estratégia deve ser individualizada com proteção renal e técnica de baixo contraste",
      "c) CKD elimina benefício de revascularização sempre",
      "d) CKD obriga CABG em todos",
      "e) CKD obriga trombólise"
    ],
    answer: 1,
    comment: "CKD é alto risco isquêmico e hemorrágico; a decisão é complexa e individualizada.",
    source: "Diretrizes NSTE-ACS/CKD (síntese); KDIGO (conceitos)."
  },
  {
    q: "Q12-26) Em STEMI com grande trombo e “slow flow”, qual erro técnico piora mais a microembolização?",
    options: [
      "a) Evitar pré-dilatação quando possível",
      "b) Múltiplas inflations de alta pressão antes de estabelecer fluxo e sem estratégia antitrombótica adequada",
      "c) Uso de heparina",
      "d) Radial",
      "e) Colimação"
    ],
    answer: 1,
    comment: "Barotrauma e manipulação excessiva em trombo elevam embolização distal e no-reflow.",
    source: "Princípios de PCI em trombo (síntese)."
  },
  {
    q: "Q12-27) Em NSTEMI, qual é o principal objetivo da estratégia invasiva precoce em alto risco?",
    options: [
      "a) Reduzir LDL rapidamente",
      "b) Identificar e tratar lesão culpada/instável para prevenir reinfarto, instabilidade e morte",
      "c) Evitar uso de P2Y12",
      "d) Aumentar contrastes",
      "e) Reduzir anemia"
    ],
    answer: 1,
    comment: "Em alto risco, reduzir eventos recorrentes e instabilidade por tratamento da lesão culpada.",
    source: "Diretrizes NSTE-ACS (síntese)."
  },
  {
    q: "Q12-28) Em STEMI, por que beta-bloqueador IV rotineiro é usado com cautela atualmente?",
    options: [
      "a) Porque aumenta LDL",
      "b) Porque pode precipitar choque/bradicardia em pacientes com disfunção ventricular/instabilidade; uso é selecionado",
      "c) Porque não reduz FC",
      "d) Porque aumenta perfusão renal sempre",
      "e) Porque substitui reperfusão"
    ],
    answer: 1,
    comment: "IV beta-bloqueador pode ser útil em selecionados, mas há risco em IC/choque incipiente.",
    source: "Diretrizes STEMI; estudos de beta-bloqueador em IAM (síntese)."
  },
  {
    q: "Q12-29) Em SCA, qual variável procedural tem maior impacto imediato em desfecho do que “tipo de stent”, em muitos cenários?",
    options: [
      "a) Cor do cateter",
      "b) Restauração rápida de fluxo (reperfusão) e prevenção de complicações (no-reflow, dissecção, trombose)",
      "c) HDL",
      "d) IMC",
      "e) Vitamina D"
    ],
    answer: 1,
    comment: "No agudo, tempo e sucesso técnico/fluxo são determinantes centrais; stents modernos têm performance alta.",
    source: "Diretrizes ACS/PCI (síntese)."
  },
  {
    q: "Q12-30) Em pós-PCI de ACS, qual intervenção de maior impacto em prevenção secundária é universalmente mandatória (salvo contraindicação)?",
    options: [
      "a) Suspender estatina",
      "b) Estatina de alta intensidade e otimização agressiva de LDL (± ezetimiba/PCSK9 conforme meta), além de terapia antitrombótica adequada",
      "c) Apenas nitrato",
      "d) Apenas diurético",
      "e) Apenas antibiótico"
    ],
    answer: 1,
    comment: "Controle intensivo de LDL e prevenção secundária estruturada reduzem eventos recorrentes de forma consistente.",
    source: "Diretrizes de ACS e dislipidemia; IMPROVE-IT; FOURIER; ODYSSEY OUTCOMES (síntese)."
  }
  ];

  window.QUIZ_REGISTRY = window.QUIZ_REGISTRY || [];
  window.QUIZ_REGISTRY.push({
    id: "cap12",
    icon: "🚨",
    title: "ICP na SCA",
    description: "Estratégia invasiva na SCA sem supradesnivelamento de ST: timing, técnica e farmacologia adjuvante.",
    tags: ["SCA", "NSTEMI", "Estratégia Invasiva"],
    questions: questions
  });
})();
