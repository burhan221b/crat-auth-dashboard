import { Navigate } from "react-router"
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }: any) => {
    const { currentUser } = useAuth();
    return (currentUser && currentUser.email) ?
        <Navigate
            to="/"
            replace
        /> : children;

}
export default PublicRoute
