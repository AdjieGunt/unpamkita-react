
const API_URL = 'https://www.besttangsel.com/wp-json/wp/v2'
const POST_API = API_URL + '/posts?filter[tags]="featured"'
const MEDIA_API = API_URL + '/media?per_page=30'
const CATEGORIES_API = API_URL + '/categories' 
const MEDIA_BY_ID_API = API_URL + '/media'

class PostsApi {
  static getAllPosts () {
    return fetch(POST_API).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static getPostBySlug (slug) {
    return fetch(API_URL + '/posts?slug=' + slug).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static getMedia () {
    return fetch(MEDIA_API).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static getCategories () {
    return fetch(CATEGORIES_API).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static getMediaById (id) {
    return fetch(MEDIA_BY_ID_API + '/' + id).then(response => {
      return response.json()
    }).catch(error => {
      throw (error)
    })
  }
}

export default PostsApi
