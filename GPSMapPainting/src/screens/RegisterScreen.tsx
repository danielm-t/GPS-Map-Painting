import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, TextInput,FAB } from 'react-native-paper';
import { FIREBASE_AUTH } from '../components/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function RegisterScreen<StackScreenProps>() {
    const auth = FIREBASE_AUTH;
    const [value, setValue] = React.useState({
        username:'',
        email: '',
        password: '',
        error: ''
    })
    async function signUp() {
        if (value.email === '' || value.password === '') {
          setValue({
            ...value,
            error: 'Email and password are mandatory.'
          })
          return;
        }
    
        try {
          await createUserWithEmailAndPassword(auth, value.email, value.password);
        } catch (error) {
          setValue({
            ...value,
            error: error.message,
          })
        }
      }
    
    return (
        <View>
        <LinearGradient colors={['#0E267D','white']} style={style.background}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={style.card}>
            <Text style={style.title}>GPS Map Painting</Text>
            <View style={{width:'70%', alignSelf:'center'}}>
            <TextInput
            style={style.label}
          label="Username"
          value={value.username}
          onChangeText={(text) => setValue({ ...value, username: text })}
        /><TextInput
        style={style.label}
      label="Email"
      value={value.email}
      onChangeText={(text) => setValue({ ...value, email: text })}
    />
        <TextInput
          label="Password"
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
        />
        <View style={style.image}>
            <Text style={style.text}>Insert Image</Text>
            <FAB icon="plus" onPress={() => console.log('Pressed')}/>
        </View>
            <Button style={style.register}onPress={signUp} mode="contained">
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
      marginBottom:20,
      textAlign:'center'},
      image:{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:10},
      text:{color: '#6750A4', fontSize: 17},
      card:{backgroundColor:'white',borderRadius: 20, width:'80%'},
      register:{marginTop:30, marginBottom:80},
      label:{marginBottom:30}
    
    })    
    export default RegisterScreen;
