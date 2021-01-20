import React from 'react';
import { func } from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer'

function Layout({children}) {
    return(
        <div className="layout">
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout