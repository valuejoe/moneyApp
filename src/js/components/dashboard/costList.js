import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 5),
        maxWidth: '700px',
        marginBottom: '5px'
    },
}));

function CostList(props) {
    const classes = useStyles();
    const { costList } = props
    const { month, dt } = splitDate(costList.date)
    return (
        <React.Fragment>
            <Paper className={classes.root}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography variant="h5" component="h6" color="textSecondary">
                            {costList.category}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" component="h3" align="center" color="textSecondary">
                            {costList.cost} NT$
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" component="h3" align="right" color="textSecondary">
                            {month}/{dt}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}

const splitDate = (date) => {
    let newdate = new Date(date);
    let year = newdate.getFullYear();
    let month = newdate.getMonth() + 1;
    let dt = newdate.getDate();
    // console.log(`${year}年${month}月${dt}日`)
    return { year, month, dt }
}

export default (CostList)