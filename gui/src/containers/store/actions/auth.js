import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://localhost:8000/accounts/api/auth/login/', {
            email: email,
            password: password
        })
        .then(res => {
            const token = res.data.token;
            const user = res.data.user.pk;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token, user));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authSignup = (username, email,  password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/accounts/api/auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.token;
            const user = res.data.user;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('token', user);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token, user));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token, user));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}