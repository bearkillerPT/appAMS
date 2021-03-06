import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from './Orders';
const Stack = createStackNavigator();
export default function PratosStack({route}) {

    return (
        <Stack.Navigator initialroute={'Orders'} screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'darkcyan' }, headerTintColor: 'white' }}>
            <Stack.Screen name="Pedidos" component={Orders} />
        </Stack.Navigator>


    );
}

