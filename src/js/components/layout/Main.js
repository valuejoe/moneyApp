import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'
import Layout from './Layout'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import Books from '../dashboard/Books'

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<Layout>
				<Switch>
					<Route exact path='/SignIn' component={SignIn} />
					<Route exact path='/SignUp' component={SignUp} />
					<Route exact path='/Books' component={Books} />
				</Switch>
				</Layout>
			</HashRouter>

		)
	}
}

export default Main