import postsAPI from './../api/PostsApi'
import * as types from './actionsTypes'

// Load All Post Data
export function loadPosts () {
  return function (dispatch) {
    return postsAPI.getAllPosts().then(posts => {
      dispatch(LoadPostsSuccess(posts))
    }).catch(error => {
      throw (error)
    })
  }
}

export function LoadPostsSuccess (posts) {
  return { type : types.LOAD_POSTS_SUCCESS, posts }
}

export function LoadPostsFailed (error) {
  return { type : types.LOAD_POSTS_FAILED, error }
}

// Load post by slug
export function loadPostBySlug (slug) {
  return function (dispatch) {
    return postsAPI.getPostBySlug(slug).then(post => {
      dispatch(LoadPostBySlugSuccess(post))
    }).catch(error => {
      throw (error)
    })
  }
}

// Load post by category
export function loadPostsByCategory (category) {
  return function (dispatch) {
    return postsAPI.getPostsByCategory(category).then(posts => {
      dispatch(loadPostsByCategory(posts))
    }).catch(error => {
      throw (error)
    })
  }
}

export function LoadPostBySlugSuccess (post) {
  return { type : types.LOAD_POSTS_BY_SLUG_SUCCESS, post }
}

export function LoadPostBySlugFailed (error) {
  return { type : types.LOAD_POSTS_BY_SLUG_FAILED, error }
}



// Load All Media
export function loadMedia () {
  return function (dispatch) {
    return postsAPI.getMedia().then(media => {
      dispatch(LoadMediaSuccess(media))
    }).catch(error => {
      throw (error)
    })
  }
}

export function LoadMediaSuccess (media) {
  return { type : types.LOAD_MEDIA_SUCCESS, media }
}

export function LoadMediaFailed (error) {
  return { type : types.LOAD_MEDIA_FAILED, error }
}

// load post all categories
export function loadCategories () {
  return function (dispatch) {
    return postsAPI.getCategories().then(categories => {
      dispatch(LoadCategoriesSuccess(categories))
    }).catch(error => {
      throw (error)
    })
  }
}

export function LoadCategoriesSuccess (categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories }
}

// load media by id
export function loadMediaById (id) {
  return function (dispatch) {
    return postsAPI.getMediaById(id).then(singleMedia => {
      dispatch(LoadMediaByIdSuccess(singleMedia))
    }).catch(error => {
      throw (error)
    })
  }
}

export function LoadMediaByIdSuccess (singleMedia) {
  return { type: types.LOAD_MEDIA_BY_ID_SUCCESS, singleMedia }
}

// load category by slug

export function loadCategoryBySlug (slug) {
  return function (dispatch) {
    return postsAPI.getCategoryBySlug(slug).then(category => {
      dispatch(LoadCategoryBySlugSuccess(category))
    }).catch(error => {
      throw (error)
    })
  }
}

export function LoadCategoryBySlugSuccess (category) {
  return { type: types.LOAD_CATEGORY_BY_SLUG_SUCCESS, category }
}