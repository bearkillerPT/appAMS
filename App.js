import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ClienteApp from './screens/AppCliente/AppClientes';
import RestauranteApp from './screens/AppRestaurante/AppRestaurante';
import EstafetaApp from './screens/AppEstafeta/AppEstafeta';

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
                "restaurante": "Vegifruit",
                "prato": "Salada de queijo da serra",
                "morada": "Universidade de Aveiro, DETI"
            },
            {
                "id": 2,
                "restaurante": "Saladas+",
                "prato": "Prato do dia Peixe",
                "morada": "Universidade de Aveiro, DECA"
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

const AppTab = createStackNavigator();

export default function AppContent() {
    const [user, setUser] = useState("");
    const [isLogged, setIsLogged] = useState(false);
    const [isCliente, setIsCliente] = useState(false);
    const [isRestaurante, setIsRestaurante] = useState(false);
    const [isEstafeta, setIsEstafeta] = useState(false);
    return (<>
        {isLogged &&
            <>
                {isCliente &&
                    <ClienteApp />
                }
                {isRestaurante &&
                    <RestauranteApp restaurante={users[user]} />
                }
                {isEstafeta &&
                    <EstafetaApp estafeta={users[user]} />
                }
            </>
        }
        {!isLogged &&
            <Login user={user} setUser={setUser} setIsLogged={setIsLogged} setIsCliente={setIsCliente} setIsRestaurante={setIsRestaurante} setIsEstafeta={setIsEstafeta} />
        }
    </>);
}

function Login({ navigation, setIsLogged, setIsCliente, setIsRestaurante, setIsEstafeta, user, setUser }) {
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nutrilink</Text>
            <View style={styles.loginContainer}>
                <View style={styles.inputView}>
                    <TextInput placeholder='Username' style={styles.input} onChangeText={username => setUser(username)} />
                </View>
                <View style={styles.inputView}>
                    <TextInput placeholder='Password' style={styles.input} onChangeText={pass => setPassword(pass)} secureTextEntry />
                </View>
                <TouchableOpacity style={styles.loginButtonContainer} onPress={() => {
                    for (let typeUser of Object.keys(users))
                        if (user === typeUser) {
                            switch (users[user].type) {
                                case "cliente":
                                    setIsLogged(true);
                                    setIsCliente(true);
                                    break;
                                case "restaurante":
                                    setIsLogged(true);
                                    setIsRestaurante(true);
                                    break;
                                case "estafeta":
                                    setIsLogged(true);
                                    setIsEstafeta(true);
                                    break;
                                default:
                                    break;
                            }
                        }
                }}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const goToApp = (navigation, user, password,) => {
    console.log(navigation)

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkcyan',
        alignItems: 'center',
        flex: 1

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
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    loginButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});