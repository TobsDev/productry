import React from 'react';
import logo from '../../images/logo-bookmark-inverted.svg'
import navigation from '../../content/navigation.json'
import mailIcon from '../../images/mailIcon.svg'
import linkedInIcon from '../../images/linkedInIcon.svg'
import Social from '../../components/social/social'
import { FaLinkedinIn, FaCity, FaEnvelope, FaPhoneAlt, FaPhoneSquareAlt, FaPortrait, FaRegPaperPlane } from 'react-icons/fa'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        let socials = [
            {
                id: 1,
                url: '/',
                iconUrl: linkedInIcon,
                platform: 'LinkedIn'
            },
            {
                id: 2,
                url: '/',
                iconUrl: mailIcon,
                platform: 'Mail'
            }
        ]

        //set year-date for copyright
        let d = new Date(); 
        let currentYear = d.getFullYear();

        return(
            <div id="footer" className="footer">
                <ul className="footer__socialLinks">
                    {socials.map((social) => {
                        return (
                            <Social 
                                key={social.id}
                                href={social.url}
                                src={social.iconUrl} 
                                alt={social.platform}
                                fill="#BDEDE0"
                            />
                        );
                    })}
                </ul>
                <hr className="footer__divider"/>
                <ul className="footer__links">
                    {navigation.footer.map(link => {
                        return(
                            <label className="footer__item" key={link.id}>
                                <a href={link.url} className="footer__link">{link.name}</a>
                            </label>
                        );
                    })}
                </ul>
                <hr className="footer__divider"/>
                <small className="footer__copyright">
                    &copy; Copyright {currentYear} , SMARTO
                </small>
            </div>
        )
    }
    
}

export default Footer