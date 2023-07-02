import React from 'react'
export const Menu = (props) => {
  return (
    <>
    <h1>Bienvenidos al portal de Salud NET</h1>
    <div>HOLA: {props.name.toUpperCase()} </div>
    </>
    )
}
export default Menu