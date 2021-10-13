import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"


const Navcomponent = ({cambioColor, ruta, titulo, imagen, cambioImagen}) => {
    return (
        <Link to={ruta}  style={{textDecoration: "none"}}>
            <div className="options" id={imagen} onClick={cambioImagen}  >
                {titulo}
            </div>
        </Link>
    );
}

export default Navcomponent;
