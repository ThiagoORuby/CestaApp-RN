import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import CestaScreen from './src/pages/Cesta';

import mock from './src/mocks/cesta'
import homeMock from './src/mocks/home'
import HomeScreen from './src/pages/Home';

// Inicio
export default function App() {
  return (
    // usar ... quebra um array, tornando parãmetro cada objeto dentro dele
    // ...mock == topo = {mock.topo} detalhes = {mock.detalhes}
    // <CestaScreen {...mock}/>
    <SafeAreaView style={{flex: 1}}>
      <HomeScreen {...homeMock}/>
    </SafeAreaView>
  );
}
