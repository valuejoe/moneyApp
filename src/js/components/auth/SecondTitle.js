import React from 'react'
import Plant from '../../../svg/plant.svg'
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '5%',
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#F1F5ED',
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
                <Typography className={classes.title} >CREATE ACCOUNT</Typography>
                <Grid item xs={12} align="center">
                    <Plant width='60%' height='100%' />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
