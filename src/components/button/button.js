import React from 'react';

const Button = (props) => (
    
    <button className={`button ${props.className}`}>
        { props.children ? props.children : props.cta }
    </button>
)

export default Button