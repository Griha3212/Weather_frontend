/* eslint-disable import/prefer-default-export */
import * as actions from './login.actions';
import instance from '../core/axios';


export const login = (data) => {
    // eslint-disable-next-line no-console
    console.log('login thunk', data);
    return async (dispatch) => {
        try {
            dispatch(actions.loginRequest());
            // import axiosInstance from core/axios
            // const response = await axiosInstance.post('/api/login');
            console.log('Данные перед отправкой', data);
        const response = await instance.post('/api/login', data);
        console.log('Я отправил данные');

            dispatch(actions.loginSuccess(response.data));
        } catch (err) {
            dispatch(actions.loginFailure(err));
        }
    };
};


