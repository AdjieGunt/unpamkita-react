import React from 'react'
import './ArticleDetail.scss'
import PropTypes from 'prop-types'
import FacebookProvider, { Comments } from 'react-facebook'
// import ArticleMeta from './ArticleMeta'
import LazyLoad from 'react-lazy-load'

class ArticleDetail extends React.Component {
  
  figureImage = ''
  featuredImage = 'http://via.placeholder.com/800x350'
  post = {}
  media = {}

  componentDidMount () {
    const { media } = this.props
    
    if (typeof media === 'undefined') {
      this.featuredImage = 'http://via.placeholder.com/800x350'
    } else if (typeof media.media_details.sizes.medium !== 'undefined') {
      this.featuredImage = media.media_details.sizes.full.source_url
    } else if (typeof media.media_details.sizes.full === 'undefined'){
      this.featuredImage = media.source_url
    } else {
      this.featuredImage = null
    }
    
    if (this.featuredImage !== null) {
      this.figureImage = 
        <img src={this.featuredImage} alt='Gambar artikel' className=' lazy lazyLoaded' />
    }
    console.log(this.figureImage)
  }

  render () {
    // console.log(featuredImage)
    const { post } = this.props
    // let featuredImage = this.featuredImage

    return (
      <div>
        <div className='is-single'>
          <div className='article-title'>
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </div>
          <div className='article-detail-meta'>
            <ul>
              <li> Sabtu, 04 Nov 2017 </li>
              <li> Oleh : Adjie Guntoro </li>
              {/* <li><span className='tag is-info'>Info</span></li> */}
            </ul>
          </div>
          <figure className='image article-featured-image is-16by9'>
          { this.figureImage }
          </figure>
          <div className='content'>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
          <FacebookProvider appId='373119386442338'>
            <Comments width='100%' href={'localhost:3000/' + post.slug} />
          </FacebookProvider>
          {/* <div className='tags'>
            <span className='tag is-info'>Unpam</span>
            <span className='tag is-info'>Kabar Alumni</span>
            <span className='tag is-info'>Event</span>
          </div> */}
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
