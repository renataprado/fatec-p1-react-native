import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import ExibeItens from './ExibeItens';
import EntradaDeDados from './EntradaDeDados';

export default function App() {
  const [itens, setItens] = useState([{desc: '1', fab: '1'}, {desc: '2', fab: '2'}]);

  const addItem = (item) => { 
    setItens( [...itens, item] ) 
  }

  return (
    <View style={styles.container}>
      <EntradaDeDados
        onAddItem={addItem}
      />
      <ExibeItens
        itens={itens}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
  }
});
