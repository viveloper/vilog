import { LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from '../../constants'

const initialState = localStorage.getItem('token')

const token = (previousState = initialState, action) => {
  if (action.type === SIGNUP_SUCCESS) {
    localStorage.setItem('token', action.token)
    return action.token
  }
  else if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.token)
    return action.token
  }
  else if (action.type === LOGOUT) {
    localStorage.removeItem('token')
    return null
  }
  else {
    return previousState
  }
}

export default token