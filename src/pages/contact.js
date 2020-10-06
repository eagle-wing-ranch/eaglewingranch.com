import React from 'react'
import Container from 'components/Container'
import Heading from 'components/Heading'

import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

export default ({ data }) => {

	return (
        <>
            <Heading
                src={ data.file.childImageSharp.fluid }
                alt='Campfire logs'
				title='Contact us'
                subtitle='We would love to hear from you!'
                description='Get in touch! We would love to hear from you!'
                keywords='eagle wing ranch, boarding in welland ontario, niagara novice series, riding lessons welland ontario'
			/>
            <Container type='body'>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>

                    <div>
                        <h3>Text Amanda</h3>
                        <a href="tel:9053590824">(905) 359-0824</a>
                    </div>

                    <div>
                        <h3>Email Amanda</h3>
                        <a href='mailto:amanda@eaglewingranch.ca'>amanda@eaglewingranch.ca</a>
                    </div>

                    <div>
                        <h3>Address</h3>
                        426 Buchner Rd.<br/>
                        Welland, Ontario<br/>
                        L3B 5N4

                    </div>                    

                </div>

            </Container>

            <Container>

                <iframe title='Map to Eagle Wing Ranch' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5837.137877848384!2d-79.1996531!3d42.9873532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d347e3069f3ef1%3A0x1d55636906f9ff85!2sEagle%20Wing%20Ranch!5e0!3m2!1sen!2sca!4v1601575586357!5m2!1sen!2sca" width="100%" height="580" frameBorder="0" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>

            </Container>
        </>
    )
}

export const query = graphql`
	query {
		file(relativePath: { eq: "map.png" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`