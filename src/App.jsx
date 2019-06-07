import React from 'react';
// import { BrowserRouter, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Register from './pages/Registration/Register';
// import Login from './pages/Login/LoginForm';
import Protected from './pages/Protected';
import Header from './components/Header/Header';


const App = () => (
    <div className="ui container">
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/register" exact component={Register} />
                    {/* <Route path="/login" exact component={Login} /> */}
                    <Route path="/" component={Protected} />
                </Switch>
            </BrowserRouter>
        </div>
    </div>
);

export default App;
