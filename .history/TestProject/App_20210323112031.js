/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, {useState} from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
 SafeAreaView,
 TextInput,
 StyleSheet,
 Text,
 View,
 Animated,
 Image,
 Button,
 TouchableOpacity,
} from 'react-native';

const Stack = createStackNavigator()

const styles = StyleSheet.create({
  login:{
    flex:1,
    alignItems:'center',
    backgroundColor:'steelblue',
  },
  input:{
    width:'100%',
    fontSize:22,
    borderWidth:2,
    borderRadius:30,
    paddingLeft:10,
    padding:6,
    marginBottom: 30,
    backgroundColor:'white',
  },
  btn:{
    backgroundColor:'blue',
    borderRadius:30,
  }
})

const loginCheck = (username, password) => {
  if(!username || !password) {
    console.log(username)
    console.log(password)
    console.log('Both fields are required')
  } else {
    //check username and pass in db
  }
}

const SignInScreen = ({navigation}) => {
  const [loginPageWidth, setLoginPageWidth] = useState('100%')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const showSignupPage = (navigator) => {
  }
  return (
    <SafeAreaView style={[styles.login, {width:loginPageWidth}]}>
    <View style={{flex:4}}>
      <Text style={{color:'white', fontSize:32, paddingTop:20}}>Logo here</Text>
      <Image></Image>
    </View>
    <View style={{flex:5, width:'70%'}}>
    <TextInput style={styles.input} placeholder='Username or Email' onChangeText={text => {setUsername(text)}}></TextInput>
    <TextInput style={styles.input} placeholder='password' onChangeText={text =>{setPassword(text)}}></TextInput>
    <TouchableOpacity style={styles.btn} onPress={() => {loginCheck(username, password)}}>
      <Text style={{fontSize:22, color:'white', width:'100%', padding:5,textAlign:'center',}}>Login</Text>
    </TouchableOpacity>
    </View>
    <View style={{flex:0.5, flexDirection:'row'}}>
    <Text style={{color:'darkblue', fontSize:17, paddingRight:20,}} onPress={() => {navigation.navigate('Sign Up')}}>SignUp</Text>
    <Text style={{color:'darkblue', fontSize:17}} onPress={() => {console.log('clicked FP')}}>Forgotten Password</Text>
    </View>
  </SafeAreaView>
  );
}

const SignUpScreen = (navigation) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Sign Up Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Sign In'
          component={SignInScreen}
        />
      </Stack.Navigator>
        <Stack.Screen
          name='Sign Up'
          component={SignUpScreen}
        />
    </NavigationContainer>
  );
};

export default App;
