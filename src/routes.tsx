
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <NotFound />
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />
  },
  {
    path: '/terms',
    element: <TermsConditions />
  }
]);
