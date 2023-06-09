import { Navigate } from 'react-router-dom';

export const ProtectedSignedRouteElement = ({ element }: any) => {
  return sessionStorage.refreshToken ? <Navigate to="/" replace /> : element;
};
