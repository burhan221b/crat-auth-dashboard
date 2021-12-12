import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "../components/ui/Messages";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        setError("");
        try {
            await logout();
            navigate("/login", { replace: true })
        } catch (error) {
            console.error(error)
            setError("Failed to Logout");
        }
    }
    return (
        <div>
            <h1>Dashboard</h1>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <strong>Current User Email: {currentUser.email}</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis nostrum voluptatem vel cum laudantium alias numquam quidem quae voluptatibus, ad cumque sequi officiis iste quas et corporis? Nisi, nesciunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis nostrum voluptatem vel cum laudantium alias numquam quidem quae voluptatibus, ad cumque sequi officiis iste quas et corporis? Nisi, nesciunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis nostrum voluptatem vel cum laudantium alias numquam quidem quae voluptatibus, ad cumque sequi officiis iste quas et corporis? Nisi, nesciunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis nostrum voluptatem vel cum laudantium alias numquam quidem quae voluptatibus, ad cumque sequi officiis iste quas et corporis? Nisi, nesciunt!</p>

            <div className="button-group">
                <Link to="/update-profile"><button type="button" className="btn btn-updateProfile">Update Profile</button></Link>
            </div>
            <div className="button-group">
                <button onClick={handleLogout} type="submit" className="btn btn-login-out">Login Out</button>
            </div>
        </div>
    )
}

export default Dashboard
