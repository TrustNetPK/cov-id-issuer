import React from 'react'
import { Container } from 'reactstrap'

function FooterComponent() {
	return (
		<Container fluid className="fixed-bottom text-center p-3 border-top" style={{ backgroundColor: '#fff' }}>
			© Vaccify, TrustNet Pakistan 2020.
			All rights reserved.
		</Container>
	)
}

export default FooterComponent
