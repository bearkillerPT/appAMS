import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {delPrato} from '../../assets/cartState';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
var imgQuichVeg = require('../../assets/quicheVegsGluten.jpg');
var imgCremeEspi = require('../../assets/cremedeespinafres.jpg');
var imgSaladaQSerra = require('../../assets/saladaqueijoserra.jpg');


export function CartScreen(props) {
    const dispatch = useDispatch(); 
    const cart = useSelector(state => state.cartReducer.cart);
    const rest = useSelector(state => state.cartReducer.restaurant);
    console.log(cart);
    console.log(rest);
    const getTotal = () => {
        let res = 0;
        for (let prato of cart) {
            res += prato.Preço;
        }
        return res;
    }
    return (
        <View>
            <ScrollView>{
                cart.map(prato => {
                    return (
                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} key={prato.id} onPress={() => dispatch(delPrato(prato))}>
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
            <TouchableOpacity style={styles.payButtonContainer}>
                <Text style={styles.payButtonText}>Pagar</Text>
            </TouchableOpacity>
        </View>

    );
}

const Stack = createStackNavigator();

export default function Cart(route) {
    console.log("navigator")
    console.log(route)
    return (
        <Stack.Navigator initialroute={'Carrinho'} screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'darkcyan' },  headerTintColor:'white' }}>
            <Stack.Screen name="Carrinho" component={CartScreen} />
        </Stack.Navigator>);

}

const mapStateToProps = (state) => {console.log("mapState");console.log(state.cartReducer.cart); return {cartList : state.cartReducer.cart }};


const mapDispatchToProps = (dispatch) => {
    return{
        add : (prato) => dispatch({type: "addPrato", prato : prato})
    }
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
    },
    payButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    payButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});