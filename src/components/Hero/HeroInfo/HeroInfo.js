import React from 'react'
import './HeroInfo.scss'

class HeroInfo extends React.Component {
  render () {
    return (
      <section className="hero is-info is-bold">
        <div className="hero-body has-text-centered">
            <h1 className="title is-size-4">
                Mari berkontribusi untuk komunitas Unpamkita!
            </h1>
            <h2 className="subtitle">
                Kami tunggu artikel menarik kamu seputar keseruan kehidupan kampus. <br/>
            </h2>
            <h1 className="title is-size-6">
            Kirimkan tulisan mu ke unpamkitamedia@gmail.com
            </h1>

            
        </div>
        </section>
    )
  }
}

export default HeroInfo

