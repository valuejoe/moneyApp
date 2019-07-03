const initState = {
    loading: false,
    auth: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            console.log('success')
            return state
        case 'LOGIN':
            console.log('success')
            return state
        case 'LOGOUT':
            return {
                ...state,
                auth: false
            }
        case 'SET_AUTH':
            return {
                ...state,
                auth: true
            }
        default:
            return state
    }
}

export default authReducer;