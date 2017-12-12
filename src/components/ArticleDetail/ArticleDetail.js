import React from 'react'
import './ArticleDetail.scss'
import PropTypes from 'prop-types'
import FacebookProvider, { Comments } from 'react-facebook'
import ArticleMeta from '../ArticleMeta'
// import LazyLoad from 'react-lazy-load'
import Breadcrumbs from '../Breadcrumbs'
import * as config from '../../constants/Constants'
import MetaTags from 'react-meta-tags'
import ShareButton from './components/ShareButton'

class ArticleDetail extends React.Component {
  constructor (props) {
    super()
    // this.post = {}
    // this.author = {}
    // this.term = {}
    // this.FeaturedImage = ""
  }

  componentWillReceiveProps (nextProps) {
    this.post = {}
    this.author = {}
    this.term = {}
    // this.FeaturedImage = ""
    this.full_url = ''
    console.log(this.post)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('should component update')
    return true
  }

  componentWillUpdate (nextProps) {
    this.post.post = nextProps.post
    this.author = nextProps.post._embedded['author']['0']
    this.term = nextProps.post._embedded['wp:term']['0']
    // this.FeaturedImage = ""
    let feature_media = nextProps.post._embedded['wp:featuredmedia']['0']
    if ( typeof feature_media.media_details.sizes.thumbnail !== 'undefined') {
      this.FeaturedImage = feature_media.media_details.sizes.full.source_url
    } else {
      this.FeaturedImage = feature_media.media_details.sizes.medium.source_url      
    }
    // console.log(this.post)  
    this.full_url = config.APP_URL + '/read/' + this.post.post.slug 
  }

  componentWillUnMount () {
    // console.log('tes')
  }

  componentDidMount () {
    document.title = this.props.post.title.rendered + ' - Unpamkita.com'
    this.full_url = config.APP_URL + '/read/' + this.post.post.slug;
  }

  componentWillMount () {
    // console.log(this.props.post)
    // console.log(this.post)
    const { post } = this.props
    this.post = this.props
    let feature_media = post._embedded['wp:featuredmedia']['0']
    if (typeof feature_media.media_details.sizes.thumbnail !== 'undefined') {
      this.FeaturedImage = feature_media.media_details.sizes.full.source_url
    } else {
      this.FeaturedImage = feature_media.media_details.sizes.medium.source_url      
    }
    this.author = post._embedded['author']['0']
    this.term = post._embedded['wp:term']['0']
    this.full_url = config.APP_URL + '/read/' + this.post.post.slug;
    this.captionMedia = feature_media.caption.rendered
    this.captionMedia.replace(/(<([^>]+)>)/ig, '').replace('[&hellip;]', '').replace(/(&([^>]+);)/ig, '')
  }

  cleanExcerpt (html) {
    return html.replace(/(<([^>]+)>)/ig, '').replace('[&hellip;]', '').replace(/(&([^>]+);)/ig, '')
  }

  render () {
    let post = this.post.post
    let term = this.term
    let author = this.author

    const excerpt = this.cleanExcerpt(post.excerpt.rendered)

    // console.log(post)
    return (
      <div>
        <MetaTags>
          <meta name='description' content={excerpt} />
          <meta property='og:title' content={post.title.rendered} />
          <meta property='og:image' content={this.FeaturedImage} />
        </MetaTags>
        <div className='is-single'>
          <Breadcrumbs term={term[0].name} />
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
                  <ShareButton _url={this.full_url} size={42} excerpt={excerpt} />
                </div>
              </div>
              <div className='cloumn is-4 is-hidden-tablet'>
                <div className='columns is-mobile' style={{ marginLeft:'0px' }}>
                  <ShareButton _url={this.full_url} size={32} excerpt={excerpt} />
                </div>
              </div>
            </div>
          </section>
          <figure className='image article-featured-image is-2by1'>
            <img src={this.FeaturedImage} alt='Gambar artikel' className='lazy lazyLoaded' />
          </figure>
          <span className='caption' dangerouslySetInnerHTML={{ __html: this.captionMedia }} />

        
            <div className='content'>
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
            <FacebookProvider appId='373119386442338'>
              <Comments width='100%' href={this.full_url} />
            </FacebookProvider>
            {/* <div className='tags'>
              <span className='tag is-info'>Unpam</span>
              <span className='tag is-info'>Kabar Alumni</span>
              <span className='tag is-info'>Event</span>
            </div> */}
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
