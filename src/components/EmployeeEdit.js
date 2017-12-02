import _ from 'lodash';
import React, {Component} from 'react';
import {Card, CardItem, Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {connect} from 'react-redux';
import { employeeUpdate, employeeSave, employeeFire } from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }

  onSavePress() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  onTextPress() {
    const {phone, shift} = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onFirePress() {
    //request user to make sure they want to fire employee
    this.setState({ showModal: !this.state.showModal });
  }

  onAccept() {
    this.props.employeeFire({uid: this.props.employee.uid});
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardItem>
          <Button onPress={this.onSavePress.bind(this)}>
            Save Changes
          </Button>
        </CardItem>
        <CardItem>
          <Button onPress={this.onTextPress.bind(this)}>
            Text
          </Button>
        </CardItem>
        <CardItem>
          <Button onPress={this.onFirePress.bind(this)}>
            Fire This MuhFucka
          </Button>
        </CardItem>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this muhfucka?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeFire })(EmployeeEdit);
