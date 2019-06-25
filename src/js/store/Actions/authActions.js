import axios from 'axios';

export const signUp = (newUser, history) => {

    return (dispatch) => {

        axios
            .post('/signup', newUser)
            .then(res => {
                dispatch({ type: 'SIGNUP' });
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }
};