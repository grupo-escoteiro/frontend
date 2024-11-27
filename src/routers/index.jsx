import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthLayout } from '../layouts/auth-layout';
import { DefaultLayout } from '../layouts/default-layout';
import { Login } from '../pages/public/auth/login';
import { Register } from '../pages/public/auth/register';
import { Home } from '../pages/public/home';
import { Gallery } from '../pages/public/gallery';
import { Settings } from '../pages/privates/settings';
import { RegisterContextProvider } from '../contexts/register-context';
import { Ramos } from '../pages/public/ramos';
import { Admin } from '../pages/privates/admin';
import { DetailsUser } from '../pages/privates/details';
import { Privacy } from '../pages/privates/privacy';
import { NotFound } from '../pages/NotFound';
import { AnimatePresence } from 'framer-motion';
import { ChatGemini } from '../pages/privates/chat';
import {News} from '../pages/public/news';

function DefaultRouters() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.key}
      >
        <Route
          path="/"
          element={<DefaultLayout />}
        >
          <Route
            path=""
            element={<Home />}
          />
          <Route
            path="galeria"
            element={<Gallery />}
          />
          <Route
            path="noticias"
            element={<News />}
          />
          <Route
            path="ramos"
            element={<Ramos />}
          />
          <Route
            path="admin"
            element={<Admin />}
          />
          <Route
            path="details"
            element={<DetailsUser />}
          />
          <Route
            path="privacy"
            element={<Privacy /> }
          />
          <Route
            path="/chat"
            element={<ChatGemini />}
          />
        </Route>
        <Route
          path="/autenticacao"
          element={<AuthLayout />}
        >
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="cadastrar"
            element={
              <RegisterContextProvider>
                <Register />
              </RegisterContextProvider>
            }
          />
        </Route>
        <Route
          path="/configuracao"
          element={<Settings />}
        />
        <Route
          path="/admin"
          element={<DefaultLayout />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export { DefaultRouters };
