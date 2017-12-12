import React from 'react'
// import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
// import 'bulma'
// import 'react-flexbox-grid'
// import 'bootstrap/dist/css/bootstrap.css'

export const PageLayout = ({ children }) => (
    <div className='page-layout__viewport'>
      {children}
    </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout


// export const PageLayout = ({ children }) => (
//   <div className='container text-center'>
//     <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
//     {' · '}
//     <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
//     <div className='page-layout__viewport'>
//       {children}
//     </div>
//   </div>
// )
// PageLayout.propTypes = {
//   children: PropTypes.node,
// }

// export default PageLayout
