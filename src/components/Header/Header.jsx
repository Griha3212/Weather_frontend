import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends React.PureComponent {
    // state = {
    //     registerLink: '/register',
    //     registerText: 'Register',
    // };


    // componentDidMount() {
    //     const { isLoginLoading, loginCompleted } = this.props;
    //     if (!isLoginLoading && loginCompleted) {
    //         this.setState({ registerLink: '/history' });
    //         this.setState({ registerText: 'History' });
    //     }
    // }


    // componentDidUpdate() {
    //     const { isLoginLoading, loginCompleted } = this.props;
    //     if (!isLoginLoading && loginCompleted) {
    //         this.setState({ registerLink: '/history' });
    //         this.setState({ registerText: 'History' });
    //     }
    // }


    render() {
        return (

            <div className="ui secondary pointing menu">
                {/* <Link to='/' className='item'>Check Weather</Link> */}
                <a href="/weather">Check Weather</a>


                <div className="right menu">
                    {/* <Link to='/login' className='item'>Авторизация</Link> */}
                    <a href="/login">Login</a>
                </div>

                <div className="right menu">
                    {/* <Link to='/register' className='item'>Регистрация</Link> */}
                    <a href="/register">Register</a>
                </div>

                <div className="right menu">
                    {/* <Link to='/register' className='item'>Регистрация</Link> */}
                    <a href="/profile">Profile</a>
                </div>

                <div className="right menu">
                    {/* <Link to='/register' className='item'>Регистрация</Link> */}
                    <a href="/history">History</a>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginLoading: state.login.isLoginLoading,
        loginCompleted: state.login.loginCompleted,
    };
};

export default connect(mapStateToProps)(Header);
