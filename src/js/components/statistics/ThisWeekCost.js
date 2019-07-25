import React from 'react';
import { connect } from 'react-redux';
import isThisWeek from 'date-fns/isThisWeek'
import BarChart from './BarChart'
const ThisWeekCost = (props) => {
    const { filterCostList } = props
    const thisWeekCost = filterCostList
        .filter(doc => isThisWeek(new Date(doc.id)))
        .sort(function (a, b) {
            var dateA = new Date(a.id), dateB = new Date(b.id);
            return dateA - dateB;
        })
        .map(doc => {
            let newdata = doc
            newdata = { sum: doc.sum, chartName: doc.day }
            return newdata
        })

    let month = {}
    filterCostList.map(doc => {
        if (month[doc.month]) {
            month[doc.month] = month[doc.month] + doc.sum
        } else {
            month[doc.month] = doc.sum
        }
    })
    return (
        <React.Fragment>
            <BarChart title={'本周花費'} data={thisWeekCost} sumName={"金額"} />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        filterCostList: state.data.filterCostList
    }
}

export default connect(mapStateToProps)(ThisWeekCost)