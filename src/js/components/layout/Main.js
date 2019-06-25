import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Layout from './Layout'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'


class Main extends Component {
	render() {
		return (
			<HashRouter >
				<Layout>
					<Switch>
						<Route path='/SignIn' component={SignIn} /> */}
						<Route path='/SignUp' component={SignUp} />
						<Redirect from="/" to='/SignIn' />
					</Switch>
				</Layout>
			</HashRouter >

		)
	}
}

export default Main