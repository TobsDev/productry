import React from 'react';
import Button from '../../components/button/button';
import { graphql, useStaticQuery } from 'gatsby';
import parseMarkdown from '../../utils/markdownParser';
import BackgroundImage from 'gatsby-background-image'
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
    allImageSharp(filter: {fixed: {src: {regex: "/2244e/"}}}) {
        nodes {
            fixed(fit: COVER) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
        }
    },
    background: allImageSharp(filter: {original: {src: {eq: "/static/4685-41127873ed5903d1db23dcb89caecbb3.jpg"}}}) {
        nodes {
            original {
                src
            }
            fluid(quality: 100, maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
  }`) 

const fluidBackgroundImage = data.background.nodes[0].fluid;

// desctructure page content from query
const { page,
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
        <BackgroundImage
            Tag={name}
            id={name}
            fluid={fluidBackgroundImage}
            className="hero__backgroundImage"
            backgroundColor={`white`}
            style={{backgroundSize: 'cover',
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat'
              }}>
            <div className="hero" id="hero">
                <div className="hero__viewport">
                    <div className="hero__illustrationContainer">
                        <Img 
                            alt={imagealt} 
                            className="hero__image--test" 
                            
                            // fluid={fluidBackgroundImage}
                        / >
                        {/* <a href='https://www.freepik.com/vectors/background'>Background vector created by macrovector - www.freepik.com</a> */}
                    </div>
                        
                    <div className="hero__markdownContent-container">
                        <h2 className='hero__subtitle'>{subtitle}</h2>
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
        </BackgroundImage>
    );
}

export default Hero