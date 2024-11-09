import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <main
      className={`
        grid place-items-center h-screen w-screen
        lg:bg-[url('/register-flow/background-auth-flow.png')]
        md:bg-[url('/register-flow/box-side-background.png')]
        bg-[url('/register-flow/box-side-background.png')]
        bg-no-repeat bg-cover mix-blend-multiply
      `}>
      <Outlet />
    </main>
  );
}

export { AuthLayout };
