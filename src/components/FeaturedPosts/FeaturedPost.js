import React from 'react'
import './FeaturedPost.scss'
import sampleImage from './assets/Lighthouse.jpg'
import sampleImage2 from './assets/sarjana.jpg'



class FeaturedPost extends React.Component {

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

  render() {
    console.log(this.props.posts)
    const featuredPosts = this.props.posts;
    return(
      <div className='container'>
        <section className='cover cover--grid3'>
          {
            featuredPosts.map((post, index) => {
              if (index <= 2) {
              let media = this.getMediaById(post.featured_media)
              let featuredImage = media.media_details.sizes.full.source_url
              // console.log(media) 
              return (
                <article className='cover-story' key={index}>
                  <div className='cover-image'
                  style={{backgroundImage:'url('+featuredImage +')'}}
                  sizes='(max-width:796px) 100vw, 769px'
                  width='769' height='383'
                  ></div>
                  <a className='cover-trigger' href={`/read/${post.slug}`}>
                  </a>
                  <header className='cover-header'>
                    <h2 className='cover-title'>
                      <a href={`/read/${post.slug}`}>
                      {post.title.rendered}
                      </a>
                    </h2>
                  </header>
                </article>
              )
            }
            })
          } 
        </section>
      </div>
    )
  }

}

export default FeaturedPost