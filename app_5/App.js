/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import CenaClientes from './src/components/cenaClientes.js';
import CenaPrincipal from './src/components/cenaPrincipal.js';
import CenaContatos from './src/components/cenaContatos.js';
import CenaServico from './src/components/cenaServico.js';
import CenaEmpresa from './src/components/cenaEmpresa.js';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Navigator
        initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          switch (route.id) {
            case 'a':
              return (<CenaPrincipal navigator={navigator} />);
            case 'cliente':
              return (<CenaClientes navigator={navigator} />);
            case 'contato':
              return (<CenaContatos navigator={navigator} />);
            case 'empresa':
              return (<CenaEmpresa navigator={navigator} />);
            case 'servico':
              return (<CenaServico navigator={navigator} />);
          }
        }}
      />
    );
  }
}

