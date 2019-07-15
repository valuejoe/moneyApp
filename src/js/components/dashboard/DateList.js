import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { CircularProgress, Paper, ButtonBase, Typography } from '@material-ui/core';
import DataCost from '../layout/DateCost';
import AddCost from './AddCost';
import { openCostLists, changeTabsValue, openAddList } from '../../store/Actions/dataActions'

const useStyles = theme => ({
    DataList: {
        maxHeight: '80vh',
        overflow: 'auto',
        margin: theme.spacing(1, 0),
    },
    progress: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '100px',
        maxWidth: '100%',
    },
    Paper: {
        marginBottom: '10px',
    },
    button: {
        padding: theme.spacing(1, 2),
        width: '100%'
    },
})

class DateList extends Component {

    handleClick = (id) => {
        this.props.openCostLists(id)
        this.props.changeTabsValue(1)
    }

    handleAddClick = () => {
        console.log('success')
        this.props.openAddList()
    }

    render() {
        const { classes, dataLoading, filterCostList, isOpenAddList } = this.props
        return (
            <React.Fragment>
                <div className={classes.DataList}>

                    {dataLoading ? (
                        <div className={classes.progress}>
                            <CircularProgress size={100} />
                        </div>
                    ) : (
                            <React.Fragment>

                                {isOpenAddList ?
                                    (
                                        <AddCost />
                                    ) : (
                                        <React.Fragment>
                                            <Paper className={classes.Paper}>
                                                <ButtonBase
                                                    className={classes.button}
                                                    onClick={this.handleAddClick}
                                                >
                                                    <Typography
                                                        variant="h5"
                                                        component="h6"
                                                        align="left"
                                                        color="textSecondary"
                                                    >
                                                        +Add
                                                    </Typography>
                                                </ButtonBase>
                                            </Paper>
                                            {filterCostList.map((doc, index) => (
                                                <Paper key={doc.id} className={classes.Paper} >
                                                    <ButtonBase
                                                        key={doc.id}
                                                        className={classes.button}
                                                        onClick={() => this.handleClick(doc.id)}
                                                    >
                                                        <DataCost key={doc.id} costList={doc} />
                                                    </ButtonBase>
                                                </Paper>
                                            ))}
                                        </React.Fragment>
                                    )}

                            </React.Fragment>
                        )}
                </div>
            </React.Fragment>
        )
    }
}

DateList.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        dataLoading: state.UI.loading,
        filterCostList: state.data.filterCostList,
        isOpenAddList: state.data.isOpenAddList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openCostLists: id => dispatch(openCostLists(id)),
        changeTabsValue: (value) => dispatch(changeTabsValue(value)),
        openAddList: () => dispatch(openAddList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(DateList))