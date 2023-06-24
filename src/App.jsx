import { useState } from "react";
import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";

import Body from "./Componentes/Body.jsx";
import NavBar from "./Componentes/NavBar.jsx";


function App() {
  return (
    <>
      <NavBar />
      <Body />
    </>
  );
}

export default App;
