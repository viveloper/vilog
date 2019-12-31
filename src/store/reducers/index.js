import { combineReducers } from 'redux'
import token from './token'
import loading from './loading'

const rootReducer = combineReducers({
  token,
  loading
})

export default rootReducer