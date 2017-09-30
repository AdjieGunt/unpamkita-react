import { CALL_API } from 'redux-api-middleware'

export const FETCH_POSTS = 'FETCH_POST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POST_FAILURE'


export const fetchPosts = () => ({
  [CALL_API] : {
    type : [FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE],
    endpoint : 'http://demo.wp-api.org/wp-json/wp/v2/posts',
    method : 'GET'
  }
})
