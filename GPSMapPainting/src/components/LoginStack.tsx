import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export default function loginStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Log In" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}