import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN, LOGOUT } from '../../constants'
import { loginApi } from '../../api'

export const loginThunk = (email, password, history) => dispath => {
  dispath({
    type: LOGIN
  })
  loginApi(email, password).then(res => {
    dispath({
      type: LOGIN_SUCCESS,
      token: res.data.token
    })
    history.push('/')
  }).catch(err => {
    console.log(err)
    dispath({
      type: LOGIN_FAILURE,
    })
  })
}

export const logout = () => ({
  type: LOGOUT
})