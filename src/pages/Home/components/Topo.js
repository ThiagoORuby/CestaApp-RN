import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import logo from '../../../assets/logo.png'
import { carregaTopo } from '../../../services/carregaDados'

// Components feitos com classes
class Topo extends React.Component {

    // modelo de states default
    state = {
        topo:{
            titulo: '',
            mensagem: ''
        }
    }

    // método que pega os dados do mock/db/api e seta nos states
    atualizaTop(){
        const retorno = carregaTopo()
        this.setState({topo: retorno})
    }

    // método que roda ao iniciar o componente
    componentDidMount(){
        this.atualizaTop();
    }
    
    // método que renderiza o componente
    render(){
        return (
            <View style={styles.topo}>
                <Image style={styles.imagem} source={logo}/>
                <Text style={styles.titulo} >{this.state.topo.titulo}</Text>
                <Text  style={styles.mensagem} >{this.state.topo.mensagem}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topo:{
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    imagem:{
        width: 70,
        height: 28
    },
    titulo:{
        color: 'black',
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    mensagem:{
        color: 'black',
        fontSize: 16,
        lineHeight: 26
    }
})

export default Topo;