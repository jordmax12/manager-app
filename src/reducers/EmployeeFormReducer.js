import {
  EMPLOYEE_INPUT_UPDATE,
  EMPLOYEE_SAVE,
  EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMPLOYEE_INPUT_UPDATE:
      //action.payload = { prop: 'name', value: 'john' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_SAVE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
