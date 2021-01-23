import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { store, db, images } from '../../App';

export default function Orders({ route }) {
    let user = store.getState().cartReducer.user;
    const [restaurante, setRestaurante] = useState("");
    const [restaurants, setRestaurants] = useState({});
    getRestaurante(user, setRestaurante, setRestaurants);
    if (restaurante == "" || Object.keys(restaurants).length == 0) return (<View><Text>Sorry</Text></View>);
    return (
        <View style={{flex: 1}}>
            <Text style={styles.restaurantesOffer}>Pedidos:</Text>
            <ScrollView>{
                Object.keys(restaurants[restaurante].pedidos).map(pedidoI => {
                    return (
                        <View style={styles.button} key={restaurants[restaurante].pedidos[pedidoI].Id}>
                            <View style={styles.containerRow}>
                                <Icon2 name="new-box" size={50} style={{alignSelf:'center', paddingHorizontal: 20}}/>
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{restaurants[restaurante].pedidos[pedidoI].Morada}</Text>
                                    <Text style={styles.foodText}>Pratos : </Text>
                                    <View style={styles.containerRow}>{
                                        restaurants[restaurante].pedidos[pedidoI].Pratos.map(
                                        (prato) => {return(
                                        <View key={restaurants[restaurante].pedidos[pedidoI].Id}>
                                            <Text style={{paddingLeft:10}}>{prato}</Text>
                                        </View>);}
                                        )
                                    }
                                    </View>
                                    <View style={styles.containerRow}>
                                        <Text>Status:{'\n'}</Text>
                                        <Text style={{paddingLeft: 10}}>{restaurants[restaurante].pedidos[pedidoI].Status}</Text>
                                    </View>
                                    {restaurants[restaurante].pedidos[pedidoI].Estafeta &&
                                    <View style={styles.containerRow}>
                                        <Text>Estafeta:{'\n'}</Text>
                                        <Text style={{paddingLeft: 10}}>{restaurants[restaurante].pedidos[pedidoI].Estafeta}</Text>
                                    </View>
                                    }
                                    <View style={styles.containerRow}>
                                        {!restaurants[restaurante].pedidos[pedidoI].Estafeta && <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} onPress={() => {
                                            let tmpPedido = restaurants[restaurante].pedidos[pedidoI]
                                            tmpPedido.Status="waiting";
                                            tmpPedido.Restaurante=restaurante;
                                            db.ref("restaurantes/" + restaurante + "/pedidos/" + pedidoI).set( tmpPedido)
                                            db.ref("Pedidos").push(restaurants[restaurante].pedidos[pedidoI]);
                                         }}>
                                            <Icon2 name="check-bold" size={15} style={{ borderRightWidth: 5, borderRightColor: 'rgba(0,0,0,0)' }} />
                                        </TouchableHighlight>}
                                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} onPress={() => {
                                            db.ref("restaurantes/" + restaurante + "/pedidos/" + pedidoI).remove();
                                         }}>
                                            <Icon2 name="delete" size={15} />
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                })
            }</ScrollView>
        </View>

    );
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
    }
});
