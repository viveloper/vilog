import { FETCH_POST_SUCCESS } from '../../constants'

const post = (previousState = {}, action) => {
  if (action.type === FETCH_POST_SUCCESS) {
    return action.post
  }
  else {
    return previousState
  }
}

export default post