import React from 'react'
// import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import Header from './../../../components/Header'
import HeroHome from './../../../components/Hero/HeroHome/HeroHome'
import StoryListing from './../../../components/StoryListing/StoryListing'
import HeroInfo from './../../../components/Hero/HeroInfo/HeroInfo'
import Footer from './../../../components/Footer/Footer'


export const HomeView = () => (
  <div>
    <Header />
    <HeroHome />
    <StoryListing />
    <StoryListing />
    <HeroInfo />
    <StoryListing />
    <Footer />
  </div>
)

export default HomeView
