import React, { useState, useEffect } from 'react';
import Button from '../button/button';
import luexLogo from '../../images/case-images/luex.png'
import close from '../../images/icon-close.svg'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'


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
    const toggleVisibility = () => setModal(!modal)

    // setting images
    let logos = [luexLogo, luexLogo, luexLogo];
    let logo = logos[props.id - 1]

    // JSX
    return (
        <div className={`downloadCard ${modal ? "downloadCard--modal" : ``}`} onClick={toggleVisibility} >
            <Img 
                alt="some description" 
                className="downloadCard__logo--test"
                fluid={data.allImageSharp.edges[0].node.fluid}
            / >
    {/*<img src={logo} alt="" className="downloadCard__logo" />*/}
            <div className="downloadCard__content">
                <h5 className="downloadCard__title">{props.name}</h5>
                <p className="downloadCard__version">{props.minVersion}</p>
                <Button 
                    cta="Add & Install Extension"
                    className="downloadCard__button"
                />
            </div>
            <div className="downloadCard__header">
                <img src={close} alt="" className="downloadCard__header__logo" />
                <img src={close} alt="" className="downloadCard__header__close" />
            </div>
        </div>
    );
}

export default DownloadCard