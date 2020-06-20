import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import IssuerContainer from '../containers/IssuerContainer'
import QRContainer from '../containers/QRContainer'
import MainContainer from '../containers/MainContainer'
import LoginContainer from '../containers/LoginContainer'
import VaccinationContainer from '../containers/VaccinationContainer'

function PublicRoutes() {
	return (
		<Router>
			<div>
				<HeaderComponent />
				<Switch>
					<Route path="/login">
						<LoginContainer />
					</Route>
					<Route path="/issuer">
						<IssuerContainer />
					</Route>
					<Route path="/qrcode">
						<QRContainer />
					</Route>
					<Route path="/vaccination">
						<VaccinationContainer />
					</Route>
					<Route path="/">
						<MainContainer />
					</Route>
				</Switch>
				<FooterComponent />
			</div>
		</Router>
	)
}

export default PublicRoutes
