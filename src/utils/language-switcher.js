import React, { useState } from 'react'
import { BiWorld } from 'react-icons/bi'
import { Link } from 'gatsby'

// MdLanguage
function LanguageSwitch ({ language, location }) {

    // change input for useState to use from location.pathname. See here: https://aleksandarpopovic.com/Building-a-language-switch-component-in-React/
    const [lang, setLang] = useState(language)

    const switchLang = (lang) => {
        if(lang === 'en') {
            setLang('de')
        } else if(lang === 'de') {
            setLang('en')
        }
    }

    return <div className="languageSwitcher">
                <Link
                    to="/"
                    className={lang === 'en' ? 'languageSwitcher__language--active' : ''}
                    onClick={() => switchLang(lang)}
                >
                    en
                </Link> 
                 | 
                <Link
                    to="#features"
                    className={lang === 'de' ? 'languageSwitcher__language--active' : ''}
                    onClick={() => switchLang(lang)}
                    >
                    de
                </Link>
            </div>


}

export default LanguageSwitch