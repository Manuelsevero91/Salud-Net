import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../Componentes/UserContext';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;