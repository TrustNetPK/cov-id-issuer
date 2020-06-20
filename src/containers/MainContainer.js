import React from 'react';
import { Container } from 'reactstrap';
import JumbotronComponent from '../components/JumbotronComponent';

function MainContainer(props) {
	return (
		<Container className="pt-5 mt-5">
			<JumbotronComponent />
		</Container>
	);
}

export default MainContainer;