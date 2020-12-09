import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';

var imgQuichVeg = require('../assets/quicheVegsGluten.jpg');
var imgCremeEspi = require('../assets/cremedeespinafres.jpg');
var imgSaladaQSerra = require('../assets/saladaqueijoserra.jpg');
export default function Cart({ route }) {
    const getTotal = () => {
        let res = 0;
        for (let prato of cart) {
            res += prato.Preço;
        }
        return res;
    }
    const cart = React.useContext(route.params.cart).cart;
    console.log(cart);
    return (
        <View>
            <Text style={styles.restaurantesOffer}>Carrinho:</Text>
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