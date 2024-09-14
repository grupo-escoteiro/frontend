import { useContext } from 'react';
import { DefaultRouters } from './routers';
import { AccessibilityContext } from './contexts/accessibility-context';
import { AuthContextProvider } from './contexts/auth-context';

function App() {
  const { speak } = useContext(AccessibilityContext);

  return (
    <div onClick={e => speak(e.target.innerText)}>
      <AuthContextProvider>
        <DefaultRouters />
      </AuthContextProvider>
    </div>
  );
}

export default App;
