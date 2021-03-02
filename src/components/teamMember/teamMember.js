import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'


// need to change to linkedin icon
import close from '../../images/icon-close_black.svg'


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
        <div className="teamMember" style={{gridArea: props.gridArea}}>
            <Img 
                alt="some description" 
                className="teamMember__image"
                fluid={data.allImageSharp.edges[0].node.fluid}
                backgroundColor
            />
            <div className="teamMember__content">
                <h5 className="teamMember__title">{props.name}</h5>
                <p className="teamMember__description">{props.description}</p>
                <a href={props.linkedIn} className="teamMember__socialLinks">
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


        