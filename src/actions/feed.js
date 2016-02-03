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
    fetch('/api/feed').then(function(response){
      return response.json()
    }).then(function({ posts }){
      if(posts){
        dispatch({
          type: constants.RETRIEVE_FEED_POSTS_SUCCESS,
          posts: posts
        })
      }
    })
  }
}
