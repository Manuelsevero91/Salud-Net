import { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();
const useAuth = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    return storedIsLoggedIn === 'true';
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || '';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('username', username);
  }, [isLoggedIn, username]);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, username, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider, useAuth };

