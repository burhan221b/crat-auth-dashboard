import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
// const Profile = () => {
//     const { currentUser } = useAuth();
//     return (
//         <div id="Profile">
//             <div className="profile-container">
//                 <h3>BA</h3>
//             </div>
//             <p className="profile-p-email">{currentUser.email}</p>
//         </div>
//     )
// }

// export default Profile


const Profile = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login", { replace: true })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div id="Profile">
            <div className="profile-dropdown">

                <button className="profile-dropbtn">BA
                    {/* <div className="profile-container">
                    <h3>BA</h3>
                </div> */}
                </button>
                <div className="profile-dropdown-content">
                    <Link to="">Link 1</Link>
                    <Link to="/settings/update-profile">Update Profile</Link>
                    <hr />
                    <Link to=""><p onClick={handleLogout} className="profile-signout">Sign Out</p></Link>

                </div>
            </div>

            <p className="profile-p-email">{currentUser.email}</p>
        </div>
    )
}

export default Profile
