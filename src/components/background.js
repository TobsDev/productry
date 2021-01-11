import React from 'react';


const Background = (props) => {
    return(
        <div className={`${props.className}`}>
            <svg version="1.1" viewBox="0.0 0.0 960.0 720.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="p.0">
                    <path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clip-rule="nonzero" />
                </clipPath>
                <g clip-path="url(#p.0)">
                    <path fill="#000000" fill-opacity="0.0" d="m0 0l960.0 0l0 720.0l-960.0 0z" fill-rule="evenodd" />
                    <path fill="#5368df" d="m295.87402 310.44095l0 0l0 0c0 -32.469177 12.898315 -63.608505 35.857513 -86.56769c22.959167 -22.959183 54.09848 -35.857513 86.56769 -35.857513l245.82675 0c0.001159668 0 0.0020751953 9.1552734E-4 0.0020751953 0.0020446777l-0.0020751953 244.84836l0 0c0 0.0011291504 -9.1552734E-4 0.0020446777 -0.0020141602 0.0020446777l-245.82474 -0.0020446777l0 0c-67.61359 0 -122.4252 -54.811646 -122.4252 -122.4252z" fill-rule="evenodd" />
                </g>
            </svg>
        </div>
)}

export default Background