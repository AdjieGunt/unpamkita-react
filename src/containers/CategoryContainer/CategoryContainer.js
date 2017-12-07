import React, { Component } from 'react'
// import ArticleDetail from './../../components/ArticleDetail/ArticleDetail'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMediaById, loadPostsByCategory, loadCategoryBySlug } from './../../actions/PostActions'
import Spinner from './../../components/Spinner'
import ArticleList from './../../components/ArticleList'
import axios from 'axios'

class CategoryContainer extends Component {
  constructor (props) {
    super(props)
    // console.log('construct')
    this.state = {
      categories : [],
      categoryName : '',
      categorySlug : '',
      posts: [],
      isLoading : true
    }
  }

  getCategory (slug) {
    return axios.get('https://uk.apcasi.or.id/wp-json/wp/v2/categories?slug=' + slug)
  }

  fecthData () {
    this.getCategory(this.props.slug)
        .then(response => {
          let cat = response.data
          this.props.dispatchPosts(cat[0].id)
          this.setState({
            category: cat,
            categorySlug: cat[0].slug,
            categoryName: cat[0].name
          })
        })
        .then(
          this.setState({
            isLoading : false
          })
        )
    // console.log()
  }

  // first mount
  componentWillMount () {
    this.fecthData()
  }

  componentDidMount () {
    // console.log('did mount read page')    
    // console.log(this.props)
  }

  // update
  componentWillReceiveProps (nextProps) {
    // console.log('componentWillReceiveProps', nextProps)
    this.posts = []
    // console.log(this.props.slug !== this.state.categorySlug, nextProps.slug, this.state.categorySlug)
    if (nextProps.slug !== this.state.categorySlug) {
      this.fecthData()
      // console.log('Fetching ........')
    }
  }

  shouldComponentUpdate () {
    // console.log(nextState)
    return true
  }

  componentWillUpdate () {
    // console.log(this.props.slug)
  }

  componentDidUpdate () {
    // console.log(this.props.slug, this.state.categorySlug)  
  }

  renderArticle () {
    this.posts = this.props.posts
    // console.log(this.state.isLoading, this.props.slug, this.state.categorySlug)
    // console.log(this.props.posts)
    if (this.posts.length > 0 && this.props.slug === this.state.categorySlug) {
      return <ArticleList listingtitle={this.state.categoryName} posts={this.posts} />
    } else {
      return <Spinner />
    }
  }

  render () {
    return (
      <div>
        <section className='container'>
          <div className='columns'>
            <div className='column'>
              {this.renderArticle()}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.postsByCategory,
    singleMedia: state.singleMedia,
    category : state.category
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchMedia: (id) => {
      dispatch(loadMediaById(id))
    },
    getPosts: (id) => {
      dispatch(loadPostsByCategory(id))
    },
    category: (slug) => {
      dispatch(loadCategoryBySlug(slug))
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    posts: stateProps.posts,
    category : stateProps.category,
    singleMedia: stateProps.singleMedia,
    dispatchMedia :dispatchProps.dispatchMedia,
    dispatchPosts: dispatchProps.getPosts,
    dispatchCategory: dispatchProps.category
  }
}

CategoryContainer.propTypes = {
  slug: PropTypes.string,
  category: PropTypes.array,
  posts: PropTypes.array,
  dispatchCategory: PropTypes.func,
  dispatchPosts: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CategoryContainer)
