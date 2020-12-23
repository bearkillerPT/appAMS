import React, { useState, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { addCart } from '../assets/cartState';
export default function RestauranteMenu({route}) {
    //<Image source={restaurante.image} style={styles.image}/> 
    const restaurante = route.params.restaurante;
    const store = route.params.store;
    return (
        <View>
            <Text style={styles.restaurantesOffer}>Pratos Disponíveis:</Text>
            <ScrollView>{
                Object.keys(restaurante.Pratos).map(prato => {
                    return (
                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} key={restaurante.Pratos[prato].id} onPress={() => {}}>
                            <View style={styles.containerRow}>
                                <Image style={styles.image} source={restaurante.Pratos[prato].image} />
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{prato}</Text>
                                    <Text style={styles.foodText}>Opções : {restaurante.Pratos[prato].Opçoes}
                                        {"\n"}
                            Preço : {restaurante.Pratos[prato].Preço} €</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    );
                })
            }</ScrollView>
        </View>

    );
}


const styles = StyleSheet.create({
    containerRow: {
        paddingBottom: 10,
        flexDirection: 'row'
    },
    containerColumn: {
        paddingLeft: 10,
        paddingBottom: 10,
        flexDirection: 'column'
    },
    restaurantesOffer: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'black'
    },
    foodText: {
        fontSize: 12,
        textAlign: 'left',

    },
    button: {
        padding: 7,
    },
    image: {
        width: 150,
        height: 100,
    }
});