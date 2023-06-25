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
        <h1>Bienvenidos a Salud Net</h1>
        <button onClick={fetchProf} id="buttonProf">Nuestros Profesionales</button>
    </div>
    </>
  );
};
export default Body;

