import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, TextInput } from 'react-native-paper';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from '../components/FirebaseConfig';


function LoginScreen<StackScreenProps>({ navigation }) {
  const auth = FIREBASE_AUTH;
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });
  async function LogIn(){
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
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
      label="Email"
      value={value.email}
      onChangeText={(text) => setValue({ ...value, email: text })}
    />
    <TextInput
      label="Password"
      value={value.password}
      onChangeText={(text) => setValue({ ...value, password: text })}
    />
        <Button style={style.register}onPress={LogIn} mode="contained">
            Log In
        </Button>
        <Text style={style.title}>{value.error}</Text>
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
  card:{backgroundColor:'white',borderRadius: 20, width:'80%'},
  login:{marginTop : 80},
  register:{marginTop:40, marginBottom:80},
  label:{marginBottom:30}

})

export default LoginScreen;