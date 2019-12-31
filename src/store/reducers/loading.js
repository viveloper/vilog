import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, FETCH_SECTIONS, FETCH_SECTION, FETCH_SECTIONS_SUCCESS, FETCH_SECTIONS_FAILURE, FETCH_SECTION_SUCCESS, FETCH_SECTION_FAILURE } from '../../constants'

const loading = (previousState = false, action) => {
  switch (action.type) {
    case LOGIN:
    case FETCH_SECTIONS:
    case FETCH_SECTION:
      return true
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case FETCH_SECTIONS_SUCCESS:
    case FETCH_SECTIONS_FAILURE:
    case FETCH_SECTION_SUCCESS:
    case FETCH_SECTION_FAILURE:
      return false
    default:
      return previousState
  }
}

export default loading