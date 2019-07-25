import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core'
import Cost from './Cost';

const useStyles = theme => ({
    costListTitle: {
        padding: theme.spacing(1, 2),
        margin: theme.spacing(1, 0),
        backgroundColor: '#bfc1a0',
    },
    costList: {
        height: '77vh',
        overflowY: 'scroll',
        overflowX: 'hidden',
    },
    box: {
        color: '#5e6073'
    }

})

class CostList extends Component {
    render() {
        const { classes, isOpenCostList, data, handleCostList, filterCostList } = this.props
        return (
            <React.Fragment>
                {isOpenCostList &&
                    <React.Fragment>
                        <div className={classes.costListTitle}>
                            {
                                filterCostList.filter(doc => doc
                                    .id === handleCostList)
                                    .map(doc => (
                                        <Box key={doc.id} fontWeight="fontWeightBold" className={classes.box}>
                                            {doc.month}月{doc.date}日 星期{doc.day}
                                        </Box>
                                    ))
                            }
                        </div>
                        <div className={classes.costList}>

                            {
                                data
                                    .filter(doc => new Date(doc.date).toDateString() === handleCostList)
                                    .map(doc => <Cost key={doc.id} costList={doc} />)
                            }
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

CostList.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
    return {
        isOpenCostList: state.data.isOpenCostList,
        data: state.data.costLists,
        handleCostList: state.data.handleCostList,
        filterCostList: state.data.filterCostList,
    }
}

export default connect(mapStateToProps)(withStyles(useStyles)(CostList))