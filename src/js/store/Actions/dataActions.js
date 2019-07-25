import axios from 'axios';

export const getAllCostList = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_DATA' })
        axios.get('/costLists')
            .then(res => {
                dispatch({
                    type: 'SET_DATA',
                    payload: res.data
                });
                dispatch({ type: 'FILTER_DATA' });
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: 'SET_DATA',
                    payload: []
                })
            })
    }
}

export const filterData = () => {
    return dispatch => {
        dispatch({ type: 'FILTER_DATA' })
    }
}

export const deleteCostList = (id, date) => {
    return dispatch => {
        dispatch({ type: 'LOADING_DATA' })
        axios
            .delete(`/costList/${id}`)
            .then(() => {
                dispatch({
                    type: 'DELETE_COSTLIST',
                    payload: { id, date }
                });
                dispatch({ type: 'FILTER_DATA' });
            })
            .catch(err => {
                dispatch({
                    type: 'SERVER_ERROR',
                    payload: err.response.data
                });
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
        dispatch({ type: 'CLEAR_ERROR' })
    }
}

export const submitAddList = (value) => {
    return dispatch => {
        const { errors, postData, isError } = checkAddList(value)
        if (isError) {
            dispatch({
                type: 'SET_ERROR',
                payload: errors
            })
        } else {
            dispatch({ type: 'LOADING_DATA' })
            axios.post('/costList', postData)
                .then(res => {
                    dispatch({
                        type: 'ADD_COSTLIST',
                        payload: res.data
                    })
                    dispatch({ type: 'CLOSE_ADDLIST' })
                    dispatch({ type: 'FILTER_DATA' })
                    dispatch({ type: 'CLEAR_ERROR' })
                })
                .catch(err => {
                    dispatch({
                        type: 'SERVER_ERROR',
                        payload: err.response.data
                    })
                })
        }
    }
}

const checkAddList = (value) => {
    let errors = {}
    let newData = value
    if (value.title === '') errors.title = '項目名稱未填寫'
    if (value.date == "Invalid Date" || value.date == null) {
        errors.date = '格式錯誤'
    } else {
        newData = { ...newData, date: new Date(value.date).toDateString() }
    }
    if (value.category === '') errors.category = '分類未填寫'
    if (value.cost === '') { errors.cost = '金額未填寫' } else { newData = { ...newData, cost: parseInt(value.cost, 10) } }
    return {
        errors,
        postData: newData,
        isError: Object.keys(errors).length === 0 ? false : true
    }
}