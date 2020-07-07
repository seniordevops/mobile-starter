import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard, Platform  } from 'react-native';

export default function App() {

  const [value, onChangeText] = React.useState('Useless Placeholder');
  
  return (
    <KeyboardAvoidingView  
    style={styles.container} 
    onTouchStart={()=>{
      Keyboard.dismiss();
    }}
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      
      <Text>Application Bare Bones</Text>
      <TextInput
        style={{ height: 40, borderColor: 'grey', borderWidth: 1, width: 200, borderRadius:3, paddingLeft: 17 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />      
      <StatusBar style="auto" />
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
