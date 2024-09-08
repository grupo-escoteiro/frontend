import { PanelLeft } from 'lucide-react';
import { useContext, useEffect } from 'react';
import { AccessibilityContext } from '../../contexts/accessibility-context';

function AccessibilityPanel() {
  const {
    speak,
    changeReadMode,
    readingModeEnabled
  } = useContext(AccessibilityContext);

  useEffect(() => {
    speak('Ativando o modo de fala!');
    speak('Pressione a tecla esc para cancelar!');
  }, [readingModeEnabled, speak]);

  return (
    <div
      title="Painel de acessibilidade"
      aria-label="Ativar painel de acessibilidade"
      className={`
        fixed right-[10px] rounded-md top-1/2 translate-y-8 bg-social-brand p-2
        cursor-pointer hover:brightness-90 transition-all
      `}
      onClick={changeReadMode}
    >
      <PanelLeft className="text-social-white" />
    </div>
  );
}

export { AccessibilityPanel };
