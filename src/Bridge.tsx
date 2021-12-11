import { Route, Routes } from "react-router-dom"
import { Nav } from "./components/nav/Nav"
import PrivateRoute from "./hoc/PrivateRoute"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"

const Bridge = () => {
    return (
        <div id="Bridge">
            <Nav />
            <div className="bridge-content">
                <Routes>
                    <Route path="/" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } />
                    <Route path="/settings/*" element={
                        <PrivateRoute>
                            <Settings />
                        </PrivateRoute>
                    } />
                </Routes>
            </div>
        </div>
    )
}

export default Bridge
