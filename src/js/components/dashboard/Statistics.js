import React, { Component } from 'react';
import { Paper, Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import SevenDayCost from '../statistics/SevenDayCost';
import ThisWeekCost from '../statistics/ThisWeekCost';
import ThisMonthCost from '../statistics/ThisMonthCost';

const useStyles = theme => ({
    paper: {
        height: '250px',
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    content: {
        flexGrow: 1,
        overflow: 'auto',
        maxHeight: '85vh',
    }
})

class Statistics extends Component {
    render() {
        const { classes } = this.props

        return (
            <React.Fragment>
                <div className={classes.content}>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={11} md={6}>
                                <Paper className={classes.paper}>
                                    <SevenDayCost />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={11} md={6}>
                                <Paper className={classes.paper}>
                                    <ThisWeekCost />
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <ThisMonthCost />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

Statistics.proptype = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(Statistics);