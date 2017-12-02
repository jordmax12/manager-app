import React, { Component } from 'react';
import {Card, CardItem, Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate, clearEmployeeForm} from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.clearEmployeeForm();
  }
  onSavePress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardItem>
          <Button onPress={this.onSavePress.bind(this)}>
            Finish
          </Button>
        </CardItem>
      </Card>
    );
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
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate,
  clearEmployeeForm
})(EmployeeCreate);
