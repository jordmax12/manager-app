import React from 'react';
import {Router, Scene, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import EmployeeCreate from './components/EmployeeCreate';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth" initial>
          <Scene key="login" component={LoginForm} title="Login" initial/>
        </Scene>

        <Scene key="main">
          <Scene
            key="dashboard"
            component={Dashboard}
            title="Dashboard"
            rightTitle="Add"
            onRight={() => { Actions.employeeCreate() }}
            leftTitle="Sign Out"
            onLeft={() => {
              firebase.auth().signOut();
              Actions.auth();
            }}
            initial
           />

          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Add Employee"
          />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
