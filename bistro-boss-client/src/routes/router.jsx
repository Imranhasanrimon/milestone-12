import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import MyCart from "../pages/dashboard/MyCart";
import SignUp from "../pages/signUp/SignUp";
import AllUsers from "../pages/dashboard/AllUsers";
import AddItem from "../pages/dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/dashboard/ManageItem";
import UpdateItem from "../pages/dashboard/UpdateItem";

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
        element: <Dashboard></Dashboard>,
        children: [
            //user routes
            {
                path: 'cart',
                element: <MyCart></MyCart>,
            },
            //admin routes
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItem',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>
            },
        ]
    }
]);