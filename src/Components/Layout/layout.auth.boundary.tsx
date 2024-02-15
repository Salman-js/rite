import { ROUTES } from '@/Router/constants';
import { useLocation } from 'react-router-dom';
import Header from './header.layout';

type authUiBoundaryProps = {
  children: React.ReactNode;
};

const AuthUiBoundary: React.FC<authUiBoundaryProps> = ({ children }) => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <div className='main-layout'>
      {currentPathname.includes(ROUTES.AUTH) ? null : <Header />}
      {/* <Toaster /> */}
      {currentPathname.includes(ROUTES.AUTH) ? null : (
        <div className='sidebar'>
          {/* {currentPathname.includes(ROUTES.SEARCH) ? (
            <SearchSidebar />
          ) : (
            <Sidebar />
          )} */}
        </div>
      )}
      {children}
      {/* {currentPathname.includes(ROUTES.AUTH) ? null : <BottomNav />} */}
    </div>
  );
};

export default AuthUiBoundary;
