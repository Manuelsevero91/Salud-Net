import{Outlet, Navigate} from 'react-router-dom'
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn) {
        return <Outlet />;
      } else {
        return <Navigate to="/login" />;
      }
    // return isLoggedIn? <Outlet/> : <Navigate to="/login"/>
};

export default ProtectedRoute;