import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import RestaurantDishes from './PratosStack';
import OrdersStack from './OrdersStack';
import {Restart} from 'fiction-expo-restart';
import {db} from '../../App';
import { setLogged } from '../../assets/cartState';
import { useDispatch } from 'react-redux';
var imgVegifruit = require('../../assets/vegifruit.png');
var imgGreenCity = require('../../assets/greencity.png');
var imgSaladasmais = require('../../assets/saladasmais.jpg');
var imgQuichVeg = require('../../assets/quicheVegsGluten.jpg');
var imgCremeEspi = require('../../assets/cremedeespinafres.jpg');
var imgSaladaQSerra = require('../../assets/saladaqueijoserra.jpg');
var imgSandesBase = require('../../assets/sandesBase.jpg');
var imgPratoCarne = require('../../assets/pratoCarne.jpg');
var imgPratoPeixe = require('../../assets/pratoPeixe.jpg');


const Tab = createBottomTabNavigator();

export default function App() {
  const dispatch = useDispatch();
  dispatch(setLogged(false));
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName='Restaurante' screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Restaurante') {
            return <Icon name={"ios-restaurant"} size={size} color={color} />;
          }
          else if (route.name === "Pedidos")
            return <Icon1 name={"food"} size={size} color={color} />;
          else 
            return <Icon1 name={"logout"} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Restaurante" component={RestaurantDishes}/>
        <Tab.Screen name="Pedidos" component={OrdersStack}/>
        <Tab.Screen name="Logout" component={Logout}/>
      </Tab.Navigator>
    </NavigationContainer>);
}


export function Logout({navigation}) {

  Restart();
  return(<></>);
}




