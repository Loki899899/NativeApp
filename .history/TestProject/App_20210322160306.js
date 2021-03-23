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
 ScrollView,
 StatusBar,
 StyleSheet,
 Text,
 useColorScheme,
 View,
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
    padding:6,
    marginBottom: 15,
  },
  btn:{
    width:'100px',
  }
})

const App = () => {
  return (
    <SafeAreaView style={styles.login}>
      <TextInput style={styles.input} placeholder='Username or Email'></TextInput>
      <TextInput style={styles.input} placeholder='password'></TextInput>
      <TouchableOpacity></TouchableOpacity>
    </SafeAreaView>
  );
};


export default App;