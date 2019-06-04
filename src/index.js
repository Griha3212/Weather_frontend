import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';



import App from './components/App';
import reducers from './reducers';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(

    reducers,
    composeEnhancers(applyMiddleware())


);


// const composeEnhancers = composeWithDevTools({
//     // Specify custom devTools options
// });

// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(...middleware)
// ));



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')

)