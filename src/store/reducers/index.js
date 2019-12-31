import { combineReducers } from 'redux'
import token from './token'
import loading from './loading'
import sections from './sections'
import section from './section'

const rootReducer = combineReducers({
  token,
  loading,
  sections,
  section
})

export default rootReducer