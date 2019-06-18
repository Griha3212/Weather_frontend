import {
    HISTORY_DATA_REQUEST,
    HISTORY_DATA_SUCCESS,
    HISTORY_DATA_FAILURE,
    HISTORY_DATA_ITEM_REQUEST,
    HISTORY_DATA_ITEM_SUCCESS,
    HISTORY_DATA_ITEM_FAILURE,
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

//для одного элемента

export const historyDataItemRequest = data => ({
    type: HISTORY_DATA_ITEM_REQUEST,
    payload: data,
});

export const historyDataItemSuccess = data => ({
    type: HISTORY_DATA_ITEM_SUCCESS,
    payload: data,
});


export const historyDataItemFailure = data => ({
    type: HISTORY_DATA_ITEM_FAILURE, // from types constant
    payload: data,
});
