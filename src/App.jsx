import { useState } from "react";
import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";
import "./Styles/Form.css";
import "./Styles/Footer.css";

import Body from "./Componentes/Body";
import NavBar from "./Componentes/NavBar";
import Footer from "./Componentes/Footer";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <>
      <NavBar  showContactForm={showContactForm} handleContactClick={handleContactClick} />
      <Body />
      {/* <Form/> */}
      <Footer/>
    </>
  );
}

export default App;
