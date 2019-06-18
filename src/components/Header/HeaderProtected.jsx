import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class HeaderProtected extends React.PureComponent {

    render() {
        return (
            <>
                <div className="ui secondary pointing menu">
                    {/* <Link to='/' className='item'>Check Weather</Link> */}
                    <a href="/weather">Check Weather</a>


                    {/* <div className="right menu">
                    {/* <Link to='/login' className='item'>Авторизация</Link> */}
                    {/* <a href="/login">Login</a>
                </div> */}

                    {/* <div className="right menu">
                   
                    <a href="/register">Register</a>
                </div> */}

                    <div className="right menu">
                        {/* <Link to='/register' className='item'>Регистрация</Link> */}
                        <a href="/profile">Profile</a>
                    </div>

                    <div className="right menu">
                        {/* <Link to='/register' className='item'>Регистрация</Link> */}
                        <a href="/history">History</a>
                    </div>

                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginLoading: state.login.isLoginLoading,
        loginCompleted: state.login.loginCompleted,
    };
};

export default connect(mapStateToProps)(HeaderProtected);
