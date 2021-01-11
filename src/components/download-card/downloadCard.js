import React from 'react';
import Button from '../button/button';
import dottedLine from '../../images/bg-dots.svg'
import chromeLogo from '../../images/logo-chrome.svg'
import firefoxLogo from '../../images/logo-firefox.svg'
import operaLogo from '../../images/logo-opera.svg'


const DownloadCard = (props) => {

    let logos = [chromeLogo, firefoxLogo, operaLogo];
    let logo = logos[props.id - 1]
    return (
        <div className="downloadCard">
            <img src={logo} alt="" className="downloadCard__logo"/>
            <h3 className="downloadCard__title">{props.name}</h3>
            <p className="downloadCard__version">{props.minVersion}</p>
            <img src={dottedLine} alt="" className="downloadCard__line"/>
            <Button 
                cta="Add & Install Extension"
                className="downloadCard__button"
            />
        </div>
    )
}

export default DownloadCard