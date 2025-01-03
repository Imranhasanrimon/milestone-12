import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/signUp";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>,
            },
            {
                path: "/order/:title",
                element: <Order></Order>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <h1>Dashboard</h1>,
        children: [
            {
                path: 'cart',
                element: <h1>this is cart</h1>
            }
        ]
    }
]);