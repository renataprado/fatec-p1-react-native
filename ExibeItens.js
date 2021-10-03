import React, { Component } from 'react';
import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';

class ExibeItens extends Component {
    constructor(props) {
        super(props);
    }
  
    ExibeItem = (props) => {
        return(
            <TouchableOpacity>
                <View style={this.styles.itemLista}>
                    <Text style={this.styles.text_desc}>Descrição: {props.item.desc}</Text>
                    <Text style={this.styles.text_desc}>Fabricante: {props.item.fab}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={this.styles.container}>
            <Text style={this.styles.titulo} > Itens </Text>
            <FlatList
                style={{width: '90%', marginTop: 20 }}
                data={this.props.itens}
                renderItem={l => (
                    <this.ExibeItem item={l.item}/>
                )}
            />
            </View>
        );
    }

    styles = StyleSheet.create({
        container:{
            marginTop: 30,
            padding: 20,
            width: '80%',
            backgroundColor: '#EEE',
            alignItems: 'center',
            borderRadius: 20
        },
        titulo:{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#702B91'
        },
        itemLista: {
            marginBottom: 6,
            backgroundColor: 'white',
            justifyContent: 'center',
            padding: 20
        },
        text_desc: {
            fontSize: 12,
        }
    })
    

}

export default ExibeItens;