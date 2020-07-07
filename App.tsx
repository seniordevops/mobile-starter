import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [value, onChangeText] = React.useState('Useless Placeholder');
  
  return (
    <View style={styles.container}>
      <Text>Application Bare Bones</Text>
      <TextInput
        style={{ height: 40, borderColor: 'grey', borderWidth: 1, width: 200, borderRadius:3, paddingLeft: 17 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />      
      <StatusBar style="auto" />
    </View>
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
