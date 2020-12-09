import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './Home';
import restauranteMenu from './RestauranteMenu';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
function HomeStack({ navigation, route }) {
  let restaurante = '';
  let addCart;
  if(route.params)
    restaurante = route.params.restaurante;
  return (
      <Stack.Navigator initialroute={'Home'}>
        <Stack.Screen name="Home" component={home} initialParams={{ restaurante, cartContext: addCart}}/>
        <Stack.Screen name="Pratos" component={restauranteMenu} initialParams={{ restaurante, cartContext: addCart}} />
      </Stack.Navigator>
  );
}

const mapStateToProps= (state) => {
  const {cart} = state;
  return cart;
}

export default connect(mapStateToProps)(HomeStack);
