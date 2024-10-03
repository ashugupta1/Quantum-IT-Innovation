import React from 'react';
import { Navigate } from 'react-router-dom';

// This component checks if the user is logged in by verifying if there's a JWT in localStorage
const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem('token'); // Check for token in localStorage

  return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
