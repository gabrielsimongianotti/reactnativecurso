
import React, {Component} from 'react';
import { View, Image, StyleSheet} from 'react-native';

//componente que contém a imagem
class Topo extends Component{
    render(){
      return(
        <View>
          <Image source={require('../../imgs/jokenpo.png')} resizeMode="stretch" style ={styles.imagem} />
        </View>
      );
    }
  }

  
const styles = StyleSheet.create({
    imagem:{
      width:'100%'
    },

});
  
export default Topo;