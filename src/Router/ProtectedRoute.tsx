// import { useAuth } from './context/authContext';
// import { ROUTES } from './constants';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  //   const { isLoggedIn } = useAuth();

  //   return isLoggedIn ? <Outlet /> : <Navigate to='.login' />;
  return <Outlet />;
};

export default ProtectedRoute;
