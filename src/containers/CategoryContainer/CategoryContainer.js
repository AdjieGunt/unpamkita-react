import React, { Component } from 'react'
import ArticleDetail from './../../components/ArticleDetail/ArticleDetail'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMediaById, loadPostBySlug } from './../../actions/PostActions'
// import Spinner from './../../components/Spinner'
import ReadPageHolder from './../../components/ReadPageHolder'

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';


class CategoryContainer extends Component {
  // constructor (props){
  //   super()
  //   this.post = {}
  //   this.isLoading = true
    
  // }
  
  
  componentWillMount () {
    console.log("will mount read page")       
    this.props.dispatchPost(this.props.slug)             
  }

  componentDidMount(){  
    console.log("did mount read page")     
  }

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps")         
    this.post = {}   
  }

  renderArticle(){ 
    this.post = this.props.post[0]
    console.log(this.props.slug)
    if(this.post && this.props.slug == this.post.slug) {
      return <ArticleDetail post={this.post} />
    } else {
      return <ReadPageHolder /> 
    }
  }


  render () { 
    
    return (
      <div>
        <section >  
            <div className='columns'>
              <div className='column is-offset-2 is-8'>
                { this.renderArticle() }
              </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post,
    singleMedia: state.singleMedia
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchMedia: (id) => {
      dispatch(loadMediaById(id))
    },
    singlePost: (slug) => {
      dispatch(loadPostBySlug(slug))
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...ownProps,
        post: stateProps.post,
        singleMedia: stateProps.singleMedia,
        dispatchMedia :dispatchProps.dispatchMedia,
        dispatchPost: dispatchProps.singlePost
        }
}


ReadPageContainer.propTypes = {
  slug: PropTypes.string,
  media:PropTypes.array,
  posts:PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ReadPageContainer)
