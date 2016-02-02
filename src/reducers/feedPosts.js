import constants from '../constants'

const initialState = []

function feedPosts(state = initialState, action){
  switch(action.type){
    case constants.RETRIEVE_ALL_POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}

export default feedPosts
