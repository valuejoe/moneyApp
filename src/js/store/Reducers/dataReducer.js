import testData from '../../../testData'
const initState = {
    costLists: [],
    filterCostList: [],
    loading: false,
    isOpenCostList: false,
    handleCostList: '',
    tabsValue: 0,
    isOpenAddList: false,
    handleCostListsId: 22
}

const dataReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOADING_DATA':
            return {
                ...state,
                loading: true
            }
        case 'SET_DATA':
            let newCostLists = action.payload;
            newCostLists.sort(function (a, b) {
                var dateA = new Date(a.date), dateB = new Date(b.date);
                return dateB - dateA;
            });

            return {
                ...state,
                costLists: newCostLists
            }
        case 'FILTER_DATA':
            let filterData = dateFilter(state.costLists)
            addDateCostSum(filterData, state.costLists)
            return {
                ...state,
                filterCostList: filterData,
                loading: false
            }
        case 'DELETE_COSTLIST':
            let { deleteData, isDateExist } = deleteCostListFunctions(state.costLists, action.payload.id, action.payload.date)
            let newTabsValue = 1
            if (!isDateExist) {
                newTabsValue = 0
            }
            return {
                ...state,
                costLists: deleteData,
                isOpenCostList: isDateExist,
                tabsValue: newTabsValue,
                loading: false,
            }
        case 'OPEN_COSTLISTS':
            return {
                ...state,
                isOpenCostList: true,
                handleCostList: action.payload.id
            }
        case 'CHANGE_TABS_VALUE':
            return {
                ...state,
                tabsValue: action.payload.value
            }
        case 'OPEN_ADDLIST':
            return {
                ...state,
                isOpenAddList: true
            }
        case 'CLOSE_ADDLIST':
            return {
                ...state,
                isOpenAddList: false
            }
        case 'ADD_COSTLIST':
            let { addCostList } = addCostListFunctions(action.payload, state.handleCostListsId)
            return {
                ...state,
                costLists: [...state.costLists, addCostList],
                handleCostListsId: state.handleCostListsId + 1,
                loading: false,
            }
        case 'INIT_STATE':
            return initState
        default:
            return state;
    }
}

export default dataReducer

const dateFilter = (value) => {
    let costLists = value
    costLists.sort(function (a, b) {
        let dateA = new Date(a.date), dateB = new Date(b.date);
        return dateB - dateA
    });
    let newData = [];
    while (costLists.length !== 0) {
        let dateString = new Date(costLists[0].date).toDateString();
        let filterList = costLists.filter(doc => new Date(doc.date).toDateString() === dateString)
        const sum = addDateCostSum(filterList)
        const { year, month, dt, day } = splitDate(dateString)
        let doc = {
            id: dateString,
            year: year,
            month: month,
            date: dt,
            day: day,
            sum: sum
        }
        newData = [...newData, doc]
        costLists = costLists.filter(doc => new Date(doc.date).toDateString() !== dateString)
    }

    return newData
}

const splitDate = (date) => {
    let weekend = ['日', '一', '二', '三', '四', '五', '六']
    let newdate = new Date(date);
    let year = newdate.getFullYear();
    let day = newdate.getDay();
    let month = newdate.getMonth() + 1;
    let dt = newdate.getDate();
    return {
        year,
        day: weekend[day],
        month,
        dt
    }
}

const addDateCostSum = (filterList) => {

    let sum = 0;
    filterList.map(doc => sum = doc.cost + sum)
    return sum
}

const deleteCostListFunctions = (data, id, date) => {
    let newData = data.filter(doc => doc.id !== id)

    let isDateExist = false
    newData.map(doc => {
        if (new Date(doc.date).toDateString() === new Date(date).toDateString()) {
            return isDateExist = true
        }
    })

    return { deleteData: newData, isDateExist }
}

const addCostListFunctions = (value, id) => {
    let newData = { id: id + 1, ...value }

    return {
        addCostList: newData
    }
}