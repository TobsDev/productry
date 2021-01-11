import React from 'react';
import Button from '../button/button';
import close from '../../images/icon-close.svg'
import logo from '../../images/logo-bookmark-inverted.svg'
import Social from '../social/social'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const { navToggle } = this.props

        return(
            <div className={`nav nav--${!this.props.navState ? 'inactive' : ''}`}>
                <div className="nav__head">
                    <img src={logo} alt="Bookmark Logo" className="nav__logo"/>
                    <img 
                        src={close} 
                        alt="close nav" 
                        className="nav__close"
                        onClick={navToggle}
                    />
                </div>
                <ul className="nav__links">
                    {this.props.sections.map((section) => {
                        return (
                            <div key={section.id}>
                                <li className="nav__linkItem" id={section.id} onClick={navToggle} >
                                    <a className="nav__link" href={section.url}>{section.name}</a>
                                </li>
                            </div>
                        );
                    })}
                </ul>
                <Button 
                    cta="Login"
                    className="nav__button"
                    onClick={navToggle}
                />
                <ul className="nav__socialLinks">
                    {this.props.socials.map((social) => {
                        return (
                            <Social 
                                key={social.id}
                                href={social.url}
                                src={social.iconUrl} 
                                alt={social.platform}
                                onClick={navToggle}
                            />
                        );
                    })}
                     
                </ul>
            </div>
        );
    }
    
}

export default Nav