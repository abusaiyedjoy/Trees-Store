import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from './../Root/Root';
import Home from './../Pages/Home/Home';
import Login from "../Pages/Login/Login";

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
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);

  export default router;