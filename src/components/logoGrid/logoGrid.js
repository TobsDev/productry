import React from 'react';
import LUEX from '../../images/client_logos/LUEX_logo.inline.svg'
import FadeInWhenVisible from '../../utils/fadeInWhenVisible'

const LogoGrid = () => {
    return (
        <FadeInWhenVisible>
        <div className="logoGrid">
            <div className="logoGrid__viewport">
                <h2 className="logoGrid__heading">Trusted by awesome companies</h2>
                <div className="logoGrid__container">
                    {/*<img src="../../images/client_logos/LUEX_logo.svg" alt="" className="logoGrid__logo1" id="1"/>*/}
                    <LUEX className="logoGrid__logo1 logoGrid__logo" id="1" />
                    <LUEX className="logoGrid__logo2 logoGrid__logo" id="2" />
                    <LUEX className="logoGrid__logo3 logoGrid__logo" id="3" />
                    <LUEX className="logoGrid__logo4 logoGrid__logo" id="4" />
                    <LUEX className="logoGrid__logo5 logoGrid__logo" id="5" />
                    <LUEX className="logoGrid__logo6 logoGrid__logo" id="6" />
                </div>
            </div>
        </div>
        </FadeInWhenVisible>
    )
}

export default LogoGrid;