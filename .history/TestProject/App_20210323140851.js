/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, {useState, useEffect} from 'react';
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
  login:{
    flex:1,
    alignItems:'center',
    backgroundColor:'steelblue',
  },
  input:{
    width:'100%',
    fontSize:22,
    paddingLeft:10,
    padding:6,
    borderBottomWidth:2,
    marginBottom: 30,
  },
  btn:{
    marginTop:20,
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

const SignInScreen = ({ navigation }) => {
  const [loginPageWidth, setLoginPageWidth] = useState('100%')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={[styles.login, { width: loginPageWidth }]}>
      <View style={{ flex: 4 }}>
        <Text style={{ color: 'white', fontSize: 32, paddingTop: 20 }}>Logo here</Text>
      </View>
      <View style={{ flex: 5, width: '80%' }}>
        <View style={{flexDirection:'row',}}>
          <Icon name="user" size={30} color="#000" style={{paddingTop:8, paddingLeft:2, position:"absolute"}} />
          <TextInput
            style={[styles.input, {paddingLeft:30}]}
            placeholder='Username or Email'
            onChangeText={
              text => { setUsername(text) }
            }
          ></TextInput>
        </View>
        <View>
        <Icon name="lock" size={30} color="#000" style={{paddingTop:8, paddingLeft:2, position:"absolute"}} />
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
          style={{ color: 'white', fontSize: 17 }}
          onPress={() => { navigation.navigate('ForgottenPasswordScreen') }}>Forgotten Password</Text>
      </View>
    </SafeAreaView>
  );
}

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>
          Sign Up Screen
        </Text>
      </View>
      <Text 
        style={{color:'darkblue', fontSize:17}}
        onPress={() => {navigation.navigate('SignInScreen')}}>
        Already Registered?
      </Text>
    </SafeAreaView>
  );
}

const ForgottenPasswordScreen = ({navigation}) => {
  return (
    <View>
      <Text>Enter email or username to proceed</Text>
    </View>
  );
}

const MainScreen = ({navigation}) => {
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
          options={{title:'Sign In'}}
        />
        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
          options={{title:'Sign Up'}}
        />
        <Stack.Screen
          name='ForgottenPasswordScreen'
          component={ForgottenPasswordScreen}
          options={{title:'Forgotten Password'}}
        />
        <Stack.Screen
          name='MainScreen'
          component={MainScreen}
          options={{title:''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
