import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import BookTable from "./Pages/BookTable";

const router = createBrowserRouter([{
        path: "/",
        element: <Layout /> ,
        children: [{
                path: "/",
                element: < Home />
            },
            {
                path: "/about",
                element: < About />
            },
            {
                path: "/menu",
                element: < Menu />
            },
            {
                path: "/book-table",
                element: < BookTable />
            },
    

        ]
    }


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
<React.StrictMode >
    <RouterProvider router = { router }/> 
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();