import { useState } from "react";
import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";
import "./Styles/Form.css";

import Body from "./Componentes/Body";
import NavBar from "./Componentes/NavBar";


function App() {const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <>
      <NavBar  showContactForm={showContactForm} handleContactClick={handleContactClick} />
      <Body />
  
    </>
  );
}

export default App;
