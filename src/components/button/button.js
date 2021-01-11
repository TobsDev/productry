import React from 'react';

const Button = (props) => (
    <button className={`button ${props.className}`}>
        {props.cta}
    </button>
)

export default Button