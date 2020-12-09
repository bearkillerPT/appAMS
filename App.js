import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/HomeStack';
import CartRestaurante from './screens/RestauranteCart';
import Cart from './screens/Cart';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';  
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import cartReducer from './assets/cartState';
var imgVegifruit = require('./assets/vegifruit.png');
var imgGreenCity = require('./assets/greencity.png');
var imgSaladasmais = require('./assets/saladasmais.jpg');
var imgQuichVeg = require('./assets/quicheVegsGluten.jpg');
var imgCremeEspi = require('./assets/cremedeespinafres.jpg');
var imgSaladaQSerra = require('./assets/saladaqueijoserra.jpg');
var imgSandesBase = require('./assets/sandesBase.jpg');
var imgPratoCarne = require('./assets/pratoCarne.jpg');
var imgPratoPeixe = require('./assets/pratoPeixe.jpg');


export const restaurants = {
  "Vegifruit": {
    "name": "Vegifruit",
    "id": 0,
    "PricePoint": "€",
    "Address": "Rua de São Sebastião, 122 3810 - 187 Aveiro",
    "Tags": ["Vegan", "Saladas", "Biologico"],
    "Pratos": {
      "Salada de queijo da serra": {
        "name": "Salada de queijo da serra",
        "id": 0,
        "Preço": 7,
        "Opçoes": ["Extra azeitonas"],
        "image": imgSaladaQSerra
      },
      "Quiche Vegetariana s/Glúten": {
        "name": "Quiche Vegetariana s/Glúten",
        "id": 1,
        "Preço": 6.5,
        "Opções": [],
        "image": imgQuichVeg,
      },
      "Creme de espinafres": {
        "name": "Creme de espinafres",
        "id": 2,
        "Preço": 6.5,
        "Opções": [],
        "image": imgCremeEspi,
      },

    },
    "image": imgVegifruit,
  },
  "Green City quiches & saladas, co.": {
    "name": "Green City quiches & saladas, co.",
    "id": 1,
    "PricePoint": "€",
    "Address": "R. de Castro Matoso 28 A, 3810-079 Aveiro",
    "Tags": ["Vegan", "Saladas", "Quiches", "Biologico"],
    "Pratos": {
      "Quiche especial": {
        "name": "Quiche especial",
        "id": 0,
        "Preço": 6,
        "Opçoes": ["Tamanho grande"],
        "image": imgGreenCity
      }
    },
    "image": imgGreenCity,
  },
  "Saladas+": {
    "name": "Saladas+",
    "id": 2,
    "PricePoint": "€",
    "Address": "R. de São Sebastião 31, 3810-187 Aveiro",
    "Tags": ["Vegan", "Saladas", , "Biologico"],
    "Pratos": {
      "Sandes Base": {
        "name": "Sandes Base",
        "id": 0,
        "Preço": 3.10,
        "Opçoes": ["Extra ovo"],
        "image": imgSandesBase
      },

      "Prato do dia Peixe": {
        "name": "Prato do dia Peixe",
        "id": 1,
        "Preço": 7.45,
        "Opçoes": ["Extra tempero"],
        "image": imgPratoPeixe
      },

      "Prato do dia Carne": {
        "name": "Prato do dia Carne",
        "id": 2,
        "Preço": 7.45,
        "Opçoes": ["Extra acompanhamento"],
        "image": imgPratoCarne
      }
    },
    "image": imgSaladasmais,
  },
}

const Tab = createBottomTabNavigator();
export default function App() {
  const store = createStore(cartReducer);
  console.log();
  return(
      <Provider store={store}>
      <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = "ios-home";
                } else if (route.name === 'Restaurantes') {
                  iconName = "ios-restaurant";
                }
                else iconName = "md-cart";
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
              <Tab.Screen name="Restaurantes" component={CartRestaurante} />
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Carrinho" component={Cart}/>
            </Tab.Navigator>
          </NavigationContainer>
      </Provider>
  );
}
