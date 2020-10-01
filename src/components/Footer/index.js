import React from 'react'
import Container from 'components/Container'

import './footer.scss'

// import { useStaticQuery, graphql } from 'gatsby'

export default function Footer() {

    // const data = useStaticQuery(query)

    // console.log(data)
    
    return (
        <footer>
            <Container type={`footer`}>
                &copy; { new Date().getFullYear() } Eagle Wing Ranch. All rights reserved.
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