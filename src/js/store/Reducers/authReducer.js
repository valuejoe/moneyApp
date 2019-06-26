const initState = {
    costLists: []
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            console.log('success')
            return state
        case 'LOGIN':
            console.log('success')
            return state
        default:
            return state
    }
}

export default authReducer;