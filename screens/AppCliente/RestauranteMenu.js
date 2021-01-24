import React, { useState, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPrato } from '../../assets/cartState';
import { db, images, store } from '../../App';

export default function RestauranteMenu({ route }) {
    const restauranteName = route.params.restaurante["Name"];
    const [pratos, setPratos] = useState({});
    const [cart, setCart] = useState([]);
    getCart(user, setCart);
    let user = store.getState().cartReducer.user;
    useEffect(() => {
        db.ref("Users/" + user + "/cart").once('value').then(res => { setCart(res.val()) });
        
        db.ref("restaurantes/" + restauranteName + "/Pratos").once('value').then(res => setPratos(res.val()));
    }, []);
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.restaurantesOffer}>Pratos Disponíveis:</Text>
            <ScrollView>{
                Object.keys(pratos).map(prato => {
                    return (
                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} key={pratos[prato].Id} onPress={() => {
                            if (checkSameRestaurant(cart, restauranteName))
                                db.ref('Users/' + user + "/cart").push(pratos[prato]);
                        }}>
                            <View style={styles.containerRow}>
                                <Image style={styles.image} source={getImageByName(pratos[prato].image)} />
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{pratos[prato].Name}</Text>
                                    <Text style={styles.foodText}>Opções : {pratos[prato].Opcoes}
                                        {"\n"}
                            Preço : {pratos[prato].Preco} €</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    );
                })
            }</ScrollView>
        </View>

    );
}

const getImageByName = (imageName) => {
    let img = images[imageName]
    if (img != null) return img
    return images["default"]
}

function getCart(user, setCart) {
}

function checkSameRestaurant(cart, currentRestauranteName) {
    if (cart == null) return true;
    for (let prato in Object.values(cart)) {
        if (prato.Restaurante != currentRestauranteName)
            return false;
    }
    return true;
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