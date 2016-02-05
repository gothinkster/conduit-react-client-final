
export function create(slug){
  return function(dispatch, getState){
    const token = getState().auth.token

    fetch('/api/posts/'+slug+'/comments', {
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
          type: constants.CREATE_COMMENT_SUCCESS,
          post: post
        })

        dispatch(routeActions.push('/posts/'+post.slug))
      }
    })
  }
}
