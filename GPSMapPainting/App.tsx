import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentComponentProps, createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent} from './src/components/DrawerContent';
import ShareScreen from './src/screens/ShareScreen';
import HomeScreen from './src/screens/HomeScreen';
import HealthScreen from './src/screens/HealthScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

function Home(){
  return (
    <HomeScreen/>
  );
}
function Health(){
  return(
    <HealthScreen/>
  )
}
function Share(){
  return (
    <ShareScreen/>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerActiveTintColor: 'black', // Set the color for non-selected items
    }}
    drawerContent={(props: DrawerContentComponentProps) => <DrawerContent {...props} />}
    >
      
      <Drawer.Screen name="Home" component={Home}options={{ title:"Home",
    drawerIcon: ({ color, size }) => (
      <Icon name="home" size={size} color={color}/>
    )
  }}/>
  <Drawer.Screen name="Health" component={Health}options={{ title:"Health",
    drawerIcon: ({ color, size }) => (
      <Icon name="heartbeat" size={size} color={color}/>
    )
  }} />
      <Drawer.Screen name="Share" component={Share}options={{ title:"Share",
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
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}