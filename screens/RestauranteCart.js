import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import restauranteMenu from './RestauranteMenu';
import restaurantes from './Restaurantes';



const Stack = createStackNavigator();
export default function Cart({ navigation, route }) {
  return (
      <Stack.Navigator initialroute={'Restaurantes'}>
        <Stack.Screen name="Restaurantes" component={restaurantes} />
        <Stack.Screen name="Pratos" component={restauranteMenu}  initialParams={{cartContext: route.params.cart}}/>
      </Stack.Navigator>
  );
}




const styles = StyleSheet.create({
  image: {
    height: 300,
  },
});