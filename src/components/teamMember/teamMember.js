import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'


function TeamMember(props) {

    // image qurey
    const data = useStaticQuery(graphql`
    query teamMemberImage {
        allImageSharp(filter: {original: {}, id: {eq: "659457f0-bb66-53af-837c-34fa6367a09d"}}) {
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

    return (
        <div className={`teamMember ${props.reverse ? "teamMember--reverse" : ""}`} style={{gridArea: props.gridArea}} id={props.id}>
            <motion.div 
                className="teamMember__imageContainer"
                transition={{ duration: 0.2 }}
                whileHover={{scale: 1.05}}>
                <Img 
                    alt="some description" 
                    className="teamMember__image"
                    fluid={data.allImageSharp.edges[0].node.fluid}
                    backgroundColor
                />
            </motion.div>
            
            <div className="teamMember__content">
                <h5 className="teamMember__title">{props.name}</h5>
                <p className="teamMember__description">{props.description}</p>
                <a 
                    href={props.linkedIn} 
                    className="teamMember__socialLinks" 
                    target="_blank">
                    <FaLinkedinIn 
                        className="teamMember__linkedInIcon"
                        alt={props.name}
                        style={{ fill: "#DB2763" }}
                        size='2rem'
                        
                    />
                </a>
            </div>
        </div>
    )
}

export default TeamMember


        