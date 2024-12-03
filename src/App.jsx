import { useContext, useEffect, useState } from 'react';
import { DefaultRouters } from './routers';
import { AccessibilityContext } from './contexts/accessibility-context';
import { AuthContextProvider } from './contexts/auth-context';
import { BrowserRouter } from 'react-router-dom';
import { useOnlineStatus } from './hooks/useOnline';
import { toast } from 'sonner';

function App() {
  const { speak } = useContext(AccessibilityContext);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        // eslint-disable-next-line max-len
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=e24bc461ba064bbcc009e2ea74f9e864&lang=pt_br
      `).then(r => r.json())
        .then(r => {
          const { weather: weatherApi } = r;
          setWeather(weatherApi);
        });
    },
    (error) => console.error('Erro ao obter localização', error.message));

  }, [setWeather]);

  useEffect(() => {
    toast.warning('Previsão do Tempo' ,{
      description: weather[0]?.description,
    });
  });

  useOnlineStatus();

  return (
    <div onClick={e => speak(e.target.innerText)}>
      <AuthContextProvider>
        <BrowserRouter>
          <DefaultRouters />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
