import { node } from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import { auth } from '../services/firebase/index.js';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });

      const isEmail = user.providerData.some(
        (provider) => provider.providerId === 'password'
      );

      setIsEmailUser(isEmail);
      setUserLoggedIn(true);

      return;
    }

    setCurrentUser(null);
    setUserLoggedIn(false);

    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{
        userLoggedIn,
        isEmailUser,
        currentUser,
        setCurrentUser
      }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: node
};

export { AuthContextProvider };
