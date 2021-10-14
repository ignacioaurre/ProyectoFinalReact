import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"



const Navcomponent = ({cambioColor, ruta, titulo, imagen, cambioImagen, icon}) => {
    return (
        <Link to={ruta}  style={{textDecoration: "none"}}>
            <div className="options" id={imagen} onClick={cambioImagen}  >
                <img className="imagenNav" src={icon} alt=""/>
                <p className="titulo">{titulo}</p>
            </div>
        </Link>
    );
}

export default Navcomponent;
