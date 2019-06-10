import {
    CHECK_LOGIN_REQUEST,
    CHECK_LOGIN_SUCCESS,
    CHECK_LOGIN_FAILURE,
} from './types';


export const checkLoginRequest = data => ({
    type: CHECK_LOGIN_REQUEST,
    payload: data,
});

export const checkLoginSuccess = data => ({
    type: CHECK_LOGIN_SUCCESS,
    payload: data,
});

export const checkLoginFailure = data => ({
    type: CHECK_LOGIN_FAILURE, // from types constant
    payload: data,
});
