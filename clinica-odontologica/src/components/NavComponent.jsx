import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"


const Navcomponent = ({cambioColor, ruta, titulo}) => {
    return (
        <Link to={ruta} >
            <div className="options" onClick={cambioColor}>
                {titulo}
            </div>
        </Link>
    );
}

export default Navcomponent;
