import React from 'react'
import './ArticleCard.scss'
import PropTypes from 'prop-types'
import TimeAgo from 'react-timeago'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router'

class ArticleCard extends React.Component {
  
  render () {
    let { post, media, category } = this.props
    let author = post._embedded.author['0']
    let feature_media = post._embedded['wp:featuredmedia']['0']
    // console.log(feature_media)
    let FeaturedImage = 'http://via.placeholder.com/350x200'    
    if ( typeof feature_media.media_details.sizes.thumbnail !== 'undefined') {
      FeaturedImage = feature_media.media_details.sizes.medium.source_url
    } else {
      FeaturedImage = feature_media.media_details.sizes.full.source_url      
    }
   
    return (
      <div className='row article-list-item'>
        <Col xs={3} md={12}>
          <Link to={`/read/${post.slug}`} className='article-list-item-image' style={{backgroundImage:'url(' + FeaturedImage + ')'}}></Link>
        </Col>
        <Col xs={9} md={12}>
          <div className='article-meta'>
            {/* <p><TimeAgo date={ "2017-05-27T11:17:18" } /> by <b>Adjie Guntoro</b></p> */}
            <p className='is-info'><TimeAgo date={ post.date_gmt } /> by <b><span > { author.name} </span></b></p>
                {/* href={`/read/${post.slug}`} */}
            <h2 className=' article-item-title is-size-6 '>
              <Link to={`/read/${post.slug}`} className='is-info has-text-grey-dark' >
                <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </h2>
          </div>
        </Col>
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
