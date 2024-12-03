import { node } from 'prop-types';
import { createContext, useState } from 'react';
import logo from '/logo.svg';
import logoDark from '/logo-dark.svg';

const ThemeContext = createContext({});

function ThemeContextProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(false);

  function toggleTheme() {
    document.documentElement.classList.toggle(
      'dark'
    );
    setActiveTheme(prev => !prev);
  }

  function getLogo() {
    if (activeTheme) {
      return logoDark;
    }

    return logo;
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        getLogo,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: node,
};

export { ThemeContextProvider, ThemeContext, };
