import React, { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ClienteApp from './screens/AppCliente/AppClientes';
import RestauranteApp from './screens/AppRestaurante/AppRestaurante';
import { setLogged, setUser } from './assets/cartState';
import EstafetaApp from './screens/AppEstafeta/AppEstafeta';
import { Provider } from 'react-redux';
import configStore from './Store';
import { useDispatch } from 'react-redux';
import { database } from 'firebase/app';
var firebase = require('firebase/app');
require('firebase/database');
var xmasPromo = require('./assets/xmaspromo.jpg');
var newYearPromo = require('./assets/newYearPromo.jpg');
var imgVegifruit = require('./assets/vegifruit.png');
var imgGreenCity = require('./assets/greencity.png');
var imgSaladasmais = require('./assets/saladasmais.jpg');
var imgQuichVeg = require('./assets/quicheVegsGluten.jpg');
var imgCremeEspi = require('./assets/cremedeespinafres.jpg');
var imgSaladaQSerra = require('./assets/saladaqueijoserra.jpg');
var imgSandesBase = require('./assets/sandesBase.jpg');
var imgPratoCarne = require('./assets/pratoCarne.jpg');
var imgPratoPeixe = require('./assets/pratoPeixe.jpg');
var favicon = require('./assets/favicon.png');
export const images = {
    "xmasPromo": xmasPromo,
    "newYearPromo": newYearPromo,
    "imgVegifruit": imgVegifruit,
    "imgGreenCity": imgGreenCity,
    "imgSaladasmais": imgSaladasmais,
    "imgQuichVeg": imgQuichVeg,
    "imgCremeEspi": imgCremeEspi,
    "imgSaladaQSerra": imgSaladaQSerra,
    "imgSandesBase": imgSandesBase,
    "imgPratoCarne": imgPratoCarne,
    "imgPratoPeixe": imgPratoPeixe,
    "default": favicon
}

const users = {
    "cliente": {
        "type": "cliente",
        "password": "cliente",
    },
    "restaurante": {
        "type": "restaurante",
        "password": "restaurante",
        "restaurante": "Vegifruit"
    },
    "estafeta": {
        "type": "estafeta",
        "password": "estafeta",
        "feedback": [
            {
                "id": 1,
                "restaurante": "Vegifruit",
                "rating": 5
            },
            {
                "id": 2,
                "restaurante": "Saladas+",
                "rating": 4
            },
            {
                "id": 3,
                "restaurante": "Green City quiches & saladas, co.",
                "rating": 4
            },
        ],
        "pedidos": [
            {
                "id": 1,
                "restaurante": "Saladas+",
                "prato": "Prato do dia Peixe",
                "morada": "Universidade de Aveiro, DECA"
            },

            {
                "id": 2,
                "restaurante": "Vegifruit",
                "prato": "Salada de queijo da serra",
                "morada": "Universidade de Aveiro, DETI"
            },
            {
                "id": 3,
                "restaurante": "Green City quiches & saladas, co.",
                "prato": "Quiche especial",
                "morada": "Universidade de Aveiro, CP"
            },
        ]
    },
}
export const store = configStore();

var firebaseConfig = {
    apiKey: "AIzaSyDNVW5qZxXnfqYfnNUvpFUH9dAeQfRmHu4",
    authDomain: "appams-f22a3.firebaseapp.com",
    projectId: "appams-f22a3",
    storageBucket: "appams-f22a3.appspot.com",
    databaseURL: "https://appams-f22a3-default-rtdb.firebaseio.com/",
    messagingSenderId: "184182571952",
    appId: "1:184182571952:web:576eed43083fbf07fc8c75",
    measurementId: "G-CHN6Z9P409"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
export default function AppWraper(route) {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
}



const AppTab = createStackNavigator();

function AppContent() {
    const [isCliente, setIsCliente] = useState(false);
    const [isRestaurante, setIsRestaurante] = useState(false);
    const [isEstafeta, setIsEstafeta] = useState(false);
    let logged = store.getState();
    let user = logged.cartReducer.user;
    logged = logged.cartReducer.isLogged;
    return (<>
        {logged &&
            <>
                {isCliente &&
                    <ClienteApp setIsLogged />
                }
                {isRestaurante &&
                    <RestauranteApp restaurante={users[user]} setIsLogged />
                }
                {isEstafeta &&
                    <EstafetaApp estafeta={users[user]} setIsLogged />
                }
            </>
        }
        {!logged &&
            <Login user={user} setUser={setUser} setIsCliente={setIsCliente} setIsRestaurante={setIsRestaurante} setIsEstafeta={setIsEstafeta} />
        }
    </>);
}

function Login({ navigation, setIsLogged, setIsCliente, setIsRestaurante, setIsEstafeta, user, setUser }) {
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        firebase.database().ref("Users").once('value').then(res => setUsers(res.val()));
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nutrilink</Text>
            <View style={styles.loginContainer}>
                <View style={styles.inputView}>
                    <TextInput placeholder='Username' style={styles.input} onChangeText={username => dispatch(setUser(username))} />
                </View>
                <View style={styles.inputView}>
                    <TextInput placeholder='Password' style={styles.input} onChangeText={pass => setPassword(pass)} secureTextEntry />
                </View>
                <View style={styles.containerRow}>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={() => {

                        let logged = store.getState();
                        let user = logged.cartReducer.user;
                        console.log(user)
                        firebase.database().ref("Users").once('value').then(res => setUsers(res.val()));
                        console.log(users);
                        for (let typeUser of Object.keys(users))
                            if (user === typeUser) {
                                switch (users[user].type) {
                                    case "cliente":
                                        dispatch(setLogged(true));
                                        setIsCliente(true);
                                        break;
                                    case "restaurante":
                                        dispatch(setLogged(true));
                                        setIsRestaurante(true);
                                        setUser(users[user].restaurante);
                                        break;
                                    case "estafeta":
                                        dispatch(setLogged(true));
                                        setIsEstafeta(true);
                                        break;
                                    default:
                                        break;
                                }
                            }
                    }}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButtonContainer}>
                        <Text style={styles.loginButtonText}>Registar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkcyan',
        alignItems: 'center',
        flex: 1

    },
    containerRow: {
        paddingTop: 20,
        flexDirection: 'row'
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
    loginButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 28,
        paddingVertical: 15,
        paddingHorizontal: 25,

    },
    loginButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});