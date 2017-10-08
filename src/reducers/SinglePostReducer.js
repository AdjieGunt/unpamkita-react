import * as types from '../actions/actionsTypes'
import initialState from './initialState'


export default function SinglePostReducer (state = initialState.post, action) {
  switch (action.type) {
    case types.LOAD_POSTS_BY_SLUG_SUCCESS:
      return action.post
    case types.LOAD_POSTS_BY_SLUG_FAILED:
      return action.post.error
    default:
      return state
  }
}