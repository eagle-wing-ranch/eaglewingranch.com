import React from 'react'

import './sponsor.scss'

export default function Sponsor({ children }) {
    
    return (
        <div className='sponsorContainer'>
            <div className='sponsorPadding'>
                { children }
            </div>
        </div>
    )

}