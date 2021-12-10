import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import PrivateRoute from "../hoc/PrivateRoute"
import PublicRoute from "../hoc/PublicRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

const Settings = () => {
    let location = useLocation();
    const navigate = useNavigate();
    console.log("location", location)

    return (
        <div id="Settings">
            <h1>Settings</h1>
            {location.pathname === "/settings" ? <>
                <section className="settings-content">

                    <div className="settings-topic-container">
                        <Link to="profile">
                            <h2 className="settings-topic-title">Profile</h2>
                            <h2>&#8594;</h2>
                        </Link>
                    </div>


                    <div className="settings-topic-container">
                        <Link to="account">
                            <h2 className="settings-topic-title">Account</h2>
                            <h2>&#8594;</h2>
                        </Link>
                    </div>


                    <div className="settings-topic-container">
                        <Link to="email-password">
                            <h2 className="settings-topic-title">Email / Password</h2>
                            <h2>&#8594;</h2>
                        </Link>
                    </div>


                    <div className="settings-topic-container">
                        <Link to="appearance">
                            <h2 className="settings-topic-title">Appearance</h2>
                            <h2>&#8594;</h2>
                        </Link>
                    </div>

                </section>
            </>
                : <button onClick={() => navigate(-1)} className="settings-btn-back">&#10094;</button>
            }
            <Routes>
                <Route path="update-profile" element={
                    //https://ui.dev/react-router-protected-routes-authentication/
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    )
}

export default Settings


