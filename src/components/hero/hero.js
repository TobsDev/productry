import React from 'react';
import Button from '../../components/button/button';
import heroIllustration from '../../images/illustration-hero.svg';
import { graphql, useStaticQuery } from 'gatsby';
import parseMarkdown from '../../utils/markdownParser';
// import backgroundShape from '../../images/background-shape-long.svg'

function Hero() {

const data = useStaticQuery(graphql`
query HeroSection {
    allGoogleSheetIndexSectionsEnRow(filter: {sectionname: {eq: "Hero"}}) {
        edges {
            node {
                sectiontitle
                sectionsubtitle
                sectionname
                sectioninnav
                sectionid
                sectionctatargetpath
                sectioncta
                sectioncontent
                id
                sectionimagealt
                sectionimageurl
            }
        }
    }
}`) 

let { sectiontitle, 
    sectionsubtitle, 
    sectionname, 
    sectioninnav, 
    sectionid, 
    sectionimagealt,
    sectionimageurl,
    sectionctatargetpath, 
    sectioncta, 
    sectioncontent, 
    id } = data.allGoogleSheetIndexSectionsEnRow.edges[0].node

    return (
        <div className="hero" id={id}>
            <div className="hero__viewport">
                <div className="hero__illustrationContainer">
                    <img 
                        src={sectionimageurl}
                        alt={sectionimagealt} 
                        className="hero__image"
                    />
                </div>
                <div className="hero__markdownContent-container">
                    <h1 className="hero__headline">{sectiontitle}</h1>
                    <h2 className="hero__subtitle">{sectionsubtitle}</h2>
                    <div className="hero__markdownContent" dangerouslySetInnerHTML={{__html: parseMarkdown(sectioncontent)}}></div>
                    <div className="hero__buttons">
                        <Button 
                            className="hero__button hero__button1"
                            cta={sectioncta}
                            url={sectionctatargetpath}
                        />
                        
                    </div>
                </div>
            </div>
        </div> 
    );
}

//const Hero = () => <div>test</div>

export default Hero