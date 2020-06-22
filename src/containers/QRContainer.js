import React from 'react'
import { Container,Button, Col } from 'reactstrap'
import QRComponent from '../components/QRComponent'

function QRContainer(props) {

	const handleAuthorisation = () => {
		alert('This certificate has been issued and authorised')
		props.history.replace('/vaccination')
	}

	return (
		<Container className="text-center justify-content-center pt-5 mt-5">
			<Col>
			<QRComponent value={JSON.stringify(props.location.state)} />
			</Col>
			<Col>
			<Button className="m-5" onClick={handleAuthorisation}>Authorise Certificate</Button>
			</Col>
		</Container>
	);
}

export default QRContainer;