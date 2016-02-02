import constants from '../constants'
import { routeActions } from 'redux-simple-router'

export function login(user){
  return function(dispatch){
    fetch('/api/users/sign_in',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(function(response){
      return response.json()
    }).then(function({user, token}){
      localStorage.setItem('conduit-token', token)

      dispatch({
        type: constants.LOGIN_USER_SUCCESS,
        user,
        token
      })

      dispatch(routeActions.push('/'))
    })
  }
}

export function register(user){
  return function (dispatch){
    fetch('/api/users',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    }).then(function(response){
      return response.json()
    }).then(function({user, token}){
      localStorage.setItem('conduit-token', token)

      dispatch({
        type: constants.REGISTER_USER_SUCCESS,
        user,
        token
      })

      dispatch(routeActions.push('/'))
    })
  }
}

export function logout(){
  return function (dispatch){
    localStorage.removeItem('conduit-token')

    dispatch({
      type: constants.LOGOUT_USER_SUCCESS
    })

    dispatch(routeActions.push('/'))
  }
}
