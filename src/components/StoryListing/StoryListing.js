import React from 'react'
import './StoryListing.scss'
import ArticleCard from './../ArticleCard/ArticleCard'


class StoryListing extends React.Component {

  render () {
    // console.log(this.props)
    return (
      <div className='container story-listing'>
        <div className='columns is-mobile story-listing-header'>
            <div className='column is-4'>
                <div className='story-listing-title'>
                    <h4>
                        Artikel Pilihan
                    </h4>
                </div>
            </div>
         {
            //   <div className='column is-6 is-offset-4 '>
            //   <div className='story-listing-index-link level-right'>
            //     <h5>
            //       <a href='#'>Lihat Lainnya</a>
            //     </h5>
            //   </div>
            // </div> 
         }
        </div>
        <div className='columns story-listing-item is-1'>
          <div className='column is-4'>
            <ArticleCard />
          </div>
          <div className='column is-4'>
            <ArticleCard />
          </div>
          <div className='column is-4'>
            <ArticleCard />
          </div>
        </div>
      </div>
    )
  }
}

export default StoryListing
