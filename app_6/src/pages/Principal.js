import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../image/logo.png');
const jogar = require('../image/botao_jogar.png');
const btnsobreJogo = require('../image/sobre_jogo.png');
const btnoutroJogos = require('../image/outros_jogos.png');

export default class Principal extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>
        <View style={styles.AprensentacãoJogo}>
          <Image source={logo} />
          <TouchableHighlight
            onPress={() => { Actions.resultado(); }}
          >
            <Image source={jogar} />
          </TouchableHighlight>
        </View>
        <View style={styles.rodape}>
          <TouchableHighlight
            onPress={() => { Actions.sobrejogo(); }}
          >
            <Image source={btnsobreJogo} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => { Actions.outrosjogos(); }}
          >
            <Image source={btnoutroJogos} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  AprensentacãoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

