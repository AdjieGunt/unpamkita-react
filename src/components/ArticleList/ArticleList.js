import React from 'react'
import './ArticleList.scss'
import ArticleCard from './../ArticleCard/ArticleCard'
// import 'bootstrap-4-grid'
import { Grid, Row, Col } from 'react-flexbox-grid'
import FeaturedImage from './assets/sarjana.jpg'
import TimeAgo from 'react-timeago'


class ArticleList extends React.Component {
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
    // console.log("Component Render")
    // console.log(this.arrayHelper(this.props.posts, 4))
    // const postsSlice = this.arrayHelper(this.props.posts, 4)    
    return (
      <div className='article-list'>
        <Grid >
          <Row>
            <Col xs={12}>
              <h2 className='title'> {this.props.listingtitle } </h2> 
            </Col>
          </Row>
          <Row>
          {
            this.props.posts.map((post, index) => {
              return(
                <Col xs={12} md={3} key={index}>
                  <ArticleCard 
                  post={post}
                  media={this.getMediaById(post.featured_media)}
                  category={this.getCategoryById(post.categories[0])}
                   />   
              </Col>
              )
            })
          }
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ArticleList
