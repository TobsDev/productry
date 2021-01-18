import React from 'react';
import Button from '../../components/button/button';
import heroIllustration from '../../images/illustration-hero.svg';
import { graphql, useStaticQuery } from 'gatsby';
import parseMarkdown from '../../utils/markdownParser';
// import backgroundShape from '../../images/background-shape-long.svg'

function Hero() {

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
    markdowncontent } = data.allGoogleSheetPagecontentRow.edges[0].node

    return (
        <div className="hero" id={id}>
            <div className="hero__viewport">
                <div className="hero__illustrationContainer">
                    <img 
                        src={imageurl}
                        alt={imagealt} 
                        className="hero__image"
                    />
                </div>
                <div className="hero__markdownContent-container">
                    <h1 className="hero__headline">{title}</h1>
                    <h2 className="hero__subtitle">{subtitle}</h2>
                    <div className="hero__markdownContent" dangerouslySetInnerHTML={{__html: parseMarkdown(markdowncontent)}}></div>
                    <div className="hero__buttons">
                        <Button 
                            className="hero__button hero__button1"
                            cta={cta}
                            url={ctatarget}
                        />
                        
                    </div>
                </div>
            </div>
        </div> 
    );
}

// const Hero = () => <div>test</div>

export default Hero