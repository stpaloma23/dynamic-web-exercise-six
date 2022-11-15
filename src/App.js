import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import CreateUserPage from './pages/CreateUser';
import UserProfilePage from './pages/UserProfile';
import LoginPage from './pages/Login';
import Header from './componants/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/create",
    element: <CreateUserPage />,
  },
]);

function App() {
  return (
    <div className='App'>
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
