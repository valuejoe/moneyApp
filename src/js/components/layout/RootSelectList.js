import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Divider } from '@material-ui/core';
import LoginSelectList from './LoginSelectList';
import LogoutSelectList from './LogoutSelectList';


const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));


export default function RootSelectList() {
	const classes = useStyles();
	

	return (
		<div className={classes.root}>
			<List component="nav" aria-label="Main mailbox folders">
				<LogoutSelectList/>
				<LoginSelectList/>
			</List>
			<Divider />
		</div>
	);
}