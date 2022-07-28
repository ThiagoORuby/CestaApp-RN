import { View, Text, Image, Dimensions, StyleSheet} from 'react-native'
import React from 'react'

import topo from '../../../../assets/topo.png'
import Texto from '../../../components/Texto'

const width = Dimensions.get('screen').width

export default function Topo({titulo}) {
  return (
    <>
      <Image source={topo} style={styles.topo}/>
      <Texto style={styles.titulo}>{titulo}</Texto>
    </>
  )
}

const styles = StyleSheet.create({
    titulo:{
        // relative -> as comp ficam ordenadas separadamente
        // absolute -> as comp ficam juntas
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        padding: 16
    },
    topo:{
        width: '100%',
        height: 578 / 768 * width,
    },
})