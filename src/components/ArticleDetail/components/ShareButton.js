import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ShareButton'
import {
  ShareButtons,
  // ShareCounts,
  generateShareIcon
} from 'react-share'

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} = ShareButtons

// const {
//   FacebookShareCount,
//   GooglePlusShareCount,
// } = ShareCounts

class ShareButton extends Component {
  render () {
    const FacebookIcon = generateShareIcon('facebook')
    const TwitterIcon = generateShareIcon('twitter')
    const GooglePlusIcon = generateShareIcon('google')
    const WhatsappIcon = generateShareIcon('whatsapp')
    const { excerpt, _url, size } = this.props
    return (
      <div className='columns share-button-area__desktop is-mobile'>
        <div className='column is-3 '>
          <FacebookShareButton quote={excerpt} url={_url}>
            <FacebookIcon size={size} />
          </FacebookShareButton>
        </div>
        <div className='column is-3'>
          <TwitterShareButton quote={excerpt} url={_url}>
            <TwitterIcon size={42} />
          </TwitterShareButton>
        </div>
        <div className='column is-3'>
          <GooglePlusShareButton quote={excerpt} url={_url}>
            < GooglePlusIcon size={size} />
          </GooglePlusShareButton>
        </div>
        <div className='column is-3'>
          <WhatsappShareButton quote={excerpt} url={_url}>
            <WhatsappIcon size={size} />
          </WhatsappShareButton>
        </div>
      </div>
    )
  }
}

ShareButton.propTypes = {
  _url : PropTypes.string,
  size : PropTypes.number,
  excerpt: PropTypes.string
}

export default ShareButton
