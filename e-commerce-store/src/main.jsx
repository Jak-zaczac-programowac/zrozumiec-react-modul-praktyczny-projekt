import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./views/Homepage/Homepage";
import { Layout } from "./views/Layout/Layout";
import { ProductsContainer } from "./views/ProductsContainer/ProductsContainer";
import { Product } from "./views/Product/Product";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { mainPageLoader } from "./Api/mainPageLoader";
import { productListLoader } from "./Api/productListLoader";
import { addProductToFavouritesAction } from "./Api/addProductToFavouritesAction";
import { favouritesLoader } from "./Api/favouritesLoader";
import { deleteFavouriteProductAction } from "./Api/deleteFavouriteProductAction";

const router = createBrowserRouter([
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
                loader: favouritesLoader,
                element: <Favourites />,
            },
            {
                path: "/:gender",
                shouldRevalidate: () => false,
                loader: mainPageLoader,
                element: <Homepage />,
            },
            {
                path: "/:gender/:category/:subcategory?",
                loader: productListLoader,
                element: <ProductsContainer />,
            },
            {
                path: "/:gender/:category/:subcategory/:productID",
                loader: productListLoader,
                element: <Product />,
            },
        ],
    },
    {
        path: "/add-to-favourites/:productId",
        action: addProductToFavouritesAction,
    },
    {
        path: "/delete-from-favourites/:favouriteId",
        action: deleteFavouriteProductAction,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
