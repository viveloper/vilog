import { combineReducers } from 'redux'
import loading from './loading'
import sections from './sections'
import posts from './posts'
import reason from './reason'

const rootReducer = combineReducers({  
  loading,
  sections,
  posts,
  reason
})

export default rootReducer