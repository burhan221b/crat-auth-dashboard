import React from 'react';
import SignUp from './pages/SignUp';
import './styles/Reset.scss';
import './styles/App.scss';
import './styles/Msg.scss';
import './styles/Btn.scss';
import './styles/Nav.scss';
import './styles/Profile.scss';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import NotFound404 from './pages/NotFound404';
import PrivateRoute from './hoc/PrivateRoute';
import UpdateProfile from './pages/UpdateProfile';
import PublicRoute from './hoc/PublicRoute';
import { Nav } from './components/nav/Nav';
import Bridge from './Bridge';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">

          <Routes>
            {/* Root goes to dashboard  */}
            <Route path="/*" element={
              //https://ui.dev/react-router-protected-routes-authentication/
              <PrivateRoute>
                <Bridge />
              </PrivateRoute>
            } />


            <Route path="/signup" element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            } />
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } />
            <Route path="/forgot-password" element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            } />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
          <div className="overlay"></div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
