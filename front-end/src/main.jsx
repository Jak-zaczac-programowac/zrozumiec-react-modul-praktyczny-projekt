import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";
import { mainPageLoader } from "./api/mainPageLoader";

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
                element: <Favourites />,
            },
            {
                path: "/:gender?",
                element: <MainPage />,
                loader: mainPageLoader,
            },
        ],
    },
    {
        path: "test",
        element: <Layout />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
