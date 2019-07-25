import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, CardContent, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { deleteCostList, filterData } from '../../store/Actions/dataActions';
const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: '5px',
        backgroundColor: 'white',
        height: '105px',
        padding: theme.spacing(1, 2),
    },
}));

function Cost(props) {
    const classes = useStyles();
    const { costList } = props
    const DeleteClick = () => {
        props.deleteCostList(costList.id, costList.date);
        props.filterData()
    }

    return (
        <React.Fragment>
            <CardContent className={classes.root} >
                <Grid container>
                    <Grid item xs={4}>
                        <Typography variant="body1" component="h1" align="left" color="textSecondary">
                            {costList.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h5" component="h2" align="left" color="textSecondary">
                            {costList.cost}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {costList.category}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={DeleteClick}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="textSecondary" component="p">
                            備註: {costList.comment}
                        </Typography>
                    </Grid>

                </Grid>


            </CardContent>
        </React.Fragment>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCostList: (id, date) => dispatch(deleteCostList(id, date)),
        filterData: () => dispatch(filterData())
    }
}

export default connect(null, mapDispatchToProps)(Cost)