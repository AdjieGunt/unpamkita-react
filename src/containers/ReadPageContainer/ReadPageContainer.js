import React, { Component } from 'react'
import ArticleDetail from './../../components/ArticleDetail/ArticleDetail'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMediaById, loadPostBySlug } from './../../actions/PostActions'
// import Spinner from './../../components/Spinner'
import ReadPagePlaceholder from './../../components/ContentPlaceholder/ReadPagePlaceholder'


class ReadPageContainer extends Component {
  constructor (props, dispatchMedia){
    super()
    this.dispatchMedia = dispatchMedia
  }
  getMediaById = (id) => {
    const media = this.props.media
    let NewMedia = {}
    for (let i = 0; i < media.length; i++) {
      if (media[i].id === id) {
        NewMedia = media[i]
        break
      }
    }
    return NewMedia
  }

  componentDidMount () {
    this.props.dispatchPost(this.props.slug)
    setTimeout(() => {
      this.props.dispatchMedia(this.props.post[0].featured_media)
    }, 5000)
            
  }

  render () { 
    // console.log(typeof this.props.singleMedia.id !== 'undefined')
    if (typeof this.props.post[0] !== 'undefined'){
      // console.log(this.props.post[0].featured_media)
      loadMediaById(this.props.post[0].featured_media)
    }
    let elem = <ReadPagePlaceholder />
    if (this.props.post.length > 0 && typeof this.props.singleMedia.id !== 'undefined') {
      elem = <ArticleDetail post={this.props.post[0]} media={this.props.singleMedia} />
    } 
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-offset-2 is-8'>
                { elem }
              </div>
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
