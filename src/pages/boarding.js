import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

import Program from 'components/Program'

import { graphql } from 'gatsby'

export default ({ data }) => {
console.log(data)
	return (
	
		<>
			<Heading
				src={ data.file.childImageSharp.fluid }
				title={<>Boarding</>}
				subtitle='Cozy barn, indoor and outdoor arenas and more'
				metaTitle='Boarding'
			/>

			<Container>

				<h2>Sorry, we are all full!</h2>
                Email <a href="mailto:amanda@eaglewingranch.ca">Amanda</a> to be put on a waiting list.

				<Program
					name="The Barn"
					src={ data.barnOutside.childImageSharp.fluid }
				>
					<p>
						Complete with 14 box stalls, cross ties, tack room and feed room; our barn is perfectly suited to provide you will all you need to get ready for a show, a lesson, or even a hack on hundreds of acres of surrounding trails, including the Welland Canal.
					</p>
				</Program>

				<Program
					name="The Indoor Riding Arena"
					src={ data.arenaInside.childImageSharp.fluid }
					swap
				>
					<p>
						Never miss a chance to ride again due to weather! Enjoy our dust free 80x160, EC approved for Jumper, indoor riding arena. 
						<br/>*Footing redone Fall 2018.
					</p>
				</Program>

				<Program
					name="The Paddocks"
					src={ data.arenaOutside.childImageSharp.fluid }
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
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}

		barnOutside: file(relativePath: { eq: "facilities/Facility1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}

		barnInside: file(relativePath: { eq: "facilities/Facility2.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}

		arenaOutside: file(relativePath: { eq: "facilities/Facility3.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}

		arenaInside: file(relativePath: { eq: "facilities/Facility4.JPG" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}

		arenaInside2: file(relativePath: { eq: "facilities/Facility7.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}

	}
`