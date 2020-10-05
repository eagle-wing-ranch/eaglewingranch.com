import React from 'react'
import Container from 'components/Container'

import './footer.scss'

// import { useStaticQuery, graphql } from 'gatsby'

import instagram from './icons/instagram.svg'
import facebook from './icons/facebook.svg'

export default function Footer() {

    // const data = useStaticQuery(query)

    // console.log(data)
    
    return (
        <footer>
            <Container type={`footer`}>
                <div className='copyright'>
                    &copy; { new Date().getFullYear() } Eagle Wing Ranch. All rights reserved.
                </div>
                <div className='socialMediaContainer'>
                    <a className='socialMedia' rel="noopener noreferrer" href="https://www.facebook.com/eaglewing.ranch.7" title="Eagle Wing Ranch - Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
                        <path fill="#000000" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                    </svg>
                    </a>
                    <a className='socialMedia' rel="noopener noreferrer" href="https://www.instagram.com/amanda.at.eaglewing/" title="Eagle Wing Ranch - Instagram" >
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"  width="24" height="24" viewBox="0 0 24 24">
                            <path fill="#000000" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                        </svg>
                    </a>
                </div>
            </Container>
        </footer>
    )
}

// const query = graphql`
//     query JavascriptFrontmatterQuery {
//         frontmatter: allJavascriptFrontmatter {
//             edges {
//                 node {
//                     id
//                     frontmatter {
//                         # title
//                         path
//                     }
//                 }
//             }
//         }
//     }
// `