import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage";
import { Favourites } from "./views/Favourites/Favourites";
import { ProductsList } from "./views/ProductsList/ProductsList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductsList />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
