import { combineReducers } from 'redux'
import token from './token'
import user from './user'
import loading from './loading'
import sections from './sections'
import section from './section'
import posts from './posts'
import post from './post'
import reason from './reason'

const rootReducer = combineReducers({
  token,
  user,
  loading,
  sections,
  section,
  posts,
  post,
  reason
})

export default rootReducer