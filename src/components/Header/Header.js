import React from 'react'
import './Header.scss'
import logo from './../../../public/assets/unpamkita-logo-small.png'
import { Link } from 'react-router'
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive : false,
    }
  }

  navbarMenuToogle = (e) => {
    const isActive = this.state.isActive
    this.setState({
      isActive : !isActive,
    })
  }

  render () {
    let isActive = this.state.isActive ? 'is-active' : ''
    return (
    // <header className='has-shadow'>
      
        <nav className='navbar is-fixed-top has-shadow'>
          <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' href='/'>
              <img src={logo} alt='Unpamkita Logo' />
            </Link>
            <div className={`navbar-burger burger ${isActive}`} data-target='navMenuDocumentation' onClick={(e) => this.navbarMenuToogle(e)}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id='navMenuDocumentation' className={`navbar-menu ${isActive}`}>
            <div className='navbar-start'>
              {/* <Link to='/' className='navbar-item'>Home</Link> */}
              <Link to='/topic/ngampus' className='navbar-item is-tab'>Ngampus</Link>              
              <Link to='/topic/opini' className='navbar-item is-tab'>Opini</Link>
              <Link to='/topic/kabar-alumni' className='navbar-item is-tab'>Kabar Alumni</Link>
              <Link to='/topic/acara-kampus' className='navbar-item is-tab'>Acara Kampus</Link>
            </div>
            <div className='navbar-end'>
              <div className='navbar-item'>
                <a className='button is-info' href='#'>
                  <span>Kirim Tulisan</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </nav>
     
      
    // </header>
    )
  }
}

export default Header
