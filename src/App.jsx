import { useContext } from 'react';
import { DefaultRouters } from './routers';
import { AccessibilityContext } from './contexts/accessibility-context';
import { AuthContextProvider } from './contexts/auth-context';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const { speak } = useContext(AccessibilityContext);

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
