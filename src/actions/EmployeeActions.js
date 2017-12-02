import {
  EMPLOYEE_INPUT_UPDATE,
  EMPLOYEE_SAVE,
  EMPLOYEES_FETCH_SUCCESS
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
