import { useState, useEffect, useRef } from 'react';
// import logoSaludNet from './assets/logosaludnet.png'

function Profesionales() {
  const [users, setUsers] = useState([]);
  const tablaRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({
    id: null, 
    Name: "",
    Especialidad: "",
    Matricula: ""
  });

  const baseUrl = "https://647a6c2ad2e5b6101db05795.mockapi.io/API1/medicos";
 
    //lee la base de datos
  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

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

  //funcion para eliminar un profesional
  function handleDelete(id) {
    fetch(baseUrl + `/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));

    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
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

  // Comprueba si el ID ya existe en la base de datos
  if (idExists) {
    // El ID ya existe, mostrar un mensaje de error o tomar la acción necesaria
    console.log('El ID ya existe en la base de datos');
    return;
  }

  if (editData.id) {
    fetch(baseUrl + `/${editData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then(res => res.json())
      .then(data => {
        const updatedUsers = users.map(user => {
          if (user.id === editData.id) {
            return data;
          }
          return user;
        });
        setUsers(updatedUsers);
        closeModal();
      })
      .catch(err => console.log(err));
  } else {
    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then(res => res.json())
      .then(data => {
        setUsers(prevUsers => [...prevUsers, data]);
        closeModal();
      })
      .catch(err => console.error(err));
  }
}
  
  return (
    <>
    <div className='logo'>
      {/* <img src={logoSaludNet} alt="Logo de SaludNet" /> */}
    </div>
    <p className="titulo">PROFESIONALES DE SALUDNET </p>
      <button onClick={openModal} className="controles">Agregar Profesional</button>
      <table ref={tablaRef} className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Matricula</th>
            <th>Controles</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.Name}</td>
              <td>{user.Especialidad}</td>
              <td>{user.Matricula}</td>
              <td>
                <button onClick={() => handleEditar(user.id)} className="controles">Editar</button>
                <button onClick={() => handleDelete(user.id)} className="controles">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
    <form onSubmit={handleAddProf} className="modal">
    <label>Id
    <input type="text" name="id" value={editData.id} readOnly />
    </label>
      <label>Name: 
        <input type="text" name="Name" value={editData.Name} onChange={handleChange}/>
      </label>
      <label>Especialidad:
        <input type="text" name="Especialidad" value={editData.Especialidad} onChange={handleChange}/>
      </label>
      <label>Matricula: 
        <input type="text" name="Matricula" value={editData.Matricula} onChange={handleChange}/>
      </label>
      <label>Password 
        <input type="text" name="password"/>
      </label>
      <button type="submit" onClick={handleSave}>Guardar</button>
      <button type="button" onClick={closeModal}>Cancelar</button>
    </form>
  )}
    </>
  );
}

export default Profesionales;