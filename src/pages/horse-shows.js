import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
// import { Link } from '@reach/router'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ data }) => {

	return (
	
		<>
			<Heading
				src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse19.jpg'
				alt=''
				title={<>Niagara Novice Series</>}
				subtitle={<>Professional, fun and safe show atmosphere for riders of all ages.</>}
				metaTitle='Horse Shows'
				metaDescription='Eagle Wing is dedicated to bringing you a professional, fun and safe show atmosphere for riders of all ages.'
			/>

			<Container>

				<h2>Why show Niagara Novice Series?</h2>
                
                <ul>
                    <li>Ribbons to 6th place</li>
                    <li>Champion and Reserve ribbons</li>
                    <li>Prizes</li>
                    <li>Year-end awards banquet</li>
                    <li>Large indoor/outdoor schooling rings</li>
                    <li>100' x 200' outdoor show ring with great footing</li>
                    <li>Affordable</li>
                </ul>

                <h2>Thank you to our Sponsors!</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                    {
                        data.allFile.edges.map(({ node }, i) => {
                            if (!node.childImageSharp) return null
                            return <Img key={ i } fixed={ node.childImageSharp.fixed } objectFit="cover" objectPosition="50% 50%"/>
                        })
                    }
                </div>

			</Container>

            <Container type='instagram'>
				<h2>Instagram feed</h2>

				{
					data.allInstaNode.edges.map((edge, i) => {
						console.log(edge)
						return (
							<div key={i}>
								<Img fluid={ edge.node.localFile.childImageSharp.fluid } />
								{ edge.node.caption }
							</div>
						)
					})
				}

			</Container>

		</>
	)
}

export const query = graphql`
    query {
        allFile(filter: { relativeDirectory: { eq: "sponsors" }}) {
            edges {
                node {
                    childImageSharp {
                        fixed(width: 320) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
        allInstaNode(filter: { username: { eq: "7663664610" } } limit: 10) {
			edges{
				node {
					username
					id
					likes
					comments
					mediaType
					preview
					original
					timestamp
					caption
					thumbnails {
						src
						config_width
						config_height
					}
					dimensions {
						height
						width
					}
					localFile {
					childImageSharp {
						fluid {
						...GatsbyImageSharpFluid
						}
					}
					}
				}
			}			
		}
    }
`