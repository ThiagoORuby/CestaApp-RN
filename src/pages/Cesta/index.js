import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, Button, Pressable, ScrollView} from 'react-native';

import Detalhes from './components/Detalhes';
import Itens from './components/Itens';
import Topo from './components/Topo';

export default function CestaScreen({topo, detalhes, itens}) {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Topo {...topo}/>
            <View style={styles.cesta}>
                <Detalhes {...detalhes} {...itens} />
                <Itens {...itens}/>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1,
    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    botao:{
        height: 50,
        marginVertical: 10,
        backgroundColor: 'green'
    }
})