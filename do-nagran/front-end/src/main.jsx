import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/theme.css";
import "./styles/globals.css";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
