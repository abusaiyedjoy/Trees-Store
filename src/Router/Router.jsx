import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from './../Root/Root';
import Home from './../Pages/Home/Home';
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Registation/Sign_Up";
import ForgotPassword from './../Pages/Login/ForgotPassword';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  export default router;