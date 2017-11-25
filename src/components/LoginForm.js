import React, {Component} from 'react';
// import {Card, CardItem, Button, Input} from './common';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import Input from './common/Input';
import {emailChanged, passwordChanged} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            placeholder = "name@domain.com"
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardItem>
        <CardItem>
          <Input
            secure
            placeholder = "password123"
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardItem>
        <CardItem>
          <Button>
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    email: state.auth.email,
    password: state.auth.password
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
