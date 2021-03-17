import React, { useState } from 'react';
import luexLogo from '../../images/case-images/luex.png'
import close from '../../images/icon-close_black.svg'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { motion } from 'framer-motion'


function CaseStudy ({name, content, caseId, toggleModal}) {

    // image query
    const data = useStaticQuery(graphql`
    query luexCaseImage {
        allImageSharp(filter: {original: {}, id: {eq: "0ec8f374-3f26-563e-925f-610a58dccf84"}}) {
          edges {
            node {
              id
              original {
                src
              }
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }`) 

    // setting images
    let logos = [luexLogo, luexLogo, luexLogo];
    let logo = logos[caseId - 1]



    // JSX
    return (
        <> 
            <motion.div 
                className="caseStudy "
                onClick={toggleModal} 
                whileHover={{ 
                    scale: 1.0125, 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                whileTap={{ scale: 0.95 }}
            >
                <Img 
                    alt="some description" 
                    className="caseStudy__image"
                    fluid={data.allImageSharp.edges[0].node.fluid}
                    backgroundColor
                />
                <div className="caseStudy__content">
                    <h5 className="caseStudy__title">{name}</h5>
                    <p className="caseStudy__content">{content}</p>
                </div>
                <AnchorLink to="#contact" title="Contact" className="caseStudy__cta" stripHash>
                    <span className="caseStudy__cta">Let's talk</span>
                </AnchorLink>
            </motion.div>
        </>
    );
}

export default CaseStudy