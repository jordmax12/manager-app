import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import {CardItem} from './common';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
  onRowTap() {
    var {employee} = this.props;
    Actions.employeeEdit({employee});
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowTap.bind(this)}>
      <View>
        <CardItem>
          <Text style={style.title}>
            {name}
          </Text>
        </CardItem>
      </View>
      </TouchableWithoutFeedback>
    );
  }
};

const style = {
  title: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;
