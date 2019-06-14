// import { SIGN_IN, SIGN_OUT } from '../actions/types';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
    isLoginLoading: false,
    loginCompleted: false,
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case LOGIN_REQUEST: {
        return {
            ...state,
            isLoginLoading: true,
            loginCompleted: false,
        };
    }
    case LOGIN_SUCCESS: {
        return {
            ...state,
            isLoginLoading: false,
            loginCompleted: true,
        };
    }
    case LOGIN_FAILURE: {
        return {
            ...state,
            isLoginLoading: false,
            loginCompleted: false,
        };
    }

    default:
        return state;
    }
};
