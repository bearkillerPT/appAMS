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
import {store} from '../../App';
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


export function Logout({navigation}) {

  Restart();
  return(<></>);
}


const Tab = createBottomTabNavigator();

export default function AppContent() {
  const dispatch = useDispatch();
  dispatch(setLogged(false));
  
  let logged = store.getState();
  let user = logged.cartReducer.user; 
  console.log(user)
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





