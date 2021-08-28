import { Routes, Route } from 'react-router';

import Home from './pages/site/Index'
import Admin from './pages/admin/Index'
import Login from './pages/login/Index'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <PrivateRoute path="/dashboard" element={<Admin />} isAuth={true} />
      <Route path="*" element={<div><h1>Not found</h1></div>} />
    </Routes>
  );
}

export default App;
