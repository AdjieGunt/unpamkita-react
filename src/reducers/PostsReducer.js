import * as types from '../actions/actionsTypes'
import initialState from './initialState'

export function postsReducer (state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}

export function postsByCategoryReducer (state = initialState.postsByCategory, action) {
  switch (action.type) {
    case types.LOAD_POSTS_BY_CATEGORY_SUCCESS:
      return action.posts
    default:
      return state
  }
}
