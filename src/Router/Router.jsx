import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from './../Root/Root';
import Home from './../Pages/Home/Home';
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Registation/Sign_Up";
import ForgotPassword from './../Pages/Login/ForgotPassword';
import AboutUS from "../Pages/AboutUS/AboutUS";
import ContactUS from "../Pages/ContactUS/ContactUS";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ViewCart from "../Pages/ViewCart/ViewCart";
import ViewWishlist from "../Pages/ViewWishlist/ViewWishlist";
import Dashboard from "../Pages/Dashboard/Dashboard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
        {
          path: "about",
          element: <AboutUS />,
        },
        {
          path: "contact",
          element: <ContactUS />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "viewCart",
          element: <ViewCart/>,
        },
        {
          path: "viewWishlist",
          element: <ViewWishlist />,
        },
      ],
    },
  ]);

  export default router;