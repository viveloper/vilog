import { combineReducers } from 'redux'
import token from './token'
import loading from './loading'
import sections from './sections'
import section from './section'
import posts from './posts'
import post from './post'

const rootReducer = combineReducers({
  token,
  loading,
  sections,
  section,
  posts,
  post
})

export default rootReducer