import React, { useState } from 'react';

const LangSwitcher = () => {

    const [activeLang, switchActiveLang] = useState();
    return (
        <div className="langSwitcher">
            en | de
        </div>
    );
}

export default LangSwitcher;
