import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../constants'

const loading = (previousState = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return false
    default:
      return previousState
  }
}

export default loading