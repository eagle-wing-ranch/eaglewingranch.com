import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
// import { Link } from '@reach/router'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ data }) => {
	console.log(data)
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

				<Img
					fluid={ data.file.childImageSharp.fluid }
					alt='Test'
				/>
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
	}
`