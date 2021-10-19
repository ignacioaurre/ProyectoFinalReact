import React, { useState } from 'react';

const Nuevoodontologo = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [matricula, setMatricula] = useState()

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }
    const handleApellido = (e) => {
        setApellido(e.target.value);
    }
    const handleMatricula = (e) => {
        setMatricula(e.target.value);
    }

    const formHandler = () => {
        let datosOdontologo = {
            nombre : nombre,
            apellido : apellido,
            matricula : matricula
        }

        let config = {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(datosOdontologo)
        }
        fetch(`http://localhost:8080/odontologos/registro`, config)
    }

    return (
        <div>
            <form className="formContainer">
                <div className="divForm">
                <label htmlFor="">Nombre</label>
                <input id="nombre" value={nombre} onChange={handleNombre}></input>
                </div>
                <div className="divForm"> 
                <label htmlFor="">Apellido</label>
                <input id="apellido" value={apellido} onChange={handleApellido}></input>
                </div>
                <div className="divForm">
                <label htmlFor="">Matricula</label>
                <input id="matricula" value={matricula} onChange={handleMatricula}></input>
                </div>
                <button className="formButton" onClick={formHandler}>Agregar Odontólogo</button>
            </form>
        </div>
    );
}

export default Nuevoodontologo;
