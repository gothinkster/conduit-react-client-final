import constants from '../constants'

const initialState = []

export default function tags(state = initialState, action){
  switch(action.type){
    case constants.RETRIEVE_TAGS_SUCCESS:
      return action.tags
    default:
      return state
  }
}
