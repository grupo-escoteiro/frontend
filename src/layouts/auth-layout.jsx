import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <main
      className={`
        grid place-items-center lg:h-screen lg:w-screen lg:py-0
        lg:bg-[url('/register-flow/background-auth-flow.png')]
        md:bg-[url('/register-flow/box-side-background.png')]
        md:py-0 md:h-screen md:w-screen
        bg-[url('/register-flow/box-side-background.png')]
        bg-no-repeat bg-cover mix-blend-multiply py-10 min-h-screen
        dark:bg-dark-social-background
      `}>
      <Outlet />
    </main>
  );
}

export { AuthLayout };
