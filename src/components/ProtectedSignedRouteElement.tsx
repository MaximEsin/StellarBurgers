import { Navigate } from 'react-router-dom';

export const ProtectedSignedRouteElement = ({ element }: any) => {
  return localStorage.refreshToken ? <Navigate to="/" replace /> : element;
};
