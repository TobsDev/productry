import React from 'react';
import service1 from '../../images/illustration-features-tab-1.svg'
import service2 from '../../images/illustration-features-tab-2.svg'
import service3 from '../../images/illustration-features-tab-3.svg'
import backgroundShape from '../../images/background-shape-long.svg'
import Button from '../button/button'

function Service(props) {

    const { id, activeService, headline, copy } = props
    let images = [service1, service2, service3]
    let image = images[id - 1]

    return (
        <div className={`service ${(id + '') !== activeService ? 'service--inactive' : ''}`} id={id} >
                <div className="service__illustration-container">
                    <img 
                        src={image}
                        alt={`service ${id}`} 
                        className="service__image"
                    />
                    <img 
                        src={backgroundShape}
                        alt="blue background shape"
                        className="service__background" 
                    />      
                </div>
                <div className="service__details">
                    <h4 className="service__headline">{headline}</h4>
                    <p className="service__description">{copy}</p>
                    <div className="service__button">
                        <Button 
                            cta="More Info"
                        />
                    </div>
                </div>
            </div>
    )
}

export default Service