import React , { Component } from 'react'
import Moment from 'react-moment'
class ArticleMeta extends Component {
  render(){
    const { date, author } = this.props
  
    return(
      <div className="media">
        <div className="media-left">
          <figure className="image is-32x32 is-hidden-tablet">
            <img src={author.avatar_urls['48']} />
          </figure>
          <figure className="image is-48x48 is-hidden-mobile">
            <img src={author.avatar_urls['48']} alt="Placeholder image" />
          </figure>
        </div>
        <div className="media-content">
            <p className="is-link is-size-7-mobile"><strong>{author.name}</strong></p>
            <p className="is-size-7-mobile">
              <small>
                <Moment  format="dddd, DD MMMM YYYY">
                {date}
                </Moment >
              </small>
            </p>
          </div>
      </div>
    )
  }
}

export default ArticleMeta