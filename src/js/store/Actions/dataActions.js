import axios from 'axios';

export const getAllCostList = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_DATA' })
        dispatch({ type: 'SET_DATA' })
        // axios.get('/costLists')
        //     .then(res => {
        //         dispatch({
        //             type: 'SET_DATA',
        //             payload: res.data
        //         })
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         dispatch({
        //             type: 'SET_DATA',
        //             payload: []
        //         })
        //     })
    }
}

export const filterData = () => {
    return dispatch => {
        dispatch({ type: 'FILTER_DATA' })
    }
}

export const deleteCostList = (id, date) => {
    return dispatch => {
        dispatch({
            type: 'DELETE_COSTLIST',
            payload: { id, date }
        })
    }
}

export const openCostLists = (id) => {
    return dispatch => {
        dispatch({
            type: 'OPEN_COSTLISTS',
            payload: { id }
        })
    }
}

export const changeTabsValue = (value) => {
    return dispatch => {
        dispatch({
            type: 'CHANGE_TABS_VALUE',
            payload: { value }
        })
    }
}

export const openAddList = () => {
    return dispatch => {
        dispatch({ type: 'OPEN_ADDLIST' })
    }
}

export const cancelAdd = () => {
    return dispatch => {
        dispatch({ type: 'CLOSE_ADDLIST' })
    }
}

export const submitAddList = (value) => {
    return dispatch => {
        dispatch({
            type: 'ADD_COSTLIST',
            payload: { value }
        })
        dispatch({ type: 'CLOSE_ADDLIST' })
        dispatch({ type: 'FILTER_DATA' })
    }
}