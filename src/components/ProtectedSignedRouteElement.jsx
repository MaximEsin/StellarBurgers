import { Navigate } from 'react-router-dom';

export const ProtectedSignedRouteElement = ({ element }) => {
  return localStorage.refreshToken ? <Navigate to="/" replace /> : element;
};
