import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import BarChart from './BarChart';

class Charts extends PureComponent {

    render() {
        const { filterCostList } = this.props
        const sevenDayCost = filterCostList
            .filter((doc, index) => index <= 6)
            .sort(function (a, b) {
                var dateA = new Date(a.id), dateB = new Date(b.id);
                return dateA - dateB;
            })
            .map(doc => {
                let newData = { sum: doc.sum, chartName: `${doc.month}/${doc.date}` }
                return newData
            });

        return (
            <React.Fragment>
                <BarChart title={'近七筆總額'} data={sevenDayCost} sumName={"金額"}  />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filterCostList: state.data.filterCostList
    }
}
export default connect(mapStateToProps)(Charts)