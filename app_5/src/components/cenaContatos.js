import React, { Component } from 'react';
import { Text, Image, View, StatusBar, StyleSheet } from 'react-native';
import BarraNavegacao from './barraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');
;
export default class CenaContatos extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF'}}>
        <StatusBar
          backgroundColor='#61BD8C'
        />
        {/* manda o navegator para o BarraNavegacao */}
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C' />

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>
        <View style={styles.detalheContatos}>
          <Text style={styles.txtContatos}>TEL: (11) 1234-1234</Text>
          <Text style={styles.txtContatos}>CEL: (11) 1234-1234</Text>
          <Text style={styles.txtContatos}>Email: contato@hotmail.com</Text>
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
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25
  },
  detalheContatos: {
    marginTop: 20,
    padding: 20
  },
  txtContatos:{
    fontSize:18
  }

});