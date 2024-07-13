import React from 'react';
import { BrowserRouter, Route, Routes, Navigate , useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';
  const isUserAuthenticated = localStorage.getItem('shukri');

  if (!isUserAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
};

export default App;
