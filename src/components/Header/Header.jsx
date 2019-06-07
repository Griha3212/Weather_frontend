import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
 return (

        <div className="ui secondary pointing menu">
            {/* <Link to='/' className='item'>Check Weather</Link> */}
            <a href="/">Check Weather</a>


            <div className="right menu">
                {/* <Link to='/login' className='item'>Авторизация</Link> */}
                <a href="/login">Login</a>
            </div>

            <div className="right menu">
                {/* <Link to='/register' className='item'>Регистрация</Link> */}
                <a href="/register">Register</a>
            </div>

        </div>
    );
};


export default Header;