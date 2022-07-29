import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logging out...")
  }
  
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/profile")}>Profile</button>
      <button onClick={() => handleLogout()}>Logout</button>
    </nav>
  );
}

export default NavBar;