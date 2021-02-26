import React from 'react'
import Header from '../layout/header/header'
import Hero from '../components/hero/hero'
import Features from '../components/features/features'
import Downloads from '../components/downloads/download'
import FAQS from '../components/faqs/faqs'
import Contact from '../components/contact/contact'
import Footer from '../layout/footer/footer'
import TopButton from '../utils/scrollToTop'
import '../scss/main.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../layout/layout/layout'
import LogoGrid from '../components/logoGrid/logoGrid'
import Team from '../components/team/team'

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
    <Layout>
      <div id="indexPage" className="indexPage">
        <Hero />
        <LogoGrid />
        <Features />
        <Downloads />
        <Team />
        <FAQS />
        <Contact />
      </div>
    </Layout>
    
  )
}

export default IndexPage