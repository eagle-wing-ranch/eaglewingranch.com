import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'
// import Button from 'components/Button'
// import { Link } from '@reach/router'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

export default () => {
	return (
	
		<>
			<Heading
				src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse19.jpg'
				alt=''
				title={<>Facilities</>}
				subtitle={<>Ride in any weather in our indoor or outdoor riding arenas.</>}
				metaTitle='Facilities'
				metaDescription='Ride in any weather in our indoor or outdoor riding arenas.'
			/>

			<Container>

				<h2>The Barn</h2>
                <p>
                Complete with 14 box stalls, cross ties, tack room and feed room; our barn is perfectly suited to provide you will all you need to get ready for a show, a lesson, or even a hack on hundreds of acres of surrounding trails, including the Welland Canal.
                </p>
				
                <h2>The Indoor Riding Arena</h2>
                <p>
                Never miss a chance to ride again due to weather! Enjoy our dust free 80x160, EC approved for Jumper, indoor riding arena. 
                <br/>*Footing redone Fall 2018.
                </p>

                <h2>The Outdoor Riding Arenas</h2>
                <p>
                    100' x 200' hunter ring
                </p>

			</Container>

		</>
	)
}