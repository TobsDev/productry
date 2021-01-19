import React from 'react';

function BackgroundImage(props) {
    return(
        <div 
        className="backgroundImage"
        style={{ backgroundImage:`url(${props.url})`, backgroundColor: `${props.backgroundcolor}` }}
    >
        { props.children }
    </div>
    )
    
}

export default BackgroundImage