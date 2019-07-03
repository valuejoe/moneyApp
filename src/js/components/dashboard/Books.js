import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CostList from './costList';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = theme => ({
	progress: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '100px',
		maxWidth: '700px',
	}
})

class Books extends Component {

	render() {
		const { classes, auth, data, dataLoading } = this.props
		console.log(dataLoading)
		return (
			<React.Fragment>
				{!auth && (<Redirect to='/SignIn' />)}
				{dataLoading ? (
					<div className={classes.progress}>
						<CircularProgress size={100} />
					</div>
				) : (
						data.map((doc) => <CostList key={doc.id} costList={doc} />)
					)}

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
		data: state.data.costLists,
		dataLoading: state.data.loading
	}
}



export default connect(mapStateToPorops)(withStyles(useStyles)(Books))