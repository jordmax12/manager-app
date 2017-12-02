import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {Input, CardItem} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';

class EmployeeForm extends Component {
  onNameChange(text) {
    this.props.employeeUpdate({prop: 'name', value: text});
  }

  onPhoneChange(text) {
    this.props.employeeUpdate({prop: 'phone', value: text});
  }
  render() {
    return (
      <View>
        <CardItem>
          <Input
            label="Name"
            placeholder="John"
            value={this.props.name}
            onChangeText={this.onNameChange.bind(this)}
          />
        </CardItem>
        <CardItem>
          <Input
            label="Phone"
            placeholder="(555) 555-5555"
            value={this.props.phone}
            onChangeText={this.onPhoneChange.bind(this)}
          />
        </CardItem>
        <CardItem style={{ flexDirection: 'column' }}>
          <Text style={style.pickerLabel}> Shift </Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={(value) => this.props.employeeUpdate({prop: 'shift', value})}>
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardItem>
      </View>
    )
  }
}

const style = {
  pickerLabel: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);
