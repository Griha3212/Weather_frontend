import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router';
// import { BrowserRouter, Route} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Register from './pages/Registration/Register';
import Login from './pages/Login/Login';
import Protected from './pages/Protected';
import Header from './components/Header/Header';


const history = createBrowserHistory();

const App = () => (
    <div className="ui container">
        <div>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/" component={Protected} />
                </Switch>
            </Router>
        </div>
    </div>
);

export default App;
