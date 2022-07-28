import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Texto from '../../../components/Texto'

export default function Itens({titulo, lista}) {
  return (
    <>
      <Texto style={styles.titulo}>{titulo}</Texto>
      {lista.map(({nome, imagem}) => {
        return <View key={nome}>
            <Texto>{nome}</Texto>
            <Image source={imagem}/>
        </View>
      })}
    </>
  )
}

const styles = StyleSheet.create({
    titulo:{
        color: 'black'
    }
})