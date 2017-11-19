import React from 'react'
import './ArticleDetail.scss'
import PropTypes from 'prop-types'
import FacebookProvider, { Comments } from 'react-facebook'
import ArticleMeta from '../ArticleMeta'
import LazyLoad from 'react-lazy-load'
import Breadcrumbs from '../Breadcrumbs'
import * as config from '../../constants/Constants'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share'

class ArticleDetail extends React.Component {
  
  constructor (props){
    super()
    this.post = {}
  }

  componentWillReceiveProps(){
    console.log('will un mount')
  }

  componentDidMount(){
    console.log(this.props.post)
    console.log(this.post)
  }

  render () {
    const {
      FacebookShareButton,
      GooglePlusShareButton,
      TwitterShareButton,
      TelegramShareButton,
      WhatsappShareButton,
      EmailShareButton,
    } = ShareButtons

    const {
      FacebookShareCount,
      GooglePlusShareCount,
    } = ShareCounts
    
    const FacebookIcon = generateShareIcon('facebook')
    const TwitterIcon = generateShareIcon('twitter')
    const GooglePlusIcon = generateShareIcon('google')
    const WhatsappIcon = generateShareIcon('whatsapp')
    const EmailIcon = generateShareIcon('email')

  //  let post = this.post
   const {post} = this.props
  //  this.post = post
   let feature_media = post._embedded['wp:featuredmedia']['0']
   console.log(post._embedded)
   let FeaturedImage = 'http://via.placeholder.com/350x200'    
   if ( typeof feature_media.media_details.sizes.thumbnail !== 'undefined') {
     FeaturedImage = feature_media.media_details.sizes.full.source_url
   } else {
     FeaturedImage = feature_media.media_details.sizes.medium.source_url      
   }

   let author = post._embedded['author']['0']
   let term = post._embedded['wp:term']['0']
    return (
      <div>
        <div className='is-single'>
          <Breadcrumbs title={post.title.rendered} term={term[0].name}/>
          <section className='section__header'>
            <div className='article-title section__header-title'>
              <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </div>
          
          
            <div className='article-detail-meta'>
                <div className='columns'>
                  <div className='column is-8'>
                    <ArticleMeta date={post.date_gmt} author={author} />
                  </div>
                  <div className='cloumn is-4 is-hidden-mobile'>
                    <div className='columns share-button-area__desktop is-mobile'>
                      <div className='column is-3 '>
                        <FacebookShareButton quote={post.excerpt.rendered} url="http://unpamkita.com">
                          <FacebookIcon size={42} />
                        </FacebookShareButton>
                      </div>
                      <div className='column is-3'>                      
                        <TwitterShareButton quote={post.excerpt.rendered} url="http://unpamkita.com">
                          <TwitterIcon size={42} />
                        </TwitterShareButton>
                      </div>
                      <div className='column is-3'>                      
                        <GooglePlusShareButton quote={post.excerpt.rendered} url="http://unpamkita.com">
                          < GooglePlusIcon size={42} />
                        </GooglePlusShareButton>
                      </div>
                      <div className='column is-3'>                      
                        <WhatsappShareButton quote={post.excerpt.rendered} url="http://unpamkita.com">
                          <WhatsappIcon size={42} />
                        </WhatsappShareButton>
                      </div>
                    </div>
                </div>
                <div className='cloumn is-4 is-hidden-tablet'>
                    <div className='columns is-mobile' style={{marginLeft:'0px'}}>
                      <div className='column is-2 '>
                        <FacebookShareButton quote={post.excerpt.rendered} url="http://unpamkita.com">
                          <FacebookIcon size={32} />
                        </FacebookShareButton>
                      </div>
                      <div className='column is-2'>                      
                        <TwitterShareButton quote={post.excerpt.rendered} url="http://unpamkita.com">
                          <TwitterIcon size={32} />
                        </TwitterShareButton>
                      </div>
                      <div className='column is-2'>                      
                        <GooglePlusShareButton quote={post.excerpt.rendered} url="http://unpamkita.com">
                          < GooglePlusIcon size={32} />
                        </GooglePlusShareButton>
                      </div>
                      <div className='column is-2'>                      
                        <WhatsappShareButton quote={post.excerpt.rendered} url="http://unpamkita.com">
                          <WhatsappIcon size={32} />
                        </WhatsappShareButton>
                      </div>
                    </div>
                </div>
              </div>
            </div> 
          </section>
          
          <figure className='image article-featured-image is-2by1'>
              <img src={FeaturedImage} alt='Gambar artikel' className='lazy lazyLoaded' />
            <caption>aa</caption>
          </figure>

          <section className='section'>
            <div className='content'>
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
            <FacebookProvider appId='373119386442338'>
              <Comments width='100%' href={config.APP_URL + '/' + post.slug} />
            </FacebookProvider>
            {/* <div className='tags'>
              <span className='tag is-info'>Unpam</span>
              <span className='tag is-info'>Kabar Alumni</span>
              <span className='tag is-info'>Event</span>
            </div> */}
          </section>
        </div>
      </div>
    )
  }
}

ArticleDetail.propTypes = {
  post : PropTypes.object,
  media : PropTypes.object
}

export default ArticleDetail
