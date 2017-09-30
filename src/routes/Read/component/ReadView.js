import React, { Component } from 'react'
// import DuckImage from '../assets/Duck.jpg'
// import './HomeView.scss'
import Header from './../../../components/Header'
// import HeroHome from './../../../components/Hero/HeroHome/HeroHome'
// import StoryListing from './../../../components/StoryListing/StoryListing'
import ArticleDetail from './../../../components/ArticleDetail/ArticleDetail'
import Footer from './../../../components/Footer/Footer'

// export const ReadView = () => (
//   <div>
//     <Header />
//     <HeroHome />
//     <StoryListing />
//     <StoryListing />
//     <Footer />
//   </div>
// )

class ReadView extends Component {
  render () {
    return (
      <div>
        <Header /> 
      <section className='section'>
        <div className="container">
          <div className="columns">
            <div className="column is-offset-2 is-8">
              <ArticleDetail />
            </div>
          </div>
        </div>
      </section>
      <Footer />
     </div>
    )
  }
}

export default ReadView
