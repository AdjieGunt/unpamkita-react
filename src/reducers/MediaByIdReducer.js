import * as types from '../actions/actionsTypes'
import initialState from './initialState'


export default function mediaReducer (state = initialState.singleMedia, action) {
  switch (action.type) {
    case types.LOAD_MEDIA_BY_ID_SUCCESS:
      return action.singleMedia
    default:
      return state
  }
}

