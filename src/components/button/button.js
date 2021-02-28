import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Button = (props) => (
    
    <button className="button">
        { props.children ? props.children : props.cta }
    </button>
)

export default Button