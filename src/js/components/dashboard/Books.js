import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import { Grid, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { filterData, closeCostLists } from '../../store/Actions/dataActions';
import TabBar from '../layout/TabBar'
import DateList from './DateList'
import CostList from './CostList'

const useStyles = theme => ({
	costList: {
		flexGrow: 1,
		height: '85vh',
	},
})

class Books extends Component {
	componentDidMount() {
		this.props.filterData()
	}
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

const mapDispatchToPorops = (dispatch) => {
	return {
		filterData: () => dispatch(filterData()),
	}
}

export default connect(mapStateToPorops, mapDispatchToPorops)(withStyles(useStyles)(Books))