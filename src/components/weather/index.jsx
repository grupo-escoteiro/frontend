import { Cloud } from 'lucide-react';
import { useWeather } from '../../hooks/useWeather';

function Weather() {
  return (
    <div
      onClick={useWeather}
      title="Ver previsão do tempo"
      className={`
      fixed right-[10px] rounded-md top-1/2 -translate-y-[73px] bg-social-gray p-2
      cursor-pointer hover:brightness-90 z-50 transition-all lg:inline-block hidden
    `}>
      <Cloud className='text-social-white' />
    </div>
  );
}

export { Weather };