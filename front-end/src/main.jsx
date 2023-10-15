import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { ProductDetails } from "./views/ProductDetails/ProductDetails";
import { mainPageLoader } from "./api/mainPageLoader";
import { productListLoader } from "./api/productListLoader";
import { productLoader } from "./api/productLoader";
import { addProductToFavourites } from "./api/addProductToFavouritesAction";

const router = createBrowserRouter([
    {
        path: "/add-to-favourites/:productId",
        action: addProductToFavourites,
    },
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/koszyk",
                element: <Cart />,
            },
            {
                path: "/ulubione",
                element: <Favourites />,
            },
            {
                path: "/:gender?",
                element: <MainPage />,
                loader: mainPageLoader,
            },
            {
                path: "/:gender/:category/:subcategory?",
                element: <ProductsList />,
                loader: productListLoader,
            },
            {
                path: "/:gender/:category/:subcategory/:productId",
                element: <ProductDetails />,
                loader: productLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
