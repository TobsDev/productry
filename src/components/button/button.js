import React from 'react';
import { Link } from "gatsby";

const Button = (props) => (
    <Link to={props.url ? props.url : '/'}>
        <button className={`button ${props.className}`}>
            {props.cta}
        </button>
    </Link>
)

export default Button