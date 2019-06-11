import {
    WEATHER_DATA_REQUEST,
    WEATHER_DATA_SUCCESS,
    WEATHER_DATA_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
    isWeatherLoading: false,
    weatherCompleted: false,
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WEATHER_DATA_REQUEST: {
            return {
                ...state,
                isWeatherLoading: true,
                weatherCompleted: false,
            };
        }
        case WEATHER_DATA_SUCCESS: {
            return {
                ...state,
                isWeatherLoading: false,
                weatherCompleted: true,
            };
        }
        case WEATHER_DATA_FAILURE: {
            return {
                ...state,
                isWeatherLoading: false,
                weatherCompleted: false,
            };
        }

        default:
            return state;
    }
};
