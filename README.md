<!--
----------------------------------------------------------------------
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
----------------------------------------------------------------------
-->
# README para o c&oacute;digo de rh-em-acao (Projeto RH em A&ccedil;&atilde;o)
Aplica&ccedil;&atilde;o m&oacute;vel para ofertar vagas de trabalho (a job-offer mobile app).

A presente documenta&ccedil;ão se refere a um projeto que nasce em 2024 na universidade Estácio. Trata-se de uma aplica&ccedil;ão m&oacute;vel para ofertas de vagas de trabalho, cuja engenharia de software é conduzida através do Laborat&oacute;rio de Transforma&ccedil;ão Digital (LTD) da institui&ccedil;ão, e também através de uma disciplina de extensão, que entrega o protagonismo do projeto aos alunos da Estácio. A disciplina em questão é denominada "ARA0089 Programa&ccedil;ão para dispositivos m&oacute;veis em Android", e por deter caráter extensionista, objetiva entregar aplica&ccedil;ões que atendam aos alunos e também à comunidade.

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## SUMÁRIO

**1) INTRODU&ccedil;ÃO**

**2) REACT NATIVE**

**3) REQUISITOS E PRINCIPAIS COMPONENTES**

&nbsp;&nbsp;**3.1) CACHING E PERSIST&Ecirc;NCIA**

&nbsp;&nbsp;&nbsp;&nbsp;**3.1.1) LOCALMENTE**

&nbsp;&nbsp;&nbsp;&nbsp;**3.1.2) REMOTAMENTE**

**4) ESTRUTURA DO PROJETO RH EM A&ccedil;ÃO**

&nbsp;&nbsp;**4.1) O DIRET&Oacute;RIO /ASSETS/**

&nbsp;&nbsp;**4.2) O DIRET&Oacute;RIO /COMPONENTS/**

&nbsp;&nbsp;&nbsp;&nbsp;**4.2.1) O FICHEIRO /COMPONENTS/STYLES.JS**

&nbsp;&nbsp;**4.3) O DIRET&Oacute;RIO /.PERSISTENCE/**

&nbsp;&nbsp;&nbsp;&nbsp;**4.3.1) O FICHEIRO /.PERSISTENCE/LOG.CSV**

**5) OBSERVA&Ccedil;&Otilde;ES**

**REFER&Ecirc;NCIAS**

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## 1) INTRODU&ccedil;ÃO

Vislumbres do primeiro quarto do século XXI revelam claras tendências tecnol&oacute;gicas.

### PROJETO RH EM A&ccedil;ÃO

### O LABORAT&oacute;RIO DE TRANSFORMA&ccedil;ÃO DIGITAL DA ESTÁCIO

### A DISCIPLINA ARA0089

A disciplina "ARA0089 Programa&ccedil;ão para dispositivos m&oacute;veis em Android" é ministrada em formato sala de aula invertida, conforme determina a sua ementa.

As turmas da disciplina foram divididas em equipes de cinco e/ou seis alunos, que escolheram seus líderes, e a partir de então, passaram a trabalhar no desenvolvimento de uma aplica&ccedil;ão que atendesse aos requisitos funcionais e não-funcionais m&iacute;nimos do chamado "Projeto RH em A&ccedil;ão".

Uma vez que a ementa determina a utiliza&ccedil;ão do arcabou&ccedil;o React Native, a principal linguagem de programa&ccedil;ão utilizada é a JavaScript, juntamente à extensão JavaScript Syntax eXtension (JSX), que agrega a sintaxe XML à referida linguagem de programa&ccedil;ão.

#### CODING DOJO

O professor utiliza o laborat&oacute;rio para orientar as equipes, e para produzir intera&ccedil;ões entre elas. Assim, algumas aulas ocorrem como o chamado "coding dojo", um modelo de programa&ccedil;ão coletiva no qual o c&oacute;digo é projetado para que todos os presentes possam auxiliar em sua depura&ccedil;ão e/ou em seu aprimoramento.

A engenharia de software do projeto lan&ccedil;a mão do not&oacute;rio arcabou&ccedil;o Scrum, que por sua vez compõe o conjunto de sistemáticas chamado "desenvolvimento ágil de software".

### A APLICA&ccedil;ÃO

A aplica&ccedil;ão está dispon&iacute;vel para Android e iOS.

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## 2) REACT NATIVE

Arcabou&ccedil;o mantido pela organiza&ccedil;ão chamada Meta, que permite a cria&ccedil;ão de aplicativos para Android e iOS a partir de uma base única, escrita predominantemente em JavaScript e JSX.

O projeto utiliza uma implementa&ccedil;ão do React Native chamada Snack.


### DEPENDÊNCIAS

A presente se&ccedil;ão trata das dependências listadas pelo ficheiro package.json. 


### TECNOLOGIAS E TÉCNICAS HABILITADORAS

#### JAVASCRIPT

#### JSX

#### JSON

#### XML

#### SCRUM

### A INTERFACE SNACK

Note que todos os projetos criados no Snack são acessíveis publicamente através do URL do projeto, e.g., o Projeto RH em A&ccedil;ão [1]. Isso é bem útil para mostrar o c&oacute;digo a alguém. O pr&oacute;prio Snack em tem c&oacute;digo aberto, dispon&iacute;vel em seu [reposit&oacute;rio do GitHub](https://github.com/expo/snack).

Caso queira testar ou mostrar o aplicativo em funcionamento num dispositivo m&oacute;vel de verdade, use o *QR code* disponível em "*My Device*", que fica sobre a telinha do dispositivo virtual.

Caso você já tenha um editor de texto ou IDE de sua preferência, fa&ccedil;a o *download* do seu projeto, e use o [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

Adicionalmente, o Expo oferece um [f&oacute;rum](https://forums.expo.dev/c/expo-dev-tools/61) para dúvidas gerais e específicas. 

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## 3) REQUISITOS E PRINCIPAIS COMPONENTES

A biblioteca react-native-fs figura como uma op&ccedil;ão para a cria&ccedil;ão de ficheiros, entretanto se mostrou problemática no IDE Snack.

### 3.1) CACHING E PERSIST&Ecirc;NCIA

Dados da aplica&ccedil;ão são salvos localmente e remotamente. Eles são organizados em três tipos de tabelas: um tipo para tabelas de contas, um tipo para tabelas de vagas, e um tipo para tabelas de registros ou *logs*.

Tabelas de registros ou *logs* servem para auxíliar a pr&oacute;pria atividade do desenvolvimento da aplica&ccedil;&atilde;o.

#### 3.1.1) LOCALMENTE

O armazenamento local de dados depende da plataforma.

Caso a plataforma seja Android ou iOS, o armazenamento local pode utilizar os componentes AsyncStorage e Cache, que amenizam problemas do usuário nas situa&ccedil;ões em que as consultas a bancos de dados remotos forem imposs&iacute;veis. Isso significa que o Cache melhora a experiência do usuário. O referido componente copia para o sistema operacional local alguns dados que normalmente exigiriam consultas a servi&ccedil;os remotos.

#### 3.1.2) REMOTAMENTE

Dada a urgência de uso, a implementa&ccedil;ão padrão irá provisoriamente utilizar planilhas _online_ como bancos de dados.

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## 4) ESTRUTURA DO PROJETO RH EM A&ccedil;ÃO

Diret&oacute;rios e ficheiros com c&oacute;digos-fontes.

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

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## 5) OBSERVA&Ccedil;&Otilde;ES

Quanto à viabilidade da utiliza&ccedil;ão de planilhas _online_ como bancos de dados para situa&ccedil;ões urgentes.

<!--
----------------------------------------------------------------------
--------
--------
----------------------------------------------------------------------
-->
## REFER&Ecirc;NCIAS 

[1] BARBADO JUNIOR, Marcio. projeto-rh-em-acao. 2024. 650 Industries. Dispon&iacute;vel em: <https://snack.expo.dev/@marcio.barbado/projeto-rh-em-acao>, acessado em 30 de Abril de 2024. 

