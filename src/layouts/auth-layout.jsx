import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <main className="grid place-items-center h-screen w-screen">
      <h1>Layout de autenticação</h1>
      <Outlet />
    </main>
  );
}

export { AuthLayout };
