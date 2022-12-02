import React, { useCallback, useState, useEffect } from 'react';
import CreateUserForm from '../componants/CreateUserForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import Header from '../componants/Header';

function CreateUserProfile({isLoggedIn, setIsLoggedIn, setUserInformation}) {
    const [error, setErrors] = useState();
    const navigate = useNavigate();
    // if youre logged in go to the user profile 
    useEffect(() => {
        if(isLoggedIn) navigate('/')
    }, [isLoggedIn, navigate]);
    const signUpUser = useCallback(
        (e) => {
            e.preventDefault();
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.email.value;
            const auth = getAuth()

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setIsLoggedIn(true);
                    setUserInformation({
                        email: user.email,
                        displayName: user.displayName,
                        uid: user.uid,
                        accessToken: user.accessToken,
                    });
                    setErrors();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.warn({error, errorCode, errorMessage});
                    setErrors(errorMessage);
                })
        },
        [setErrors, setIsLoggedIn, setUserInformation]
    );

    return (
        <div className='page-wrapper'>
            <Header/>
            <h1>Create User</h1>
            <CreateUserForm signUpUser={signUpUser}/>
            <p>{error}</p>
        </div>
    );
}

export default CreateUserProfile;