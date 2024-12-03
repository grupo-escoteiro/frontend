import { SunMoon } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

function Theme() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      title="Mudar tema"
      className={`
      fixed right-[10px] rounded-md top-1/2 translate-y-[83px] bg-dark-social-gray dark:bg-dark-social-white p-2
      cursor-pointer hover:brightness-90 z-50 transition-all lg:inline-block hidden
    `}>
      <SunMoon className='text-white dark:text-dark-social-gray' />
    </div>
  );
}

export { Theme };