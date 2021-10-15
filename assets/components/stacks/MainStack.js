import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from '../screens/Preload/Preload';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator 
            initialRouteName="Preload"
            screenOptions= {{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}