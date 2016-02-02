import constants from '../constants'

const initialState = {}

function posts(state = initialState, action){
  switch(action.type){
    /* pre-api */
    case constants.CREATE_POST:
      return [
        ...state,
        Object.assign({}, action.post, {slug: state.length})
      ]
    case constants.REMOVE_POST:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    case constants.RETRIEVE_POST:
      return Object.assign({}, state, {[action.slug]: {loading: true}})
    case constants.CREATE_POST_SUCCESS:
    case constants.RETRIEVE_POST_SUCCESS:
      return Object.assign({}, state, {[action.slug]: action.post})
    default:
      return state
  }
}

export default posts
