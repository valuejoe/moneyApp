import React from 'react';
import { connect } from 'react-redux'
import BarChart from './BarChart'
import isSameMonth from 'date-fns/isSameMonth';
const ThisMonthCost = (props) => {

    const { costLists } = props;

    const ThisMonth = new Date();

    const LastMonth = new Date();
    LastMonth.setMonth(ThisMonth.getMonth() - 1);

    let category = { "飲食": 0, "生活": 0, "交通": 0, "娛樂": 0 }
    let category2 = { "飲食": 0, "生活": 0, "交通": 0, "娛樂": 0 }
    costLists
        .filter(doc => isSameMonth(ThisMonth, new Date(doc.date)))
        .map(doc => {
            category = { ...category, [doc.category]: category[doc.category] + doc.cost }
        })

    costLists
        .filter(doc => isSameMonth(LastMonth, new Date(doc.date)))
        .map(doc => {
            category2 = { ...category2, [doc.category]: category2[doc.category] + doc.cost }
        })

    let data = [
        { chartName: `飲食`, sum: category["飲食"], sum2: category2["飲食"] },
        { chartName: `生活`, sum: category["生活"], sum2: category2["生活"] },
        { chartName: `交通`, sum: category["交通"], sum2: category2["交通"] },
        { chartName: `娛樂`, sum: category["娛樂"], sum2: category2["娛樂"] }
    ]
    const sumName = `${ThisMonth.getMonth() + 1}月`
    const sum2Name = `${LastMonth.getMonth() + 1}月`
    return (
        <React.Fragment>
            <BarChart title={"本月花費"} data={data} sumName={sumName} sum2Name={sum2Name} />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        costLists: state.data.costLists
    }
}

export default connect(mapStateToProps)(ThisMonthCost)