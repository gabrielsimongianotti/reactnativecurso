/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

import Topo from './src/components/topo.js';
import Icone from './src/components/icone.js';

type Props = {};
export default class App extends Component<Props> {
    
    constructor(props) {
      super(props);
  
      this.state = { escolhaUsuario : '',escolhaComputador: '', resultado: '' }
    }
    jokenpo(escolha){
      //gera numero aleatorio 
      var numero = Math.floor(Math.random() * 3);
      var escolhaComputador = '';
      
      switch(numero){
        case 0:escolhaComputador ='pedra'; break;
        case 1:escolhaComputador ='papel'; break;
        case 2:escolhaComputador ='tesoura'; break;
      }
      //mostra quem venceu
      var resultado ='';
      if (escolha==escolhaComputador){
        resultado = 'Empate';
      }
      else if ((escolha == 'tesoura') && (escolhaComputador == 'papel')){
        resultado = 'Você ganhou';
      }
      else if ((escolha == 'papel')&& (escolhaComputador == 'pedra')){
        resultado = 'Você ganhou';
      }
      else if ((escolha == 'pedra') && (escolhaComputador == 'tesoura')){
        resultado = 'Você ganhou';
      }
      else{
        resultado = 'Você perdeu';
      }
     
      
      this.setState({escolhaUsuario : escolha,escolhaComputador : escolhaComputador, resultado: resultado});

    }
  
  render() {
    return (
      <View>
        <Topo></Topo>
        
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={()=>{this.jokenpo('pedra')}} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={()=>{this.jokenpo('papel')}} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={()=>{this.jokenpo('tesoura')}} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}> {this.state.resultado}</Text>
          
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuario'></Icone>
         
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:10
  }, 
  
  palco:{
    marginTop:10,
    alignItems:'center'
  },
  txtResultado:{
    fontSize:25,
    fontWeight: 'bold',
    color:'red',
    height:60
  },
  
});
