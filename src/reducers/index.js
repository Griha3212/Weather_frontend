import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import simpleButton from './simpleReducer';

export default combineReducers({
    auth: authReducer,
    button: simpleButton,
    form: formReducer
});