import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN, LOGOUT,
  FETCH_SECTIONS,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,
  FETCH_SECTION,
  FETCH_SECTION_SUCCESS,
  FETCH_SECTION_FAILURE,
  SET_SECTION,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../../constants'
import AuthModel from '../../models/AuthModel'
import SectionModel from '../../models/SectionModel'
import PostModel from '../../models/PostModel'

export const signUpThunk = (firstName, lastName, email, password, history) => dispatch => {
  dispatch({ type: SIGNUP })
  AuthModel.signup(firstName, lastName, email, password).then(data => {
    dispatch({
      type: SIGNUP_SUCCESS,
      token: data.token
    })
    history.push('/')
  }).catch(err => {
    dispatch({ type: SIGNUP_FAILURE })
  })
}

export const loginThunk = (email, password, history) => dispath => {
  dispath({ type: LOGIN })
  AuthModel.login(email, password).then(data => {
    dispath({
      type: LOGIN_SUCCESS,
      token: data.token,
    })
    history.push('/')
  }).catch(err => {
    console.log(err.response.data)
    dispath({ type: LOGIN_FAILURE })
  })
}

export const logout = () => {
  return { type: LOGOUT }
}

export const fetchSectionsThunk = () => dispatch => {
  dispatch({ type: FETCH_SECTIONS })
  SectionModel.fetchSections().then(res => {
    dispatch({
      type: FETCH_SECTIONS_SUCCESS,
      sections: res.sections
    })
  }).catch(err => {
    console.log(err)
    dispatch({ type: FETCH_SECTIONS_FAILURE })
  })
}

export const fetchSectionThunk = name => dispatch => {
  dispatch({ type: FETCH_SECTION })
  SectionModel.fetchSection(name).then(res => {
    dispatch({
      type: FETCH_SECTION_SUCCESS,
      section: res.section
    })
  }).catch(err => {
    console.log(err)
    dispatch({ type: FETCH_SECTION_FAILURE })
  })
}

export const setSection = section => ({
  type: SET_SECTION,
  section
})

export const fetchPostsThunk = section => dispatch => {
  dispatch({ type: FETCH_POSTS })
  PostModel.fetchPosts(section).then(res => {
    dispatch({
      type: FETCH_POSTS_SUCCESS,
      posts: res.posts
    })
  }).catch(err => {
    console.log(err)
    dispatch({ type: FETCH_POSTS_FAILURE })
  })
}

export const fetchPostThunk = (section, id) => dispatch => {
  dispatch({ type: FETCH_POST })
  PostModel.fetchPost(section, id).then(res => {
    dispatch({
      type: FETCH_POST_SUCCESS,
      post: res.post
    })
  }).catch(err => {
    console.log(err)
    dispatch({ type: FETCH_POST_FAILURE })
  })
}