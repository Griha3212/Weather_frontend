// import { SIGN_IN, SIGN_OUT } from '../actions/types';
import {
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
    isProfileLoading: false,
    profileCompleted: false,
    profileData: null,
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case PROFILE_REQUEST: {
        return {
            ...state,
            isProfileLoading: true,
            profileCompleted: false,
        };
    }
    case PROFILE_SUCCESS: {
        return {
            ...state,
            isProfileLoading: false,
            profileCompleted: true,
            profileData: action.payload,
        };
    }
    case PROFILE_FAILURE: {
        return {
            ...state,
            isProfileLoading: false,
            profileCompleted: false,
        };
    }

    default:
        return state;
    }
};
