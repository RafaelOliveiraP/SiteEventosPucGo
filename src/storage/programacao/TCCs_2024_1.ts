enum enum_tcc {
  TCC1 = 1,
  TCC2
}

enum enum_titulacoes {
  DR = 1,
  ESP,
  MSC,
  POS_DR,
  ENG_AGRONOMA,
  ENG_AGRONOMO,
  GRAD,
  ARQ, 
  VAZIO
}


enum enum_cursos {  
  CIENCIA_DA_COMPUTACAO = 1,
  AGRONOMIA,
  CIENCIAS_AERONAUTICAS,
  ENGENHARIA_CIVIL,
  ENGENHARIA_DE_COMPUTACAO,
  ENGENHARIA_DE_CONTROLE_E_AUTOMACAO,
  ENGENHARIA_DE_PRODUCAO,
  ENGENHARIA_ELETRICA,
  ARQUITETURA_E_URBANISMO,
  DESIGN
}

const cursos : { [key in enum_cursos]: string } = {
  [enum_cursos.CIENCIA_DA_COMPUTACAO] : "Ciência da Computação",
  [enum_cursos.AGRONOMIA] : "Agronomia",
  [enum_cursos.CIENCIAS_AERONAUTICAS] : "Ciências Aeronáuticas",
  [enum_cursos.ENGENHARIA_CIVIL] : "Engenharia Civil",
  [enum_cursos.ENGENHARIA_DE_COMPUTACAO] : "Engenharia de Computação",
  [enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO] : "Engenharia de Controle e Automação",
  [enum_cursos.ENGENHARIA_DE_PRODUCAO] : "Engenharia de Produção",
  [enum_cursos.ENGENHARIA_ELETRICA] : "Engenharia Elétrica",
  [enum_cursos.ARQUITETURA_E_URBANISMO] : "Arquitetura e Urbanismo",
  [enum_cursos.DESIGN] : "Design"
};

const titulacoes : { [key in enum_titulacoes]: string } = {
  [enum_titulacoes.DR] : "Dr(a).",
  [enum_titulacoes.ESP] : "Esp.",
  [enum_titulacoes.MSC] : "Msc.",
  [enum_titulacoes.POS_DR] : "Pós Dr(a).",
  [enum_titulacoes.ENG_AGRONOMA] : "Eng. Agrônoma",
  [enum_titulacoes.ENG_AGRONOMO] : "Eng. Agrônomo",
  [enum_titulacoes.GRAD] : "Grad.",
  [enum_titulacoes.ARQ] : "Arq.",
  [enum_titulacoes.VAZIO] : "",
}




let TCCs = [

  {
    title: "COMO O BUSINESS INTELLIGENCE PODE CONTRIBUIR NA PREVENÇÃO DE CONTRATOS COM RISCO EM ÓRGÃOS PÚBLICOS",
    titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
    orientador: "ANDRE LUIZ ALVES",
    estudantes: "Matheus Gomes dos Santos Araújo", //se tiver mais de 1, separar por ;
    warning: "", //deixe vazio
    date: "17/06",
    time: "09:00-10:30",
    place: "Auditório 1, área II",
    titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
    nomePrimeiroMembroBanca: "Vicente Paulo de Camargo",
    titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
    nomeSegundoMembroBanca: "Ronaldo Lopes de Oliveira",
    titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
    nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
    curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
    tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "PREDIÇÃO DO RISCO DE CRÉDITO EM INSTITUIÇÕES FINANCEIRAS UTILIZANDO MACHINE LEARNING",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ANIBAL SANTOS JUKEMURA",
  estudantes: "Guilherme Freire Magalhães", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "21:15-22:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "LUCILIA GOMES RIBEIRO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "CREFIDE: APLICAÇÃO WEB PARA GERENCIAMENTO DE FIDELIDADE COMERCIAL",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ANIBAL SANTOS JUKEMURA",
  estudantes: "LUIZ AUGUSTO VIEIRA BOSCO", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "18:45-20:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "CARMEN CECILIA CENTENO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "VICENTE PAULO DE CAMARGO",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "Análise de motores da aviação de pequeno e médio porte e a sua influência na segurança de voo",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "ANNA PAULA BECHEPECHE",
  estudantes: "Miguel Artur Aresi da Silva", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "10:45-12:15",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Salmen Chaquip Bukzem",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Raul Francé Monteiro",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "Filosofia on condition: melhoria na confiabilidade e disponibilidade da frota",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "RAUL FRANCE MONTEIRO",
  estudantes: "Isabella Sabino Batista", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "07:15-08:45",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Tammyse Araújo da Silva",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Andreluiz da Silva Fernandes",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "Bem-estar emocional e fadiga: um estudo sobre os profissionais das linhas aéreas brasileiras",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "RAUL FRANCE MONTEIRO",
  estudantes: "José Coimbra Freire Neto", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "09:00-10:30",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Nagi Hanna S. Costa",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.ESP], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Tammyse Araújo da Silva",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIAS_AERONAUTICAS], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "ANÁLISE DINÂMICA E DECISÃO DA EVOPATRANSPIRAÇÃO DAS PLANTAS DURANTE SEU CRESCIMENTO",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "BRUNO QUIRINO DE OLIVEIRA",
  estudantes: "JULLIARD LEMOS PEREIRA FILHO; IAN BORGES DE ANDRADE AFONSO ARTIAGA", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "11:30-12:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Antonio Marcos de Melo",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "ANÁLISE PREDITIVA COM INTELIGENCIA ARTIFICAL PARA O CÁLCULO DE ETO DINÂMICO",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "BRUNO QUIRINO DE OLIVEIRA",
  estudantes: "ERICK PEREIRA DE SOUZA; ROBERTO GERAIS FREITAS", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "10:45-11:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Antonio Marcos de Melo",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Dimensionamento de Nobreak e Banco de Bateria",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "BRUNO QUIRINO DE OLIVEIRA",
  estudantes: "Gabriel Caetano Montijo de Sousa", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "09:45-10:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Antonio Marcos de Melo",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_ELETRICA], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "AUTOMAÇÃO DE OPERAÇÕES EM UMA PEQUENA FÁBRICA DE FERTILIZANTES À BASE DE CÁLCIO: UM ESTUDO DE CASO",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "BRUNO QUIRINO DE OLIVEIRA",
  estudantes: "LEONARDO ROCHA RODRIGUES", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "07:15-08:45",
  place: "Sala 407, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Carlos Alberto Vasconcelos Bezerra",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Antonio Marcos de Melo Medeiros",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_DE_CONTROLE_E_AUTOMACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "SISTEMA DE MONITORAMENTO DISTRIBUÍDO E ANÁLISE DE DADOS EM AMBIENTES VIRTUAIS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "GILDENOR DE SOUZA AMORIM CAVALCANTE",
  estudantes: "Vinícius Rodrigues Ferreira e Silva", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "21:15-22:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Solange da Silva",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "EFICIÊNCIA ENERGÉTICA EM TREINAMENTO DE MODELOS DE IA EM NUVEM",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "GUSTAVO SIQUEIRA VINHAL",
  estudantes: "VITOR FRANÇA", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "09:00-10:30",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Carlos Alexandre Ferreira de Lima",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "DEPLOY DE UMA APLICAÇÃO DE GESTÃO DE RESTAURANTE UTILIZANDO A PRÁTICA DE DEVOPS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "RAFAEL LEAL MARTINS",
  estudantes: "MATHEUS GUILHERME SOUZA SANTANA", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "10:45-12:15",
  place: "Sala 403, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Olegário Correa da Silva Neto",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Solange da Silva",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "USO DE INTELIGÊNCIA ARTIFICIAL PARA DIAGNÓSTICOS MÉDICOS",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "SOLANGE DA SILVA",
  estudantes: "Daniel Pires Torres", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "19:30-20:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.POS_DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Clarimar Jose Coelho",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "UM ESTUDO SOBRE SOLUÇÕES DE ATAQUES CIBERNÉTICO COM SIEM COM FOCO NA PLATAFORMA SPLUNK",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  orientador: "SOLANGE DA SILVA",
  estudantes: "MAILODI VIEIRA SABATH", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "17/06",
  time: "20:30-21:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Gildenor de Souza Amorim Cavalcante",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Sistema construtivo utilizando tijolo de solo-cimento (tijolo ecológico), em casas residenciais - estudo de caso",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Laura Soares Matos", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Edson Nishi",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Sistema construtivo utilizando tijolo de solo-cimento (tijolo ecológico), em casas residenciais - estudo de caso",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Mariana Sousa Lôbo", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Edson Nishi",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Método executivo de casas populares no sistema de paredes de concreto",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Natânny Bueno Almeida", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "10:45-11:30",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Edson Nishi",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "Estudo mercadológico imobiliário, como auxílio à tomada de decisão do padrão construtivo de empreendimentos, na cidade de Goiânia",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "ADRIANE BORGES DE PAULA COUTO",
  estudantes: "Pedro Victor Paula Silva", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "07:15-08:45",
  place: "Auditório 2, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "Manoel da Silva Álvares",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "Edson Nishi",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC2 // se é tcc 1 ou 2
},
{
  title: "ANÁLISE COMPARATIVA DOS MÉTODOS DE PROTENSÃO DO CONCRETO: PRÉ TENSÃO / PÓS TENSÃO",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "CARLOS EDUARDO DE OLIVEIRA SEABRA", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "13:30-14:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "EDSON NISHI",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "ANÁLISE COMPARATIVA DOS MÉTODOS DE PROTENSÃO DO CONCRETO: PRÉ TENSÃO / PÓS TENSÃO",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "DAVI PRADO LUZ DE ARAÚJO", //se tiver mais de 1, separar por ;
  warning: "", //deixe vazio
  date: "18/06",
  time: "13:30-14:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC], //usar a enum e não a string literal
  nomePrimeiroMembroBanca: "EDSON NISHI",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.VAZIO], //usar a enum e não a string literal
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "", //usar a enum e não a string literal (se não tiver 3º membro, deixar em branco)
  nomeTerceitoMembroBanca: "", //se não tiver 3º membro, deixar em branco
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL], //usar a enum e não a string literal. Se tiver mais de 1, separar por + "; " +
  tipoTCC: enum_tcc.TCC1 // se é tcc 1 ou 2
},
{
  title: "A REALIDADE EM CONSTANTE DEFORMIDADE: CIÊNCIA DE DADOS APLICADA A ANÁLISE DE FAKE NEWS NO BRASIL",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANDRE LUIZ ALVES",
  estudantes: "Gustavo Dias Martins",
  warning: "",
  date: "18/06",
  time: "09:00-10:30",
  place: "Auditório 3, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.ESP],
  nomePrimeiroMembroBanca: "Nágela Bitar Lôbo",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Fabricio Schlag",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "Websocket como solução para entrega de lances em tempo real em uma aplicação web de leilões",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "ANGELICA DA SILVA NUNES",
  estudantes: "ALUISIO LUCIO DOS SANTOS NETO",
  warning: "",
  date: "18/06",
  time: "20:30-22:00",
  place: "Sala 401, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Fernando Gonçalves Abadia",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "PRINCIPAIS VANTAGENS DO REUSO DA ÁGUA DE LAVAGEM DOS FILTROS DA ETA MEIA PONTE, EM GOIÂNIA,NOS PERÍODOS DE ESTIAGEM.",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "GABRIEL ALVES CARVALHO NOMINATO",
  warning: "",
  date: "18/06",
  time: "11:30-12:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "VIVIANE VAZ MONTEIRO",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "AVALIAÇÃO DE TECNOLOGIA DE MONITORAMENTO ESTRUTURAL EM OBRAS DE GRANDE PORTE",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "GABRIEL FONSECA DE FREITAS",
  warning: "",
  date: "18/06",
  time: "14:15-15:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "EDSON NISHI",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "Como a Inteligência Artificial pode ajudar no Cenário Pós-cirúrgico",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FABRICIO SCHLAG",
  estudantes: "BRUNO HENRIQUE DE OLIVEIRA CARDOSO",
  warning: "",
  date: "18/06",
  time: "09:00-09:45",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "CARMEN CECILIA CENTENO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR],
  nomeSegundoMembroBanca: "NILSON CARDOSO AMARAL",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "FERRAMENTAS PARA AUXILIAR BOAS PRÁTICAS NO DESENVOLVIMENTO ÁGIL DE SOFTWARE",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FABRICIO SCHLAG",
  estudantes: "OCTAVIO DE COUTO SOARES",
  warning: "",
  date: "18/06",
  time: "14:15-15:00",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "JOSE RICARDO COSME LERIAS RIBEIRO",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.DR],
  nomeSegundoMembroBanca: "SOLANGE DA SILVA",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "ANÁLISE DE ATAQUES DE RANSOMWARE: IDENTIFICAÇÃO E MEDIDAS DE SEGURANÇA EFETIVAS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "FERNANDO GONCALVES ABADIA",
  estudantes: "SAMUEL BERNARDES DE SOUZA",
  warning: "",
  date: "18/06",
  time: "20:30-22:00",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Lucília Gomes Ribeiro",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Rafael Leal Martins",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "PRINCIPAIS VANTAGENS DO REUSO DA ÁGUA DE LAVAGEM DOS FILTROS DA ETA MEIA PONTE, EM GOIÂNIA,NOS PERÍODOS DE ESTIAGEM.",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "PAULO JOSE MASCARENHAS RORIZ",
  estudantes: "Marcus Vinícius dos Santos",
  warning: "",
  date: "18/06",
  time: "11:30-12:15",
  place: "",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "VIVIANE VAZ MONTEIRO",
  titulacaoSegundoMembroBanca: "",
  nomeSegundoMembroBanca: "",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_CIVIL],
  tipoTCC: enum_tcc.TCC1
},
{
  title: "RECONHECIMENTO FACIAL PARA SEGURANÇA RESIDENCIAL: ABORDAGENS COM REDES NEURAIS CONVOLUCIONAIS",
  titulacaoOrientador: titulacoes[enum_titulacoes.MSC],
  orientador: "RAFAEL LEAL MARTINS",
  estudantes: "AUGUSTO VAZ RODRIGUES",
  warning: "",
  date: "18/06",
  time: "09:00-10:30",
  place: "Sala 403, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Ana Flavia Marinho de Lima Garrote",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Gustavo Siqueira Vinhal",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.ENGENHARIA_DE_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "MONITORAMENTO DE REDES DE COMPUTADORES UTILIZANDO GRAFANA",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "SOLANGE DA SILVA",
  estudantes: "GABRIEL DE CASTRO GONÇALVES",
  warning: "",
  date: "18/06",
  time: "10:45-12:15",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.DR],
  nomePrimeiroMembroBanca: "Fabio Barbosa Rodrigues",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Wilmar Oliveira de Queiroz",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},
{
  title: "SEGURANÇA E PRIVACIDADE NO IOT EM AMBIENTES DE SAÚDE: AJUSTANDO AS PRÁTICAS À LGPD.",
  titulacaoOrientador: titulacoes[enum_titulacoes.DR],
  orientador: "SOLANGE DA SILVA",
  estudantes: "MATHEUS RODRIGUES TENAGLIA",
  warning: "",
  date: "18/06",
  time: "18:45-20:15",
  place: "Sala 402, bloco D, área II",
  titulacaoPrimeiroMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomePrimeiroMembroBanca: "Lucília Gomes Ribeiro",
  titulacaoSegundoMembroBanca: titulacoes[enum_titulacoes.MSC],
  nomeSegundoMembroBanca: "Aníbal dos Santos Jukemura",
  titulacaoTerceitoMembroBanca: "",
  nomeTerceitoMembroBanca: "",
  curso: cursos[enum_cursos.CIENCIA_DA_COMPUTACAO],
  tipoTCC: enum_tcc.TCC2
},




  ]
  
  TCCs = TCCs.sort((a, b) => {
    if(a.date < b.date) return -1;
    if(a.date > b.date) return 1;
    if(a.time < b.time) return -1;
    if(a.time > b.time) return 1;
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });
  
  export const apresentacoes_TCC = [
  
    {
      tccs: TCCs,
    },
    
  ]