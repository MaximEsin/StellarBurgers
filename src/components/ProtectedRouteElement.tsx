import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedUnSignedRouteElement = ({ element }: any) => {
  const location = useLocation();
  return sessionStorage.refreshToken ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
