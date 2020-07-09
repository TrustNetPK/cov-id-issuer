import React from 'react';
import { Container } from 'reactstrap';
import VaccinationForm from '../components/VaccinationForm';
import animic1 from '../assets/images/icons/anim-icon-1.png';
import animic2 from '../assets/images/icons/anim-icon-2.png';
function VaccinationContainer() {
	return (
		<div style={{ backgroundColor: '#FCF8F7', display: "flex" }}>
			<Container className="pt-5 mt-5 mb-5" >
				<VaccinationForm />
			</Container>
		</div>
	);
}

export default VaccinationContainer;