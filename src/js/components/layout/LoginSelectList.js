import React from 'react'
import { ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import { Money, InsertChart } from '@material-ui/icons';
import { connect } from 'react-redux';
import { logout } from '../../store/Actions/authActions';
import { withRouter, Link } from 'react-router-dom';


const LoginSelectList = (props) => {
	const handleClick = () => {
		props.logout();
		props.history.push('/SignIn')
	}
	return (
		<React.Fragment>
			<ListItem
				button
				component={Link}
				to='/'
			>
				<ListItemIcon>
					<Money />
				</ListItemIcon>
				<ListItemText primary="帳本" />
			</ListItem>
			<Divider />
			<ListItem
				button
				component={Link}
				to='/statistics'
			>
				<ListItemIcon>
					<InsertChart />
				</ListItemIcon>
				<ListItemText primary="統計" />
			</ListItem>
			<Divider />
			<ListItem button onClick={handleClick}>
				<ListItemText primary="登出" />
			</ListItem>
		</React.Fragment>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout())
	}
}
export default connect(null, mapDispatchToProps)(withRouter(LoginSelectList))