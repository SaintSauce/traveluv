import axios from 'axios';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from './actionTypes/authActionTypes'

export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
};

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});

export const login = (username, password) => {
    return (dispatch) => {
        dispatch(loginRequest());
        
        // API Call
        // return axios.post('/api/login', { username, password})
        //     .then(response => {
        //         dispatch(loginSuccess(response.data));
        //     })
        //     .catch(error => {
        //         dispatch(loginFailure(error.data));
        //     });

        // Mocking a successful API call
        setTimeout(() => {
            const mockUser = { username, password }; // Mock user data
            dispatch(loginSuccess(mockUser));
        }, 1000); // Simulate a network delay
    };
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    return {
        type: LOGOUT
    };
};