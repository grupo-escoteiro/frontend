import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SideContact } from './components/side-contact';
import { ToTop } from './components/to-top';

import { Toaster } from 'sonner';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <App />
      <Toaster
        richColors
        expand={true}
      />
      <SideContact />
      <ToTop />
    </StrictMode>
  </>
);
