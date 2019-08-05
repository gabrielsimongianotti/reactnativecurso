import React from 'react';
// import {Text} from 'react-native';
import {
    Router,
    Scene,
    Stack
} from 'react-native-router-flux';

import Principal from '../pages/Principal.js';
import SobreJogo from '../pages/SobreJogo.js';
import OutrosJogos from '../pages/OutrosJogos.js';
import Resultado from '../pages/Resultado.js'

const Rotas = () => (
    <Router sceneStyle={{ paddingTop: 50 }}>
        <Stack key="root">
            <Scene key="principal" component={Principal} title='Cara ou Coroa' />
            <Scene key="sobrejogo" component={SobreJogo} title='Sobre o jogo' />
            <Scene key="outrosjogos" component={OutrosJogos} title='Outros jogos' />
            <Scene key="resultado" component={Resultado} title='Resultado' />
        </Stack>
    </Router>
);

export default Rotas;