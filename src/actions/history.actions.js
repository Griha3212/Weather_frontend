import {
    HISTORY_DATA_REQUEST,
    HISTORY_DATA_SUCCESS,
    HISTORY_DATA_FAILURE,
} from './types';

export const historyDataRequest = data => ({
    type: HISTORY_DATA_REQUEST,
    payload: data,
});

export const historyDataSuccess = data => ({
    type: HISTORY_DATA_SUCCESS,
    payload: data,
});

export const historyDataFailure = data => ({
    type: HISTORY_DATA_FAILURE, // from types constant
    payload: data,
});
