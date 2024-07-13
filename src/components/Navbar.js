import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // If using React Router for navigation
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem('shukri'); // Clear user data from localStorage on logout
    navigate('/login'); // Redirect to the login page
  };

  return (
    <nav className="bg-gray-400 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">Hills-Hospital</Link>
        </div>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="text-lg font-semibold text-gray-800 hover:text-gray-600">Home</Link>
          <Link to="/Doctor" className="text-lg font-semibold text-gray-800 hover:text-gray-600">Doctors</Link>
          {/* <Link to="/Patients" className="text-lg font-semibold text-gray-800 hover:text-gray-600">Patients</Link> */}
          <Link to="/Symptoms" className="text-lg font-semibold text-gray-800 hover:text-gray-600">Symptoms</Link>
          <button className="text-lg text-gray-800 hover:text-gray-600" onClick={handleLogout}>
            <FaSignOutAlt className="inline-block text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
