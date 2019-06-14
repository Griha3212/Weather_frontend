/* eslint-disable import/prefer-default-export */
import * as actions from './login.actions';
import axiosInstance from '../core/axios';


export const login = (data) => {
    // eslint-disable-next-line no-console
    console.log('login thunk', data);
    return async (dispatch) => {
        try {
            dispatch(actions.loginRequest());
            // import axiosInstance from core/axios
            // const response = await axiosInstance.post('/api/login');
            // console.log('Данные перед отправкой', data);
            const response = await axiosInstance.post('/auth/login', data);
            // console.log('Я отправил данные');
            console.log(response);
            // console.log('Я принял данные');
            // eslint-disable-next-line no-undef
            localStorage.setItem('token', JSON.stringify(response.data.token));
            dispatch(actions.loginSuccess(response.data));
        } catch (err) {
            dispatch(actions.loginFailure(err));
        }
    };
};
