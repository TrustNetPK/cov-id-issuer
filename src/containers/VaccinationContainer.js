import React from 'react';
import { Container } from 'reactstrap';
import VaccinationForm from '../components/VaccinationForm';

function VaccinationContainer() {
	return (
		<Container className="pt-5 mt-5 mb-5">
			<VaccinationForm />
		</Container>
	);
}

export default VaccinationContainer;