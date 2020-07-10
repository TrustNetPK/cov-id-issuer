import React from 'react';
import { Container } from 'reactstrap';
import VaccinationForm from '../components/VaccinationForm';
import animic1 from '../assets/images/icons/anim-icon-1.png';
import animic2 from '../assets/images/icons/anim-icon-2.png';
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