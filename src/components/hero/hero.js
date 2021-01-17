import React from 'react';
import Button from '../../components/button/button';
import heroIllustration from '../../images/illustration-hero.svg';
import { graphql, useStaticQuery } from 'gatsby';
// import backgroundShape from '../../images/background-shape-long.svg'

function Hero() {

   const data = useStaticQuery(graphql`
   query HeroSection {
    allGoogleSheetHeroRow {
      edges {
        node {
          id
          name
          subtitle
          valueprop
          calltoaction
          description
          imagealt
          imageurl
        }
      }
    }
  }
    `)

    return (
        <div className="hero" id={data.allGoogleSheetHeroRow.nodes[0].name}>
            <div className="hero__viewport">
                <div className="hero__illustrationContainer">
                    <img 
                        src={heroIllustration}
                        alt={data.allGoogleSheetHeroRow.nodes[0].imagealt} 
                        className="hero__image"
                    />
                </div>
                <div className="hero__claim-container">
                    <h1 className="hero__headline">{data.allGoogleSheetHeroRow.nodes[0].valueprop}</h1>
                    <p className="hero__claim">{data.allGoogleSheetHeroRow.nodes[0].description}</p>
                    <div className="hero__buttons">
                        <Button 
                            className="hero__button hero__button1"
                            cta={data.allGoogleSheetHeroRow.nodes[0].calltoaction}
                        />
                        <Button 
                            cta="Get it on Firefox"
                            className="hero__button hero__button--secondary hero__button2"
                        />
                    </div>
                </div>
            </div>
        </div>   
    );
}

export default Hero