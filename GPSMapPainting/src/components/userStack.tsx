import {DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import HealthScreen from '../screens/HealthScreen';
import ShareScreen from '../screens/ShareScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
export default function userStack() {
    
    return (
        <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: 'black',
      }}
      drawerContent={(props: DrawerContentComponentProps) => <DrawerContent {...props} />}
      >
        
        <Drawer.Screen name="Home" component={HomeScreen}options={{ title:"Home",
      drawerIcon: ({ color, size }) => (
        <Icon name="home" size={size} color={color}/>
      )
    }}/>
    <Drawer.Screen name="Health" component={HealthScreen}options={{ title:"Health",
      drawerIcon: ({ color, size }) => (
        <Icon name="heartbeat" size={size} color={color}/>
      )
    }} />
        <Drawer.Screen name="Share" component={ShareScreen}options={{ title:"Share",
      drawerIcon: ({ color, size }) => (
        <Icon name="share-alt" size={size} color={color}/>
      )
    }} />
      <Drawer.Screen name="Profile" component={ProfileScreen}options={{ title:"Profile",
      drawerIcon: ({ color, size }) => (
        <Icon name="child" size={size} color={color}/>
      )
    }} />
      </Drawer.Navigator>
      </NavigationContainer>
    );
  }