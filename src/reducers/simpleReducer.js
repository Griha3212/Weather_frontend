import { BUTTON_ON } from '../actions/types';

const INITIAL_STATE = {
   isTurnedOn: false
};



export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case BUTTON_ON:
            return { ...state, isTurnedOn: true };
        default:
            return state;
    }

};