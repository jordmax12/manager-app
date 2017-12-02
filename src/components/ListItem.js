import React, { Component } from 'react';
import { Text } from 'react-native';
import CardItem from './common/CardItem';

class ListItem extends Component {
  render() {
    const { name } = this.props.employee;
    return (
      <CardItem>
        <Text style={style.title}>
          {name}
        </Text>
      </CardItem>
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
