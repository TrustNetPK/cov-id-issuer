import React, { useState } from 'react';
import { Button, Label, Col, FormGroup, Form, InputGroup, Input, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Auth from '../helpers/Auth';
import '../assets/styles/LoginContainer.css'

import animic1 from '../assets/images/icons/anim-icon-1.png';
import animic2 from '../assets/images/icons/anim-icon-2.png';

function LoginContainer(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	const handleSubmit = () => {
		console.log(email, password)
		if (email === 'issuer@vaccify.pk' && password === 'admin') {
			Auth.authenticate();
			props.history.replace('/vaccination')
		}
		else {
			toggle();
		}
	}

	return (
		<div className="Root" style={{ backgroundColor: '#FCF8F7' }}>

			<Container className="App" >
				<div>
					<img src={animic1} alt="Animation" />
				</div>
				<Form className="form">
					<h2 className="text-center">Log In</h2>
					<p className="text-center" style={{ color: '#808080', fontSize: '10px' }}>If you need access to Vaccify issuer demo, email us at <span style={{ color: '#800000' }}>support@trust.net.pk</span></p>
					<Col>
						<FormGroup>
							<Label className="mt-2">Email</Label>
							<InputGroup>
								<Input className="inputField rounded-pill"
									type="email"
									name="email"
									id="Email"
									onChange={(e) => setEmail(e.target.value)}
									placeholder="username@vaccify.pk"
								/>
							</InputGroup>

						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label for="Password">Password</Label>
							<Input className="inputField rounded-pill"
								type="password"
								name="password"
								id="Password"
								onChange={(e) => setPassword(e.target.value)}
								placeholder="••••••••••••"
							/>
						</FormGroup>
					</Col>
					<div className="text-center ">
						<Button className="mt-2" outline color="danger" size="lg" onClick={handleSubmit} >Submit</Button>
					</div>
				</Form>
				<div>
					<img src={animic2} alt="Animation" style={{ marginTop: '75px' }} />
				</div>

				<div>
					<Modal isOpen={modal} toggle={toggle} centered>
						<ModalHeader toggle={toggle}>Login Information</ModalHeader>
						<ModalBody>Please Login with correct credentials.</ModalBody>
						<ModalFooter>
							<Button color="primary" onClick={toggle}>OK</Button>{' '}
						</ModalFooter>
					</Modal>
				</div>
			</Container>
		</div >
	);



}



export default LoginContainer;