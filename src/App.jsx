import { useState } from "react";
import "./Styles/App.css";
import "./Styles/NavBar.css";
import "./Styles/Body.css";
import Body from "./Componentes/Body";
import NavBar from "./Componentes/NavBar";
import Form from "./Componentes/Form"
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      

      <NavBar />
      <Body />
      <Form/>

      
    </>
  );
}

export default App;
