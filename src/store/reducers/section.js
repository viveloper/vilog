import { SET_SECTION } from '../../constants'

const section = (previousState = {}, action) => {
  if(action.type === SET_SECTION) {
    return action.section
  }
  else {
    return previousState
  }
}

export default section