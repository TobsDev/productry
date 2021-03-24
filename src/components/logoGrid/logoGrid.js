import React from 'react';
import LUEX from '../../images/client_logos/LUEX_logo.inline.svg'
import Payback from '../../images/client_logos/Payback_Logo.inline.svg'
import KnorrBremse from '../../images/client_logos/knorr-bremse-vector-logo.inline.svg'
import Airbus from '../../images/client_logos/Airbus_Logo_2017.inline.svg'
import Webpard from '../../images/client_logos/webpard_logo.inline.svg'
import Beneteler from '../../images/client_logos/Benteler_logo.inline.svg'
import FadeInWhenVisible from '../../utils/fadeInWhenVisible'



// MAKE SURE TO INSERT '.inline' between icon name and file extension
const LogoGrid = () => {
    return (
        <FadeInWhenVisible>
            <div className="logoGrid">
                <div className="logoGrid__viewport">
                    <h2 className="logoGrid__heading">Trusted by awesome companies</h2>
                    <div className="logoGrid__container">
                        {/*<img src="../../images/client_logos/LUEX_logo.svg" alt="" className="logoGrid__logo1" id="1"/>*/}
                        <LUEX className="logoGrid__logo1 logoGrid__logo" id="1" />
                        <Payback className="logoGrid__logo2 logoGrid__logo" id="2" />
                        <KnorrBremse className="logoGrid__logo3 logoGrid__logo" id="3" />
                        <Webpard className="logoGrid__logo4 logoGrid__logo" id="4" />
                        <Airbus className="logoGrid__logo5 logoGrid__logo" id="5" />
                        <Beneteler className="logoGrid__logo6 logoGrid__logo" id="6" />
                    </div>
                </div>
            </div>
        </FadeInWhenVisible>
    )
}

export default LogoGrid;