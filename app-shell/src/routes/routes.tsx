import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const ReactApp = lazy(() => import('app1_react/App'));

const Routers = () => {
  return (
    <Routes>
      <Route
        path="/react"
        element={
          <Suspense fallback={<div>Loading React App...</div>}>
            <ReactApp />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Routers;