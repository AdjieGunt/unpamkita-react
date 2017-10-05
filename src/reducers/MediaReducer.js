import * as types from '../actions/actionsTypes'
import initialState from './initialState'


export default function mediaReducer (state = initialState.media, action) {
  switch (action.type) {
    case types.LOAD_MEDIA_SUCCESS:
      return action.media
    default:
      return state
  }
}