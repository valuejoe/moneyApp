import React from 'react';
import {
	AppBar, Drawer, Hidden, IconButton,
	CssBaseline, Toolbar, Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import LoginSelectList from './LoginSelectList'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		height: '100vh',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		[theme.breakpoints.up('sm')]: {
			backgroundColor: '#f1f8e9',
		},
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	authContent: {
		flexGrow: 1,
		padding: theme.spacing(3),
	}
}));

const Layout = (props) => {

	const { container, children } = props;
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [auth, setAuth] = React.useState(false);

	const handleDrawerToggle = (open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setMobileOpen(open);
	}

	const drawer = (
		<div
			onClick={handleDrawerToggle(false)}
			onKeyDown={handleDrawerToggle(false)}
		>
			<Hidden xsDown implementation="css">
				<div className={classes.toolbar} />
			</Hidden>
			<SignIn />
		</div>
	);

	return (
		<div className={classes.root}>
			<CssBaseline />
			{auth ? (
				<React.Fragment>
					<AppBar position="fixed" className={classes.appBar}>
						<Toolbar>

							<IconButton
								color="inherit"
								aria-label="Open drawer"
								edge="start"
								onClick={handleDrawerToggle(true)}
								className={classes.menuButton}
							>
								<MenuIcon />
							</IconButton>

							<Typography variant="h6" noWrap>
								Money
          					</Typography>
						</Toolbar>
					</AppBar>

					<nav className={classes.drawer} >
						<Hidden smUp implementation="css">
							<Drawer
								container={container}
								variant="temporary"
								open={mobileOpen}
								onClose={handleDrawerToggle(false)}
								classes={{
									paper: classes.drawerPaper,
								}}
								ModalProps={{
									keepMounted: true,
								}}
							>
								{drawer}
							</Drawer>
						</Hidden>
						<Hidden xsDown implementation="css">
							<Drawer
								classes={{
									paper: classes.drawerPaper,
								}}
								variant="permanent"
								open
							>
								{drawer}
							</Drawer>
						</Hidden>
					</nav>
					<main className={classes.authContent}>
					<div className={classes.toolbar} />
					{children}
					</main>
				</React.Fragment>
				
			):(
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{children}
				</main>
			)}
			
		</div>
	);
}

export default withRouter(Layout)