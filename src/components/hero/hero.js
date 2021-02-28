import React from 'react';
import Button from '../../components/button/button';
//import heroIllustration from '../../images/illustration-hero.svg';
import { graphql, useStaticQuery } from 'gatsby';
import parseMarkdown from '../../utils/markdownParser';
// import backgroundShape from '../../images/background-shape-long.svg'
import BackgroundImage from '../../layout/backgroundImage';
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Hero() {

// data query
const data = useStaticQuery(graphql`
query HeroSection {
    allGoogleSheetPagecontentRow(filter: {name: {eq: "Hero"}, language: {eq: "en"}}) {
      edges {
        node {
          page
          name
          imageurl
          imagealt
          id
          ctatarget
          cta
          contentid
          subtitle
          title
          type
          useinnav
          markdowncontent
          backgroundcolor
        }
      }
    },
    allImageSharp(filter: {id: {eq: "5bcfcff9-4601-5c2d-8442-02e1e702bede"}}) {
        nodes {
            fixed(fit: COVER) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
  }`) 

let { page,
    name,
    imageurl,
    imagealt,
    id,
    ctatarget,
    cta,
    contentid,
    subtitle,
    title,
    type,
    useinnav,
    markdowncontent,
    backgroundcolor } = data.allGoogleSheetPagecontentRow.edges[0].node

    return (
        <div className="hero" id="hero" style={{backgroundColor: backgroundcolor}}>
            <div className="hero__viewport">
                <div className="hero__illustrationContainer">
                    <Img 
                        alt={imagealt} 
                        className="hero__image--test" 
                        fixed={data.allImageSharp.nodes[0].fixed}
                    / >
                    
                </div>
                    <div className="hero__markdownContent-container">
                        <h2 className="hero__subtitle">{subtitle}</h2>
                        <h1 className="hero__headline">{title}</h1>
                        <div className="hero__markdownContent" dangerouslySetInnerHTML={{__html: parseMarkdown(markdowncontent)}}></div>
                        <div className="hero__buttons">
                            <Button 
                            className="hero__button hero__button1"
                            cta={cta}
                            url={ctatarget}
                            >
                                <AnchorLink to="#contact" className="hero__button__cta">
                                    {cta}
                                </AnchorLink>
                            </Button>    
                        </div>
                    </div>
                </div>
        </div> 
    );
}

export default Hero