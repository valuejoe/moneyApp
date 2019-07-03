import axios from 'axios';

export const getCostList = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_DATA' })
        axios.get('/costLists')
            .then(res => {
                dispatch({
                    type: 'SET_DATA',
                    payload: res.data
                })
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