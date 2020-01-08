import { SIGNUP_SUCCESS, LOGIN_SUCCESS, LOGOUT } from '../../constants'

const initialState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const user = (previousState = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.user))
      return action.user
    case LOGOUT:
      localStorage.removeItem('user')
      return null
    default:
      return previousState
  }
}

export default user