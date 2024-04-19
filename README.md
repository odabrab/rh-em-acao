# README para o c&oacute;digo de rh-em-acao (Projeto RH em A&ccedil;&atilde;o)
Aplica&ccedil;&atilde;o movel para ofertar vagas de trabalho (a job-offer mobile app).

A presente documentação se refere a um projeto que nasce em 2024 na universidade Estácio. Trata-se de uma aplicação móvel para ofertas de vagas de trabalho, cuja engenharia de software é conduzida através do Laboratório de Transformação Digital (LTD) da instituição, e também através de uma disciplina de extensão, que entrega o protagonismo do projeto aos alunos da Estácio. A disciplina em questão é denominada "ARA0089 Programação para dispositivos móveis em Android", e por deter caráter extensionista, objetiva entregar aplicações que atendam aos alunos e também à comunidade.

## SUMÁRIO

**1) INTRODUÇÃO**

**2) REACT NATIVE**

**3) PERSIST&Ecirc;NCIA**

**4) CÓDIGO-FONTE DO PROJETO RH EM AÇÃO**

&nbsp;&nbsp;**4.1) O DIRET&Oacute;RIO /ASSETS/**

&nbsp;&nbsp;**4.2) O DIRET&Oacute;RIO /COMPONENTS/**

&nbsp;&nbsp;&nbsp;&nbsp;**4.2.1) O FICHEIRO /COMPONENTS/STYLES.JS**

&nbsp;&nbsp;**4.3) O DIRET&Oacute;RIO /.PERSISTENCE/**

&nbsp;&nbsp;&nbsp;&nbsp;**4.3.1) O FICHEIRO /.PERSISTENCE/LOG.CSV**

**REFER&Ecirc;NCIAS**

## 1) INTRODUÇÃO

Vislumbres do primeiro quarto do século XXI revelam claras tendências tecnológicas.

### PROJETO RH EM AÇÃO

### O LABORATÓRIO DE TRANSFORMAÇÃO DIGITAL DA ESTÁCIO

### A DISCIPLINA ARA0089

A disciplina "ARA0089 Programação para dispositivos móveis em Android" é ministrada em formato sala de aula invertida, conforme determina a sua ementa.

As turmas da disciplina foram divididas em equipes de cinco e/ou seis alunos, que escolheram seus líderes, e a partir de então, passaram a trabalhar no desenvolvimento de uma aplicação que atendesse aos requisitos funcionais e não-funcionais mínimos do chamado "Projeto RH em Ação".

Uma vez que a ementa determina a utilização do arcabouço React Native, a principal linguagem de programação utilizada é a JavaScript, juntamente à extensão JavaScript Syntax eXtension (JSX), que agrega a sintaxe XML à referida linguagem de programação.

#### CODING DOJO

O professor utiliza o laboratório para orientar as equipes, e para produzir interações entre elas. Assim, algumas aulas ocorrem como o chamado "coding dojo", um modelo de programação coletiva no qual o código é projetado para que todos os presentes possam auxiliar em sua depuração e/ou em seu aprimoramento.

A engenharia de software do projeto lança mão do notório arcabouço Scrum, que por sua vez compõe o conjunto de sistemáticas chamado "desenvolvimento ágil de software".

### A APLICAÇÃO

A aplicação está disponível para Android e iOS.

## 2) REACT NATIVE

Arcabouço mantido pela organização chamada Meta, que permite a criação de aplicativos para Android e iOS a partir de uma base única, escrita predominantemente em JavaScript e JSX.

O projeto utiliza uma implementação do React Native chamada Snack.


### DEPENDÊNCIAS

A presente seção trata das dependências listadas pelo ficheiro package.json. 


### TECNOLOGIAS E TÉCNICAS HABILITADORAS

#### JAVASCRIPT

#### JSX

#### JSON

#### XML

#### SCRUM

### A INTERFACE SNACK

Note que todos os projetos criados no Snack são acessíveis publicamente através do URL do projeto, e.g., [Projeto RH em Ação] (https://snack.expo.dev/@marcio.barbado/projeto_rh_em_acao). Isso é bem útil para mostrar o código a alguém. O próprio Snack em tem código aberto, disponível em seu [repositório do GitHub](https://github.com/expo/snack).

Caso queira testar ou mostrar o aplicativo em funcionamento num dispositivo móvel de verdade, use o **QR code** disponível em "My Device", que fica sobre a telinha do dispositivo virtual.

Caso você já tenha um editor de texto ou IDE de sua preferência, faça o **download** do seu projeto, e use o [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

Adicionalmente, o Expo oferece um [fórum](https://forums.expo.dev/c/expo-dev-tools/61) para dúvidas gerais e específicas. 

## 3) PERSIST&Ecirc;NCIA

Dados são salvos localmente e remotamente. Eles são organizados em três tabelas: uma para as contas, uma para as vagas, e uma para os registros ou logs.

## 4) CÓDIGO-FONTE DO PROJETO RH EM AÇÃO

### 4.1) O DIRET&Oacute;RIO /ASSETS/

Abriga conteúdo visual e audiovisual.

### 4.2) O DIRET&Oacute;RIO /COMPONENTS/

Abriga os ficheiros locais de biblioteca, chamados de componentes.

### 4.2.1) O FICHEIRO /COMPONENTS/STYLES.JS

Os estilos ficam concentrados no ficheiro /components/Styles.js.

### 4.3) O DIRET&Oacute;RIO /.PERSISTENCE/

Abriga dados, e.g., conta, vagas, registros, e etc.

### 4.3.1) O FICHEIRO /.PERSISTENCE/LOG.CSV

Persiste registros.

## REFER&Ecirc;NCIAS 

