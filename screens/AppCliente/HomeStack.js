import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import home from './Home';
import restauranteMenu from './RestauranteMenu';
const Stack = createStackNavigator();
export default function HomeStack({route}) {
  return (
      <Stack.Navigator initialroute={'Home'} screenOptions={{headerTitleAlign: 'center', headerStyle:{backgroundColor:'darkcyan'},  headerTintColor:'white'}}>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Pratos" component={restauranteMenu} />
      </Stack.Navigator>
  );
}

