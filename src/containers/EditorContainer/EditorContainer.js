import React from 'react'
import PropTypes from 'prop-types'
import Header from './../../components/Header/Header'
import MyEditor from './../../components/MyEditor'
import Footer from './../../components/Footer/Footer'
import { connect } from 'react-redux'
import Spinner from './../../components/Spinner'
// import * as postActions from './../../actions/PostActions'
import { loadMedia, loadPosts, loadCategories } from './../../actions/PostActions'


class EditorContainer extends React.Component {
 
  componentDidMount(){
    this.props.dispatchData()
    document.title = 'Unpamkita.com'
    
  }

  render () {
    // console.log(this.props)
      return (
        <div>
          <Header />
        
        <div className='container'>
          <MyEditor />
          
        </div> 
        <Footer />
        </div>
      )
    
  }
}

EditorContainer.propTypes = {
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



export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditorContainer)
