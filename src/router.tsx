import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AdminLayout from "./admin/pages/AdminLayout";
import { childRoutes } from "./admin/childRoutes";
import PrivateRoute from "./admin/PrivateRoute";
import SignIn from "./admin/pages/Authentication/SignIn";
import SignUp from "./admin/pages/Authentication/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },

        ]
    },
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    {
        path: "/adminpanel",
        element: <PrivateRoute />, // Use PrivateRoute to guard access
        children: [
            {
                path: "",
                element: <AdminLayout />,
                children: childRoutes, // Admin routes
            },
        ],
    },
])



export default router;