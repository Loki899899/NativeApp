/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

// import React, {useState} from 'react';

// import {
//  SafeAreaView,
//  TextInput,
//  StyleSheet,
//  Text,
//  View,
//  Animated,
//  Image,
//  Button,
//  TouchableOpacity,
// } from 'react-native';


// const styles = StyleSheet.create({
//   login:{
//     flex:1,
//     alignItems:'center',
//     backgroundColor:'steelblue',
//   },
//   input:{
//     width:'100%',
//     fontSize:22,
//     borderWidth:2,
//     borderRadius:30,
//     paddingLeft:10,
//     padding:6,
//     marginBottom: 30,
//     backgroundColor:'white',
//   },
//   btn:{
//     backgroundColor:'blue',
//     borderRadius:30,
//   }
// })

// const loginCheck = (username, password) => {
//   if(!username || !password) {
//     console.log(username)
//     console.log(password)
//     console.log('Both fields are required')
//   } else {
//     //check username and pass in db
//   }
// }

// const App = () => {
//   const [loginPageWidth, setLoginPageWidth] = useState('100%')
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const showSignupPage = () => {
    
//   }
//   return (
//     <SafeAreaView style={[styles.login, {width:loginPageWidth}]}>
//       <View style={{flex:4}}>
//         <Text style={{color:'white', fontSize:32, paddingTop:20}}>Logo here</Text>
//         <Image></Image>
//       </View>
//       <View style={{flex:5, width:'70%'}}>
//       <TextInput style={styles.input} placeholder='Username or Email' onChangeText={text => {setUsername(text)}}></TextInput>
//       <TextInput style={styles.input} placeholder='password' onChangeText={text =>{setPassword(text)}}></TextInput>
//       <TouchableOpacity style={styles.btn} onPress={() => {loginCheck(username, password)}}>
//         <Text style={{fontSize:22, color:'white', width:'100%', padding:5,textAlign:'center',}}>Login</Text>
//       </TouchableOpacity>
//       </View>
//       <View style={{flex:0.5, flexDirection:'row'}}>
//       <Text style={{color:'darkblue', fontSize:17, paddingRight:20,}} onPress={() => {showSignupPage()}}>SignUp</Text>
//       <Text style={{color:'darkblue', fontSize:17}} onPress={() => {console.log('clicked FP')}}>Forgotten Password</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

//========================================================================================
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  _onLongPressButton() {
    alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});