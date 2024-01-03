/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route } from 'react-router-dom';
import PATHS from './paths';

import { NotFound } from '@/screens/NotFound/NotFound';
import { HomeApp } from '@/screens/Home/HomeApp';


export const RoutesApp = () => {
  return (
    <Routes>
      <Route path={PATHS?.index} element={<HomeApp />} />
      {/* <Route path="*" element={handleNotFound} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
