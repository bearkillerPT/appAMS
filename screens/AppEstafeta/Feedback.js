import React from 'react';
import { Rating } from 'react-native-ratings';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { restaurants } from './AppEstafeta';
export default function Feedback({ route }) {
    //<Image so(urce={restaurante.image} style={styles.image}/>
    console.log(route);
    const estafeta = route.params.estafeta;
    const getAverageRate = () => {
        let res = 0;
        let count = 0;
        for (let feedback of estafeta.feedback) {
            console.log(feedback);
            res += feedback.rating;
            count += 1;
        }
        return (1.0 * res / count);
    }
    const averageR = getAverageRate();
    console.log(averageR);
    return (
        <View>
            <Text style={styles.restaurantesOffer}>Feedback das entregas:</Text>
            <ScrollView>{
                estafeta.feedback.map(pedido => {
                    return (
                        <View style={styles.button} key={pedido.id}>
                            <View style={styles.containerRow}>
                                <Image style={styles.image} source={restaurants[pedido.restaurante].image} />
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{pedido.restaurante}</Text>
                                    <Text style={styles.foodText}>Rating:
                                    {'\n'} </Text>
                                    <Rating
                                        type='star'
                                        readonly
                                        startingValue={pedido.rating}
                                        tintColor='rgb(242,242,242)'
                                        style={styles.rating}
                                        imageSize={15}
                                    />
                                </View>
                            </View>
                        </View>
                    );
                })
            }
                <View>
                    <Text style={styles.restaurantesOffer}>Average Rating: </Text>
                    <Rating
                        type='star'
                        readonly
                        tintColor='rgb(242,242,242)'
                        startingValue={averageR}
                    />
                </View>
            </ScrollView>
        </View >

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
    },
    rating: {
        borderRightWidth: 500,
        borderRightColor: 'rgba(0,0,0,0)',
    }
});