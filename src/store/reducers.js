import { combineReducers } from 'redux'
import locationReducer from './location'
import { postsReducer, postsByCategoryReducer } from './../reducers/PostsReducer'
import media from './../reducers/MediaReducer'
import singleMedia from './../reducers/MediaByIdReducer'
import categories from './../reducers/CategoriesReducer'
import post from './../reducers/SinglePostReducer'
import category from './../reducers/CategoryReducer'


export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    media: media,
    posts: postsReducer,
    post:post,
    category: category,
    categories: categories,
    singleMedia:singleMedia,
    postsByCategory: postsByCategoryReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
