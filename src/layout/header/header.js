import React, { useState } from 'react';
import Nav from '../../components/nav/nav';
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import open from '../../images/icon-hamburger.svg'
import logo from '../../images/logo-bookmark.svg'
import navigation from '../../content/navigation.json'
import Button from '../../components/button/button'
import LanguageSwitcher from '../../utils/language-switcher'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import useScrollDir from '../../utils/useScrollDir'


function Header(props) {

    const scrollDir = useScrollDir()
    const [navState, setNavState] = useState(false)
    // toggle nav
    const toggleNav = () => setNavState(!navState)


    return (
        <div 
            id="header" 
            className={`header ${scrollDir == "up" ? 'header--sticky' : ''}`}
        >
            <div className="header__viewport">
                <div className="header__items">
                    {/* <img 
                        src={logo} 
                        alt="Bookmark Icon" 
                        className={`header__logo ${scrollDir == "down" ? 'header--invisible' : ''}`}
                    /> */}
                    <div className={`header__logo ${scrollDir == "down" ? 'header--invisible' : ''}`}>
                        smarto
                    </div>

                    <img 
                        src={open} 
                        alt="open nav" 
                        className={`header__open ${scrollDir == "down" ? 'header--invisible' : ''}`}
                        onClick={toggleNav}
                    />
                </div>
                <div className="header__nav">
                    <ul className="header__nav-links">
                        {navigation.sections.map((section) => {
                            return (
                                <div key={section.id}>
                                    <li className={`header__nav-linkItem `} id={section.id}>
                                        <AnchorLink 
                                            className={`header__nav-link ${section.highlight ? `header__nav-linkItem--highlight` : ``}`}
                                            to={section.url}
                                            stripHash
                                            title={section.name}>
                                            {section.name}
                                        </AnchorLink>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                    <LanguageSwitcher
                        language="de"
                        location={props.location}
                    />
                </div>
                
                <Nav 
                    navState={navState}
                    navToggle={toggleNav}
                    sections={navigation.sections}
                    socials={[
                        {
                            id: 1,
                            url: '/',
                            iconUrl: facebookIcon,
                            platform: 'Facebook'
                        },
                        {
                            id: 2,
                            url: '/',
                            iconUrl: twitterIcon,
                            platform: 'Twitter'
                        }
                    ]}
                />
            </div>
        </div>
    )
}

export default Header