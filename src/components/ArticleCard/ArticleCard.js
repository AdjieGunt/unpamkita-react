import React from 'react'
import './ArticleCard.scss'

class ArticleCard extends React.Component {
  render () {
    return (
      <div className='card'>
        <div className='card-image'>
          <figure className='image'>
            <img src='http://via.placeholder.com/350x200' alt='Placeholder' />
          </figure>
        </div>
        <div className='card-content'>
          <h2 className='title article-card-item-title is-size-4 '><a className='is-info has-text-grey-dark' href='#'>Lorem ipsum si dolor amet consuemat</a></h2>
          <div className='article-meta'>
            <p>6 days Ago by <b>Adjie Guntoro</b></p>
          </div>
          <div className='content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleCard
