import React from 'react'

export const Menu = (props) => {
  const { name } = props;
  return (
    <>
    <h1>Bienvenidos al portal de Salud NET</h1>
    <div>HOLA: {name && name.toUpperCase()} </div>
    </>
    )
}
export default Menu
