import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../../constants';

const initialState = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {};

const user = (previousState = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return action.user;
    case LOGOUT:
      return initialState;
    default:
      return previousState;
  }
};

export default user;
