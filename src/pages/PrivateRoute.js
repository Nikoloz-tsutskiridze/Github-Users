import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return isUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
