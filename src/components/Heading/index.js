import React from 'react'
import Container from 'components/Container'
// import jsxToString from 'react-element-to-string'
import { useLocation } from '@reach/router'
import { Helmet } from 'react-helmet'
import { withOrientationChange } from 'react-device-detect'
import Img from 'gatsby-image'

import './heading.scss'

function Heading({ title, src, alt, subtitle, metaTitle, metaDescription, keywords, isPortrait, imageOptions, children }) {

    const { pathname } = useLocation()
    
    const pageTitle = metaTitle ? metaTitle : title
    const pageDescription = metaDescription ? metaDescription : subtitle

    // const padding = isPortrait ? '177.5%' : '56.25%'

    const siteTitle = 'Eagle Wing Ranch'
    const url = 'https://eaglewingranch.ca'

    return (
        <>
            <Helmet>
                <title>{`${ pageTitle } - ${ siteTitle }`}</title>
                <meta property='og:title' content={`${ pageTitle } - ${ siteTitle }`} />
                <meta property='twitter:title' content={`${ pageTitle } - ${ siteTitle }`} />
                <meta property='og:image' content={ src.src } />
                <meta property='og:image:secure_url' content={ src.src } />
                <meta property='og:image:alt' content={ alt } />
                <meta property='twitter:image:src' content={ src.src } />
                <meta property='og:url' content={ url + pathname } />
                <meta name='description' content={ pageDescription  } />
                <meta property='og:description' content={ pageDescription } />
                <meta name='keywords' content={ keywords } />
            </Helmet>

            <Container type='heading' constrain={false}>
                <div className='imageContainer'>
                    { src && <Img fluid={ src } alt={ pageTitle } /> }
                </div>
                <div className='overlayContainer'>
                    <div className='overlay'>
                        <h1>{ title }</h1>
                        { subtitle && <h2>{ subtitle }</h2> }
                        { children }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default withOrientationChange(Heading)