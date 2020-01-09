import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN, LOGOUT,
  FETCH_SECTIONS,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
  SET_SECTION,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  CLEAR_REASON,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
} from '../../constants'
import AuthModel from '../../models/AuthModel'
import SectionModel from '../../models/SectionModel'
import PostModel from '../../models/PostModel'

import auth from '../../auth';

export const signUpThunk = (firstName, lastName, email, nickname, password, confirmPassword, history) => dispatch => {
  dispatch({ type: SIGNUP })
  AuthModel.signup(firstName, lastName, email, nickname, password, confirmPassword).then(data => {
    dispatch({
      type: SIGNUP_SUCCESS,
      token: data.token,
      user: data.user
    })
    history.push('/')
  }).catch(error => {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data)
      dispatch({
        type: SIGNUP_FAILURE,
        reason: error.response.data
      })
    }
    else {
      console.log(error.message)
      dispatch({
        type: SIGNUP_FAILURE,
        reason: { general: error.message }
      })
    }
  })
}

export const loginThunk = (email, password, history) => dispatch => {
  dispatch({ type: LOGIN })
  auth.login(email, password).then(data => {
    dispatch({
      type: LOGIN_SUCCESS,
      token: data.token,
      user: data.user
    })
    history.push('/')
  }).catch(error => {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data)
      dispatch({
        type: LOGIN_FAILURE,
        reason: error.response.data
      })
    }
    else {
      console.log(error.message)
      dispatch({
        type: LOGIN_FAILURE,
        reason: { general: error.message }
      })
    }
  })
  // AuthModel.login(email, password).then(data => {
  //   dispatch({
  //     type: LOGIN_SUCCESS,
  //     token: data.token,
  //     user: data.user
  //   })
  //   history.push('/')
  // }).catch(error => {
  //   if (error.response) {
  //     // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
  //     console.log(error.response.data)
  //     dispatch({
  //       type: LOGIN_FAILURE,
  //       reason: error.response.data
  //     })
  //   }
  //   else {
  //     console.log(error.message)
  //     dispatch({
  //       type: LOGIN_FAILURE,
  //       reason: { general: error.message }
  //     })
  //   }
  // })
}

export const logout = () => {
  return { type: LOGOUT }
}

export const fetchSectionsThunk = () => dispatch => {
  dispatch({ type: FETCH_SECTIONS })
  SectionModel.fetchSections().then(data => {
    dispatch({
      type: FETCH_SECTIONS_SUCCESS,
      sections: data.sections
    })
  }).catch(error => {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data)
    }
    else {
      console.log(error.message)
    }
    dispatch({ type: FETCH_SECTIONS_FAILURE })
  })
}

export const setSection = section => ({
  type: SET_SECTION,
  section
})

export const fetchPostsThunk = section => dispatch => {
  dispatch({ type: FETCH_POSTS })
  PostModel.fetchPosts(section).then(data => {
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      posts: data.posts
    })
  }).catch(error => {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data)
    }
    else {
      console.log(error.message)
    }
    dispatch({ type: FETCH_POSTS_FAILURE })
  })
}

export const fetchPostThunk = (section, id) => dispatch => {
  dispatch({ type: FETCH_POST })
  PostModel.fetchPost(section, id).then(data => {
    dispatch({
      type: FETCH_POST_SUCCESS,
      post: data.post
    })
  }).catch(error => {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data)
    }
    else {
      console.log(error.message)
    }
    dispatch({ type: FETCH_POST_FAILURE })
  })
}

export const addPostThunk = (title, content, author, image, section) => dispatch => {
  dispatch({type: ADD_POST})
  PostModel.addPost(title, content, author, image, section).then(data => {
    dispatch({type: ADD_POST_SUCCESS})
  }).catch(error => {
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      console.log(error.response.data)
    }
    else {
      console.log(error.message)
    }
    dispatch({ type: ADD_POST_FAILURE })
  })
}

export const clearReason = () => ({
  type: CLEAR_REASON
})