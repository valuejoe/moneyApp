const initState = {
    errors: '',
    loading: false
}

const componentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return {
                ...state,
                errors: action.payload,
                loading: false
            }
        case 'SERVER_ERROR':
            const { errors, valid } = distinguishError(action.payload)
            if (valid) {
                console.log(action.payload)
                return {
                    ...state,
                    loading: false
                }
            } else {
                return {
                    ...state,
                    errors: errors,
                    loading: false
                }
            }
        case 'CLEAR_ERROR':
            return {
                ...state,
                errors: ''
            }
        case 'LOADING_UI':
            return {
                ...state,
                loading: true
            }
        case 'STOPLOADING_UI':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default componentReducer;

const distinguishError = (value) => {
    const errors = {}
    if (value.username === 'username is already exist') errors.username = 'Username已存在'
    if (value.email === 'Must be vaild email address') errors.email = '請填寫正確email'
    if (value === 'auth/email-already-in-use') errors.email = 'Email已存在'
    if (value.error === 'Please try again!') errors.loginError = '帳號或密碼輸入錯誤!'

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    }
}