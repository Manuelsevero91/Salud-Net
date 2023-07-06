import{Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = ({isLoggedIn}) => {
    
    return isLoggedIn? <Outlet/> : <Navigate to="/login"/>
};

export default ProtectedRoute;