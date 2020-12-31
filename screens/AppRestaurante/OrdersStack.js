import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from './Orders';
const Stack = createStackNavigator();
export default function PratosStack({route}) {
    let restaurante = '';
    if (route.params)
        restaurante = route.params.restaurante;

    return (
        <Stack.Navigator initialroute={'Orders'} screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'darkcyan' }, headerTintColor: 'white' }}>
            <Stack.Screen name="Pedidos" component={Orders} initialParams={restaurante = { restaurante }} />
        </Stack.Navigator>


    );
}

