const initState = {
    costLists: [
        { id: 0, title: '雞排', category: '飲食', cost: 65, date: '2019-07-03' },
        { id: 1, title: '早餐', category: '飲食', cost: 60, date: '2019-07-03' },
        { id: 2, title: '早餐', category: '飲食', cost: 80, date: '2019-07-02' },
        { id: 3, title: '午餐', category: '飲食', cost: 100, date: '2019-07-02' },
        { id: 4, title: '晚餐', category: '飲食', cost: 150, date: '2019-07-02' },
        { id: 5, title: '早餐', category: '飲食', cost: 75, date: '2019-07-01' },
        { id: 6, title: '午餐', category: '飲食', cost: 80, date: '2019-07-01' },
        { id: 7, title: '晚餐', category: '飲食', cost: 200, date: '2019-07-01' },
        { id: 8, title: '晚餐', category: '飲食', cost: 200, date: '2019-06-29' },
        { id: 9, title: '晚餐', category: '飲食', cost: 200, date: '2019-06-29' },
        { id: 10, title: '晚餐', category: '飲食', cost: 200, date: '2019-06-28' },
        { id: 11, title: '晚餐', category: '飲食', cost: 200, date: '2019-06-28' },
        { id: 12, title: '晚餐', category: '飲食', cost: 200, date: '2019-06-28' },
        { id: 13, title: '咖啡', category: '飲食', cost: 100, date: '2019-07-06' },
        { id: 14, title: '拉麵', category: '飲食', cost: 115, date: '2019-07-05' },
        { id: 15, title: '拉麵', category: '飲食', cost: 115, date: '2019-07-05' },
        { id: 16, title: '拉麵', category: '飲食', cost: 115, date: '2019-07-05' },
        { id: 17, title: '拉麵', category: '飲食', cost: 115, date: '2019-07-05' },
        { id: 18, title: '拉麵', category: '飲食', cost: 115, date: '2019-07-05' },
        { id: 19, title: '拉麵', category: '飲食', cost: 115, date: '2019-07-05' },
        { id: 20, title: '拉麵', category: '飲食', cost: 115, date: '2019-07-05' },
        { id: 22, title: '墨西哥起司雞肉餅', category: '飲食', cost: 10000000, date: '2018-12-28' },

    ],
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
            // let newCostLists = action.payload;
            // newCostLists.sort(function (a, b) {
            //     var dateA = new Date(a.date), dateB = new Date(b.date);
            //     return dateB - dateA;
            // });

            return {
                ...state,
                loading: false,
                // costLists: newCostLists
            }
        case 'FILTER_DATA':
            let filterData = dateFilter(state.costLists)
            addDateCostSum(filterData, state.costLists)
            return {
                ...state,
                filterCostList: filterData
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
                tabsValue: newTabsValue
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
            console.log(action.payload.value)
            let { addCostList } = addCostListFunctions(action.payload.value, state.handleCostListsId)
            return {
                ...state,
                costLists: [...state.costLists, addCostList],
                handleCostListsId: state.handleCostListsId + 1
            }
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
        console.log(costLists)
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
        if (doc.date === date) {
            return isDateExist = true
        }
    })

    return { deleteData: newData, isDateExist }
}

const addCostListFunctions = (value, id) => {
    let newData = { id: id + 1 }
    newData = {
        ...newData,
        date: new Date(value.date).toISOString(),
        title: value.title,
        category: value.category,
        cost: parseInt(value.cost, 10),
        comment: value.comment
    }
    return {
        addCostList: newData
    }
}