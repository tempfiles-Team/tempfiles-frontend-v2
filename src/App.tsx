import { Outlet, Route, Routes } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import { ApiListPage, DetailPage, MainPage } from './pages';
import { DefaultLayout } from './components';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <DefaultLayout>
            <Outlet />
            <ToastContainer />
          </DefaultLayout>
        }
      >
        <Route path="/" element={<MainPage />} />
        <Route path="/dl/:id" element={<DetailPage />} />
        <Route path="/apiList" element={<ApiListPage />} />
      </Route>
    </Routes>
  );
};

export default App;
