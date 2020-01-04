import axios from 'axios'
import { SERVER_BASE_URL } from '../constants'

export default {
  signup(firstName, lastName, email, nickname, password, confirmPassword) {
    return axios.post(`${SERVER_BASE_URL}/auth/signup`, {
      firstName,
      lastName,
      email,
      nickname,
      password,
      confirmPassword
    }).then(res => {
      return res.data
    })
  },

  login(email, password) {
    return axios.post(`${SERVER_BASE_URL}/auth/login`, {      
      email,
      password
    }).then(res => {
      return res.data
    })
  }
}