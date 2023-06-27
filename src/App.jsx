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
import Form from "./Componentes/Form";
import Login from "./Componentes/Login";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <>
    <NavBar/>
    <Routes>
      {/* <Route exact path = "/" element = {<Header/>} showContactForm={showContactForm} handleContactClick={handleContactClick}/> */}
      <Route exact path="/" element = {<Body/>} />
      {/* <Route exact path="/" element = {<Footer/>} /> */}
      <Route exact path="/" element = {<Form/>} />
      <Route exact path="/" element = {<Login/>} />
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
