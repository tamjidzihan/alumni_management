import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../common/Loader";

const AdminRoute: React.FC = () => {
    const { user, role, loading } = useAuth();

    if (loading) return <><Loader /></>;

    // Only allow access if role is admin (2)
    return user && role === 2 ? <Outlet /> : <Navigate to="/signin" />;
};

export default AdminRoute;
