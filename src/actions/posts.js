import { routeActions } from 'redux-simple-router'
import constants from '../constants'

/* pre-api methods */
// export function create(post){
//   return {
//     type: constants.CREATE_POST,
//     post: post
//   }
// }

// export function edit(id, post){
//   return {
//     type: constants.EDIT_POST,
//     id: id,
//     post: post
//   }
// }

/* api methods */
export function create(post){
  return function(dispatch, getState){
    const token = getState().auth.token

    fetch('/api/posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      },
      body: JSON.stringify({post})
    }).then(function(response){
      if(response.status === 200){
        return response.json()
      }
    }).then(function({ post }){
      if(post){
        dispatch({
          type: constants.CREATE_POST_SUCCESS,
          post: post
        })

        dispatch(routeActions.push('/posts/'+post.slug))
      }
    })
  }
}

export function retrieve(slug){
  return function(dispatch, getState){
    dispatch({
      type: constants.RETRIEVE_POST,
      slug: slug
    })

    fetch('/api/posts/'+slug).then(function(response){
      return response.json()
    }).then(function(body){
      dispatch({
        type: constants.RETRIEVE_POST_SUCCESS,
        slug: slug,
        post: body.post
      })
    })
  }
}

export function update(postSlug, post){
  return function(dispatch, getState){
    fetch('/api/posts/'+post.postSlug, {
      method: 'put',
      body: post
    }).then(function(response){
      return response.json()
    }).then(function({post}){
      if(post){
        dispatch({
          type: constants.UPDATE_POST_SUCCESS,
          post: post
        })
      }
    })
  }
}

export function retrieveAuthorPosts(username){
  return function(dispatch, getState){
    dispatch({
      type: constants.RETRIEVE_AUTHOR_POSTS,
      username
    })

    fetch('/api/posts?author='+username).then(function(response){
      return response.json()
    }).then(function({posts}){
      if(posts){
        dispatch({
          type: constants.RETRIEVE_AUTHOR_POSTS_SUCCESS,
          username,
          posts
        })
      }
    })
  }
}
