import React from'react';
import{ Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio =()=>{
  var numero = Math.random();
  numero= Math.floor(numero *10);
  alert(numero);
}

const App = function(){
  return (
      <View>
        <Text>Gerar numero randômico</Text>
        <Button
          title="Gerar numero randômico"
          onPress={geraNumeroAleatorio}
        />
      </View>
    );
};
AppRegistry.registerComponent('app1', ()=> App);
