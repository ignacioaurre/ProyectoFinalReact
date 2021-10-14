import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"



const Navcomponent = ({color, setBgcolor, cambioColor, ruta, titulo, imagen, setImagenFondo, icon, triangle}) => {


    const cambioBgcolor =  () => {
        cambioColor()
        setBgcolor("optionsSelected")
    }

    const cambioImagen = (e) => {
        setImagenFondo(e.target.id)
        cambioBgcolor();
    } 

    const selected =    <div className={color} id={imagen}>
                            <div className="optionsContainer" style={{background: "#467a82"}} id={imagen}   >
                                <img className="imagenNav" src={icon} alt="" id={imagen} />
                                <p className="titulo" id={imagen} >{titulo}</p>
                            </div>
                            <div className="icon"><img src={triangle} alt="" /></div>
                        </div>

    const unselected = <div className={color} id={imagen}>
                            <div className="optionsContainer" style={{background: "#62c4b9"}} id={imagen}   >
                                <img className="imagenNav" src={icon} alt="" id={imagen} />
                                <p className="titulo" id={imagen} >{titulo}</p>
                            </div>
                        </div>

    return (
        <Link to={ruta}  style={{textDecoration: "none"}} onClick={cambioImagen} >
            {color === "options" ? unselected : selected}
        </Link>
    );
}

export default Navcomponent;
