import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Linking } from 'react-native';
import { restaurants } from '../App';
export default function Home({ navigation, route }) {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'column', flex: 1, padding: 20 }}>
                <Text style={styles.restaurantesOffer}>
                    Escolha o seu restaurante preferido entra a nossa seleção!
                </Text>
                <ScrollView style={{ flexDirection: 'row', flex: 1 }} horizontal>{
                    Object.keys(restaurants).map((restaurante) => {
                        return (
                            <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.button} key={restaurants[restaurante].id} onPress={() => navigation.push('Pratos', { restaurante: restaurants[restaurante], cart: route.params.cart })}>
                                <View key={restaurants[restaurante].id} style={styles.restaurantesPromo}>{
                                    <View style={{ flexDirection: 'column'}}>
                                        <Image source={restaurants[restaurante].image} style={styles.image} />
                                        <Text style={styles.restaurantesTitle}>{restaurante}</Text>
                                    </View>
                                }</View>
                            </TouchableHighlight>
                        )
                    })
                }</ScrollView>
                <Text style={styles.restaurantesOffer}
                    onPress={() => Linking.openURL('https://micro-site-ams.herokuapp.com/')}>
                    Visite o nosso site!
            </Text>
            </View>
        </ScrollView>
    );
}




const styles = StyleSheet.create({
    restaurantesPromo: {
        flexDirection: 'column',
        backgroundColor: "#DDDDDD",
        padding: 5,
        width: 150,
        height: 200,
    },
    image: {
        width: 150,
        height: 100,
    },
    restaurantesTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    restaurantesOffer: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'black'
    },
    button: {
        padding: 7,
        backgroundColor: "#DDDDDD",
        height: 160,
    },
});