import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";
import "./Styles/Form.css";
import './Styles/index.css';
import './Styles/Login.css';
import './Styles/Users.css'
import './Styles/Marketing.css'
import './Styles/Footer.css'
// import './Styles/Login1.css';
import Home from "./Pages/Home";
import NavBar from "./Componentes/NavBar";
import { Routes, Route} from 'react-router-dom';
import Login from "./Pages/Login";
import Contacto from "./Pages/Contacto"
import {useState, useEffect} from 'react'
import Users from "./Pages/Users"
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "./Componentes/ProtectedRoute";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
  }
}, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <>
   <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> 

   <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />}/>
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}>
        <Route path="/profesionales" element={<Users/>} />
        </Route>   
        <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
