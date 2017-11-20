import React , { Component } from 'react'
import './Breadcrumbs.scss'
import {Link} from 'react-router'

class Breadcrumbs extends Component {
  render(){
    const { date, author } = this.props
  
    return(
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Home</a></li>
           <li><Link to={{ pathname: 'tes', query: {cat_id : 1}}} href="#">{this.props.term}</Link></li>
          {/*<li><a href="#">Components</a></li> */}
          {/* <li className="is-active"><a href="#" aria-current="page">{this.props.title}</a></li> */}
        </ul>
      </nav>
    )
  }
}

export default Breadcrumbs