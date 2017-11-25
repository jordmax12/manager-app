import React, {Component} from 'react';
import {Text, View} from 'react-native';

const Header = (props)  =>
{
    const {viewStyle, textStyle} = style;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text>
      </View>
    );
};

const style = {
  textStyle: {
    fontSize: 20,
    color: 'deepskyblue'
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    paddingTop: 15,
    paddingBottom: 2,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5
  }
}

export default Header;
