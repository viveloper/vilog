import { FETCH_SECTION_SUCCESS, SET_SECTION } from '../../constants'

const section = (previousState = {}, action) => {
  if (action.type === FETCH_SECTION_SUCCESS) {
    return action.section
  }
  else if(action.type === SET_SECTION) {
    return action.section
  }
  else {
    return previousState
  }
}

export default section