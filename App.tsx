import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, KeyboardAvoidingView, Keyboard, Platform, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from './src/components/LoginForm';
import { deviceWidth, deviceHeight } from './src/helpers/globals';

export default function App() {

  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      onTouchStart={() => {
        Keyboard.dismiss();
      }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <LinearGradient
        colors={['#5A5AA2', '#36366F']}
        style={{ 
          flex:1 , 
          alignItems: 'center', 
          justifyContent: "center", 
          width: deviceWidth}}
        >
      <ImageBackground
        source={require('./src/components/images/watchpointBanner.png')}
        style={{
          width: deviceWidth, 
          height: deviceHeight * 0.45, 
          justifyContent: 'center',
          alignItems: 'center'
        }}
          >
            <Text style={{color:'black', fontSize: 45}}>
              OTHER BS
            </Text>
            </ImageBackground>
          <LoginForm />

        <StatusBar style="auto" />
        </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
