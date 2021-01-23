
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Button } from 'react-native';
import { store, db, images } from '../../App';

export default function Orders({ route }) {
    let user = store.getState().cartReducer.user;
    const [pedidos, setPedidos] = useState({});
    getRestaurante(user, setPedidos);
    if (pedidos == null || Object.keys(pedidos).length == 0) return (<View><Text style={styles.restaurantesOffer}>Não há pedidos de momento!</Text></View>);
    return (
        <View style={{flex: 1}}>
            <Text style={styles.restaurantesOffer}>Pedidos:</Text>
            <ScrollView>{
                Object.keys(pedidos).map(pedidoI => {
                    return (
                        <View style={styles.button} key={pedidos[pedidoI].Id}>
                            <View style={styles.containerRow}>
                                <Icon2 name="new-box" size={50} style={{ alignSelf: 'center', paddingHorizontal: 20 }} />
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{pedidos[pedidoI].Morada}</Text>
                                    <Text style={styles.foodText}>Pratos : </Text>
                                    <View style={styles.containerRow}>{
                                        pedidos[pedidoI].Pratos.map(
                                            (prato) => {
                                                return (
                                                    <View key={pedidos[pedidoI].Id}>
                                                        <Text style={{ paddingLeft: 10 }}>{prato}</Text>
                                                    </View>);
                                            }
                                        )
                                    }
                                    </View>
                                    <View style={styles.containerRow}>
                                        <Text>Status:{'\n'}</Text>
                                        <Text style={{ paddingLeft: 10 }}>{pedidos[pedidoI].Status}</Text>
                                    </View>
                                    {pedidos[pedidoI].Restaurante &&
                                        <View style={styles.containerRow}>
                                            <Text>Restaurante:{'\n'}</Text>
                                            <Text style={{ paddingLeft: 10 }}>{pedidos[pedidoI].Restaurante}</Text>
                                        </View>
                                    }
                                    {pedidos[pedidoI].Estafeta &&
                                        <View style={styles.containerRow}>
                                            <Text>Estafeta:{'\n'}</Text>
                                            <Text style={{ paddingLeft: 10 }}>{pedidos[pedidoI].Estafeta}</Text>
                                        </View>
                                    }
                                    <View style={styles.containerRow}>
                                        {!pedidos[pedidoI].Estafeta && <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} onPress={() => {
                                            let tmpPedido = pedidos[pedidoI]
                                            tmpPedido.Status = "A entregar";
                                            tmpPedido.Estafeta = user;
                                            db.ref("/Pedidos/" + pedidoI).set(tmpPedido);
                                            db.ref("/restaurantes/" + pedidos[pedidoI].Restaurante + "/pedidos/" + pedidos[pedidoI].Id).set(tmpPedido);
                                        }}>
                                            <Icon2 name="check-bold" size={15} style={{ borderRightWidth: 5, borderRightColor: 'rgba(0,0,0,0)' }} />
                                        </TouchableHighlight>}
                                        {pedidos[pedidoI].Estafeta && pedidos[pedidoI].Status != "Entregue" && <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} onPress={() => {
                                            let tmpPedido = pedidos[pedidoI]
                                            tmpPedido.Status = "Entregue";
                                            db.ref("/Pedidos/" + pedidoI).set(tmpPedido);
                                            db.ref("/restaurantes/" + pedidos[pedidoI].Restaurante + "/pedidos/" + pedidos[pedidoI].Id).set(tmpPedido);
                                        }}>
                                            <Text>Finalizar Encomenda!</Text>
                                        </TouchableHighlight>}
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


async function getRestaurante(user, setPedidos) {
    await db.ref("Pedidos").once('value').then(res => { setPedidos(res.val()); });
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