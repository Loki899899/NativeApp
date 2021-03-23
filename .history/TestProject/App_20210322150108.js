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
 ScrollView,
 StatusBar,
 StyleSheet,
 Text,
 useColorScheme,
 View,
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
const App = () => {
  return (
    <View style={{display:'flex', flex:2}}>
      <View style={{
        width: 50, height: 50, backgroundColor: 'powderblue'
      }} />
      <View style={{
        width: 100, height: 100, backgroundColor: 'skyblue'
      }} />
      <View style={{
        width: 150, height: 150, backgroundColor: 'steelblue'
      }} />
    </View>
  );
};


export default App;