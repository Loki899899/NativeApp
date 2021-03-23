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
 Animated,
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

class Tester extends React.Component<$FlowFixMeProps, $FlowFixMeState> {
  state = {
    native: new Animated.Value(0),
    js: new Animated.Value(0),
  };

  current = 0;

  onPress = () => {
    const animConfig =
      this.current && this.props.reverseConfig
        ? this.props.reverseConfig
        : this.props.config;
    this.current = this.current ? 0 : 1;
    const config: Object = {
      ...animConfig,
      toValue: this.current,
    };

    Animated[this.props.type](this.state.native, {
      ...config,
      useNativeDriver: true,
    }).start();
    Animated[this.props.type](this.state.js, {
      ...config,
      useNativeDriver: false,
    }).start();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View>
          <View>
            <Text>Native:</Text>
          </View>
          <View style={styles.row}>
            {this.props.children(this.state.native)}
          </View>
          <View>
            <Text>JavaScript:</Text>
          </View>
          <View style={styles.row}>{this.props.children(this.state.js)}</View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

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

const App = () => {
  const [loginPageWidth, setLoginPageWidth] = useState('100%')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const showSignupPage = () => {
    console.log('this')
  }
  return (
    // <SafeAreaView style={[styles.login, {width:loginPageWidth}]}>
    //   <View style={{flex:4}}>
    //     <Text style={{color:'white', fontSize:32, paddingTop:20}}>Logo here</Text>
    //     <Image></Image>
    //   </View>
    //   <View style={{flex:5, width:'70%'}}>
    //   <TextInput style={styles.input} placeholder='Username or Email' onChangeText={text => {setUsername(text)}}></TextInput>
    //   <TextInput style={styles.input} placeholder='password' onChangeText={text =>{setPassword(text)}}></TextInput>
    //   <TouchableOpacity style={styles.btn} onPress={() => {loginCheck(username, password)}}>
    //     <Text style={{fontSize:22, color:'white', width:'100%', padding:5,textAlign:'center',}}>Login</Text>
    //   </TouchableOpacity>
    //   </View>
    //   <View style={{flex:0.5, flexDirection:'row'}}>
    //   <Text style={{color:'darkblue', fontSize:17, paddingRight:20,}} onPress={() => {showSignupPage()}}>SignUp</Text>
    //   <Text style={{color:'darkblue', fontSize:17}} onPress={() => {console.log('clicked FP')}}>Forgotten Password</Text>
    //   </View>
    // </SafeAreaView>
      <Tester type="spring" config={{bounciness: 0}}>
        {anim => (
          <Animated.View
            style={[
              styles.block,
              {
                transform: [
                  {
                    translateX: anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 100],
                    }),
                  },
                ],
              },
            ]}
          />
        )}
      </Tester>
  );
};

export default App;