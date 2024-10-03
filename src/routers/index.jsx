import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import DetailsUser from '../pages/privates/details';

function DefaultRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="ramos" element={<Ramos />} />
          <Route path="admin" element={<Admin />} />
          <Route path="details" element={<DetailsUser />} />
        </Route>
        <Route path="/autenticacao" element={<AuthLayout />}>
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
        <Route path="/configuracao" element={<Settings />} />
        <Route path="/admin" element={<DefaultLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export { DefaultRouters };
