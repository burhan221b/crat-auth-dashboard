import { Route, Routes } from "react-router-dom"
import { Nav } from "./components/nav/Nav"
import PrivateRoute from "./hoc/PrivateRoute"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"

const Bridge = () => {
    return (
        <div>
            <Nav />
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
    )
}

export default Bridge
