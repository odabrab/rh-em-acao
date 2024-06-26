//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  TELA INICIAL
////////
////////  File name:     InitialView.js.
////////  Author:        Marcio Barbado, Jr.
////////  Contact:       <marcio.bajunior@professores.estacio.br>.
////////  Place:         S&atilde;o Paulo, Brasil.
////////  Copyright (c): 2024.
////////  License:       [LICENSE_NAME].
////////
////////  [LICENSE_SHORT_TEXT].
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BIBLIOTECAS
////////
////////  Quanto à importação de componentes das bibliotecas ou
////////  módulos npm, típicos do desenvolvimento em React Native,
////////  suponha que você precise de um componente chamado
////////  BibliotecaSuper, e em algum tutorial por aí, alguém diga
////////  que a obtenção do referido componente exige que você
////////  execute um comando npm parecido com:
////////
////////  npm install @react-modulozinho/maroto
////////
////////  No Snack, tudo o que você realmente precisa fazer é algo
////////  como:
////////
////////  import {BibliotecaSuper} from "@react-modulozinho/maroto";
////////
////////  A sintaxe com import passou a ser possível a partir da
////////  versão 6 da ECMAScript.
////////
////////  As versões das bibliotecas são definidas no ficheiro
////////  package.json.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import React from 'react';

//  A biblioteca SafeAreaView é uma opção a View. Ambas estão em
//  react-native.
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Card } from 'react-native-paper';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CC) BIBLIOTECA(S) LOCAL(IS)
////////
////////  Importar bibliotecas locais desde que elas usem
////////  export default.
////////
////////  Qualquer biblioteca/componente correspondente a uma tela
////////  deve importar os estilos presentes no ficheiro chamado
////////  Styles.js, que por sua vez também é uma biblioteca.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

import styles from './Styles.js';

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) FUNCTION(S)
////////
////////  As próximas seções podem apresentar funções auxiliares caso
////////  isso seja necessário.
////////
////////  Um exemplo seria colocar as funções correspondentes às
////////  telas aqui.
////////
////////  Salienta-se que a função principal é o corpo do código deste
////////  ficheiro. Portanto, ele não é uma rotina auxiliar, e não
////////  deve ser colocada aqui.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  (CO) DECLARATION(S) AND INITIALIZATION(S)
////////
////////  Declarações e inicializações de constantes e variáveis.
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
////////  FUNCTION INITIALVIEW()
////////
////////  TouchableOpacity é um exemplo de controle.
////////
////////  Card é um exemplo de controle.
//////////////////////////////////////////////////////////////////////
export default function InitialView({navigation}) {

  const onChangeText = React.useState("");

  return (

    <View style = {styles.containerViewOutter}>

      <View style = {styles.containerRow}>

        <Image
          source = {require("../assets/logotipo-Estacio-02.png")}
          style  = {styles.logoEstacio}
        />

        <Text style={styles.paragraph}>
          Est&aacute;cio
        </Text>

      </View>

      <Text style={styles.paragraph}>
        Projeto RH em A&ccedil;&atilde;o
      </Text>

      <TextInput
        autoCapitalize       = "none"
        onChangeText         = {onChangeText}
        placeholder          = "E-mail"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}
      />

      <TextInput
        autoCapitalize       = "none"
        onChangeText         = {onChangeText}
        placeholder          = "Senha"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}
      />

      <Button
        title                = "Entrar"
        onPress              = {() => navigation.navigate("ProfileView")
        }
      />

      <View style = {styles.containerRowFooterInitialView}>
        <TouchableOpacity
          onPress = {() => navigation.navigate("RegisterView")}
          style   = {styles.btnTouchableLeft}
        >
          <Text style   = {styles.btnLabelAccount}>
            N&atilde;o tenho conta!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {() => navigation.navigate("JobsView")}
          style = {styles.btnTouchable01}
        >
          <Text style = {styles.btnTouchableRight}>
            Ver vagas.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
