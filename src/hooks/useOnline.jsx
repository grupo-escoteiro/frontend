import { useEffect } from 'react';
import { toast } from 'sonner';

export function useOnlineStatus() {

  useEffect(() => {
    const checkConnection = async () => {
      try {
        await fetch('https://api.ipify.org/?format=json');
        toast.getHistory().forEach(element => toast.dismiss(element.id));
        toast.success('Você está online.');
      } catch {
        toast.error('Você está offline.', {
          action: {
            label: 'Testar conexão',
            onClick: checkConnection,
          },
        });
      }
    };

    const handleOnline = () => {
      toast.success('Você está online.');
    };

    const handleOffline = () => {
      toast.info('Você está offline.', {
        action: {
          label: 'Testar conexão',
          onClick: checkConnection,
        },
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
}