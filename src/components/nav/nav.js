import React from 'react';
import close from '../../images/icon-close_black.svg'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import LangSwitch from '../langSwitcher/langSwitcher'

function Nav ({ navToggle, navState, sections }) {

    return(
        <div className={`nav nav--${navState ? 'inactive' : ''}`}>
            <LangSwitch 
                activeLang="en"
                className="nav__langSwitch"
            />  
            <div className="nav__content">
                <ul className="nav__links">
                    {sections.map((section) => {
                        return (
                            <div key={section.id}>
                                <li className="nav__linkItem" id={section.id} onClick={navToggle}>
                                    <AnchorLink className={`nav__link ${section.highlight ? `nav__linkItem--highlight` : ``}`} to={section.url}>{section.name}</AnchorLink>
                                </li>
                            </div>
                        );
                    })}
                </ul>
                <img 
                        src={close} 
                        alt="close nav" 
                        className="nav__close"
                        onClick={navToggle}
                    />
            </div>
        </div>
    );   
}

export default Nav