import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";
import "./Styles/Form.css";
import "./Styles/Footer.css";
import './Styles/Index.css'
import Home from "./Componentes/Home";
import NavBar from "./Componentes/NavBar";
import { Routes, Route } from 'react-router-dom';
import Login from "./Componentes/Login";
import Contacto from "./Componentes/Contacto";

function App() {
 
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path="/" element = {<Home/>} />
      <Route exact path="/contacto" element = {<Contacto/>} />
      <Route exact path="/ingresar" element = {<Login/>} />
      </Routes>
    

    </>
  );
}

export default App;

