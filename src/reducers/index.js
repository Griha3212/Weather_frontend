import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './registerReducer';
// import simpleButton from './simpleReducer';

export default combineReducers({
    register: registerReducer,
    // button: simpleButton,
    form: formReducer,
});
