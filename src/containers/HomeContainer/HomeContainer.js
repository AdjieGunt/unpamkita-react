import React from 'react'
import PropTypes from 'prop-types'
import Header from './../../components/Header/Header'
import HeroHome from './../../components/Hero/HeroHome/HeroHome'
import StoryListing from './../../components/StoryListing/StoryListing'
// import HeroInfo from './../../components/Hero/HeroInfo/HeroInfo'
import Footer from './../../components/Footer/Footer'
import { connect } from 'react-redux'
import Spinner from './../../components/Spinner'
// import * as postActions from './../../actions/PostActions'


class HomeContainer extends React.Component {
  render () {
    const elem = () => {
      return (
        <div>
          <Header />
          <HeroHome />
          <StoryListing
            listingtitle='Artikel Pilihan'
            posts={this.props.posts}
            media={this.props.media}
            categories={this.props.categories}
          />
          <Footer />
        </div>
      )
    }
    // console.log(this.props.media.length)
    if (this.props.media.length === 0) { 
      return (
        <div>
          <Header />
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

export default connect(mapStateToProps)(HomeContainer)
