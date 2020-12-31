import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { restaurants } from './AppEstafeta';
export default function Orders({ route }) {
    //<Image so(urce={restaurante.image} style={styles.image}/>
    console.log(route);
    const estafeta = route.params.estafeta;
    return (
        <View>
            <Text style={styles.restaurantesOffer}>Pratos Pedidos:</Text>
            <ScrollView>{
                estafeta.pedidos.map(pedido => {
                    return (
                        <View style={styles.button} key={pedido.id}>
                            <View style={styles.containerRow}>
                                <Image style={styles.image} source={restaurants[pedido.restaurante].image} />
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{pedido.restaurante}</Text>
                                    <Text style={styles.foodText}>{pedido.prato}
                                        {"\n"}
                                        Morada : {pedido.morada}</Text>
                                    <View style={styles.containerRow}>
                                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} onPress={() => {}}>
                                            <Icon2 name="check-bold" size={17} style={{  }} />
                                        </TouchableHighlight>
                                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button}  onPress={() => {}}>
                                            <Icon2 name="delete" size={17} />
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
        padding: 5,
        borderRadius: 13
    },
    image: {
        width: 150,
        height: 100,
    }
});