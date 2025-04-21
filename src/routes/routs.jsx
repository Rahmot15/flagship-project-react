import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Layouts from "../Layouts/Layouts";
import ErrorPage from "../Pages/Error/ErrorPage";
import About from "../Pages/About/About";
import Favorites from "../Pages/Favorites/Favorites";
import PhoneDetails from "../Pages/Details/PhoneDetails";
import Cart from "../Pages/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        hydrateFallbackElement: <span className="loading loading-dots loading-xl  ml-[50%] mt-5"></span>,
        loader: () => fetch('../phones.json'),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/favorites",
        Component: Favorites,
      },
      {
        path: "/details",
        Component: PhoneDetails,
        
      },
    ],
  },
]);
