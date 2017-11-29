import * as types from '../actions/actionsTypes'
import initialState from './initialState'


export default function categoryReducer (state = initialState.category, action) {
  switch (action.type) {
    case types.LOAD_CATEGORY_BY_SLUG_SUCCESS:
      return action.category
    default:
      return state
  }
}