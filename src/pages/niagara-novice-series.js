import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
// import { Link } from '@reach/router'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Grid from 'components/Grid'
import Button from 'components/Button'

import Sponsor from 'components/Sponsor'
import InstagramFeed from 'components/InstagramFeed'

const URLS = {
	'Pen Financial': 'https://www.penfinancial.com',
	'Jansen Furniture': 'https://www.jansenfurniture.ca',
	'Health Equine': 'http://www.healthequinetherapies.ca',
	'Egger': 'https://eggertruck.com',
	'DocNet': 'https://www.docnet.ca',
	'Greenhawk': 'https://greenhawk.com/en/',
	'Nugent Veterinary': 'https://www.nugentvetservices.com',
	'BAHR Saddlery': 'https://www.bahrsaddlery.com',
	'Chrome+Dapple': 'https://www.chromeanddapple.com'
}

export default ({ data }) => {
	return (
	
		<>
			<Heading
				src={ data.file.childImageSharp.fluid }
				alt=''
				title={<>Niagara Novice Series</>}
				subtitle={<>Professional, fun and safe show atmosphere for riders of all ages.</>}
				metaTitle='Horse Shows'
				metaDescription='Eagle Wing is dedicated to bringing you a professional, fun and safe show atmosphere for riders of all ages.'
				keywords='eagle wing ranch, niagara novice series'
			/>

			<Container>

				<h2>Niagara Novice Series</h2>

				<p>Eagle Wing Ranch is dedicated to bring you a professional, fun and safe show atmosphere for riders of all ages.</p>

				<Button target="_blank" href="https://www.facebook.com/NiagaraNS">Follow Niagara Novice Series on Facebook</Button>

				<h2>2021 Show Dates</h2>
				<ul>
					<li>July 24</li>
					<li>August 14</li>
					<li>September 11</li>
					<li>October 9</li>
				</ul>

				<Button target="_blank" href="/pdf/nnsEntryForm_2021.pdf">2021 Entry Form</Button>

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

                <Grid lg={3} xl={3} gap={false}>
                    {
                        data.allFile.edges.map(({ node }, i) => {
                            if (!node.childImageSharp) return null
                            return <Sponsor key={i} url={ URLS[node.name] } title={ node.name }><a target="_blank" rel="noreferrer noopener" href={URLS[node.name]}><Img fixed={ node.childImageSharp.fixed } objectFit="cover" objectPosition="50% 50%"/></a></Sponsor>
                        })
                    }
                </Grid>

			</Container>

			<InstagramFeed instagramId='7663664610'>
				<div style={{ textAlign: 'center', paddingTop: '2rem' }}>
					<Button target="_blank" href="https://instagram.com/NiagaraNovice.Series/">Follow Niagara Novice Series on Instagram</Button>
				</div>
			</InstagramFeed>
			

            {/* <Container type='instagram' constrain={ false }>
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
									<Img fluid={ edge.node.localFile.childImageSharp.fluid } objectFit='cover' />
									<div className='instagramPostCaption'>{ edge.node.caption }</div>
								</div>
							)
						})
					}

				</Grid>

				<div style={{ textAlign: 'center', paddingTop: '2rem' }}>
					<Button target="_blank" href="https://instagram.com/NiagaraNovice.Series/">Follow Niagara Novice Series on Instagram</Button>
				</div>
			</Container> */}

		</>
	)
}

export const query = graphql`
    query {

		file(relativePath: { eq: "shows/Show6.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

        allFile(filter: { relativeDirectory: { eq: "sponsors2021" }}) {
            edges {
                node {
                    childImageSharp {
                        fixed(width: 320 quality: 64) {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
					name
                }
            }
        }

        # allInstaNode(filter: { username: { eq: "7663664610" } } limit: 12) {
		# 	edges{
		# 		node {
		# 			username
		# 			id
		# 			likes
		# 			comments
		# 			mediaType
		# 			preview
		# 			original
		# 			timestamp
		# 			caption
		# 			thumbnails {
		# 				src
		# 				config_width
		# 				config_height
		# 			}
		# 			dimensions {
		# 				height
		# 				width
		# 			}
		# 			localFile {
		# 			childImageSharp {
		# 				fluid(maxWidth: 960 quality: 64) {
		# 				...GatsbyImageSharpFluid_withWebp
		# 				}
		# 			}
		# 			}
		# 		}
		# 	}			
		# }
    }
`