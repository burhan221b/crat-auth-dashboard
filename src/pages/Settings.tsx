import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import PrivateRoute from "../hoc/PrivateRoute"
import PublicRoute from "../hoc/PublicRoute"
import Appearance from "./Appearance"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

const Settings = () => {
    let location = useLocation();
    const navigate = useNavigate();
    console.log("location", location)
    let page_name = location.pathname.split("/").pop() || '';
    page_name = page_name[0].toUpperCase() + page_name?.substr(1) || "";

    return (
        <div id="Settings">
            <div className="settings-div-title">
                {location.pathname !== "/settings" ? <>
                    <h1 onClick={() => navigate("/settings", { replace: true })} className="settings-back-arrow">&#10094;</h1>
                    <h3>Settings</h3>
                    <h3>&#10094;</h3>
                    <h3>{page_name}</h3>
                </>
                    :
                    <h1>Settings</h1>
                }


                {/* {location.pathname !== "/settings" && <button onClick={() => navigate(-1)} className="settings-btn-back">&#10094;</button>}
                <h1>Settings</h1>
                {location.pathname !== "/settings" && <p>&#10094;</p>} */}
            </div>

            {location.pathname === "/settings" &&
                <section className="settings-content">

                    <div className="topic-container">
                        <Link to="profile">
                            <h2 className="topic-title">Profile</h2>
                            <h2>&#8594;</h2>
                        </Link>
                    </div>


                    <div className="topic-container">
                        <Link to="account">
                            <h2 className="topic-title">Account</h2>
                            <h2>&#8594;</h2>
                        </Link>
                    </div>


                    <div className="topic-container">
                        <Link to="email-password">
                            <h2 className="topic-title">Email / Password</h2>
                            <h2>&#8594;</h2>
                        </Link>
                    </div>


                    <div className="topic-container">
                        <Link to="appearance">
                            <h2 className="topic-title">Appearance</h2>
                            <h2>&#8594;</h2>
                        </Link>
                    </div>

                </section>
            }
            <Routes>
                <Route path="update-profile" element={
                    //https://ui.dev/react-router-protected-routes-authentication/
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                } />
                <Route path="appearance" element={
                    <PrivateRoute>
                        <Appearance />
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    )
}

export default Settings


