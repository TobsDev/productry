import React from 'react';

const Button = ({className, children, cta, onClick}) => (
    
    <button className={`button ${className}`} onClick={onClick}>
        { children ? children : cta }
    </button>
)

export default Button