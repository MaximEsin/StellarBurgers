import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { JsxElement } from 'typescript';

export const ProtectedUnSignedRouteElement = ({
  element,
}: {
  element: JSX.Element;
}) => {
  const location = useLocation();
  const { isLoggedIn } = useAppSelector((state) => state.tokenReducer);

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
