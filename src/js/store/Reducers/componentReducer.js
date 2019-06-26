const initState = {
    error: '',
    loading: false
}

const componentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'CLEAN_ERROR':
            return {
                ...state,
                error: ''
            }
        default:
            return state
    }
}

export default componentReducer;