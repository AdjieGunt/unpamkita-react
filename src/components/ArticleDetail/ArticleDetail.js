import React from 'react'
import './ArticleDetail.scss'
import PropTypes from 'prop-types'
import ArticleMeta from './ArticleMeta'

class ArticleDetail extends React.Component {
  render () {
    console.log(this.props)
    const { post, media } = this.props
    let featuredImage = ''
    
    if (typeof media === 'undefined') {
      featuredImage = 'http://via.placeholder.com/800x350'
    } else if (typeof media.media_details.sizes.medium !== 'undefined') {
      featuredImage = media.media_details.sizes.medium.source_url
    } else if (typeof media.media_details.sizes.medium === 'undefined'){
      featuredImage = media.source_url
    } else {
      featuredImage = null
    }
    let figureImage = ''
    if (featuredImage !== null) {
      figureImage = <figure className='image article-featured-image is-16by9'>
        <img src={featuredImage} alt='Gambar artikel' />
      </figure>
    }

    return (
      <div>
        <div className='is-single'>
          <h1 className='title'>
            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
           </h1>
           <ArticleMeta publishDate={post.date} />
          { figureImage }
          <div className='content is-medium'>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
          <div className='tags'>
            <span className='tag is-info'>Unpam</span>
            <span className='tag is-info'>Kabar Alumni</span>
            <span className='tag is-info'>Event</span>
          </div>
        </div>
      </div>
    )
  }
}

ArticleDetail.propTypes = {
  post : PropTypes.object,
  media : PropTypes.object
}

export default ArticleDetail
