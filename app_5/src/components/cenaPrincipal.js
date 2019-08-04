import React, { Component } from 'react';
import { Image, View, StatusBar, StyleSheet, TouchableHighlight } from 'react-native';
import BarraNavegacao from './barraNavegacao';

const logo = require('../imgs/logo.png');
const menu_contato = require('../imgs/menu_contato.png');
const menu_cliente = require('../imgs/menu_cliente.png');
const menu_empresa = require('../imgs/menu_empresa.png');
const menu_servico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='#CCC'
                />
                <BarraNavegacao corDeFundo='#CCC' />
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight
                            underlayColor={'#B9C941'}
                            activeOpacity={0.2}
                            onPress={() => {
                                this.props.navigator.push({ id: 'cliente' });
                            }}
                        >
                            <Image style={styles.imgMenu} source={menu_cliente} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#61BD8C'}
                            activeOpacity={0.2}
                            onPress={() => {
                                this.props.navigator.push({ id: 'contato' })
                            }}
                        >
                            <Image style={styles.imgMenu} source={menu_contato} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight
                            underlayColor={'#19D1C8'}
                            activeOpacity={0.2}
                            onPress={() => {
                                this.props.navigator.push({ id: 'servico' })
                            }}
                        >
                            <Image style={styles.imgMenu} source={menu_servico} />
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#EC7148'}
                            activeOpacity={0.2}
                            onPress={() => {
                                this.props.navigator.push({ id: 'empresa' })
                            }}
                        >
                            <Image style={styles.imgMenu} source={menu_empresa} />
                        </TouchableHighlight>

                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row'

    },
    imgMenu: {
        margin: 15
    }
});