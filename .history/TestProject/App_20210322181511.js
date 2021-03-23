/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, {useState} from 'react';

import {
 SafeAreaView,
 TextInput,
 StyleSheet,
 Text,
 View,
 Image,
 Button,
 TouchableOpacity,
} from 'react-native';

// const styles = StyleSheet.create({
//   test:{
//     textAlign:'center',
//     fontSize:33
//   }
// })

// const App = () => {
//   return (
//     <SafeAreaView>
//       <Text style={styles.test}>This is a test</Text>
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  login:{
    flex:1,
    alignItems:'center',
    backgroundColor:'steelblue',
  },
  input:{
    width:270,
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

const App = () => {
  const [loginPageWidth, setLoginPageWidth] = useState('100%')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const showSignupPage = () => {
    console.log('this')
  }
  return (
    <SafeAreaView style={[styles.login, {width:loginPageWidth}]}>
      <View style={{flex:4}}>
        <Text style={{color:'white', fontSize:32, paddingTop:20}}>Logo here</Text>
        <Image></Image>
      </View>
      <View style={{flex:5}}>
      <TextInput style={styles.input} placeholder='Username or Email' onChangeText={text => {setUsername(text)}}></TextInput>
      <TextInput style={styles.input} placeholder='password' onChangeText={text =>{setPassword(text)}}></TextInput>
      <TouchableOpacity style={styles.btn} onPress={() => {loginCheck(username, password)}}>
        <Text style={{fontSize:22, color:'white', width:'100%', padding:5,textAlign:'center',}}>Login</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:0.5, flexDirection:'row'}}>
      <Text style={{color:'darkblue', fontSize:17, paddingRight:20,}} onPress={() => {showSignupPage()}}>SignUp</Text>
      <Text style={{color:'darkblue', fontSize:17}} onPress={() => {console.log('clicked FP')}}>Forgotten Password</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;