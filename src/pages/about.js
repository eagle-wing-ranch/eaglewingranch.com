import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

export default ({ data }) => {
	return (
        <>
            <Heading
                // src={ data.file.childImageSharp.fluid }
                alt='Campfire logs'
				title='About us'
                subtitle='Est. 2009'
			/>
            <Container type='body'>


            Eagle Wing Ranch sits on 16 acres along the Lyons Creek in Welland Ontario. Started in 2009, this family owned and run business offers the community an excellent horse boarding, training, and lesson facility.

            </Container>
        </>
    )
}