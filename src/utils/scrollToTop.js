import React, {useState} from 'react';
import window from 'global'
import useScrollPosition from '@react-hook/window-scroll'


function BackToTop(props) {
    const [active, setActive] = useState('')
    const scrollY = useScrollPosition(60 /*fps*/)

    

    return(
        <div className={`backToTopButton ${active}`}>
            <button >{scrollY}</button>
        </div>
    )
}

export default BackToTop
