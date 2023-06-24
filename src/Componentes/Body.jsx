import React from 'react';
// import Users from '.Users'
import {useEffect, useState} from 'react'

function Body() {
  
  const Prof = "https://647a6fb6d2e5b6101db05b10.mockapi.io/users"

  const fetchProf = async (url) => {
      try{
          const response = await fetch(url);
          const data = await response.json();
          setUsers(data);
      }catch (error){
          console.log(error);
      }
  }
  
  return (
    <>
    <div className = "container">
        <h1>Salud Net</h1>
    <div className = "nosotros">
      <h2>Nosotros</h2>     
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>         
        <button onClick={fetchProf}>Nuestros Profesionales</button>
    </div>
    </div>
    </>
  );
};
export default Body;

