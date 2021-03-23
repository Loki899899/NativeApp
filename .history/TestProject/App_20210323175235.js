/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { useState, useEffect } from 'react'
import 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

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

const Tab = createBottomTabNavigator()

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

const loginCheck = (username, password, navigation) => {
  if (!username || !password) {
    console.log(username)
    console.log(password)
    console.log('Both fields are required')
  } else {
    navigation.navigate('MainScreen')
  }
}

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.login}>
      <View style={{ flex: 2, }}>
        <Text style={{ color: 'white', fontSize: 32, paddingTop: 20 }}>Logo here</Text>
      </View>
      <View style={{ flex: 3, width: '80%', }}>
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
          onPress={() => { loginCheck(username, password, navigation) }}>
          <Text
            style={{ fontSize: 22, color: 'white', padding: 5, textAlign: 'center', }}
          >Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 0.4, flexDirection: 'row', width: '80%', justifyContent: 'space-between', }}>
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
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ marginTop: 30, marginBottom: 20, fontSize: 18 }}>Enter email or username to proceed</Text>
        <View style={{ width: '70%', }}>
          <Icon
            name="user-circle"
            size={30}
            color="#000"
            style={{ paddingTop: 8, paddingLeft: 0, position: "absolute" }} />
          <TextInput
            style={[styles.input, { paddingLeft: 35 }]}
            placeholder='username or email'
          ></TextInput>
          <TouchableOpacity style={{ backgroundColor: 'green', marginTop: 30, padding: 8, borderRadius: 30 }}>
            <Text style={{ fontSize: 28, textAlign: 'center' }}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// const TabOneComponent = ({navigation}) => {
//   return (
//     <SafeAreaView>
//     <Text>Tab 1</Text>
//   </SafeAreaView>
//   );
// }

// const TabTwoComponent = ({navigation}) => {
//   return (
//     <SafeAreaView>
//       <Text>Tab 2</Text>
//     </SafeAreaView>
//   );
// }

// const NextScreenTopTab = createMaterialTopTabNavigator()

// const NextScreen = () => {
//   return (
//     // <NextScreenTopTab.Navigator>
//     //   <NextScreenTopTab.Screen
//     //     name='TabOne'
//     //     component={TabOneComponent}
//     //   />
//     //   <NextScreenTopTab.Screen
//     //     name='TabTwo'
//     //     component={TabTwoComponent}
//     //   />
//     // </NextScreenTopTab.Navigator>
//     <Text>abc</Text>
//   );
// }

//===========================================================================================
function TabOne() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function TabTwo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TabNav = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNav.Navigator>
        <TabNav.Screen name="tabone" component={TabOne} />
        <TabNav.Screen name="tabtwo" component={TabTwo} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

//===========================================================================================
const HomeStack = createStackNavigator()

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
      />
      <HomeStack.Screen
        name='NextScreen'
        component={NextScreen}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator()

const SettingsStackScreen = ({ navigation }) => {
  return (<SettingsStack.Navigator>
    <SettingsStack.Screen
      name='Settings'
      component={SettingsScreen}
    />
    <SettingsStack.Screen
      name='NextScreen'
      component={NextScreen}
    />
  </SettingsStack.Navigator>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }} onPress={() => { navigation.navigate('NextScreen') }}>Click</Text>
    </SafeAreaView>
  );
}

const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }} onPress={() => { navigation.navigate('NextScreen') }}>Click Me</Text>
    </SafeAreaView>
  );
}

const MainScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='HomeStackScreen'
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='gears' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
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
          options={{ title: 'App' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;