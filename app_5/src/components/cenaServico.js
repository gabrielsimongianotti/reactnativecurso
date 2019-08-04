import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet } from 'react-native';
import BarraNavegacao from './barraNavegacao';

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServico extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar
          backgroundColor='#19D1C8'
        />
        {/* manda o navegator para o BarraNavegacao */}
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#19D1C8' />

        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitulo}>Nosso Serviços</Text>
        </View>
        <View style={styles.detalheServico}>
          <Text style={styles.txtServicos}>. Consultoria</Text>
          <Text style={styles.txtServicos}>. processos</Text>
          <Text style={styles.txtServicos}>. Acompanhamento de Projetos</Text>         
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25
  },
  detalheServico: {
    marginTop: 20,
    padding: 20
  },
  txtServicos:{
    fontSize:18
  }

});