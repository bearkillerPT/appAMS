import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { restaurants } from './AppRestaurante';
export default function Orders({ route }) {
    //<Image so(urce={restaurante.image} style={styles.image}/>
    console.log(route);
    const restaurante = route.params.restaurante.restaurante.restaurante;
    return (
        <View>
            <Text style={styles.restaurantesOffer}>Pratos Pedidos:</Text>
            <ScrollView>{
                Object.keys(restaurants[restaurante].Pratos).map(prato => {
                    return (
                        <View style={styles.button} key={restaurants[restaurante].Pratos[prato].id}>
                            <View style={styles.containerRow}>
                                <Image style={styles.image} source={restaurants[restaurante].Pratos[prato].image} />
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{prato}</Text>
                                    <Text style={styles.foodText}>Opções : {restaurants[restaurante].Pratos[prato].Opçoes}
                                        {"\n"}
                                Preço : {restaurants[restaurante].Pratos[prato].Preço} €</Text>
                                    <View style={styles.containerRow}>
                                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} onPress={() => {}}>
                                            <Icon2 name="check-bold" size={15} style={{ borderRightWidth: 5, borderRightColor: 'rgba(0,0,0,0)' }} />
                                        </TouchableHighlight>
                                        <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button}  onPress={() => {}}>
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