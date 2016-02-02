import constants from '../constants'

const initialState = {}

export default function profiles (state = initialState, action){
  switch(action.type){
    case constants.RETRIEVE_PROFILE:
      return Object.assign({}, state, {[action.username]: {loading: true}})
    case constants.RETRIEVE_PROFILE_SUCCESS:
      return Object.assign({}, state, {[action.username]: {user: action.user, posts: action.posts}})
    default:
      return state
  }
}
