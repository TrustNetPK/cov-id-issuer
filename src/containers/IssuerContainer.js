import React from 'react';
import { Button, Form, FormGroup, Input, Container } from 'reactstrap';

function LoginContainer(props) {
	
	const handleSubmit = () => {
		props.history.push('/issue')
	}

	return (
		<Container className="d-flex pt-5">
			<Form className="w-50 mx-auto mt-5 text-center pt-5">
				<h1>Please Enter Your Credentials here</h1>
				<FormGroup className="mt-2 pt-5">
					<Input type="email" name="email" id="exampleEmail" placeholder="Please enter your nic here" />
				</FormGroup>
				<FormGroup>
					<Input type="text" name="text" id="examplePassword" placeholder="Please enter your your immunity passport number here" />
				</FormGroup>
				<Button className="btn btn-lg btn-primary btn-block mt-4" onClick={handleSubmit}>Submit</Button>
			</Form>
		</Container>
	);
}

export default LoginContainer;