import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { Homepage } from "./views/Homepage/Homepage";
import { Layout } from "./views/Layout/Layout";
import { ProductsContainer } from "./views/ProductsContainer/ProductsContainer";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { Product } from "./views/Product/Product";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Navigate to="/kobieta" />,
            },
            {
                path: "/:gender",
                children: [
                    {
                        path: "",
                        element: <Homepage />,
                    },
                    {
                        path: "produkty/:category",
                        element: <ProductsContainer />,
                        children: [
                            {
                                path: "",
                                element: <ProductsList />,
                            },
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
            {
                path: "/koszyk",
                element: <Cart />,
            },
            {
                path: "/ulubione",
                element: <Favourites />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
