import { SIGN_IN, SIGN_OUT } from './types';


export const signIn = user => ({
    type: SIGN_IN,
    payload: user,
});

export const signOut = () => ({
    type: SIGN_OUT,
});


export const buttonON = () => ({

    type: 'BUTTON_ON',

});
