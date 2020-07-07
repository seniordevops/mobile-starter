import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, KeyboardAvoidingView, Keyboard, Platform, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
export const deviceHeight = Dimensions.get("window").height;
export const deviceWidth = Dimensions.get("window").width;

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
          width: deviceWidth
        }}
        >
          <Image 
            source={require('./src/components/images/watchpointBanner.png')}
            style={{...StyleSheet.absoluteFillObject}}
        />
        <Text>Application Bare Bones</Text>
        <TextInput
          style={{ height: 40, borderColor: 'grey', borderWidth: 1, width: 200, borderRadius: 3, paddingLeft: 17 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
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
