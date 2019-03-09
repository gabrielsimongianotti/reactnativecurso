/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, TouchableOpacity, Image,Text, Alert} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const{principal, botao, textoBotao}=Estilos;

    const gerarNovaFrase= () =>{
      var numeroAleatorio = Math.random();
      numeroAleatorio =Math.floor( numeroAleatorio * 5);

      var frases = Array();
      frases[0] ='Foda-se vai estudar';
      frases[1] ='Hora de dormir';
      frases[2] ='Só sei que nada sei.';
      frases[3] ='Aquilo que não puderes controlar, não ordenes.';
      frases[4] ='A vida sem ciência é uma espécie de morte.';
      var fraseEscolhida = frases[numeroAleatorio]
      Alert.alert(fraseEscolhida);
    }

    return (
      <View style={principal}>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity onPress={gerarNovaFrase} style={botao}>
          <Text style={textoBotao}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }

  };
  const Estilos ={
    principal: {
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
    botao:{
      backgroundColor:'#538530',
      paddingVertical: 10,
      paddingHorizontal:40,
      marginTop:20,
    },
    textoBotao:{
      color:'white',
      fontSize:16 ,
      fontWeight:'bold'
    }
  
};
