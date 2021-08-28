import { Routes, Route } from 'react-router';
import { Navigate, useLocation } from "react-router";

import Home from './pages/site/Index'
import Admin from './pages/admin/Index'
import Login from './pages/login/Index'
import PrivateRoute from './PrivateRoute'
import { isLoggedIn } from './util/auth'

function App() {

    const location = useLocation();
    const LoggedIn = isLoggedIn();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login">
                {
                    !LoggedIn ? <Login /> : <Navigate to="/dashboard" state={{ from: location }} />
                }
            </Route>
            <PrivateRoute path="/dashboard" element={<Admin />} isAuth={ LoggedIn } />
            <Route path="*" element={<div><h1>Not found</h1></div>} />
        </Routes>
    );
}

export default App;
