import './index.css';
import './services/gemini/index.js';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SideContact } from './components/side-contact';
import { ToTop } from './components/to-top';
import { AccessibilityPanel } from './components/accessibility-panel/index.jsx';

import { AccessibilityContextProvider } from './contexts/accessibility-context.jsx';

import { Toaster } from 'sonner';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <AccessibilityContextProvider>
        <App />
        <AccessibilityPanel />
        <Toaster
          richColors
          expand={true}
        />
      </AccessibilityContextProvider>
      <SideContact />
      <ToTop />
    </StrictMode>
  </>
);
