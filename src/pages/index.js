import React from 'react'
import Hero from '../components/hero/hero'
import Services from '../components/services/services'
import '../scss/main.scss'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../layout/layout/layout'
import LogoGrid from '../components/logoGrid/logoGrid'
import Team from '../components/team/team'
import CaseStudies from '../components/caseStudies/caseStudies'
import Contact from '../components/contact/contact'
import FAQS from '../components/faqs/faqs'
//import TopButton from '../utils/scrollToTop'

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
    <Layout id="indexPage" className="indexPage">
      <main className="indexPage" id="indexPage">
        <Hero />
        <LogoGrid />
        <Services />
        <CaseStudies />
        <Team />
        <FAQS />
        <Contact />
      </main>
    </Layout>
    
  )
}

export default IndexPage