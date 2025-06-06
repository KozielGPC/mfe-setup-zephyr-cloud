import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import VueWrapper from '../components/VueWrapper';
import { MainCard } from '../components/MainCard';

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
      <Route
        path="/vue"
        element={
          <Suspense fallback={<div>Loading Vue App...</div>}>
            <VueWrapper />
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          <MainCard />
        }
      />
    </Routes>
  );
};

export default Routers;