import { node } from 'prop-types';
import { createContext } from 'react';

const LoginContext = createContext({});

function LoginContextProvider({ children }) {
  return (
    <LoginContext.Provider value={{}}>
      {children}
    </LoginContext.Provider>
  );
}

LoginContextProvider.propTypes = {
  children: node
};

export { LoginContextProvider };
