import constants from '../constants'
import { routeActions } from 'redux-simple-router'

export function update(user){
  return function(dispatch, getState){
    const token = getState().auth.token

    fetch('/api/profiles', {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      },
      body: JSON.stringify({user})
    }).then(function(response){
      return response.json()
    }).then(function({user, token}){
      if(user && token){
        localStorage.setItem('conduit-token', token)

        dispatch({
          type: constants.UPDATE_PROFILE_SUCCESS,
          user,
          token
        })

        dispatch(routeActions.push('/'))
      }
    })
  }
}

export function retrieve(username){
  return function(dispatch){
    dispatch({
      type: constants.RETRIEVE_PROFILE,
      username
    })

    fetch('/api/profiles/'+username).then(function(response){
      return response.json()
    }).then(function({user, posts}){
      if(user){
        dispatch({
          type: constants.RETRIEVE_PROFILE_SUCCESS,
          username,
          user,
          posts
        })
      }
    })
  }
}

export function follow(username){
  return function(dispatch){
    dispatch({
      type: constants.FOLLOW_PROFILE,
      username
    })

    fetch('/api/profiles/'+username+'/follow',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      }
    }).then(function(response){
      return response.json()
    }).then(function({following}){
      if(following){
        dispatch({
          type: constants.FOLLOW_PROFILE_SUCCESS,
          username
        })
      }
    })
  }
}

export function unfollow(username){
  return function(dispatch){
    dispatch({
      type: constants.UNFOLLOW_PROFILE,
      username
    })

    fetch('/api/profiles/'+username+'/follow',{
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      }
    }).then(function(response){
      return response.json()
    }).then(function({following}){
      if(following){
        dispatch({
          type: constants.UNFOLLOW_PROFILE_SUCCESS,
          username
        })
      }
    })
  }
}
