import React from 'react'
import Header from '../layout/header/header'
import Hero from '../components/hero/hero'
import Features from '../components/features/features'
import Downloads from '../components/downloads/download'
import FAQS from '../components/faqs/faqs'
import Newsletter from '../components/newsletter/newsletter'
import Footer from '../layout/footer/footer'
import '../scss/main.scss'
import BackgroundImage from '../layout/backgroundImage'
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query HeroBackground {
    allGoogleSheetPagecontentRow(filter: {name: {eq: "Hero"}, language: {eq: "en"}}) {
      edges {
        node {
          imageurl
          backgroundcolor
        }
      }
    }
  }`)

  let { imageurl, backgroundcolor } = data.allGoogleSheetPagecontentRow.edges[0].node

  return(
    <div className = "indexPage" id="indexPage">
      <Header />
      <BackgroundImage 
        url={imageurl} 
        backgroundcolor={backgroundcolor}
        className="hero__backgroundImage"
        >
        <Hero />
      </BackgroundImage>
      <Features />
      <Downloads />
      <FAQS />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default IndexPage