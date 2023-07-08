import { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext();
const useAuth = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');

    if (storedIsLoggedIn === 'true'  && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  };


  return (
    <UserContext.Provider value={{ isLoggedIn,username, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider, useAuth };