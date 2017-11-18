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


class ReadPageContainer extends Component {
  constructor (props){
    super()
    // this.dispatchMedia = dispatchMedia
     
   
  }
  
  
  componentWillMount () {
    this.elem = <ReadPageHolder />
    console.log(this.props)          
    // this.props.dispatchPost(this.props.slug)             
  }

  componentDidMount(){
    this.props.dispatchPost(this.props.slug)
    // setTimeout(() => {
    //   console.log(this.props.slug)
    //   if (this.props.post.length > 0) {
    //     console.log(this.props.post)      
    //     this.elem = <ArticleDetail post={this.props.post[0]} />
    //     console.log(this.elem)              
    //     }
    // },3000)
    console.log(this.props.slug)
    if (this.props.post.length > 0) {
      console.log(this.props.post)      
      this.elem = <ArticleDetail post={this.props.post[0]} />
      console.log(this.elem)              
      }
  }

  render () { 
    return (
      <div>
        <section >  
            <div className='columns'>
              <div className='column is-offset-2 is-8'>
                { this.elem }
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
