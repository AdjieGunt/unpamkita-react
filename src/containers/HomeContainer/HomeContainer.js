import React from 'react'
import PropTypes from 'prop-types'
import Header from './../../components/Header/Header'
import HeroHome from './../../components/Hero/HeroHome/HeroHome'
import FeaturedPost from './../../components/FeaturedPosts/FeaturedPost'
import StoryListing from './../../components/StoryListing/StoryListing'
// import HeroInfo from './../../components/Hero/HeroInfo/HeroInfo'
import Footer from './../../components/Footer/Footer'
import { connect } from 'react-redux'
import Spinner from './../../components/Spinner'
// import * as postActions from './../../actions/PostActions'
import { loadMedia, loadPosts, loadCategories } from './../../actions/PostActions'


class HomeContainer extends React.Component {
  
  componentDidMount(){
    this.props.dispatchData()  
  }

  render () {
    console.log(this.props)
    const elem = () => {
      return (
        <div>
          <Header />
          <FeaturedPost 
            posts={this.props.posts}
            media={this.props.media}
          />
        <div className='column container' >
          <StoryListing
            listingtitle='Latest Post'
            posts={this.props.posts}
            media={this.props.media}
            categories={this.props.categories}
          />
          
        </div>
        <Footer />
        </div>
      )
    }
    // console.log(this.props.media.length)
    if (this.props.media.length === 0) { 
      return (
        <div>
          <Header />
          {/* <FeaturedPost /> */}
          <Spinner />
        </div>
        )
    } else {
      return elem()
    }
  }
}

HomeContainer.propTypes = {
  posts : PropTypes.array,
  media : PropTypes.array,
  categories : PropTypes.array,
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    posts : state.posts,
    media : state.media,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchData: () => {
      dispatch(loadPosts())
      dispatch(loadMedia())
      dispatch(loadCategories())
    }
  }
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    posts : stateProps.posts,
    media : stateProps.media,
    categories : stateProps.categories,
    dispatchData : dispatchProps.dispatchData
  }
}



export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(HomeContainer)
