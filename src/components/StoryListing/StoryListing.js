import React from 'react'
import './StoryListing.scss'
import ArticleCard from './../ArticleCard/ArticleCard'


class StoryListing extends React.Component {
  arrayHelper = (arr, length) => {
    const result = []
    const copy = arr.slice()
    while (copy.length) {
      result.push(copy.splice(0, length))
    }

    return result
  }

  getMediaById = (id) => {
    const mediaArray = this.props.media
    let newArray = {}
    for (let i = 0; i < mediaArray.length; i++) {
      if (mediaArray[i].id === id) {
        newArray = mediaArray[i]
        break
      }
    }
    return newArray
  }

  getCategoryById = (id) => {
    const mediaArray = this.props.categories
    let newArray = {}
    for (let i = 0; i < mediaArray.length; i++) {
      if (mediaArray[i].id === id) {
        newArray = mediaArray[i]
        break
      }
    }
    return newArray
  }

  render () {
    console.log("Component Render")
    // console.log(this.arrayHelper(this.props.posts, 4))
    const postsSlice = this.arrayHelper(this.props.posts, 4)    
    return (
      <div className='container story-listing'>
        <div className='columns is-mobile story-listing-header'>
            <div className='column is-4'>
                <div className='story-listing-title'>
                    <h2 className='is-2'>
                        {this.props.listingtitle}
                    </h2>
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
        
          {
          // <div className='column is-4'>
          //   <ArticleCard />
          // </div>
          // <div className='column is-4'>
          //   <ArticleCard />
          // </div>
          // <div className='column is-4'>
          //   <ArticleCard />
          // </div>
          postsSlice.map((posts, i) => {
            if (i < 2) { 
              return (
                <div key={i} className='columns story-listing-item is-1'>
                {
                  posts.map((post, index) => {
                    return (
                      <div key={index} className='column is-3 story-listing-item is-1'>
                        <ArticleCard
                          post={post}
                          media={this.getMediaById(post.featured_media)}
                          category={this.getCategoryById(post.categories[0])}
                           />
                      </div>
                    )
                  })
                }
                </div>
              )
            }
          })
          
          }
        </div>
      
    )
  }
}

export default StoryListing
