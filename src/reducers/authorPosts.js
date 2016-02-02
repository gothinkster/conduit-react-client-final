import constants from '../constants'

const initialState = {}

export default function authorPosts(state = initialState, action){
  switch(action.type){
      // return Object.assign({}, state, {[action.username]: {loading: true}})
    case constants.RETRIEVE_AUTHOR_POSTS_SUCCESS:
      return Object.assign({}, state, {[action.username]: action.posts})
    case constants.RETRIEVE_AUTHOR_POSTS:
    default:
      return state
  }
}
