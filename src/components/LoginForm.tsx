import React, { SFC } from "react";
import { View, Text, TextInput, Dimensions } from "react-native";
import { deviceWidth } from "../helpers/globals";


interface ILoginForm {
}

const LoginForm: SFC<ILoginForm> = () => {

    const [value, onChangeText] = React.useState('Useless Placeholder');

    return (
        <View style={{height: 459, width: deviceWidth, alignItems: 'center'}}>
            <Text style={{color: 'white'}}>
                LOGIN FORM
            </Text>
            <Text style={{color:'white', marginBottom: 30}}>Application Bare Bones</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'grey',
            borderWidth: 1,
            width: 200,
            borderRadius: 3,
            paddingLeft: 17,
            color: 'white'
          }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        </View>
    );
}
export default LoginForm;