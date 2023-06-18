import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';

export const ProtectedSignedRouteElement = ({
  element,
}: {
  element: JSX.Element;
}) => {
  const { isLoggedIn } = useAppSelector((state) => state.tokenReducer);

  return isLoggedIn ? <Navigate to="/" replace /> : element;
};
