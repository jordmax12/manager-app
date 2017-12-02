import {
  EMPLOYEE_INPUT_UPDATE,
  EMPLOYEE_SAVE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS,
  CLEAR_EMPLOYEE_FORM
} from './types'
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_INPUT_UPDATE,
    payload: { prop, value }
  }
};

export const employeeCreate = ({name, phone, shift}) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE });
        Actions.main({type: 'reset'});
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.main({type: 'reset'});
      })
      .catch((error) => {
        console.log(error);
      })
  };
};

export const employeeFire = ({ uid }) => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
        Actions.main({type: 'reset'});
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const clearEmployeeForm = () => {
  return (dispatch) => dispatch({ type: CLEAR_EMPLOYEE_FORM })
};
