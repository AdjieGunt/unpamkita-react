import React from 'react'
// import PropTypes from 'prop-types'
import './Footer.scss'
import SimpleLineIcon from 'react-simple-line-icons'


class Footer extends React.Component {
  render () {
    // console.log(this.props.posts)
    return (
      <footer className="footer">
        <div className="container">
            <div className="content">
            <div className='is-size-7'>
                <ul className='social-media'>
                  <li><a href='https://www.facebook.com/unpamkita'> <SimpleLineIcon name='social-facebook' /></a> </li>
                  {/* <li><SimpleLineIcon name='social-facebook' /></li> */}
                  <li><a href='https://www.instagram.com/unpamkita'> <SimpleLineIcon name='social-instagram' /></a></li>
                </ul>
                
                <strong>Unpamkita.com</strong> - All rights reserved. Copyright 2017
            </div>
            </div>
        </div>
    </footer>
    )
  }
}



export default Footer
