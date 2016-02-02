import constants from '../constants'

function getUserFromToken(token){
  return JSON.parse(atob(token.split('.')[1]))
}

const token = localStorage.getItem('conduit-token')
const user = token ? JSON.parse(atob(localStorage.getItem('conduit-token').split('.')[1])) : {}

const initialState = {
  user,
  token,
  loggedIn: !!token
}

function auth(state = initialState, action){
  switch(action.type){
    case constants.LOGIN_USER_SUCCESS:
    case constants.REGISTER_USER_SUCCESS:
    case constants.UPDATE_PROFILE_SUCCESS:
      return {
        user: action.user,
        token: action.token,
        loggedIn: true
      }
    case constants.LOGOUT_USER_SUCCESS:
      return {
        user: {},
        token: '',
        loggedIn: false
      }
    default:
      return state
  }
}

export default auth
