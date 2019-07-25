import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import TabBar from '../layout/TabBar'
import DateList from '../books/DateList'
import CostList from '../books/CostList'

const useStyles = theme => ({
	costList: {
		flexGrow: 1,
		height: '85vh',
	},
})

class Books extends Component {

	render() {
		const { classes, auth } = this.props
		return (
			<React.Fragment>
				{!auth && (<Redirect to='/SignIn' />)}
				<Hidden smDown>
					<Grid container spacing={2} className={classes.costList}>
						<Grid item xs={6} >
							<DateList />
						</Grid>
						<Grid item xs={6} >
							<CostList />
						</Grid>
					</Grid>
				</Hidden>
				<Hidden mdUp>
					<TabBar />
				</Hidden>
			</React.Fragment>
		)
	}
}

Books.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToPorops = (state) => {
	return {
		auth: state.auth.auth,
	}
}

export default connect(mapStateToPorops)(withStyles(useStyles)(Books))