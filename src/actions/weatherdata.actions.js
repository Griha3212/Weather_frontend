import {
    WEATHER_DATA_REQUEST,
    WEATHER_DATA_SUCCESS,
    WEATHER_DATA_FAILURE,
} from './types';

export const weatherDataRequest = data => ({
    type:  WEATHER_DATA_REQUEST,
    payload: data,
});

export const weatherDataSuccess = data => ({
    type:  WEATHER_DATA_SUCCESS,
    payload: data,
});

export const weatherDataFailure = data => ({
    type:  WEATHER_DATA_FAILURE, // from types constant
    payload: data,
});
