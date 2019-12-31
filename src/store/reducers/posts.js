import { FETCH_POSTS_SUCCESS } from '../../constants'

const posts = (previousState = [], action) => {
  if (action.type === FETCH_POSTS_SUCCESS) {
    return action.posts
  }
  else {
    return previousState
  }
}

export default posts