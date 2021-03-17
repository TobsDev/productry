import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react';
import projects from '../../content/cases.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import CaseStudy from '../caseStudy/caseStudy'
import Modal from '../modal/modal'
import useScrollBlock from '../../utils/blockScroll'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import parseMarkdown from '../../utils/markdownParser';
import { AnchorLink } from "gatsby-plugin-anchor-links"
import FadeInWhenVisible from '../../utils/fadeInWhenVisible'

function CaseStudies (props) {

    SwiperCore.use([Navigation, Pagination])

    const [modalState, setModalState] = useState(false)
    const [clickedCaseId, setClickedCaseId] = useState(false)
    const toggleModalState = () => setModalState(!modalState)

    //prevent scroll on body when modal is on
    const [blockScroll, allowScroll] = useScrollBlock(modalState)

    //close modal on escape
    const handleEscape = useCallback((e) => {
        if (e.keyCode === 27) {
            setModalState(false);
        }
    }, [])

    //register event listeners
    useEffect(() => {
        document.addEventListener("keydown", handleEscape, false);

        return () => {
          document.removeEventListener("keydown", handleEscape, false);
        };
    }, []);

    //handle scroll prevent on modal on
    modalState ? blockScroll() : allowScroll()

    // image query
    const data = useStaticQuery(graphql`
    query caseImage {
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

    return(
        <div className="caseStudies" id="work">
            <Modal isToggled={modalState} toggleModal={toggleModalState}>
                {   
                    clickedCaseId && <div className="modal__content">
                        <div className="modal__hero">
                            <Img 
                                alt="some description" 
                                className="modal_image"
                                fluid={data.allImageSharp.edges[0].node.fluid}
                                backgroundColor
                            />
                            <div className="modal__hero-overlay"></div>
                            <h4 className="modal__title">{projects[clickedCaseId-1].name}</h4>
                        </div>
                        <h5 className="modal__subtitle">{projects[clickedCaseId-1].name}</h5>
                        <div className="modal__markdownContent" dangerouslySetInnerHTML={{__html: parseMarkdown(projects[clickedCaseId-1].content)}}></div>
                        <AnchorLink to="#contact" title="Contact" className="modal__cta" stripHash >
                            <span className="modal__cta" onClick={() => setModalState(false)}>Let's talk</span>
                        </AnchorLink>
                    </div>
                    }
            </Modal>
            <div className="caseStudies__viewport">
                <div className="caseStudies__description">
                    <h2 className="caseStudies__title">This is what we do</h2>
                    <h3 
                        className="caseStudies__title">our work</h3>
                    <p className="caseStudies__copy">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                </div>
                <Swiper 
                    wrapperTag="ul"
                    slidesPerView={'auto'}
                    loop={true}
                    navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
                    spaceBetween={30}
                    pagination={{ clickable: !modalState }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="caseStudies__list swiper-container"
                    >
                    {projects.map(({caseId, name, content}, index) => {
                        return(
                            <SwiperSlide className="swiperslide" key={index} onClick={() => setClickedCaseId(caseId)}>
                                <CaseStudy 
                                    key={caseId}
                                    id={caseId}
                                    name={`${name}`}
                                    content={`Minimum version ${content}`}
                                    className="swiper-slide"
                                    toggleModal={toggleModalState}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default CaseStudies