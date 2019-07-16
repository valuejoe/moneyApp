import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core'
import Cost from '../layout/Cost';

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
})

const CostListTitle = (props) => {
    const { month, date, day } = props.costList
    return (
        <React.Fragment>
            <Box fontWeight="fontWeightBold">
                {month}月{date}日 星期{day}
            </Box>
        </React.Fragment>
    )
}

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
                                    .map(doc => <CostListTitle key={doc} costList={doc} />)
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