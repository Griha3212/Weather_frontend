import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Main from './Main';
import Header from './Header';



const App = () => {
    return (
        <div className="ui container">

            <BrowserRouter>
                <div>
                <Header />
                    <Route path='/' exact component={Main} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/login' exact component={Login} />
                </div>
            </BrowserRouter >

        </div >
    );
};

export default App;