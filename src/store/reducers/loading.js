import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_SECTIONS,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SECTIONS_FAILURE,  
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

const loading = (previousState = false, action) => {
  switch (action.type) {
    case SIGNUP:
    case LOGIN:
    case FETCH_SECTIONS:    
    case FETCH_POSTS:
    case FETCH_POST:
      return true
    case SIGNUP_SUCCESS:
    case SIGNUP_FAILURE:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case FETCH_SECTIONS_SUCCESS:
    case FETCH_SECTIONS_FAILURE:    
    case FETCH_POSTS_SUCCESS:
    case FETCH_POSTS_FAILURE:
    case FETCH_POST_SUCCESS:
    case FETCH_POST_FAILURE:
      return false
    default:
      return previousState
  }
}

export default loading