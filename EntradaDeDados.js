import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';


const EntradaDeDados = (props) => {
    const [item, setItem] = useState({desc: '', fab: ''})

    const buttonClickedHandler = () => {
        props.onAddItem(item)
        setItem({desc: '', fab: ''})
    }
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: '#fff',
        paddingTop: 10,
        width: '80%',
        alignItems: "center"
      },
      entrada: {
        backgroundColor: '#EEE',
        padding: 10,
        borderRadius: 0,
        fontSize: 12,
        width: '80%',
        marginTop: 10,
      },
      containerButton: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
      },
      roundButton: {
        width: '100%',
        height: 40,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#702B91',
        justifyContent: 'center',
        alignItems: 'center'
      },
    })
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.entrada}
          placeholder="Descrição"
          onChangeText={(desc) => {setItem({desc, fab: item.fab})}}
          value={item.desc}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Fabricante"
          onChangeText={(fab) => {setItem({desc: item.desc, fab})}}
          value={item.fab}
        />
        <View style={styles.containerButton}>
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundButton}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Adicionar Item</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
}

export default EntradaDeDados;

