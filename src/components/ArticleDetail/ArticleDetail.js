import React from 'react'
import './ArticleDetail.scss'
// import ArticleCard from './../ArticleCard/ArticleCard'

class ArticleDetail extends React.Component {
  render () {
    return (
      <div>
        <div className="is-single">
            <figure className='image article-featured-image'>
                <img src="http://via.placeholder.com/800x350" alt="Gambar artikel"/>
            </figure>
            <h1 className='title'> Lorem Ipsum Si Dolor Amet Apapun Itu</h1>
            <div className="content is-medium">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, ipsam harum. Libero possimus, ipsam aut illo, nihil incidunt fuga beatae, molestiae voluptatum veniam corporis molestias, amet nulla quo soluta at.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita, a quo aliquid assumenda voluptatibus repellat molestiae consequuntur, maiores itaque magni maxime deserunt minima voluptas odit voluptatem rerum vero tempore.
                <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam expedita, a quo aliquid assumenda voluptatibus repellat molestiae consequuntur, maiores itaque magni maxime deserunt minima voluptas odit voluptatem rerum vero tempore.
                </p>
            </div>
            <div className="tags">
                <span className="tag is-info">Unpam</span>
                <span className="tag is-info">Kabar Alumni</span>
                <span className="tag is-info">Event</span>
            </div>
        </div>
      </div>
    )
  }
}

export default ArticleDetail
