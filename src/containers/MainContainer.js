import React from 'react';
import { Container } from 'reactstrap';
import JumbotronComponent from '../components/JumbotronComponent';
import bg from '../assets/images/shape/shape-3.png';
function MainContainer() {
	return (

		< Container fluid style={{ backgroundColor: '#FCF8F7' }}>
			<JumbotronComponent />
		</Container >
	);
}

export default MainContainer;

// backgroundImage: `url(${bg})`