import 'react-native-gesture-handler'
import * as React from 'react';
import UserStack from './src/components/userStack';
import LoginStack from './src/components/LoginStack';
import { useAuth } from './src/components/FirebaseConfig';

export default function App() {
  const user = useAuth();
  return user ? (<UserStack />) : (<LoginStack />);
}