import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../layouts/auth-layout';
import { DefaultLayout } from '../layouts/default-layout';
import { Login } from '../pages/public/auth/login';
import { Register } from '../pages/public/auth/register';
import { Home } from '../pages/public/home';
import { Gallery } from '../pages/public/gallery';
import { Settings } from '../pages/privates/settings';
import { LoginContextProvider } from '../contexts/login-context';
import { RegisterContextProvider } from '../contexts/register-context';
import { Ramos } from '../pages/public/ramos';

function DefaultRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="ramos" element={<Ramos />} />
        </Route>
        <Route path="/autenticacao" element={<AuthLayout />}>
          <Route
            path="login"
            element={
              <LoginContextProvider>
                <Login />
              </LoginContextProvider>
            }
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
        <Route path="/configuracao" element={<Settings />} />
        <Route path="/admin" element={<DefaultLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { DefaultRouters };
