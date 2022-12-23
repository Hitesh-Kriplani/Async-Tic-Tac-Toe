import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { auth } from '../services/firebase';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  return auth.currentUser ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default PrivateRoute;
