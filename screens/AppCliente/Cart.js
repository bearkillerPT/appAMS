import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { db, images, store } from '../../App';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
var imgQuichVeg = require('../../assets/quicheVegsGluten.jpg');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
var imgCremeEspi = require('../../assets/cremedeespinafres.jpg');
var imgSaladaQSerra = require('../../assets/saladaqueijoserra.jpg');


export function PedidoScreen({ route, navigation }) {
    const [morada, setMorada] = useState("");
    let cart = route.params.cart;
    let user = route.params.user;
    let restaurante = "";
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nutrilink</Text>
            <View style={styles.containerColumn}>
                <View style={styles.inputView}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        color: "white"
                    }}>Pratos:</Text>
                    {
                        Object.keys(cart).map((prato) => {
                            restaurante = cart[prato].Restaurante;
                            return (<View key={cart[prato].Id}><Text style={{color: "white", paddingHorizontal: 10 }}>{cart[prato].Name}</Text></View>);
                        })
                    }</View>
                <View style={styles.inputView}>
                <Text style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        color: "white"
                    }}>Restaurante:</Text>
                    <Text style={{color: "white", paddingHorizontal: 10 }}>{restaurante}</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput placeholder='Morada' style={styles.input} onChangeText={morada => setMorada(morada)} />
                </View>
                <View style={styles.containerRow}>
                    <TouchableOpacity style={styles.payButtonContainer} onPress={() => {
                        db.ref("restaurantes/" + restaurante + "/pedidos").push({
                            "Id": "cart" + morada,
                            "Pratos" : cart,
                            "Status" : "ordered",
                            "Morada" : morada

                        });
                        db.ref("Users/" + user + "/cart").set({});
                        navigation.goBack();
                    }}>
                        <Text style={styles.payButtonText}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export function CartScreen({ navigation }) {
    const [cart, setCart] = useState({});
    let user = store.getState().cartReducer.user;
    const dispatch = useDispatch();
    db.ref("Users/" + user + "/cart").once('value').then(res => { setCart(res.val()) });
    
    
    setTimeout(() => {if (cart == null) setCart({})}, 100);
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
            <TouchableOpacity style={styles.payButtonContainer} onPress={() => navigation.push("Pedido", { cart, user })}>
                <Text style={styles.payButtonText}>Pagar</Text>
            </TouchableOpacity>
        </View>

    );
}

const Stack = createStackNavigator();

export default function Cart(route) {
    return (
        <Stack.Navigator initialroute={'Carrinho'} screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'darkcyan' }, headerTintColor: 'white' }}>
            <Stack.Screen name="Carrinho" component={CartScreen} />
            <Stack.Screen name="Pedido" component={PedidoScreen} />
        </Stack.Navigator>);

}


const getImageByName = (imageName) => {
    let img = images[imageName]
    if (img != null) return img
    return images["default"]
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkcyan',
        alignItems: 'center',
        flex: 1

    },
    containerRow: {
        flexDirection: 'row'
    },
    containerColumn: {
        paddingLeft: 10,
        paddingBottom: 10,
        flexDirection: 'column'
    },
    loginContainer: {
        backgroundColor: 'darkcyan',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        borderTopWidth: 100,
        borderTopColor: 'darkcyan',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'cornsilk'
    },
    inputView: {
        borderBottomWidth: 10,
        borderBottomColor: 'darkcyan'
    },
    input: {
        backgroundColor: 'darkgray',
        padding: 15,
        borderRadius: 5,
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