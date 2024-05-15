//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  TELA DE REGISTRO DE UMA NOVA CONTA
////////
////////  File name:     RegisterView.js.
////////  Author:        Marcio Barbado, Jr.
////////  Contact:       <marcio.bajunior@professores.estacio.br>.
////////  Place:         S&atilde;o Paulo, Brasil.
////////  Copyright (c): 2024.
////////  License:       General Public License, version 2.
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
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////  ESTRUTURA DO CONTEÚDO DESTE FICHEIRO
////////
////////  Representa-se abaixo a estrutura deste ficheiro. O sufixo
////////  (CC) denota um trecho com comentários e código, e o sufixo
////////  (CO) denota um trecho com comentários apenas. Pense nisto
////////  como um sumário.
////////
////////  (CO) UTILIZAÇÃO
////////    (CC) BIBLIOTECAS
////////      (CC) BIBLIOTECAS REACT NAVIGATION
////////      (CC) BIBLIOTECAS LOCAIS
////////    (CO) FUNCTION(S)
////////      (CC) FUNCTION FUNCTIONEXAMPLE()
////////    (CO) DECLARATION(S) AND INITIALIZATION(S)
////////      (CC) CONSTANT STACK
////////    (CO) BODY
////////      (CC) MAIN FUNCTION
////////        (CC) ENDING
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

import React, { useState } from 'react';

import{ Button, CheckBox, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

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

import libraryPersist from './LibraryPersist.js';
import styles from './Styles.js';

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
////////  (CC) FUNCTION REGISTERVIEW()
////////
////////  Inicialmente declara algumas constantes locais de estado.
//////////////////////////////////////////////////////////////////////
export default function RegisterView({navigation}) {

  const [constSenha, constSetSenha] = useState("");

  const [isSelected, setSelection]  = useState(false);

  const onChangeText                = React.useState("");

  return (
    <View style={styles.containerViewOutter}>

      <View style = {styles.containerRowHeaderRegisterView}>

        <Text style={styles.paragraph01}>
          REGISTRAR UMA NOVA CONTA
        </Text>

        <TouchableOpacity
          onPress = {() => navigation.navigate("JobsView")}
        >
          <Text style   = {styles.btnTouchableLeaveLabel}>
            Sair
          </Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        onPress = {() => navigation.navigate("InitialView")}
        style   = {styles.btnTouchableLeft}
      >
        <Text style   = {styles.btnLabelAccount}>
          J&aacute; tenho conta!
        </Text>
      </TouchableOpacity>

      <TextInput
        autoCapitalize       = "none"
        onChangeText         = {onChangeText}
        placeholder          = "Nome Completo"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}
      />

      <TextInput
        autoCapitalize       = "none"
        onChangeText         = {onChangeText}
        placeholder          = "CPF"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}
      />

      <TextInput
        autoCapitalize       = "none"
        onChangeText         = {onChangeText}
        placeholder          = "E-mail pessoal"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}
      />

      <TextInput
        onChangeText         = {onChangeText}
        placeholder          = "Senha"
        placeholderTextColor = "#8b9cb5"
        right                = {
          <TextInput.Icon
            name = {
                     () => <MaterialCommunityIcons
                             name  = {isPasswordSecure ? "eye-off" : "eye"}
                             size  = {24}
                             color = "black"
                           />
                   }
                          onPress={() => { isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true) }}
          />
        }
        secureTextEntry      = {true}
        style                = {styles.txti}
        value                = ""
      />

      <View style = {styles.containerRowCheckBox}>

        <CheckBox
          onValueChange        = {setSelection}
          value                = {isSelected}
        />

        <Text>
          &nbsp;&nbsp;Aluno(a) da Est&aacute;cio.
        </Text>

      </View>

      <TextInput
        autoCapitalize       = "none"
        onChangeText         = {onChangeText}
        placeholder          = "Matr&iacute;cula da Est&aacute;cio"
        placeholderTextColor = "#8b9cb5"
        style                = {styles.txti}
      />

      <Button
        title                = "Criar conta"
        onPress              = {() => navigation.navigate("ProfileView")
        }
      />

    </View>
  );
}