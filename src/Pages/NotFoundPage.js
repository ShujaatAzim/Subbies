import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

  let navigate = useNavigate();
  
  return (
    <div>
      <h1>Page Not Found!</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default NotFoundPage;