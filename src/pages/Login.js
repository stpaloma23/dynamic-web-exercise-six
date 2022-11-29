import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../componants/LoginForm';
import Header from '../componants/Header';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage({ isLoggedIn, setIsLoggedIn, setUserInformation }) {
    const navigate = useNavigate();
    // if youre logged in go to the user profile 
    useEffect(() => {
        if(isLoggedIn) navigate('/')
    }, [isLoggedIn, navigate]);

    const loginUser = useCallback((e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password) 
            .then((userCredential) => {
                const user = userCredential.user;
                setIsLoggedIn(true);
                setUserInformation({
                    email: user.email,
                    displayName: user.displayName,
                    uid:user.uid,
                    accessToken: user.accessToken
                });
            })
            .catch((error) => {
                const errorCode = error.code; 
                const errorMessage = error.message;
                console.warn({error, errorCode, errorMessage});
            })
        console.log(email, password);
    }, [setIsLoggedIn, setUserInformation]);
    
    
    return (
        <div className='page-wrapper'>
            <Header
                isLoggedIn={isLoggedIn}
                setLoggedIn={setIsLoggedIn}
                setUserInformation={setUserInformation}
            />
            <h1>Login Page</h1>
            <LoginForm loginUser={loginUser}/>
        </div>
    );
}

export default LoginPage