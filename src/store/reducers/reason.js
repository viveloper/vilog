import {
  SIGNUP_FAILURE,
  LOGIN_FAILURE,
  CLEAR_REASON,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS
} from '../../constants'

const reason = (previousState = {}, action) => {

  switch (action.type) {
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return action.reason
    case CLEAR_REASON:
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return {}
    default:
      return previousState
  }
}

export default reason