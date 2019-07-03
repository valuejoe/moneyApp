const initState = {
    costLists: [],
    loading: false
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
                loading: false,
                costLists: newCostLists
            }
        default:
            return state;
    }
}

export default dataReducer