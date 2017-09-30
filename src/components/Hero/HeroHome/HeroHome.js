import React from 'react'
import './HeroHome.scss'

class HeroHome extends React.Component {
  render () {
    return (
      <section className="hero is-medium is-info is-bold">
        <div className="hero-body container">
            <div className="container">
            <h1 className="title">
                Serunya jadi mahasiswa gak datang dua kali
            </h1>
            <h2 className="subtitle">
                temukan dan bagikan serunya cerita mu disini!
            </h2>
            </div>
        </div>
        </section>
    )
  }
}

export default HeroHome
