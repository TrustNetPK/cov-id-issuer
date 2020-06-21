import React from 'react';
import { Container } from 'reactstrap';
import JumbotronComponent from '../components/JumbotronComponent';

function MainContainer() {
	return (
		<Container className="pt-5 mt-5 pb-5 mb-4">
			<JumbotronComponent />
		</Container>
	);
}

export default MainContainer;