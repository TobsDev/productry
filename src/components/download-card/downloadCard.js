import React, { useState } from 'react';
import Button from '../button/button';
import luexLogo from '../../images/case-images/luex.png'
import close from '../../images/icon-close_black.svg'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links"


function DownloadCard (props) {

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

    // configuring the modal
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(!modal)

    // setting images
    let logos = [luexLogo, luexLogo, luexLogo];
    let logo = logos[props.id - 1]

    // JSX
    return (
        <div className={`downloadCard ${modal ? "downloadCard--modal" : ""}`} onClick={toggleModal} >
            <Img 
                alt="some description" 
                className="downloadCard__image"
                fluid={data.allImageSharp.edges[0].node.fluid}
                backgroundColor
            />
            <div className="downloadCard__content">
                <h5 className="downloadCard__title">{props.name}</h5>
                <p className="downloadCard__version">{props.minVersion}</p>
                {/*<Button 
                    cta="Let's talk"
                    className="downloadCard__button"
                />*/}
                <AnchorLink to="#contact" title="Contact" className="downloadCard__cta" stripHash>
                    <span className="downloadCard__cta">Let's talk</span>
                </AnchorLink>
            </div>
            <div className="downloadCard__header">
                <p className="downloadCard__header__logo">smarto</p>
                <img 
                    src={close} 
                    alt="close nav" 
                    className="downloadCard__header__close"
                    onClick={toggleModal}
                />
            </div>
        </div>
    );
}

export default DownloadCard