import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Texto from '../../../components/Texto'

export default function Itens({titulo, lista}) {

  const renderItem = ({item: {nome, imagem}}) => 
    <View key={nome} style={styles.item}>
      <Image style={styles.imagem} source={imagem}/>
      <Texto style={styles.nome}>{nome}</Texto>
    </View>

  return (
    <>
      <Texto style={styles.titulo}>{titulo}</Texto>
      <FlatList 
      data={lista}
      renderItem={renderItem}
      keyExtractor = {({nome}) => nome}
      />
    </>
  )
}

const styles = StyleSheet.create({
    titulo:{
        color: '#464646',
        fontWeight: '500',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item:{
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: "#ECECEC",
      paddingVertical: 16,
      alignItems: 'center'
    },
    imagem:{
      width: 46,
      height: 46
    },
    nome:{
      fontSize: 16,
      marginLeft: 11,
      color: '#464646'
    }
})