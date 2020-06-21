import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import QRContainer from '../containers/QRContainer'
import MainContainer from '../containers/MainContainer'
import LoginContainer from '../containers/LoginContainer'
import VaccinationContainer from '../containers/VaccinationContainer'
import NoAuthContainer from '../containers/NoAuthContainer'
import Auth from '../helpers/Auth'

const PrivateRoute = ({ component, ...options }) => {
	const finalComponent = Auth.getAuth() ? component : NoAuthContainer;
	return <Route {...options} component={finalComponent} />;
  };

function Routes() {
	console.log('Run')
	return (
		<Router>
			<div>
				<Route component={HeaderComponent}/>
			<Switch>
				
					<PrivateRoute path="/qrcode" component={QRContainer} />
					<PrivateRoute path="/vaccination" component={VaccinationContainer} />
					<Route path="/noauth" component={NoAuthContainer} />
					<Route path="/login" component={LoginContainer} />
					<Route path="/" exact component={MainContainer} />
			</Switch>
			<FooterComponent />
			</div>
		</Router>
	)
}

export default Routes
