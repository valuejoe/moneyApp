import React from 'react';
import Coins from '../../../svg/coins.svg';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '5%',
    },
    title: {
        fontWeight: 'bold',
        color: '#7A7474',
        marginBottom: theme.spacing(2),
    },

}))

export default function MainTitle() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.root}
            >
                <Typography variant="h4" component="h2" className={classes.title} >Money</Typography>
                <Grid item xs={12} align="center">
                    <Coins width='70%' height='100%' />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
