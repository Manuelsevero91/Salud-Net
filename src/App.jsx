import { useState } from "react";
import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";
import "./Styles/Form.css";

import Body from "./Componentes/Body";
import NavBar from "./Componentes/NavBar";
import Form from "./Componentes/Form"


function App() {const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <>
      <NavBar />
      <Body />
      {/* <Form/> */}
    </>
  );
}

export default App;
