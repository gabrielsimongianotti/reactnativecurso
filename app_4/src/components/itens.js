import React, { Component } from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';

class Itens extends Component {

  render() {
    return (
        <View style={styles.item}>
            <View styte={styles.foto}>
                <Image style={{height:100,width:100}} source={{uri: this.props.item.foto}} />
            </View>
            <View style={styles.detalhesItem}>
                <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
                <Text>R$ {this.props.item.valor}</Text>
                <Text>Local: {this.props.item.local_anuncio}</Text>
                <Text>Data: {this.props.item.data_publicacao}</Text>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    item:{
        borderWidth:0.5,
        borderColor:'#999',
        margin:0.01,
        padding:10,
        flexDirection:'row',
        backgroundColor:'#FFF'
    },
    foto:{
        height: 102,
        width: 102
    },
    detalhesItem:{
        marginLeft:20,
        flex:1
    },
    txtTitulo:{
        fontSize:18,
        color:'blue',
        marginBottom:5
    }

});
export default Itens;