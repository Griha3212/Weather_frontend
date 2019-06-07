// import { SIGN_IN, SIGN_OUT } from '../actions/types';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
    isLoginLoading: false,
    LOGINCompleted: false,
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case LOGIN_REQUEST: {
        return {
            ...state,
            isLoginLoading: true,
            LOGINCompleted: false,
        };
    }
    case LOGIN_SUCCESS: {
        return {
            ...state,
            isLoginLoading: false,
            LOGINCompleted: true,
        };
    }
    case LOGIN_FAILURE: {
        return {
            ...state,
            isLoginLoading: false,
            LOGINCompleted: false,
        };
    }

    default:
        return state;
    }
};
