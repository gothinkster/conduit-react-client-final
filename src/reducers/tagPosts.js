import constants from '../constants'

const initialState = {}

export default function tags(state = initialState, action){
  switch(action.type){
    case constants.RETRIEVE_TAG_POSTS:
      return Object.assign({}, state, {[action.tag]: []})
    case constants.RETRIEVE_TAG_POSTS_SUCCESS:
      return Object.assign({}, state, {[action.tag]: action.posts})
    default:
      return state
  }
}
