/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React from 'react';

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

const App = () => {
  let value = '2'
  return (
    <SafeAreaView style={styles.login}>
      <View style={{flex:4}}>
        <Text style={{color:'white', fontSize:32, paddingTop:20}}>Logo here</Text>
        <Image></Image>
      </View>
      <View style={{flex:5}}>
      <TextInput style={styles.input} placeholder='Username or Email'></TextInput>
      <TextInput style={styles.input} placeholder='password'></TextInput>
      <TouchableOpacity>
        <Text style={{fontSize:22, color:'white', width:270, padding:5,textAlign:'center',}}>Login</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex:0.5, flexDirection:'row'}}>
        <TouchableOpacity>
          <Text onPress={() => {value='3'}}>{value}value</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;