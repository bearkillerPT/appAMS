import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
const Stack = createStackNavigator();
var imgQuichVeg = require('../assets/quicheVegsGluten.jpg');
var imgCremeEspi = require('../assets/cremedeespinafres.jpg');
var imgSaladaQSerra = require('../assets/saladaqueijoserra.jpg');
export function CartScreen({ navigation, route }) {
    const getTotal = () => {
        let res = 0;
        for (let prato of cart) {
            res += prato.Preço;
        }
        return res;
    }
    const cart = [
        {
            "name": "Salada de queijo da serra",
            "id": 0,
            "Preço": 7,
            "Opçoes": ["Extra azeitonas"],
            "image": imgSaladaQSerra
        },
        {
            "name": "Quiche Vegetariana s/Glúten",
            "id": 1,
            "Preço": 6.5,
            "Opções": [],
            "image": imgQuichVeg,
        },
        {
            "name": "Creme de espinafres",
            "id": 2,
            "Preço": 6.5,
            "Opções": [],
            "image": imgCremeEspi,
        },
    ];
    return (
        <View>
            <ScrollView>{
                cart.map(prato => {
                    return (
                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} key={prato.id}>
                            <View style={styles.containerRow}>
                                <Image style={styles.image} source={prato.image} />
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{prato.name}</Text>
                                    <Text style={styles.foodText}>Opções : {prato.Opçoes}
                                        {"\n"}
                            Preço : {prato.Preço} €</Text>
                                </View>
                            </View>
                        </TouchableHighlight>

                    );
                })
            }</ScrollView>
            <Text style={styles.restaurantesOffer}>Preço total: {getTotal()}€</Text>
        </View>

    );
}

export default function Cart(route) {

    console.log(route)
    return (
        <Stack.Navigator initialroute={'Carrinho'} >
            <Stack.Screen name="Carrinho" component={CartScreen} />
        </Stack.Navigator>);

}

const styles = StyleSheet.create({
    containerRow: {
        flexDirection: 'row'
    },
    containerColumn: {
        paddingLeft: 10,
        paddingBottom: 10,
        flexDirection: 'column'
    },
    restaurantesOffer: {
        fontSize: 15,
        padding: 15,
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
        backgroundColor: "#DDDDDD",
    },
    image: {
        width: 150,
        height: 100,
    }
});