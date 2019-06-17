import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';

const LogoutSelectList = () => {
	
	return (
		<React.Fragment>
		<ListItem 
		button
		component={Link}
		to='/SignIn'
		>
			<ListItemText primary="登入" />
		</ListItem>
		<ListItem 
		button 
		component={Link}
		to='/SignUp'
		>
			<ListItemText primary="註冊" />
		</ListItem>
		</React.Fragment>
	)
}

export default withRouter(LogoutSelectList)