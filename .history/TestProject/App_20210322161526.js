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
 TouchableOpacity,
} from 'react-native';

import {
 Colors,
 DebugInstructions,
 Header,
 LearnMoreLinks,
 ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
    width:'70%',
    fontSize:22,
    borderWidth:1,
    borderRadius:30,
    paddingLeft:10,
    padding:6,
    marginBottom: 15,
    backgroundColor:'white',
  },
  btn:{
    backgroundColor:'blue',
  }
})

const App = () => {
  return (
    <SafeAreaView style={styles.login}>
      <TextInput style={styles.input} placeholder='Username or Email'></TextInput>
      <TextInput style={styles.input} placeholder='password'></TextInput>
      <TouchableOpacity style={styles.btn, borderRadius:30,}>
        <Text style={{fontSize:22, color:'white', width:270, textAlign:'center',}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


export default App;