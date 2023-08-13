import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./views/Homepage/Homepage";
import { Layout } from "./views/Layout/Layout";
import { ProductContainer } from "./views/ProductContainer/ProductContainer";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { Product } from "./views/Product/Product";

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
                        element: <ProductContainer />,
                        children: [
                            {
                                path: ":subcategory",
                                element: <ProductsList />,
                            },
                            {
                                path: ":subcategory/:productSku",
                                element: <Product />,
                            },
                        ],
                    },
                ],
            },
            // {
            //     path: "/koszyk",
            // },
            // {
            //     path: "/ulubione",
            // },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
