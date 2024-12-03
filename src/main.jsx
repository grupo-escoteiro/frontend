import './index.css';
import './services/gemini/index.js';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SideContact } from './components/side-contact';
import { ToTop } from './components/to-top';
import { Weather } from './components/weather';
import { AccessibilityPanel } from './components/accessibility-panel/index.jsx';

import { AccessibilityContextProvider } from './contexts/accessibility-context.jsx';

import { Toaster } from 'sonner';

import App from './App.jsx';

import ptBR from './internacionalization/pt-BR.json';
import en from './internacionalization/en.json';
import es from './internacionalization/es.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      'pt-BR': {
        translation: ptBR
      },
      'en': {
        translation: en
      },
      'es': {
        translation: es
      }
    },
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    },
    debug: true,
    detection: {
      order: ['htmlTag'],
      // caches: ['localStorage']
    }
  });

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
      <Weather />
    </StrictMode>
  </>
);
