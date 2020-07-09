import React, { useState } from 'react'
import { Container, Button, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import QRComponent from '../components/QRComponent'

function QRContainer(props) {
	const [modal, setModal] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const toggle = () => {
		setModal(!modal);
		handleShow();

	}
	const issued = () => {
		setModal(!modal)
		handleClose();
		props.history.replace('/vaccination')
	}
	const handleAuthorisation = () => {
		toggle()
		//alert('This certificate has been issued and authorised')

	}

	return (
		<Container fluid className="text-center justify-content-center pt-5 mt-5" style={{ backgroundColor: '#FCF8F7' }}>
			<Col>
				<QRComponent value={JSON.stringify(props.location.state)} />
			</Col>
			<Col>
				<Button className="m-5" outline color="danger" onClick={handleAuthorisation}>Authorise Certificate</Button>
			</Col>

			<div>
				<Modal isOpen={modal} toggle={toggle}
					show={show}
					onHide={handleClose}
					backdrop="static"
					keyboard={false} centered>
					<ModalHeader toggle={toggle} closeButton>Vaccination Certificate Information</ModalHeader>
					<ModalBody>This certificate has been issued and authorised.</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={issued}>OK</Button>{' '}
					</ModalFooter>
				</Modal>
			</div>
		</Container>
	);
}

export default QRContainer;