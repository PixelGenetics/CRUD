import React, { useEffect, useState } from "react";
import Formulario from "./Formulario";
import useCrud from "./useCrud";
import Button from 'react-bootstrap/Button';

const Crud = () => {
    const url = 'http://users-crud.academlo.tech/';
    const [users, getUsers, createUsers, deleteUsers, updateUsers] = useCrud(url);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [updatedUserData, setUpdatedUserData] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        getUsers('/users/');
    }, [])

    const openForm = () => {
        setIsFormOpen(!isFormOpen)
    }

    const handleUpdate = () => {
        if (updatedUserData && selectedUserId) {
            updateUsers('/users', selectedUserId, updatedUserData);
            setUpdatedUserData(null);
            setSelectedUserId(null);
            setIsModalOpen(false);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const openModal = (userId) => {
        setSelectedUserId(userId);
        setIsModalOpen(true);
    }

    return (
        <div>
            <div>

        <Button variant="primary" onClick={() => setModalShow(true)}>
        Crear Usuario Nuevo
        </Button>
        <Formulario
        show={modalShow}
        onHide={() => setModalShow(false)}
        />

            </div>
            <div>
                <h2>Info user</h2>
                <div>
                    {users?.map(user => (
                        <div key={user.id}>
                            <p>Email: {user.email}</p>
                            <p>Nombre: {user.first_name} {user.last_name}</p>
                            <p>Fecha de nacimiento: {user.birthday}</p>
                            <button onClick={() => deleteUsers('/users', user.id)}>Eliminar</button>
                            <button onClick={() => openModal(user.id)}>Update</button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Actualizar Usuario</h2>
                        <label htmlFor="email">Nuevo email:</label>
                        <input id="email" type="email" name="email" onChange={handleChange} />
                        <label htmlFor="first_name">Nuevo first name:</label>
                        <input id="first_name" type="text" name="first_name" onChange={handleChange} />
                        <label htmlFor="last_name">Nuevo last name:</label>
                        <input id="last_name" type="text" name="last_name" onChange={handleChange} />
                        <label htmlFor="birthday">Nueva fecha de nacimiento:</label>
                        <input id="birthday" type="date" name="birthday" onChange={handleChange} />
                        <button onClick={handleUpdate}>Actualizar</button>
                        <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Crud;
