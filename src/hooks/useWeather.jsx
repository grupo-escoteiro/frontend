import { toast } from 'sonner';

function useWeather() {
  window.navigator.geolocation.getCurrentPosition((position) => {
    fetch(
      // eslint-disable-next-line max-len
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=e24bc461ba064bbcc009e2ea74f9e864&lang=pt_br
    `).then(r => r.json())
      .then(r => {
        const { weather } = r;
        toast.warning('Previsão do Tempo', {
          description: weather[0]?.description,
        });
      });
  },
  (error) => console.error('Erro ao obter localização', error.message));
}

export { useWeather };