import { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';
import logosaludnet from "../assets/logosaludnet.png";

function Profesionales() {
  const tablaRef = useRef(null);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({
    id: null,
    Name: "",
    Especialidad: "",
    Matricula: ""
  });
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [columnaOrden, setColumnaOrden] = useState('');
  const [direccionOrden, setDireccionOrden] = useState('');

  const baseUrl = "https://647a6c2ad2e5b6101db05795.mockapi.io/API1/medicos";

  //lee la base de datos
  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);


  function saveProfesional(newProfesional) {
    //chequea si existe el id, si existe lo edita
    if (editData.id) {
      fetch(baseUrl + `/${editData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProfesional),
      })
        .then(res => res.json())
        .then(data => {
          const updatedUsers = users.map(user =>
            user.id === editData.id ? { ...user, ...newProfesional } : user
          );
          setUsers(updatedUsers);
          setEditData({});
          setShowModal(false);
        })
        .catch(err => console.error(err));

      //si no existe lo crea
    } else {
      fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProfesional),
      })
        .then(res => res.json())
        .then(data => {
          setUsers([...users, data]);
          setShowModal(false);
        })
        .catch(err => console.error(err));
    }
  }

  //funcion para agregar un nuevo profesional
  function handleAddProf(e) {
    e.preventDefault();
    const name = e.target.elements.Name.value;
    const especialidad = e.target.elements.Especialidad.value;
    const matricula = e.target.elements.Matricula.value;

    const newProfesional = {
      Name: name,
      Especialidad: especialidad,
      Matricula: matricula
    };
    saveProfesional(newProfesional);
  }


  //funcion para eliminar un profesional
  function handleDelete(id, userName) {
    Swal.fire({
      imageUrl: logosaludnet,
      imageHeight: 250,
      imageWidth: 250,
      html: `<p>Esta seguro que desea eliminar a <b>${userName}</b> de la base de datos </p>`,
      timer: 5000,
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(baseUrl + `/${id}`, {

          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => console.log(data))

          .catch(err => console.error(err));

        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      }
    })
  }

  //funcion para editar un profesional
  function handleEditar(id) {
    const userToEdit = users.find(user => user.id === id);

    if (userToEdit) {
      setEditData({
        id: userToEdit.id,
        Name: userToEdit.Name,
        Especialidad: userToEdit.Especialidad,
        Matricula: userToEdit.Matricula
      });
      openModal(userToEdit);
    } else {
      alert("El ID no existe");
    }
  }

  //funcion que abre el modal para rellenar o editar los campos
  function openModal(data) {
    if (data) {
      setEditData(data);
    }
    setShowModal(true);
  }

  //funcion que cierra el modal
  function closeModal() {
    setShowModal(false);
  }

  //funcion de manejo de cambios
  function handleChange(e) {
    const { name, value } = e.target;
    setEditData(prevEditData => ({
      ...prevEditData,
      [name]: value
    }));
  }

  //funcion que guarda cuando se agrega o edita un profesional
  function handleSave() {
    const updatedUser = {
      id: editData.id,
      Name: editData.Name,
      Especialidad: editData.Especialidad,
      Matricula: editData.Matricula
    };
    saveProfesional(updatedUser);
  }

  // funcion de busqueda
  function handleSearchBar(e) {
    setSearch(e.target.value);
  }

  //funcion de busqueda por nombre o especialidad
  function handleSearchBy(e) {
    setSearchBy(e.target.value);
  }


  const usuarioFiltrado = users.filter(user => {
    if (searchBy === "nombre") {
      return user.Name.toLowerCase().includes(search.toLocaleLowerCase())
    } else if (searchBy === "especialidad") {
      return user.Especialidad.toLowerCase().includes(search.toLocaleLowerCase())
    }
    return true;
  });

  function handleOrdenarColumna(columna) {
    if (columnaOrden === columna) {
      //si la columna de orden es la misma, cambia la direccion
      setDireccionOrden(direccionOrden === 'ascendente' ? 'descendente' : 'ascendente');
    } else {
      // Si la columna de orden es diferente, establece la nueva columna y la dirección ascendente
      setColumnaOrden(columna);
      setDireccionOrden('ascendente');
    }
  }

  //funcion para el ordenamiento de datos segun que columna se seleccione
  function ordenarDatos() {
    let datosOrdenados = [...usuarioFiltrado];
    datosOrdenados.sort((a, b) => {
      if (columnaOrden === 'id') {
        const idA = Number(a[columnaOrden]);
        const idB = Number(b[columnaOrden]);
        if (idA < idB) {
          return direccionOrden === 'ascendente' ? -1 : 1; //orden ascendente de numeros
        }
        if (idA > idB) {
          return direccionOrden === 'ascendente' ? 1 : -1; //orden descendente de numeros
        }
      } else {
        if (a[columnaOrden] < b[columnaOrden]) {
          return direccionOrden === "ascendente" ? -1 : 1; //a viene antes que b
        }
        if (a[columnaOrden] > b[columnaOrden]) {
          return direccionOrden === 'ascendente' ? 1 : -1; // b viene antes que a
        }
      }
      return 0;
    });
    return datosOrdenados;
  }


  return (
    <>
      {showModal && <div className="modal-overlay" />}
      <div className='globo'>
        <div className='titular'>
          <p className="titulo">PROFESIONALES DE SALUDNET </p>
        </div>
        <div className='opcion'>
          <p>Seleccione si desea buscar por nombre o especialidad</p>
          <select value={searchBy} onChange={handleSearchBy} className="selector">
            <option value="nombre">Nombre</option>
            <option value="especialidad">Especialidad</option>
          </select>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={handleSearchBar}
            value={search}
            className="selector" />
        </div>
        <button onClick={openModal} className="controles">Agregar Profesional</button>
      </div>
      <table ref={tablaRef} className="table">
        <thead>
          <tr>
            <th onClick={() => handleOrdenarColumna('id')}>
              ID {columnaOrden === 'id' && (
                direccionOrden === 'ascendente' ? '▲' : '▼'
              )}
            </th>
            <th onClick={() => handleOrdenarColumna('Name')}>Nombre
              {columnaOrden === 'Name' && (
                direccionOrden === 'ascendente' ? '▲' : '▼'
              )}</th>
            <th onClick={() => handleOrdenarColumna('Especialidad')}> Especialidad
              {columnaOrden === 'Especialidad' && (
                direccionOrden === 'ascendente' ? '▲' : '▼'
              )}</th>
                <th>Matricula</th>
            <th>Controles</th>
          </tr>
        </thead>
        <tbody>
          {ordenarDatos().map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.Name}</td>
              <td>{user.Especialidad}</td>
              <td>{user.Matricula}</td>
              <td>
                <button onClick={() => handleEditar(user.id)} className="controles">Editar</button>
                <button onClick={() => handleDelete(user.id, user.Name)} className="controles">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <form onSubmit={handleAddProf} className="modal">
          <label id="userLabel">Id
            <input type="text" name="id" value={editData.id} readOnly />
          </label>
          <label id="userLabel">Name:
            <input type="text" name="Name" value={editData.Name} onChange={handleChange} />
          </label>
          <label id="userLabel">Especialidad:
            <input type="text" name="Especialidad" value={editData.Especialidad} onChange={handleChange} />
          </label>
          <label id="userLabel">Matricula:
            <input type="text" name="Matricula" value={editData.Matricula} onChange={handleChange} />
          </label>
          <label id="userLabel">Password
            <input type="text" name="password" />
          </label>
          <button type="submit" onClick={handleSave} className="controles">Guardar</button>
          <button type="button" onClick={closeModal} className="controles">Cancelar</button>
        </form>
      )}
    </>
  );
}

export default Profesionales;




