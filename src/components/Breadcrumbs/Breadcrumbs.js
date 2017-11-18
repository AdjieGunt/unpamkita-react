import React , { Component } from 'react'
import './Breadcrumbs.scss'

class Breadcrumbs extends Component {
  render(){
    const { date, author } = this.props
  
    return(
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Home</a></li>
           <li><a href="#">{this.props.term}</a></li>
          {/*<li><a href="#">Components</a></li> */}
          <li className="is-active"><a href="#" aria-current="page">{this.props.title}</a></li>
        </ul>
      </nav>
    )
  }
}

export default Breadcrumbs