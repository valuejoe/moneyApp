import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label
} from 'recharts';
import { Typography, Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = theme => ({
    title: {
        margin: theme.spacing(2, 5)
    },
    button: {
        color: '#90b6c6',
        margin: theme.spacing(2, 0)
    }
})

class Charts extends PureComponent {
    state = {
        open: false
    }

    handleClick = () => {
        this.setState({ open: !this.state.open })
    }
    render() {
        const { classes, title, data, sumName, sum2Name } = this.props
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={7} sm={9} md={10}>
                        <Typography className={classes.title} >
                            {title}
                        </Typography>
                    </Grid>
                    {sum2Name && (
                        <Grid item xs={5} sm={3} md={2}>
                            <Button variant="outlined" onClick={this.handleClick} className={classes.button}>
                                與上個月比較
                            </Button>
                        </Grid>
                    )}
                </Grid>

                <ResponsiveContainer>
                    <BarChart
                        maxBarSize={18}
                        data={data}
                        margin={{
                            top: 5, right: 15, left: 0, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="chartName">
                        </XAxis>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {this.state.open && <Bar dataKey="sum2" fill="#90b6c6" unit="NT$" name={sum2Name} />}
                        {sumName && <Bar dataKey="sum" fill="#c1abb6" unit="NT$" name={sumName} />}
                    </BarChart>
                </ResponsiveContainer>

            </React.Fragment >
        );
    }
}

Charts.proptype = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        filterCostList: state.data.filterCostList
    }
}
export default connect(mapStateToProps)(withStyles(useStyles)(Charts))