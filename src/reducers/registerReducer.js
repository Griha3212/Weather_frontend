// import { SIGN_IN, SIGN_OUT } from '../actions/types';
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
    isRegistrationLoading: false,
    registerCompleted: false,
    // user: {}
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case REGISTER_REQUEST: {
        return {
            ...state,
            isRegistrationLoading: true,
            registerCompleted: false,
        };
    }
    case REGISTER_SUCCESS: {
        return {
            ...state,
            isRegistrationLoading: false,
            registerCompleted: true,
        };
    }
    case REGISTER_FAILURE: {
        return {
            ...state,
            isRegistrationLoading: false,
            registerCompleted: false,
        };
    }
    // case SIGN_IN:
    //     return { ...state, isSignedIn: true, user: action.payload };
    // case SIGN_OUT:
    //     return { ...state, isSignedIn: false, user: {} };

    default:
        return state;
    }
};
