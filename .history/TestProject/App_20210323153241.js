/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  login: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'steelblue',
    width: '100%',
  },
  input: {
    width: '100%',
    fontSize: 22,
    paddingLeft: 30,
    padding: 6,
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  btn: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 30,
  }
})

const loginCheck = (username, password) => {
  if (!username || !password) {
    console.log(username)
    console.log(password)
    console.log('Both fields are required')
  } else {
    //check username and pass in db
  }
}

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.login}>
      <View style={{ flex: 4 }}>
        <Text style={{ color: 'white', fontSize: 32, paddingTop: 20 }}>Logo here</Text>
      </View>
      <View style={{ flex: 5, width: '80%', }}>
        <View style={{ flexDirection: 'row', }}>
          <Icon name="user" size={30} color="#000" style={{ paddingTop: 8, paddingLeft: 2, position: "absolute" }} />
          <TextInput
            style={styles.input}
            placeholder='Username or Email'
            onChangeText={
              text => { setUsername(text) }
            }
          ></TextInput>
        </View>
        <View style={{ flexDirection: 'row', }}>
          <Icon name="lock" size={30} color="#000" style={{ paddingTop: 8, paddingLeft: 2, position: "absolute" }} />
          <TextInput
            style={styles.input}
            placeholder='password'
            onChangeText={text => {
              setPassword(text)
            }}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => { loginCheck(username, password) }}>
          <Text
            style={{ fontSize: 22, color: 'white', padding: 5, textAlign: 'center', }}
          >Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.6, flexDirection: 'row', width: '80%', justifyContent: 'space-between', }}>
        <Text
          style={{ color: 'white', fontSize: 17, paddingRight: 20, fontWeight: 'bold' }}
          onPress={() => { navigation.navigate('SignUpScreen') }}>SignUp</Text>
        <Text
          style={{ color: 'white', fontSize: 15 }}
          onPress={() => { navigation.navigate('ForgottenPasswordScreen') }}>Forgot Password?</Text>
      </View>
    </SafeAreaView>
  );
}

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'powderblue' }}>
      <View style={{ marginTop: '30%', width: '80%', }}>
        <Icon
          name="user-circle-o"
          size={30}
          color="#000"
          style={{ paddingTop: 10, paddingLeft: 0, position: "absolute" }} />
        <TextInput
          style={[styles.input, { paddingLeft: 35 }]}
          placeholder='username'
        ></TextInput>
      </View>
      <View style={{ width: '80%', }}>
        <Icon
          name="envelope"
          size={28}
          color="#000"
          style={{ paddingTop: 8, paddingLeft: 0, position: "absolute" }} />
        <TextInput
          style={[styles.input, { paddingLeft: 35 }]}
          placeholder='Email'
        ></TextInput>
      </View>
      <View style={{ width: '80%', }}>
        <Icon
          name="lock"
          size={30}
          color="#000"
          style={{ paddingTop: 8, paddingLeft: 5, position: "absolute" }} />
        <TextInput
          style={[styles.input, { paddingLeft: 35 }]}
          placeholder='password'
        ></TextInput>
      </View>
      <TouchableOpacity style={{ backgroundColor: 'green', marginTop: 30, padding: 8, borderRadius: 30 }}>
        <Text style={{ fontSize: 28 }}>Create Account</Text>
      </TouchableOpacity>
      <Text
        style={{ marginTop: '10%', fontSize: 16, textDecorationLine: 'underline' }}
        onPress={() => { navigation.navigate('SignInScreen') }}>
        Already registered?
      </Text>
    </SafeAreaView>
  );
}

const ForgottenPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'powderblue' }}>
      <View style={{ flex: 1 }}>
        <Text>Enter email or username to proceed</Text>
        <View style={{ width: '80%', }}>
        <Icon
          name="user-circle"
          size={30}
          color="#000"
          style={{ paddingTop: 8, paddingLeft: 5, position: "absolute" }} />
        <TextInput
          style={[styles.input, { paddingLeft: 35 }]}
          placeholder='username or email'
        ></TextInput>
      </View>
      <TouchableOpacity style={{ backgroundColor: 'green', marginTop: 30, padding: 8, borderRadius: 30 }}>
        <Text style={{ fontSize: 28 }}>Create Account</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const MainScreen = ({ navigation }) => {
  return (
    <View></View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SignInScreen'
          component={SignInScreen}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name='ForgottenPasswordScreen'
          component={ForgottenPasswordScreen}
          options={{ title: 'Forgotten Password' }}
        />
        <Stack.Screen
          name='MainScreen'
          component={MainScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;