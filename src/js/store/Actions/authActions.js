import axios from 'axios';

export const signUp = (newUser, history) => {
    console.log(newUser);
    return (dispatch) => {

        axios
            .post('/signup', newUser)
            .then(res => {
                dispatch({ type: 'SIGNUP' });
                history.push('/');
            })
            .catch((err) => {
                dispatch({
                    type: 'SET_ERROR',
                    payload: err.response.data
                })
            })
    }
};

export const signIn = (userData, history) => {
    return (dispatch) => {
        axios
            .post('/signIn', userData)
            .then(res => {
                dispatch({ type: 'LOGIN' });
                setAuthorizationHeader(res.data.token);
                history.push('/');
            })
            .catch((err) => {
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data
                })
            })
    }
};

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
};