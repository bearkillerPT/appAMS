import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import home from './Home';
import restauranteMenu from './RestauranteMenu';
const Stack = createStackNavigator();
export default function HomeStack(route) {
  console.log(route)
  let restaurante = '';
  if (route.params)
    restaurante = route.params.restaurante;
  return (
      <Stack.Navigator initialroute={'Home'} >
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Pratos" component={restauranteMenu} initialParams={{ restaurante }} />
      </Stack.Navigator>


  );
}

