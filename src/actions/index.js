import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER
} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    LoginUser(dispatch);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => LoginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => LoginUserSuccess(dispatch, user))
        .catch(()=> LoginUserError(dispatch));
      });
  }
};

const LoginUser = (dispatch) => {
  dispatch({ type: LOGIN_USER })
}

const LoginUserError = (dispatch) => {
  dispatch({ type: LOGIN_USER_ERROR })
};

const LoginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
}
