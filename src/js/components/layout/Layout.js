import React, { Component } from 'react';
import {
	AppBar, Drawer, Hidden, IconButton,
	CssBaseline, Toolbar, Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter, Redirect } from 'react-router-dom';
import LoginSelectList from './LoginSelectList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { getAllCostList, filterData } from '../../store/Actions/dataActions';


const drawerWidth = 240;

const useStyles = theme => ({
	root: {
		display: 'flex',
		height: '100vh',
	},
	drawer: {
		[theme.breakpoints.up('lg')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('lg')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	authContent: {
		flexGrow: 1,
		backgroundColor: '#f1f8e9',
		padding: theme.spacing(1)
	}
});

class Layout extends Component {
	componentDidMount() {
		this.props.getAllCostList();
		this.props.filterData();
	}

	state = {
		mobileOpen: false
	}
	render() {
		const { classes, container, children, auth } = this.props;

		const handleDrawerToggle = (open) => event => {
			if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
				return;
			}
			this.setState({ mobileOpen: open })
		}

		const drawer = (
			<div
				onClick={handleDrawerToggle(false)}
				onKeyDown={handleDrawerToggle(false)}
			>
				<Hidden mdDown implementation="css">
					<div className={classes.toolbar} />
				</Hidden>
				<LoginSelectList />
			</div>
		);

		return (
			<React.Fragment>
				{!auth && (<Redirect to='/login' />)}
				<div className={classes.root}>
					<CssBaseline />
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
							<Hidden lgUp implementation="css">
								<Drawer
									container={container}
									variant="temporary"
									open={this.state.mobileOpen}
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
							<Hidden mdDown implementation="css">
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
				</div>
			</React.Fragment>
		);
	}

}

Layout.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAllCostList: () => dispatch(getAllCostList()),
		filterData: () => dispatch(filterData())
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withStyles(useStyles)
)(Layout)