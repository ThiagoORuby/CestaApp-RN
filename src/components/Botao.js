import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Texto from './Texto'

export default function Botao({texto}) {
  return (
    <TouchableOpacity style={styles.botao}>
        <Texto style={styles.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 26
    }
})