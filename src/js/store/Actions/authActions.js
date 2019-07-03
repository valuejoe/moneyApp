import axios from 'axios';

export const signUp = (newUser, history) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_UI' })
        const { errors, isSignUpEmpty } = isSignUpOrSingInEmpty(newUser);
        if (isSignUpEmpty) {
            dispatch(
                {
                    type: 'SET_ERROR',
                    payload: errors
                })
        } else {
            axios
                .post('/signup', newUser)
                .then(res => {
                    dispatch({ type: 'SIGNUP' });
                    dispatch({ type: 'CLEAR_ERROR' })
                    history.push('/');
                    dispatch({ type: 'STOPLOADING_UI' })
                })
                .catch((err) => {
                    dispatch({
                        type: 'SERVER_ERROR',
                        payload: err.response.data
                    })
                })
        }
    }
};

export const signIn = (userData, history) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_UI' })
        const { errors, isSignInEmpty } = isSignUpOrSingInEmpty(userData)
        if (isSignInEmpty) {
            dispatch({
                type: 'SET_ERROR',
                payload: errors
            })
        } else {
            axios
                .post('/signIn', userData)
                .then((res) => {
                    setAuthorizationHeader(res.data.token);
                    dispatch({ type: 'SET_AUTH' });
                    dispatch({ type: 'CLEAR_ERROR' });
                    dispatch({ type: 'STOPLOADING_UI' });
                    history.push('/');
                })
                .catch((err) => {
                    dispatch({
                        type: 'SERVER_ERROR',
                        payload: err.response.data
                    })
                })
        }
    }
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('FBIdToken');
        delete axios.defaults.headers.common['Authorization'];
        dispatch({ type: 'LOGOUT' });
    }
}

export const clearError = () => {
    return dispatch => {
        dispatch({ type: 'CLEAR_ERROR' });
    }
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};

const isSignUpOrSingInEmpty = (value) => {

    let errors = {};
    let isSignInEmpty = false;
    if (value.username === '') errors.username = 'Username未填寫'
    if (value.email === '') {
        errors.email = 'Email未填寫';
        isSignInEmpty = true;
    }
    if (value.password === '') {
        errors.password = 'password未填寫';
        isSignInEmpty = true;
    }
    if (value.confirmPassword !== value.password) errors.confirmPassword = '兩次密碼輸入不相同'
    return {
        errors,
        isSignUpEmpty: Object.keys(errors).length === 0 ? false : true,
        isSignInEmpty: isSignInEmpty
    }
}