import React, { useState } from 'react';
import {Restart} from 'fiction-expo-restart';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../AppCliente/Cart';
import { NavigationContainer } from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLogged } from '../../assets/cartState';
import configStore from '../../Store';
import RestauranteStack from '../AppCliente/RestauranteStack';
import HomeStack from '../AppCliente/HomeStack';
var xmasPromo = require('../../assets/xmaspromo.jpg');
var newYearPromo = require('../../assets/newYearPromo.jpg');
var imgVegifruit = require('../../assets/vegifruit.png');
var imgGreenCity = require('../../assets/greencity.png');
var imgSaladasmais = require('../../assets/saladasmais.jpg');
var imgQuichVeg = require('../../assets/quicheVegsGluten.jpg');
var imgCremeEspi = require('../../assets/cremedeespinafres.jpg');
var imgSaladaQSerra = require('../../assets/saladaqueijoserra.jpg');
var imgSandesBase = require('../../assets/sandesBase.jpg');
var imgPratoCarne = require('../../assets/pratoCarne.jpg');
var imgPratoPeixe = require('../../assets/pratoPeixe.jpg');

export const promos = {
  "Promoção de Natal": {
    "name": "Promoção de Natal",
    "descr": "Poupe 30% ou mais de 22/12 até 27/12",
    "id": 0,
    "image": xmasPromo,
  },
  "Promoção de Ano Novo": {
    "name": "Promoção de Ano Novo",
    "descr": "Poupe 30% ou mais de 30/12 até 02/01",
    "id": 1,
    "image": newYearPromo,

  }
}

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

const store = configStore();


export default function App(route) {
  return(
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}


export function Logout({navigation}) {

  Restart();
  return(<></>);
}


const Tab = createBottomTabNavigator();

function AppContent() {
  const dispatch = useDispatch();
  dispatch(setLogged(false));
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = "ios-home";
          } else if (route.name === 'Restaurantes') {
            iconName = "ios-restaurant";
          }
          else if(route.name === "Carrinho")
            iconName = "md-cart";
          else
            return <Icon1 name={"logout"} size={size} color={color} />;

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Restaurantes" component={RestauranteStack} />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Carrinho" component={Cart} />
        <Tab.Screen name="Logout" component={Logout} />
      </Tab.Navigator>
    </NavigationContainer>);
}





