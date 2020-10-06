import React from 'react'

import Img from 'gatsby-image'

import './program.scss'

export default function Program({ src, name, children, swap, smallImage }) {
    return (
        <div className={`programContainer ${ swap ? 'programContainer--swap' : '' } ${ smallImage ? 'programContainer--smallImage' : '' }`}>
            <div className='programImage'>
                <Img fluid={src} alt={name} />
            </div>
            <div className='programBody'>
                <h3>{ name }</h3>
                { children }
            </div>
        </div>
    )
}