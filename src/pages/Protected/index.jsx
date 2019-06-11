import React from 'react';
import { Switch, Route, Router } from 'react-router';
import Weather from '../Weather';
import axiosInstance from '../../core/axios';

class Protected extends React.Component {
    state = {
        isAuthenticated: false,
    }

    componentDidMount() {
        // checkLogin();
        console.log('Проверка логина', this.props);
        const { history } = this.props;
        axiosInstance.get('/api/checkLogin')
            .then(() => {
                this.setState({
                    isAuthenticated: true,
                }, () => {
                    history.push('/weather');
                });
            })
            .catch((err) => {
                history.push('/login');
            });
        // async action checkToken
        // axiosInsatnce.get('/checkLogin')
        //.then(() => {
        //     this.setState({
        //         isAuthenticated: true
        //     })
        // if success  redirect to /weather
        // })
        // .catch(() => {

        //     // if checkToken failure redirect to /login
        // })
    }


    render() {
        const { isAuthenticated } = this.state;
        if (!isAuthenticated) return null;


        return (
            <Switch>
                <Route path='/weather' exact component={Weather} />
                {/* <Route path='/history' exact component={History} /> */}
                {/* <Route path='/profile' exact component={Profile} /> */}
            </Switch>
        );
    }
}

export default Protected;
