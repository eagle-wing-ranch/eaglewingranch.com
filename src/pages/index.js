import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
// import { Link } from '@reach/router'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Button from 'components/Button'

import Grid from 'components/Grid'

export default ({ data }) => {

	return (
	
		<>
			<Heading
				src={ data.file.childImageSharp.fluid }
				alt=''
				title='Family owned and operated hunter/jumper facility'
				subtitle={<>Sitting on 16 beautiful acres along the <strong>Lyons Creek</strong> in <strong>Welland, Ontario</strong>.</>}
				metaDescription='Sitting on 16 beautiful acres along the Lyons Creek in Welland, Ontario.'
				keywords='eagle wing ranch, boarding in welland ontario, niagara novice series, riding lessons welland ontario'

			>
				<div className='ctaWrapper'>
					{/* <Button to='/boarding' type='cta'>Board Your Horse</Button> */}
					<Button to='/lessons' type='cta'>Book a Lesson</Button>
					<Button to='/niagara-novice-series' type='cta'>Niagara Novice Series</Button>
				</div>
			</Heading>

			<Container>

				<h2>Welcome to Eagle Wing Ranch Equestrian.</h2>
				We are a family owned/operated facility that welcomes the horse and rider of any discipline. With experienced and certified staff, we will make sure your stay at Eagle Wing Ranch is a fun and enjoyable one.

			</Container>

			<Container type='instagram' constrain={ false }>
				<div style={{ textAlign: 'center' }}>
					<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1"  width="48" height="48" viewBox="0 0 24 24">
						<path fill="#999" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
					</svg>
				</div>
				<h3 style={{ textAlign: 'center' }}>Latest Instagram Posts</h3>
				<Grid sm={2} md={4} lg={4} xl={6} gap={false}>

					{
						data.allInstaNode.edges.map((edge, i) => {
							return (
								<div key={i}
									className='instagramPostContainer'
								>
									<Img fluid={ edge.node.localFile.childImageSharp.fluid } />
									<div className='instagramPostCaption'>{ edge.node.caption }</div>
								</div>
							)
						})
					}

				</Grid>
				<div style={{ textAlign: 'center', paddingTop: '2rem' }}>
					<Button target="_blank" href="https://instagram.com/amanda.at.eaglewing/">Follow Eagle Wing Ranch on Instagram</Button>
				</div>
			</Container>

		</>
	)
}

export const query = graphql`
	query {
		file(relativePath: { eq: "gallery/Gallery7.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}
		allInstaNode(filter: { username: { eq: "596695573" } } limit: 12) {
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