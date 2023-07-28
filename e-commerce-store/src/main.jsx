import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Homepage } from "./views/Homepage/Homepage";
import { Layout } from "./views/Layout/Layout";

import "./styles/globals.css";
import { ProductList } from "./views/ProductList/ProductList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/:type",
                children: [
                    {
                        path: "",
                        element: <Homepage />,
                    },
                    {
                        path: "produkty/:category",
                        element: <ProductList />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
