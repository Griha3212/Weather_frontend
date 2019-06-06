import { SIGN_IN, SIGN_OUT, BUTTON_ON } from './types';


export const signIn = (user) => {

    return {
        type: SIGN_IN,
        payload: user


    };

};

export const signOut = () => {

    return {
        type: SIGN_OUT


    };

};


export const buttonON = () => {

    return {

        type: 'BUTTON_ON'

    };

}

