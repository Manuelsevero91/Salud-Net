import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";
import "./Styles/Form.css";
import './Styles/index.css';
// import './Styles/Login.css';
// import './Styles/Login1.css';
import Home from "./Pages/Home";
import NavBar from "./Componentes/NavBar";
import { Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login";
import Contacto from "./Pages/Contacto"
import {useState} from 'react'
import Users from "./Pages/Users"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);

  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (

    <>
   <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> 
   <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route path="/ingresar" element={<Login handleLogin={handleLogin} />} />
        <Route path="/profesionales" element={<Users/>} />
    </Routes>


    </>
  );
}

export default App;

