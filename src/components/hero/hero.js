import React from 'react';
import Button from '../../components/button/button'
import heroIllustration from '../../images/illustration-hero.svg'
import backgroundShape from '../../images/background-shape-long.svg'

const Hero = () => {
    return (
        <div className="hero" id="hero">
            <div className="hero__viewport">
                <div className="hero__illustrationContainer">
                    <img 
                        src={heroIllustration}
                        alt="Hero Illustration" 
                        className="hero__image"
                    />
                    {/* <img 
                        src={backgroundShape}
                        alt="blue background shape"
                        className="hero__background" 
                    /> */}
                </div>
                <div className="hero__claim-container">
                    <h1 className="hero__headline">A simple bookmark manager</h1>
                    <p className="hero__claim">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="hero__buttons">
                        <Button 
                            className="hero__button hero__button1"
                            cta="Get it on Chrome"
                        />
                        <Button 
                            cta="Get it on Firefox"
                            className="hero__button hero__button--secondary hero__button2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero