import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import CestaScreen from './src/pages/Cesta';

import mock from './src/mocks/cesta'

// Inicio
export default function App() {
  return (
    // usar ... quebra um array, tornando parãmetro cada objeto dentro dele
    // ...mock == topo = {mock.topo} detalhes = {mock.detalhes}
    <SafeAreaView style={{flex: 1}}>
      <CestaScreen {...mock}/>
    </SafeAreaView>
  );
}
