import { createBrowserRouter, redirect } from "react-router-dom";
import AppHome from "../views/home";
import BaseLayout from "../views/BaseLayout";
import DetailProduct from "../views/Detail";


const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <AppHome />
            },
            {
                path: "/public/products/:id",
                element: <DetailProduct />
            },

        ]
    },

]);

export default router