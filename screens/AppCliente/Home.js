import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Linking } from 'react-native';
import { db, images     } from '../../App';
export default function Home({ navigation, route }) {
    const [restaurants, setRestaurants] = useState({});
    const [promos, setPromos] = useState({});
    useEffect(() => {
      db.ref("restaurantes").once('value').then(res => setRestaurants(res.val()));
      db.ref("promos").once('value').then(res => setPromos(res.val()));
    }, []);
    return (
        <ScrollView style={{flex: 1}}>
            <View style={{ flexDirection: 'column', flex: 1, padding: 20 }}>
                <Text style={styles.restaurantesOffer}>
                    Destaques:
                </Text>
                <ScrollView style={{ flexDirection: 'row', flex: 1 }} horizontal>{
                    Object.keys(promos).map((restaurante) => {
                        return (
                            <View style={styles.restaurantesPromo}>
                                <TouchableHighlight underlayColor='#DDDDD' activeOpacity={0.3} style={styles.button} key={promos[restaurante].id} onPress={() => {}}>
                                    <View key={promos[restaurante].id} style={styles.restaurantesPromo}>{
                                        <View style={{ flexDirection: 'column' }}>
                                            <Image source={getImageByName(promos[restaurante].image)} style={styles.image} />
                                            <Text style={styles.restaurantesTitle}>{promos[restaurante].Name}</Text>
                                            <Text style={styles.restaurantesDescr}>{promos[restaurante].descr}</Text>
                                        </View>
                                    }</View>
                                </TouchableHighlight>

                            </View>)
                    })
                }</ScrollView>
                <Text style={styles.restaurantesOffer}>
                    Restaurantes favoritos:
                </Text>
                <ScrollView style={{ flexDirection: 'row', flex: 1 }} horizontal>{
                    Object.keys(restaurants).map((restaurante) => {
                        return (
                            <View style={styles.restaurantesPromo}>
                                <TouchableHighlight underlayColor='#DDDDD' activeOpacity={0.3} style={styles.button} key={restaurants[restaurante].id} onPress={() => navigation.push('Pratos', { restaurante: restaurants[restaurante] })}>
                                    <View key={restaurants[restaurante].Id} style={styles.restaurantesPromo}>{
                                        <View style={{ flexDirection: 'column' }}>
                                            <Image source={getImageByName(restaurants[restaurante].image)} style={styles.image} />
                                            <Text style={styles.restaurantesTitle}>{restaurants[restaurante].Name}</Text>
                                        </View>
                                    }</View>
                                </TouchableHighlight>

                            </View>)
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


const getImageByName = (imageName) => {
    let img = images[imageName]
    if (img != null) return img
    return images["default"]
}




const styles = StyleSheet.create({
    restaurantesPromo: {
        flexDirection: 'column',
        padding: 5,
        width: 160,
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
    restaurantesDescr: {
        fontSize: 13,
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
        height: 160,
    },
});