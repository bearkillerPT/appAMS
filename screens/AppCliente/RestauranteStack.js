import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import restauranteMenu from './RestauranteMenu';
import restaurantes from './Restaurantes';



const Stack = createStackNavigator();
export default function RestauranteStack(route) {
  let restaurante = '';
  console.log(route)
  if(route.params)
    restaurante = route.params.restaurante;
  return (
      <Stack.Navigator initialroute={'Restaurantes'} screenOptions={{headerTitleAlign: 'center' , headerStyle:{backgroundColor:'darkcyan'}, headerTintColor:'white'}} >
        <Stack.Screen name="Restaurantes" component={restaurantes} />
        <Stack.Screen name="Pratos" component={restauranteMenu}  initialParams={{restaurante: restaurante}}/>
      </Stack.Navigator>
      
  );
}




const styles = StyleSheet.create({
  image: {
    height: 300,
  },
});