import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import weatherDataReducer from './weatherDataReducer';
import historyReducer from './historyReducer';
import profileReducer from './profileReducer';


export default combineReducers({
    register: registerReducer,
    login: loginReducer,
    weather: weatherDataReducer,
    history: historyReducer,
    form: formReducer,
    profile: profileReducer,
});
