import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { db, images, store } from '../../App';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
var imgQuichVeg = require('../../assets/quicheVegsGluten.jpg');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
var imgCremeEspi = require('../../assets/cremedeespinafres.jpg');
var imgSaladaQSerra = require('../../assets/saladaqueijoserra.jpg');


export function CartScreen(props) {
    const [cart, setCart] = useState({});
    let user = store.getState().cartReducer.user;
    const dispatch = useDispatch();
    getCart(user, setCart);
    useEffect(() => {
        setTimeout(()=>getCart(user, setCart), 1000);
        if(cart == null) setTimeout(()=>setCart({}), 1000);
        
    }, [cart])
    const getTotal = () => {
        if (cart == null) return 0;
        let res = 0;
        for (let prato of Object.keys(cart)) {
            res += cart[prato].Preco;
        }
        return res;
    }
    if (cart == null) return (
        <View>
            <Text style={styles.restaurantesOffer}>Preço total: {getTotal()}€</Text>
            <TouchableOpacity style={styles.payButtonContainer}>
                <Text style={styles.payButtonText}>Pagar</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View>
            <ScrollView>{
                Object.keys(cart).map(prato => {
                    return (
                        <TouchableHighlight underlayColor={"#DDDDDD"} style={styles.button} key={prato} >
                            <View style={styles.containerRow}>
                                <View style={styles.containerRow}>
                                    <Image style={styles.image} source={getImageByName(cart[prato].image)} />
                                </View>
                                <View style={styles.containerColumn}>
                                    <Text style={styles.restaurantesOffer}>{cart[prato].Name}</Text>
                                    <Text style={styles.foodText}>Opções : {cart[prato].Opcoes}
                                        {"\n"}
                                Preço : {cart[prato].Preco} €</Text>
                                </View>
                                <TouchableHighlight underlayColor={"#DDDDDD"} activeOpacity={0.3} style={styles.delButton} onPress={() => {
                                    db.ref("Users/" + user + "/cart/" + prato).remove();
                                    db.ref("Users/" + user + "/cart").once('value').then(res => { setCart(res.val()) });

                                }}>
                                    <Icon name="delete" size={25} />
                                </TouchableHighlight>
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

function getCart(user, setCart) {
    db.ref("Users/" + user + "/cart").once('value').then(res => { setCart(res.val()) });
}

export default function Cart(route) {
    return (
        <Stack.Navigator initialroute={'Carrinho'} screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'darkcyan' }, headerTintColor: 'white' }}>
            <Stack.Screen name="Carrinho" component={CartScreen} />
        </Stack.Navigator>);

}


const getImageByName = (imageName) => {
    let img = images[imageName]
    if (img != null) return img
    return images["default"]
}


const mapStateToProps = (state) => { return { cartList: state.cartReducer.cart } };


const mapDispatchToProps = (dispatch) => {
    return {
        add: (prato) => dispatch({ type: "addPrato", prato: prato })
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
    delButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'

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