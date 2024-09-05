import { node } from 'prop-types';
import { createContext } from 'react';

const RegisterContext = createContext({});

function RegisterContextProvider({ children }) {
  return (
    <RegisterContext.Provider value={{}}>
      {children}
    </RegisterContext.Provider>
  );
}

RegisterContextProvider.propTypes = {
  children: node
};

export { RegisterContextProvider };
