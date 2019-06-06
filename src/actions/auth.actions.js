import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './types'

export const registerRequest = (data) => {
    return {
        type: REGISTER_REQUEST,
        payload: data
    }

}

export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

export const registerFailure = (data) => {
    return {
        type: REGISTER_FAILURE, // from types constant
        payload: data
    }
}