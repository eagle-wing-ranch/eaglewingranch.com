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
				title={<>A family owned and operated<br/>equestrian facility open to any discipline.</>}
				subtitle={<>Sitting on 16 beautiful acres along the <strong>Lyons Creek</strong> in <strong>Welland, Ontario</strong>.</>}
				metaTitle='A family owned and operated equestrian facility open to any discipline.'
				metaDescription='Sitting on 16 beautiful acres along the Lyons Creek in Welland, Ontario.'
			/>

			<Container>

				<h2>Welcome to Eagle Wing Ranch Equestrian.</h2>
				We are a family owned/operated facility that welcomes the horse and rider of any discipline. With experienced and certified staff, we will make sure your stay at Eagle Wing Ranch is a fun and enjoyable one.

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
		file(relativePath: { eq: "17.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}
		allInstaNode(filter: { username: { eq: "596695573" } } limit: 10) {
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