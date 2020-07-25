import React from 'react';
import { Container } from 'reactstrap';
import VaccinationForm from '../components/VaccinationForm';
import '../assets/styles/LoginContainer.css'

function VaccinationContainer() {
	return (
		<div className="Root" style={{ backgroundColor: '#FCF8F7', display: "flex" }}>
			<Container >
				<VaccinationForm className="justify-content-center" />
			</Container>
		</div >
	);
}

export default VaccinationContainer;