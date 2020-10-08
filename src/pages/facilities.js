import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

import Program from 'components/Program'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Grid from 'components/Grid'

export default ({ data }) => {

	return (
	
		<>
			<Heading
				src={ data.file.childImageSharp.fluid }
				title='Facilities'
				subtitle='Where happy horses live.'
				keywords='eagle wing ranch, horse boarding in welland ontario, indoor riding arena'
			/>

			<Container>

				<h2>Indoor / Outdoor Board</h2>
				<strong>Sorry, we are currently full!</strong> <a href="mailto:amanda@eaglewingranch.ca">Email Amanda</a> to be put on a waiting list.

				<h2>Facilities</h2>

				<Program
					name="The Barn"
					src={ data.barnOutside.childImageSharp.fluid }
				>
					<p>
						Complete with 17 box stalls, cross ties, tack room and feed room; our barn is perfectly suited to provide you will all you need to get ready for a show, a lesson, or even a hack on hundreds of acres of surrounding trails, including the Welland Canal.
					</p>
				</Program>

				<Program
					name="The Outdoor Riding Arena"
					src={ data.arenaOutside.childImageSharp.fluid }
					swap
				>
					<p>
						200' x 100' hunter ring.
					</p>
				</Program>

				<Program
					name="The Indoor Riding Arena"
					src={ data.arenaInside.childImageSharp.fluid }
				>
					<p>
						Never miss a chance to ride again due to weather! Enjoy our dust free 80x160, EC approved for Jumper, indoor riding arena. 
						<br/>*Footing redone Fall 2018.
					</p>
				</Program>

				<Program
					name="Inside the Barn"
					src={ data.barnInside.childImageSharp.fluid }
					swap
				>
				</Program>

				<Program
					name="Indoor arena heated viewing area"
					src={ data.arenaInside2.childImageSharp.fluid }
				>
				</Program>

			</Container>

		</>
	)
}

export const query = graphql`
	query {
		file(relativePath: { eq: "facilities/Facility3.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

		barnOutside: file(relativePath: { eq: "facilities/Facility1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

		barnInside: file(relativePath: { eq: "facilities/Facility2.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

		arenaOutside: file(relativePath: { eq: "facilities/outdoorArena.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

		arenaInside: file(relativePath: { eq: "facilities/Facility4.JPG" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

		arenaInside2: file(relativePath: { eq: "facilities/Facility7.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

	}
`