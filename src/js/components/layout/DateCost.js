import React from 'react';
import { Typography, Grid, Hidden } from '@material-ui/core';


function DateCost(props) {
    const { sum, date, year, month, day } = props.costList

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Hidden xsDown>
                    <Grid item xs={3}>
                        <Typography variant="h5" component="h6" align="left" color="textSecondary">
                            {month}/{date}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h5" component="h6" align="left" color="textSecondary">
                            星期{day}
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h5" component="h3" align="left" color="textSecondary">
                            總支出: {sum} NT$
                    </Typography>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid item xs={3}>
                        <Typography variant="h5" component="h6" align="center" color="textSecondary">
                            {month}/{date}
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h5" component="h6" align="right" color="textSecondary">
                            星期{day}
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant="h5" component="h3" align="left" color="textSecondary">
                            總支出:
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h5" component="h3" align="right" color="textSecondary">
                            {sum} NT$
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>
        </React.Fragment>
    );
}

export default (DateCost)