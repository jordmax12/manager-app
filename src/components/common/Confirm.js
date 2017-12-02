import React from 'react';
import { Text, View, Modal } from 'react-native';
import {CardItem} from './CardItem';
import {Button} from './Button';

const Confirm = ({children, visible, onAccept, onDecline}) => {

  const {cardItem, text, container} = style;
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {  }}
    >
      <View style={container}>
        <CardItem style={cardItem}>
          <Text style={text}>
            {children}
          </Text>
        </CardItem>
        <CardItem>
            <Button onPress={onAccept}> Yes </Button>
            <Button onPress={onDecline}> No </Button>
        </CardItem>
      </View>
    </Modal>
  )
};

const style = {
  cardItem: {
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  container: {
    backgroundColor: 'rgba(0,0,0,.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export {Confirm};
