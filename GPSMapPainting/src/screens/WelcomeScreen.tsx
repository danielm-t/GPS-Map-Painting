import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';

function WelcomeScreen<StackScreenProps>({navigation}) {
    return (
    <View>
    <LinearGradient colors={['#0E267D','white']} style={style.background}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={style.card}>
        <Text style={style.title}>GPS Map Painting</Text>
        <View style={{width:'60%', alignSelf:'center'}}>
        <Button style={style.login}onPress={()=>{navigation.navigate('Log In')}} mode="contained">
            Log in 
        </Button>
        <Button style={style.register}onPress={()=>{navigation.navigate('Register')}} mode="contained">
            Register
        </Button>
        </View>
        </View>
    </View>
    </LinearGradient>
    </View>
    );
}

const style = StyleSheet.create({
    background: {width: '100%', height: '100%'},
    title:{color: '#6750A4',
    fontSize: 30,
    fontWeight: '600',
    marginTop:15,
    textAlign:'center'},
    card:{backgroundColor:'white',borderRadius: 20, width:'80%'},
    login:{marginTop : 80},
    register:{marginTop:40, marginBottom:80}

})

export default WelcomeScreen;