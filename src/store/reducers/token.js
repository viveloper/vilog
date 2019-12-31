import { LOGIN_SUCCESS, LOGOUT } from '../../constants'

const initialState = localStorage.getItem('token')

const token = (previousState = initialState, action) => {
  if (action.type === LOGIN_SUCCESS) {
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