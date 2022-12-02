import React from "react";
import {getAuth, signOut} from "firebase/auth";

function Header({isLoggedIn, setLoggedIn, setUserInformation}) {
    function logout() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                setUserInformation({});
                setLoggedIn(false);
            })
            .catch((error) => {
                console.warn(error);
            });
    }
    return (
        <header>
            <nav> 
                {isLoggedIn && <a href="/"><p>Home</p></a>}
                {!isLoggedIn && <a href="/login"><p>Login</p></a>}
                {!isLoggedIn && <a href="/create"><p>Create User</p></a>}
                {isLoggedIn && <a href="/login"><p onClick={() => logout()}>Log Out</p></a>}
            </nav> 
        </header> 
    )
};
export default Header;