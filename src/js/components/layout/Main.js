import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Layout from './Layout'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import Books from '../dashboard/Books'
import Statistics from '../dashboard/Statistics'
import Login from '../auth/Login'

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/SignUp' component={SignUp} />
					<Layout>
						<Route exact path='/' component={Books} />
						<Route exact path='/statistics' component={Statistics} />
					</Layout>
				</Switch>
			</HashRouter>

		)
	}
}

export default Main