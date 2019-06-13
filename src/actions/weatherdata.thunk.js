/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as actions from './weatherdata.actions';
// import axiosInstance from '../core/axios';

// var dataresponse = 0;

export const weatherData = (inputLat, inputLon) => {
    // eslint-disable-next-line no-console
    console.log('wheather thunk', inputLat, inputLon);
    return async (dispatch) => {
        try {
            dispatch(actions.weatherDataRequest({}));
            console.log('Данные перед отправкой', inputLat, inputLon);
            axios.get('https://api.openweathermap.org/data/2.5/forecast/', {
                params: {
                    lat: inputLat,
                    lon: inputLon,
                    APPID: 'e118fb5ccd49c25d1bb2b35488727772',
                },
            })
                .then((response) => {

                    dispatch(actions.weatherDataSuccess({ response }));
                    console.log(response);
                })
                .catch((error) => {
                    // handle error
                    console.log(error);
                });
        } catch (err) {
            dispatch(actions.weatherDataFailure({ err }));
        }
    };
};
