import React from 'react';
import LUEX from '../../images/client_logos/LUEX_logo.inline.svg'

const LogoGrid = () => {
    return (
        <div className="logoGrid">
            <div className="logoGrid__viewport">
                <h2 className="logoGrid__heading">Some of our clients</h2>
                <div className="logoGrid__container">
                    {/*<img src="../../images/client_logos/LUEX_logo.svg" alt="" className="logoGrid__logo1" id="1"/>*/}
                    <LUEX className="logoGrid__logo1" id="1" />
                    <LUEX className="logoGrid__logo2" id="2" />
                    <LUEX className="logoGrid__logo3" id="3" />
                    <LUEX className="logoGrid__logo4" id="4" />
                    <LUEX className="logoGrid__logo5" id="5" />
                    <LUEX className="logoGrid__logo6" id="6" />
                </div>
            </div>
        </div>
    )
}

export default LogoGrid;