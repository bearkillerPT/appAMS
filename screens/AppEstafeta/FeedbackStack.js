import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feedback from './Feedback';
const Stack = createStackNavigator();
export default function PratosStack({route}) {
    let estafeta = '';
    if (route.params)
        estafeta = route.params.estafeta;

    return (
        <Stack.Navigator initialroute={'Feedback'} screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: 'darkcyan' }, headerTintColor: 'white' }}>
            <Stack.Screen name="Feedback" component={Feedback} initialParams={estafeta} />
        </Stack.Navigator>


    );
}

