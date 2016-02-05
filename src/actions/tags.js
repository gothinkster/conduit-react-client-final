import constants from '../constants'

export function retrievePosts(tag){
  return function(dispatch, getState){
    dispatch({
      type: constants.RETRIEVE_TAG_POSTS,
      tag: tag
    })

    fetch('/api/tags/'+tag).then(function(response){
      return response.json()
    }).then(function({ posts }){
      dispatch({
        type: constants.RETRIEVE_TAG_POSTS_SUCCESS,
        tag: tag,
        posts: posts
      })
    })
  }
}


export function retrieveAll(){
  return function(dispatch, getState){
    dispatch({
      type: constants.RETRIEVE_TAGS,
    })

    fetch('/api/tags').then(function(response){
      return response.json()
    }).then(function({ tags }){
      dispatch({
        type: constants.RETRIEVE_TAGS_SUCCESS,
        tags: tags
      })
    })
  }
}

