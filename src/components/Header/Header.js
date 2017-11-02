import React from 'react'
import './Header.scss'
import logo from './../../../public/assets/unpamkita-logo-small.png'

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
    <header>
      <div className='container'>
        <nav className='navbar'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='/'>
              <img src={logo} alt='Unpamkita Logo' />
            </a>
            <div className={`navbar-burger burger ${isActive}`} data-target='navMenuDocumentation' onClick={(e) => this.navbarMenuToogle(e)}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id='navMenuDocumentation' className={`navbar-menu ${isActive}`}>
            <div className='navbar-start'>
              <a href='#' className='navbar-item'>Home</a>
              <a href='#' className='navbar-item'>Artikel</a>
              <a href='#' className='navbar-item'>Kabar Kampus</a>
              <a href='#' className='navbar-item'>Viral</a>
              <a href='#' className='navbar-item'>Rekomendasi</a>
              <a href='#' className='navbar-item'>Kabar Dosen</a>
              <a href='#' className='navbar-item'>Kabar Alumni</a>
              <a href='#' className='navbar-item'>Event</a>
              <div className='navbar-item'>
                <a className='button is-info' href='#'>
                  <span>Kirim Tulisan</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    )
  }
}

export default Header
