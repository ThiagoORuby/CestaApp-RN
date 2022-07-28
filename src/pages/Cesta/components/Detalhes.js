import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Texto from '../../../components/Texto'
import Botao from '../../../components/Botao'

export default function Detalhes({nome, fazenda, logo, descricao, preco, botao}) {
  return (
    <View>
        <Texto style={styles.nome}>{nome}</Texto>
        <View style={styles.fazenda}>
            <Image source={logo} style={styles.imagemFazenda}/>
            <Texto style={styles.nomeFazenda}>{fazenda}</Texto>
        </View>
        <Texto style={styles.descricao}>{descricao}</Texto>
        <Texto style={styles.preco}>{preco}</Texto>
        <Botao texto={botao}/>
    </View>
  )
}

const styles = StyleSheet.create({
    nome: {
        color: 'black',
        fontSize: 26,
        fontWeight: '500',
    },
    fazenda:{
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda:{
        width: 32,
        height: 32
    },
    nomeFazenda:{
        color: 'black',
        fontSize: 16,
        marginLeft: 12,
        lineHeight: 26,
    },
    descricao:{
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'justify',
    },
    preco: {
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: '500',
    },
})