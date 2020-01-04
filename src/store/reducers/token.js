import { LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from '../../constants'

const initialState = localStorage.getItem('token')

const token = (previousState = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.token)
      return action.token
    case LOGOUT:
      localStorage.removeItem('token')
      return null
    default:
      return previousState
  }
}

export default token