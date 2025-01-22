import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = () => {
    const { user } = useAuth(); // Check if the user is authenticated


    if (!user) {
        // Redirect to login if not authenticated
        return <Navigate to="/signin" />;
    }

    return <Outlet />; // Render the child routes if authenticated
};

export default PrivateRoute;
