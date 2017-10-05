import React from 'react'
import './ArticleDetail.scss'
import PropTypes from 'prop-types'
class ArticleDetail extends React.Component {
  render () {
    console.log(this.props)
    const { post, media } = this.props
    let featuredImage = media.media_details.sizes.medium.source_url
    if (!featuredImage) {
      featuredImage = 'http://via.placeholder.com/800x350'
    }
    return (
      <div>
        <div className='is-single'>
          <figure className='image article-featured-image is-16by9'>
            <img src={featuredImage} alt='Gambar artikel' />
          </figure>
          <h1 className='title'> { post.title.rendered } </h1>
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
