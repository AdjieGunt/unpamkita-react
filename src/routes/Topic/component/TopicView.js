import React from 'react'
import Header from './../../../components/Header'
import Footer from './../../../components/Footer'
import CategoryContainer from './../../../containers/CategoryContainer'

// export const ReadView = () => (
//   <div>
//     <Header />
//     <ReadPageContainer slug={this.props} />
//   </div>
// )

class TopicView extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <CategoryContainer slug={this.props.params.slug} />
        <Footer />
      </div>
    )
  }
}

export default TopicView
