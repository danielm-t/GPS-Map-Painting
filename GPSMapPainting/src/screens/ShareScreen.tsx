import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ShareScreen() {
  return (
    <View style={{marginTop:10,justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'black',fontSize:20, margin:30}}>If you have enjoyed the app share it with your friends.</Text>
      <Image source={require('../images/mock_icon.png')}></Image>
    </View>
  );
}
