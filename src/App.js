import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {
  Text,
  View
} from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAOZT5sH72c7Dg7lg8E2p-7GBX71C6CUvc',
      authDomain: 'auth-6bee9.firebaseapp.com',
      databaseURL: 'https://auth-6bee9.firebaseio.com',
      projectId: 'auth-6bee9',
      storageBucket: 'auth-6bee9.appspot.com',
      messagingSenderId: '578329132439'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
        <Provider store={createStore(reducers)}>
          <View>
            <LoginForm>
            </LoginForm>
          </View>
        </Provider>
    );
  }

};

export default App;
