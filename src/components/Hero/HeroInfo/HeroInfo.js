import React from 'react'
import './HeroInfo.scss'

class HeroInfo extends React.Component {
  render () {
    return (
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body container has-text-centered">
            <div className="container">
            <h1 className="title">
                Kirimkan tulisanmu ke unpamkita
            </h1>
            <br/>
            <h2 className="subtitle">
                Kamu berkesempatan untuk menuliskan ceritamu melalui Unpamkita, <br/> dan dibaca ribuan pembaca setiap harinya.
            </h2>
            </div>
        </div>
        </section>
    )
  }
}

export default HeroInfo

