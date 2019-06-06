import * as actions from './auth.actions';
import axiosInstance from '../core/axios';

export const register = (data) => {
    console.log('registger thunk', data)
    return async (dispatch) => {
        try {
            dispatch(actions.registerRequest({}));
            // const response = await axiosInstance.post('/api/register'); // import axiosInstance from core/axios
            dispatch(actions.registerSuccess({}));

        } catch (err) {
             dispatch(actions.registerFailure({}))
        }
    }

} 

// the same for login