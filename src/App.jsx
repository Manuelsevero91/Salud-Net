import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";
import "./Styles/Form.css";
import "./Styles/Footer.css";
import Body from "./Componentes/Body";
import NavBar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react'

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <>
    <Routes>
      <Route exact path = "/" element = {<NavBar/>} showContactForm={showContactForm} handleContactClick={handleContactClick}/>
      <Route exact path="/" element = {<Body/>} />
      <Route exact path="/" element = {<Footer/>} />
      </Routes>
    </>
  );
}

export default App;
