import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (

        <div className="ui secondary pointing menu">
            <Link to='/' className='item'>
                Check Weather
            </Link>



            <div className="right menu">
                <Link to='/login' className='item'>
                   Авторизация
                </Link>
                
            </div>

            <div className="right menu">
                <Link to='/register' className='item'>
                   Регистрация
                </Link>
            </div>

        </div>
    );



};


export default Header;