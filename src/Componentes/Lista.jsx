import { useState, useEffect, useRef } from 'react';

function Prof() {
  const tablaRef = useRef(null);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [searchBy, setSearchBy] = useState("");
  const [especialidades, setEspecialidades] = useState ([]);

  const baseUrl = "https://647a6c2ad2e5b6101db05795.mockapi.io/API1/medicos"; 
 

 
  //lee la base de datos
  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        const uniqueEspecialidades = [...new Set(data.map(user => user.Especialidad))];
        setEspecialidades(uniqueEspecialidades);
      })
      .catch(error => console.log(error));
  }, []);
  
  // funcion de busqueda
  function handleSearchBar(e){
    setSearch(e.target.value);
  }

  // funcion de busqueda por nombre o especialidad
  function handleSearchBy(e) {
    setSearchBy(e.target.value);
  }

  const usuarioFiltrado = users.filter(user => {
    if (searchBy === "nombre"){
      return user.Name.toLowerCase().includes(search.toLowerCase())
    } else if (searchBy === "especialidad"){
      return user.Especialidad.toLowerCase().includes(search.toLowerCase())
    }
    return true;
  });

  const especialidadesFiltradas = especialidades.filter(especialidad =>
    especialidad.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className='globo'>
        <div className='titular'>
          <p className="titulo">PROFESIONALES DE SALUDNET </p>
        </div>
        <div className='opcion'>
          <p id="option"><strong>Seleccione si desea buscar por nombre o especialidad</strong></p>
          <select value={searchBy} onChange={handleSearchBy} className="selector">
            <option value="nombre">Nombre</option>
            <option value="especialidad">Especialidad</option>
          </select>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={handleSearchBar}
            value={search} 
            className="selector"
          />
        </div>
      </div>
      <ul ref={tablaRef} className="list">
        {usuarioFiltrado.map((user, index) => (
          <li key={index}>
            <p id= "especialistas">{user.Name}: <strong>{user.Especialidad}</strong></p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Prof;