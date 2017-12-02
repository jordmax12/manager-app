import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({label, placeholder, value, onChangeText, secure }) => {
  const {viewStyle, inputStyle, labelStyle} = style;
  return (
    <View style={viewStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        secureTextEntry={secure}
        autoCapitalize="none"
      />
    </View>
  );
};

const style ={
  viewStyle: {
    flexDirection: 'row',
    height: 40,
    flex: 1,
    alignItems: 'center'
  },
  inputStyle: {
    height: 20,
    lineHeight: 23,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
}

export {Input};
