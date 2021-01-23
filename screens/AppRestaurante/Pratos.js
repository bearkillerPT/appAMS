import React, { useState, useEffect, useContext, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { store, db, images} from '../../App';
export default function RestauranteMenu({ route }) {
    //<Image so(urce={restaurante.image} style={styles.image}/>
    let user = store.getState().cartReducer.user;
    const [restaurante, setRestaurante] = useState("");
    const [restaurants, setRestaurants] = useState({});
    getRestaurante(user, setRestaurante, setRestaurants);
    if (restaurante == "" || Object.keys(restaurants).length == 0) return (<View><Text>Sorry</Text></View>);
    return (
        <View>
            <Text style={styles.restaurantesOffer}>Pratos Disponibilizados:</Text>
            <ScrollView>{
                Object.keys(restaurants[restaurante].Pratos).map(prato => {
                    return (
                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} key={restaurants[restaurante].Pratos[prato].Id} onPress={() => { }}>
                            <View style={styles.containerRow}>
                                <View style={styles.containerRow}>
                                    <Image style={styles.image} source={getImageByName(restaurants[restaurante].Pratos[prato].image)} />
                                </View>
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{restaurants[restaurante].Pratos[prato].Name}</Text>
                                    <Text style={styles.foodText}>Opções : {restaurants[restaurante].Pratos[prato].Opcoes}
                                        {"\n"}
                                Preço : {restaurants[restaurante].Pratos[prato].Preco} €</Text>
                                </View>
                                <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.delButton} onPress={() => {
                                    db.ref("restaurantes/" + restaurante + "/Pratos/" + prato).remove();
                                    getRestaurante(user, setRestaurante, setRestaurants);
                                }}>
                                    <Icon name="delete" size={25} />
                                </TouchableHighlight>
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

async function getRestaurante(user, setRestaurante, setRestaurants) {
    await db.ref("Users/" + user).once('value').then(res => setRestaurante(res.val()["restaurante"]));
    await db.ref("restaurantes").once('value').then(res => setRestaurants(res.val()));
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
    },
    delButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'auto'

    },
});