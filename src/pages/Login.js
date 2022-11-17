import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../componants/LoginForm';

function LoginPage({ isLoggedIn }) {
    const navigate = useNavigate();
    // if youre logged in go to the user profile 
    useEffect(() => {
        if(isLoggedIn) navigate('/')
    }, [isLoggedIn]);
    
    return (
        <div className='page-wrapper'>
            <h1>Login Page</h1>
            <LoginForm/>
        </div>
    );
}

export default LoginPage