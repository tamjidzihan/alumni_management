import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AdminLayout from "./admin/pages/AdminLayout";
import { childRoutes } from "./admin/childRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> }
        ]
    },
    {
        path: '/adminpanel',
        element: <AdminLayout children={undefined} />,
        children: childRoutes
    }
])



export default router;