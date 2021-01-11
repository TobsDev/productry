import React from 'react';

const Social = (props) => {
    return(
        <div className="social">
            <li className="social__Item" onClick={props.onClick}>
                <a className="social__Link" href={props.href}>
                    <img 
                        src={props.src} 
                        alt={props.alt}
                        className="socialLink__Icon"/>
                </a>
            </li>
        </div>
    )
}

export default Social