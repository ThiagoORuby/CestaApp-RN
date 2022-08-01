import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Topo from './components/Topo'

export default function HomeScreen({topo}) {
  return (
    <View>
        <Topo {...topo}/>
    </View>
  )
}

const styles = StyleSheet.create({})