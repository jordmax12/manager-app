import React, {Component} from 'react';
// import {Card, CardItem, Button, Input} from './common';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import Input from './common/Input';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onLoginPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
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
          <Button onPress={this.onLoginPress.bind(this)}>
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {email, password} = state.auth
  return {
    email: email,
    password: password
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
