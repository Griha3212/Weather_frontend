/* eslint-disable import/prefer-default-export */
import * as actions from './profile.actions';
import axiosInstance from '../core/axios';


export const getProfile = () => {
    // eslint-disable-next-line no-console
    console.log('profile thunk');
    return async (dispatch) => {
        try {
            dispatch(actions.profileRequest());
            // import axiosInstance from core/axios
            // const response = await axiosInstance.post('/api/profile');
            // console.log('Данные перед отправкой', data);
            const response = await axiosInstance.get('/api/profile');
            // console.log('Я отправил данные');
            // console.log(response);
            // console.log('Я принял данные');
            // eslint-disable-next-line no-undef
            // localStorage.setItem('token', JSON.stringify(response.data.token));
            dispatch(actions.profileSuccess(response.data));
        } catch (err) {
            dispatch(actions.profileFailure(err));
        }
    };
};
