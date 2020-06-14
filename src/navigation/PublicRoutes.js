import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PreLoaderComponent from '../components/PreLoaderComponent'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import IssuerContainer from '../containers/IssuerContainer'
import LoginContainer from '../containers/LoginContainer'

function PublicRoutes() {
	return (
		<Router>
			<div>
				<HeaderComponent />
				<Switch>
					<Route exact path="/login" component={LoginContainer} />
					<Route exact path="/issue" component={IssuerContainer} />
				</Switch>
				<FooterComponent />
			</div>
		</Router>
	)
}

export default PublicRoutes
