
import React, {Component} from 'react';
import { View} from 'react-native';
import ListaItens from './src/components/ListaItens.js';
import Itens from './src/components/Itens.js';
import axios from 'axios';


type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    // requisição HTTP                                                    
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    //callback com arrow function
    .then(response => { console.log(response); })
    .catch(() => { console.log('Erro ao recuperar os dados'); });
  }
  render() {
    return (
      <View>
        <Itens />
        <Itens />
        <Itens />
      </View>
    );
  }
}
