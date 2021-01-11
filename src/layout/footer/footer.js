import React from 'react';
import logo from '../../images/logo-bookmark-inverted.svg'
import navigation from '../../content/navigation.json'
import facebookIcon from '../../images/icon-facebook.svg'
import twitterIcon from '../../images/icon-twitter.svg'
import Social from '../../components/social/social'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        let socials = [
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
        ]

        return(
            <div id="footer" className="footer">
                <img src={logo} alt="" className="footer__logo"/>
                <ul className="footer__links">
                    {navigation.sections.map(section => {
                        return(
                            <div className="footer__item" key={section.id}>
                                <a href={section.url} className="footer__link">{section.name}</a>
                            </div>
                        );
                    })}
                </ul>
                <ul className="footer__socialLinks">
                    {socials.map((social) => {
                        return (
                            <Social 
                                key={social.id}
                                href={social.url}
                                src={social.iconUrl} 
                                alt={social.platform}
                            />
                        );
                    })}
                </ul>
            </div>
        )
    }
    
}

export default Footer