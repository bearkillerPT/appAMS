import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pratos from './Pratos';
const Stack = createStackNavigator();
export default function PratosStack({route}) {
    let restaurante = '';
    if (route.params)
        restaurante = route.params.restaurante;

    return (
        <Stack.Navigator initialroute={'Pratos'} screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'darkcyan' }, headerTintColor: 'white' }}>
            <Stack.Screen name="Pratos" component={Pratos} initialParams={restaurante = { restaurante }} />
        </Stack.Navigator>


    );
}

