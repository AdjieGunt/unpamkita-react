import React from 'react'
import Header from './../../../components/Header'
import Footer from './../../../components/Footer'
import ReadPageContainer from './../../../containers/ReadPageContainer'

// export const ReadView = () => (
//   <div>
//     <Header />
//     <ReadPageContainer slug={this.props} />
//   </div>
// )

class ReadView extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <ReadPageContainer slug={this.props.params.slug} />
        <Footer />
      </div>
    )
  }
}

export default ReadView
