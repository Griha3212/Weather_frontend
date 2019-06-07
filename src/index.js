/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import App from './App';
import reducers from './reducers';


// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(

    reducers,
    composeEnhancers(applyMiddleware(thunk)),


);


// const composeEnhancers = composeWithDevTools({
//     // Specify custom devTools options
// });

// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(...middleware)
// ));


ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'),

);
