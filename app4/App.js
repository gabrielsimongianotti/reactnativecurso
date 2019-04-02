
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Itens from './src/components/Itens.js';
import axios from 'axios';


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { listaItens: [] }
  }
  componentWillMount() {
    // requisição HTTP                                                    
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      //callback com arrow function
      .then(response => { this.setState({ listaItens: response.data }) })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
  }
  render() {
    return (
      <View>
        {this.state.listaItens.map(item => (<Itens Key={item.titulo} item={item} />))}
      </View>
    );
  }
}
