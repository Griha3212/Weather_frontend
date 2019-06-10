// import { SIGN_IN, SIGN_OUT } from '../actions/types';
import {
    CHECK_LOGIN_REQUEST,
    CHECK_LOGIN_SUCCESS,
    CHECK_LOGIN_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
    isCheckLoginLoading: false,
    CheckLOGINCompleted: false,
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case CHECK_LOGIN_REQUEST: {
        return {
            ...state,
            isCheckLoginLoading: true,
            LOGINCompleted: false,
        };
    }
    case CHECK_LOGIN_SUCCESS: {
        return {
            ...state,
            isLoginLoading: false,
            LOGINCompleted: true,
        };
    }
    case CHECK_LOGIN_FAILURE: {
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
