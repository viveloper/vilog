import { FETCH_SECTIONS_SUCCESS } from '../../constants'

const sections = (previousState = [], action) => {
  if (action.type === FETCH_SECTIONS_SUCCESS) {
    return action.sections
  }
  else {
    return previousState
  }
}

export default sections