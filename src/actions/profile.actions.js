import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILURE,
} from './types';

export const profileRequest = data => ({
    type: PROFILE_REQUEST,
    payload: data,
});

export const profileSuccess = data => ({
    type: PROFILE_SUCCESS,
    payload: data,
});

export const profileFailure = data => ({
    type: PROFILE_FAILURE, // from types constant
    payload: data,
});
