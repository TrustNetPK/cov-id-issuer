import React, { useState } from 'react'
import { Container, Button, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import QRComponent from '../components/QRComponent'
import '../assets/styles/LoginContainer.css'
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
		<div className="Root" style={{ backgroundColor: '#FCF8F7', display: "flex" }}>
			<Container >
				<Col>
					<QRComponent value={JSON.stringify(props.location.state)} />
				</Col>
				<Col className="mt-3">
					<Button outline color="danger" onClick={handleAuthorisation}>Authorise Certificate</Button>
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
		</div>
	);
}

export default QRContainer;