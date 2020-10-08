import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
// import { Link } from '@reach/router'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import Program from 'components/Program'

export default ({ data }) => {
	
	return (
	
		<>
			<Heading
				src={ data.file.childImageSharp.fluid }
				alt=''
				title={<>Lessons</>}
				subtitle={<>Experience the joy of riding with our fun and energetic <a target="_blank" rel="noopener noreferrer"  href="http://www.cha-ahse.org/">CHA</a> certified instructors.</>}
				metaTitle='Lessons'
				metaDescription='Experience the joy of riding with our fun and energetic CHA certified instructors.'
				keywords='eagle wing ranch, riding lessons welland ontario'
			/>

			<Container>

				<h2>Rider Levels</h2>

				<Program
					name='Beginner Riders'
					src={ data.lesson1.childImageSharp.fluid }
					smallImage
				>
					<p>
						For the beginner rider we will teach fundamental skills needed, such as the use of the four natural aids, basic english position and control at the walk, trot and canter.
					</p>
				</Program>

				<Program
					name='Intermediate Riders'
					src={ data.lesson2.childImageSharp.fluid }
					smallImage
					swap
				>
					<p>
						We will continue to build upon the fundamental skills, as well as implementing new skills such as turns on the forehand and haunches, proper transitions, riding on a loose rein and jumping position.
					</p>
				</Program>

				<Program
					name='Advanced Riders'
					src={ data.lesson4.childImageSharp.fluid }
					smallImage
				>
					<p>
						Collection & extension, bending, leg yielding, flying lead changes, striding and take off are some of the essential skills you will be taught, so that you will be able to jump both hunter and equitation courses.
					</p>
				</Program>

				<h2>Pricing</h2>
				<p>Weekly group lessons: $45.00 +HST</p>
				<p>Non-weekly lessons: $55.00 +HST</p>

				<h2>Contact Amanda today to book a lesson:</h2>
				Text: <a href="tel:9053590824">(905) 359-0824</a><br/>
				Email: <a href="mailto:amanda@eaglewingranch.ca">amanda@eaglewingranch.ca</a>

				<h4>Terms</h4>
				Lessons are paid for at the beginning of each month.<br/>
				Cancellations with 24 hours notice are to be rescheduled at both coach's and parents convenience.

			</Container>

		</>
	)
}

export const query = graphql`
	query {
		file(relativePath: { eq: "gallery/Gallery6.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}

		lesson1: file(relativePath: { eq: "lessons/Lesson1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		lesson2: file(relativePath: { eq: "lessons/Lessons2.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		lesson3: file(relativePath: { eq: "lessons/Lesson3.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		lesson4: file(relativePath: { eq: "lessons/Lessons4.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		lesson5: file(relativePath: { eq: "lessons/Lessons5.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920 quality: 64) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`