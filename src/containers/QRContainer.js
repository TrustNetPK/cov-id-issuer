import React from 'react'
import { Container,Button, Col } from 'reactstrap'
import QRComponent from '../components/QRComponent'

function QRContainer() {
	return (
		<Container className="text-center justify-content-center pt-5 mt-5">
			<Col>
			<QRComponent value="https://" />
			</Col>
			<Col>
			<Button className="m-5">Authorise Certificate</Button>
			</Col>
		</Container>
	);
}

export default QRContainer;