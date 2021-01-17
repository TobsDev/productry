import React from 'react';
import Button from '../../components/button/button';
import heroIllustration from '../../images/illustration-hero.svg';
import { graphql, useStaticQuery } from 'gatsby';
import parseMarkdown from '../../utils/markdownParser';
// import backgroundShape from '../../images/background-shape-long.svg'

function Hero() {

   const data = useStaticQuery(graphql`
   query HeroQuery {
    allGoogleSheetSectionsRow(filter: {sectionname: {eq: "Hero"}}) {
      nodes {
        sectioncontent
        sectioncta1
        sectioncta2
        sectionid
        sectionname
        sectionsubtitle
        sectiontitle
        items
        id
        sectioninnav
        sectioncta1Targetpath
      }
    }
  }
    `) 

    return (
        <div className="hero" id={data.allGoogleSheetSectionsRow.nodes[0].id}>
            <div className="hero__viewport">
                <div className="hero__illustrationContainer">
                    <img 
                        src={heroIllustration}
                        alt={data.allGoogleSheetSectionsRow.nodes[0].imagealt} 
                        className="hero__image"
                    />
                </div>
                <div className="hero__markdownContent-container">
                    <h1 className="hero__headline">{data.allGoogleSheetSectionsRow.nodes[0].sectiontitle}</h1>
                    <h2 className="hero__subtitle">{data.allGoogleSheetSectionsRow.nodes[0].sectionsubtitle}</h2>
                    <div className="hero__markdownContent" dangerouslySetInnerHTML={{__html: parseMarkdown(data.allGoogleSheetSectionsRow.nodes[0].sectioncontent)}}></div>
                    <div className="hero__buttons">
                        <Button 
                            className="hero__button hero__button1"
                            cta={data.allGoogleSheetSectionsRow.nodes[0].sectioncta1}
                            url={data.allGoogleSheetSectionsRow.nodes[0].sectioncta1Targetpath}
                        />
                        <Button 
                            cta={data.allGoogleSheetSectionsRow.nodes[0].sectioncta2}
                            className="hero__button hero__button--secondary hero__button2"
                            url='#hero'
                        />
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Hero