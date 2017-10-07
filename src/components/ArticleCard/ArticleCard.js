import React from 'react'
import './ArticleCard.scss'
import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'

class ArticleCard extends React.Component {
  
  render () {
    let { post, media, category } = this.props
    // let FeaturedImage = media.media_details.sizes.medium.source_url
    // console.log(media.media_details.sizes.medium.source_url)
    // FeaturedImage = FeaturedImage ? FeaturedImage : 'http://via.placeholder.com/350x200'  
    let FeaturedImage = 'http://via.placeholder.com/350x200'
    return (
      <div className='card'>
        <div className='card-image'>
          <figure className='image is-3by2'>
            <img src={ FeaturedImage } alt='Placeholder' />       
          </figure>
        </div>
        <div className='card-content'>
          <div className='article-meta'>
            <p><TimeAgo date={ post.date_gmt } /> by <b>Adjie Guntoro</b></p>
          </div>

          <h2 className='title article-card-item-title is-size-6 '>
            <a className='is-info has-text-grey-dark' href={`/read/${post.slug}`}>
              { post.title.rendered }
            </a>
          </h2>
        </div>
      </div>
    )
  }
}


ArticleCard.propTypes = {
  post : PropTypes.object,
  media : PropTypes.object,
  category:  PropTypes.object
}

export default ArticleCard
