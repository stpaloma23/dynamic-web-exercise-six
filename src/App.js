import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useEffect, useState } from 'react';
import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
// styles and componantes 
import './App.css';
import CreateUserPage from './pages/CreateUser';
import UserProfilePage from './pages/UserProfile';
import LoginPage from './pages/Login';


const firebaseConfig = {
  apiKey: "AIzaSyCtQzNbTjJwLsOsdlCUC-KW49vUIfRimfI",
  authDomain: "dynamic-web-exercise-six-3911a.firebaseapp.com",
  projectId: "dynamic-web-exercise-six-3911a",
  storageBucket: "dynamic-web-exercise-six-3911a.appspot.com",
  messagingSenderId: "316060202985",
  appId: "1:316060202985:web:7cbfc00a8defde604f7d78"
};


function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserinformation] = useState({});

  useEffect(() => {
    initializeApp(firebaseConfig);
    setAppInitialized(true)
  },[])

  useEffect(() => {
    if(appInitialized){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          // user is signed in, see docs for list of availible properties 
          setUserinformation(user);
          setIsLoggedIn(true);
        } else {
          // user is signed out
          setUserinformation({});
          setIsLoggedIn(false)
        }
        // whenever state chanes setloading to false
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserProfilePage 
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
        userInformation={userInformation}
        setUserInformation={setUserinformation}
      />,
    },
    {
      path: "/login",
      element: <LoginPage 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserinformation}
      />,
    },
    {
      path: "/create",
      element:
        <CreateUserPage 
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn} 
          setUserInformation={setUserinformation}
        />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
