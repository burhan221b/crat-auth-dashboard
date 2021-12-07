import { Navigate, useLocation } from "react-router"
import { useAuth } from "../context/AuthContext";

// Reference V6: https://ui.dev/react-router-protected-routes-authentication/ 
const PrivateRoute = ({ children }: any) => {
    const { currentUser } = useAuth();
    const location = useLocation();
    console.log("location", location);
    return (currentUser && currentUser.email) ? children
        : <Navigate
            to="/login"
            replace
            state={{ path: location.pathname }}
        />;

}
export default PrivateRoute
