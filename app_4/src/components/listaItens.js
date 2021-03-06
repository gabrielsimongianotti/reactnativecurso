import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Itens from './itens.js';
export default class ListaItens extends Component {
  constructor(props){
    super(props);
    this.state ={listaItens: []}
  }
  //requisição HTTP
  componentWillMount(){
    axios.get('https://www.canalti.com.br/api/pokemons.json')
    .then(response => {(console.log(response.data) )})
    .catch(()=>{console.log('Erro ao recuperar os dados') })
  }

  render() {
    return (
    //key faz o Itens se repetir X vezes X =item.titulo
      <ScrollView style={{backgroundColor:'#DDD'}}>
        {this.state.listaItens.map(item =>(<Itens key={item.titulo} item ={item}/> ))}
      </ScrollView>
    );
  }
}