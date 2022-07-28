/*
Texto -> Componente para os textos com fonte Montserrat
*/

import { StyleSheet, Text, } from 'react-native'
import React from 'react'

export default function Texto({ children, style}) {
  return (
  <Text style={[(style?.fontWeight == '500') ? styles.textoBold : styles.texto, style]}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
    texto: {
        color: 'black',
        fontWeight: 'normal',
        fontFamily: 'Montserrat',
    },
    textoBold: {
        fontWeight: 'normal',
        fontFamily: 'Montserrat-Bold',
    }
})