import React, { useState } from 'react';
import Button from '../button/button';
import close from '../../images/icon-close_black.svg'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import LangSwitch from '../langSwitcher/langSwitcher'

function Nav (props) {

    const { navToggle } = props

    return(
        <div className={`nav nav--${!props.navState ? 'inactive' : ''}`}>
            <LangSwitch 
                activeLang="en"
                className="nav__langSwitch"
            />  
            <div className="nav__content">
                <ul className="nav__links">
                    {props.sections.map((section) => {
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