import React, { useState, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { restaurants } from './AppRestaurante';
export default function RestauranteMenu({route}) {
    //<Image so(urce={restaurante.image} style={styles.image}/>
    const restaurante = route.params.restaurante.restaurante;
    return (
        <View>
            <Text style={styles.restaurantesOffer}>Pratos Disponibilizados:</Text>
            <ScrollView>{
                Object.keys(restaurants[restaurante].Pratos).map(prato => {
                    return (
                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} key={restaurants[restaurante].Pratos[prato].id} onPress={() => {}}>
                            <View style={styles.containerRow}>
                                <Image style={styles.image} source={restaurants[restaurante].Pratos[prato].image} />
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{prato}</Text>
                                    <Text style={styles.foodText}>Opções : {restaurants[restaurante].Pratos[prato].Opçoes}
                                        {"\n"}
                            Preço : {restaurants[restaurante].Pratos[prato].Preço} €</Text>
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