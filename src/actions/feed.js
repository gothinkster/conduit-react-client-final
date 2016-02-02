import constants from '../constants'

export function retrieveAll(){
  return function(dispatch, getState){
    fetch('/api/posts').then(function(response){
      if(response.status === 200){
        return response.json()
      }
    }).then(function(body){
      dispatch({
        type: constants.RETRIEVE_ALL_POSTS_SUCCESS,
        posts: body.posts
      })
    })
  }
}

export function retrieveFeed(username){
  return function(dispatch, getState){
    fetch('/api/posts?followed_by='+username).then(function(response){
      if(response.status === 200){
        return response.json()
      }
    }).then(function(body){
      dispatch({
        type: constants.RETRIEVE_ALL_POSTS_SUCCESS,
        posts: body.posts
      })
    })
  }
}
