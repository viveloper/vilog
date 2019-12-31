import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

// redux middleware
const middlewares = [thunk]

// store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export default store