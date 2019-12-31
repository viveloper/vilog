import { 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGIN, LOGOUT, 
  FETCH_SECTIONS, 
  FETCH_SECTIONS_SUCCESS, 
  FETCH_SECTIONS_FAILURE,
  FETCH_SECTION,
  FETCH_SECTION_SUCCESS,
  FETCH_SECTION_FAILURE,
  SET_SECTION
} from '../../constants'
import AuthModel from '../../models/AuthModel'
import SectionModel from '../../models/SectionModel'

export const loginThunk = (email, password, history) => dispath => {
  dispath({
    type: LOGIN
  })
  AuthModel.login(email, password).then(res => {
    dispath({
      type: LOGIN_SUCCESS,
      token: res.data.token,
    })
    history.push('/')
  }).catch(err => {
    console.log(err)
    dispath({
      type: LOGIN_FAILURE,
    })
  })
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}

export const fetchSectionsThunk = () => dispatch => {
  dispatch({
    type: FETCH_SECTIONS
  })
  SectionModel.fetchSections().then(res=>{
    dispatch({
      type: FETCH_SECTIONS_SUCCESS,
      sections: res.sections
    })
  }).catch(err=>{
    console.log(err)
    dispatch({
      type: FETCH_SECTIONS_FAILURE,
    })
  })
}

export const fetchSectionThunk = (name) => dispatch => {
  dispatch({
    type: FETCH_SECTION
  })
  SectionModel.fetchSection(name).then(res=>{
    dispatch({
      type: FETCH_SECTION_SUCCESS,
      section: res.section
    })
  }).catch(err=>{
    console.log(err)
    dispatch({
      type: FETCH_SECTION_FAILURE,
    })
  })
}

export const setSection = section => ({
  type: SET_SECTION,
  section
})