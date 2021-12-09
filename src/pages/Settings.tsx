import { Route, Routes } from "react-router-dom"
import PrivateRoute from "../hoc/PrivateRoute"
import PublicRoute from "../hoc/PublicRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

const Settings = () => {
    return (
        <div>
            <h1>Settings</h1>
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
