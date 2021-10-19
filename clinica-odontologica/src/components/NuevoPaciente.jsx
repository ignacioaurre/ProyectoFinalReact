import React, {useState} from 'react';

const Nuevopaciente = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [dni, setDni] = useState("")
    const [calle, setCalle] = useState("")
    const [numero, setNumero] = useState("")
    const [localidad, setLocalidad] = useState("")
    const [provincia, setProvincia] = useState("")

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }
    const handleApellido = (e) => {
        setApellido(e.target.value);
    }
    const handleDni = (e) => {
        setDni(e.target.value);
    }
    const handleCalle = (e) => {
        setCalle(e.target.value);
    }
    const handleNumero = (e) => {
        setNumero(e.target.value);
    }
    const handleLocalidad = (e) => {
        setLocalidad(e.target.value);
    }
    const handleProvincia = (e) => {
        setProvincia(e.target.value);
    }
    

    const formHandler = () => {
        let datospaciente = {
            nombre : nombre,
            apellido : apellido,
            dni : dni,
            domicilio: {
                calle: calle,
                numero: numero,
                localidad: localidad,
                provincia: provincia
            }

        }

        let config = {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(datospaciente)
        }
        fetch(`http://localhost:8080/pacientes/registro`, config)
    }


    return (
        <div>
            <form className="formContainer">
                <div className="divForm">
                <label htmlFor="">Nombre</label>
                <input id="nombre" value={nombre} onChange={handleNombre} ></input>
                </div>
                <div className="divForm"> 
                <label htmlFor="">Apellido</label>
                <input id="apellido" value={apellido} onChange={handleApellido}></input>
                </div>
                <div className="divForm">
                <label htmlFor="">DNI</label>
                <input id="dni" value={dni} onChange={handleDni}></input>
                </div>
                <div className="divForm">
                <label htmlFor="">Calle</label>
                <input id="calle" value={calle} onChange={handleCalle}></input>
                </div>
                <div className="divForm">
                <label htmlFor="">Numero</label>
                <input id="numero" value={numero} onChange={handleNumero}></input>
                </div>
                <div className="divForm">
                <label htmlFor="">Localidad</label>
                <input id="localidad" value={localidad} onChange={handleLocalidad}></input>
                </div>
                <div className="divForm">
                <label htmlFor="">Provincia</label>
                <input id="provincia" value={provincia} onChange={handleProvincia}></input>
                </div>
                <button className="formButton" onClick={formHandler} >Agregar Paciente</button>
            </form>
        </div>
    );
}

export default Nuevopaciente;
