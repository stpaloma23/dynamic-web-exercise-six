import React from 'react';
import {useNavigate} from "react-router-dom";
import {useEffect} from 'react';
import Header from '../componants/Header';

function UserProfilePage({isLoading, isLoggedIn, userInformation, setUserInformation}) {
    const navigate = useNavigate();
    // if youre logged in go to the user profile 
    useEffect(() => {
        if(isLoggedIn && !isLoading) navigate('/login');
    }, [isLoading, isLoggedIn, navigate]);
    return (
        <div className='page-wrapper'>
            <Header
                isLoggedIn={isLoggedIn}
                setLoggedIn={isLoggedIn}
                setUserInformation={setUserInformation}
            />
            <h1>User Profile Page</h1>
            <p>
                <strong>User Name:</strong>
                {userInformation.displayName}
            </p>
            <p>
                <strong>Email:</strong>
                {userInformation.email}
            </p>
            <p>
                <strong>User Id:</strong>
                {userInformation.userId}
            </p>
        </div>
    );
}

export default UserProfilePage;