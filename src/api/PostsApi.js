
const API_URL = 'https://uk.apcasi.or.id/wp-json/wp/v2'
const POST_API = API_URL + '/posts?per_page=8&_embed'
const MEDIA_API = API_URL + '/media?per_page=60'
const CATEGORIES_API = API_URL + '/categories' 
const CATEGORY_API = API_URL + '/categories'
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
    return fetch(API_URL + '/posts?slug=' + slug + '&_embed').then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }

  static getPostsByCategory (IdCategory) {
    return fetch(API_URL + '/posts?categories=' + IdCategory + '&_embed').then(response => {
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

  static getCategoryBySlug (slug) {
    return fetch(CATEGORY_API + '?slug=' + slug).then(response => {
      return response.json()
    }).catch(error => {
      throw (error)
    })
  }
}

export default PostsApi
