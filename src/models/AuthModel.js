import axios from 'axios'
import { SERVER_BASE_URL } from '../constants'

export default {
  signup(firstName, lastName, email, password) {
    return axios.post(`${SERVER_BASE_URL}/auth/signup`, {
      firstName,
      lastName,
      email,
      password
    }).then(res => {
      return res.data
    }).catch(error => {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        alert(error.response.data.message)
      }
      else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
        // Node.js의 http.ClientRequest 인스턴스입니다.
        console.log(error.request);
      }
      else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log('Error', error.message);
      }
      console.log(error.config);
      throw error;
    })
  },

  login(email, password) {
    return axios.post(`${SERVER_BASE_URL}/auth/login`, {      
      email,
      password
    }).then(res => {
      return res.data
    }).catch(error => {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);        
      }      
      throw error;
    })
  }
}