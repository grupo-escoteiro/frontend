import { useContext } from 'react';
import { DefaultRouters } from './routers';
import { AccessibilityContext } from './contexts/accessibility-context';

function App() {
  const { speak } = useContext(AccessibilityContext);

  return (
    <div onClick={e => speak(e.target.innerText)}>
      <DefaultRouters />
    </div>
  );
}

export default App;
