

import { createBrowserRouter ,redirect} from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import HomeCMS from "../views/Home";
import LoginForm from "../views/Login";
import AddProduct from "../views/AddProduct";
import EditProduct from "../views/EditProduct";
import Toastify from 'toastify-js'


const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginForm />,
        loader: () => {
            if (localStorage.access_token) {
                Toastify({
                    text: "You already logged in",
                    duration: 2000,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "left",
                    stopOnFocus: true,
                    style: {
                        background: "#EF4C54",
                        color: "#17202A",
                        boxShadow: "0 5px 10px black",
                        fontWeight: "bold"
                    }
                }).showToast();
                return redirect('/home')
            }

            return null
        },
    },
    {
        path: "/add",
        element: <AddProduct propName="Submit" />
    },
    {
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.access_token) {
                Toastify({
                    text: "Please login first",
                    duration: 2000,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "left",
                    stopOnFocus: true,
                    style: {
                        background: "#EF4C54",
                        color: "#17202A",
                        boxShadow: "0 5px 10px black",
                        fontWeight: "bold"
                    }
                }).showToast();
                return redirect('/login')
            }

            return null
        },
        children: [            
            {
                path: "/home",
                element: <HomeCMS />
            },
            {
                path: "/edit/:id",
                element: <EditProduct />
            },
        ]
    },
]);

export default router 