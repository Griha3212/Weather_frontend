import * as actions from './register.actions';
import axiosInstance from '../core/axios';


export const register = (data) => {
    // eslint-disable-next-line no-console
    console.log('register thunk', data);
    return async (dispatch) => {
        try {
            dispatch(actions.registerRequest({}));
            // import axiosInstance from core/axios
            // const response = await axiosInstance.post('/api/register');
            console.log('Данные перед отправкой', data);
        const response = await axiosInstance.post('/auth/register', data);
        console.log('Я отправил данные');
            dispatch(actions.registerSuccess({}));
        } catch (err) {
            dispatch(actions.registerFailure({}));
        }
    };
};

