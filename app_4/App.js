/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import ListaItens from './src/components/listaItens.js';


type Props = {};
export default class App extends Component<Props> {

  render() {
    console.log("teste");
    return (
      <ListaItens></ListaItens>
    );
  }
}

