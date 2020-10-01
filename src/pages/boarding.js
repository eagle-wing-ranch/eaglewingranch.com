import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

export default () => {

	return (
	
		<>
			<Heading
				src='https://teenranch.nyc3.digitaloceanspaces.com/website/assets/horse19.jpg'
				alt=''
				title={<>Boarding</>}
				subtitle={<>14 box stalls, cross ties, tack room and feed room.</>}
				metaTitle='Boarding'
				metaDescription='14 box stalls, cross ties, tack room and feed room.'
			/>

			<Container>

				<h2>Sorry, we are all full!</h2>
                Email <a href="mailto:amanda@eaglewingranch.ca">Amanda</a> to be put on a waiting list.

			</Container>

		</>
	)
}