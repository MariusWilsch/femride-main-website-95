
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Toaster } from './components/ui/toaster';
import { LanguageProvider } from './lib/LanguageContext';
import CookieBanner from './components/CookieBanner';

import './App.css';

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
      <Toaster />
      <CookieBanner />
    </LanguageProvider>
  );
}

export default App;
