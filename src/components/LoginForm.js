import React, {Component} from 'react';
import {View, Text} from 'react-native';
// import {Card, CardItem, Button, Input} from './common';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import Input from './common/Input';
import Spinner from './common/Spinner'
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

    if(!this.props.loading)
      this.props.loginUser({email, password});
  }

  renderError() {
    if(this.props.error) {
      const {text, container} = style.error;
      return (
        <View style={container}>
          <Text style={text}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if(this.props.loading) {
      return (
          <Spinner size="small" />
      );
    }

    return (
      <Button onPress={this.onLoginPress.bind(this)}>
        Login
      </Button>
    );
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
        {this.renderError()}
        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    );
  }
}

const style = {
  error: {
    text: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    },
    container: {
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: 'white'
    }
  }
}

const mapStateToProps = state => {
  const {email, password, error, loading} = state.auth;
  return {
    email: email,
    password: password,
    error: error,
    loading: loading
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
