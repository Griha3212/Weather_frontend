import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './types';

export const loginRequest = data => ({
    type: LOGIN_REQUEST,
    payload: data,
});

export const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    payload: data,
});

export const loginFailure = data => ({
    type: LOGIN_FAILURE, // from types constant
    payload: data,
});
