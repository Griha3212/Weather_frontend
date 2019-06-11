import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import weatherDataReducer from './weatherDataReducer';
// import simpleButton from './simpleReducer';

export default combineReducers({
    register: registerReducer,
    login: loginReducer,
    weather: weatherDataReducer,
    // button: simpleButton,
    form: formReducer,
});
