import { Navigate } from 'react-router-dom';

export const ProtectedUnSignedRouteElement = ({ element }) => {
  return localStorage.refreshToken ? element : <Navigate to="/login" replace />;
};
