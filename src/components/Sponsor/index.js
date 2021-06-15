import React from 'react'

import './sponsor.scss'

export default function Sponsor({ children, url, title }) {
    
    return (
        <div className='sponsorContainer'>
            <div className='sponsorPadding'>
                { children }
                {/* { url && <a target="_blank" rel="noreferrer noopener" href={url} className='sponsorWebsiteUrl'>{title}</a> } */}
            </div>
        </div>
    )

}