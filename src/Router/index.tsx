import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.tsx';
import { ROUTES } from './constants.ts';
import AuthUiBoundary from '@/Components/Layout/layout.auth.boundary.tsx';
import Home from '@/Pages/Home/index.tsx';

const RoutesComponent = () => {
  return (
    <AuthUiBoundary>
      <div className='main'>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route element={<ProtectedRoute />}></Route>
        </Routes>
      </div>
    </AuthUiBoundary>
  );
};

export default RoutesComponent;
