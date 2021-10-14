import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavComponent from './NavComponent';
import Home from "./Home";
import NuevoTurno from "./NuevoTurno";
import MisTurnos from "./MisTurnos";
import MisEstudios from "./MisEstudios";
import MisDatos from "./MisDatos";
import CierreSesion from "./CierreSesion"

import "../Styles/Navbar.css"

import imagenHome from "../images/Home.png"
import imagenNuevoTurno from "../images/NuevoTurno.png"
import imagenTurnos from "../images/MisTurnos.png"
import imagenEstudios from "../images/MisEstudios.png"
import imagenDatos from "../images/MisDatos.png"
import homeIcon from "../images/image 5.png"
import nuevoIcon from "../images/Vector.png"
import turnosIcon from "../images/image 2.png"
import estudiosIcon from "../images/image 4.png"
import datosIcon from "../images/image 3.png"
import cierreIcon from "../images/websymbol_logout.png"

const Navbar = () => {

    const [imagenFondo, setImagenFondo] = useState(imagenHome)

    const cambioImagen = (e) => {
        setImagenFondo(e.target.id)
    } 

    const cambioColor = (e) =>{
        e.target.className === "options" ? e.target.className = "optionsSelected" : e.target.className = "options"
    }

    return (
        <div className="navbarContainer" style={{backgroundImage: `url(${imagenFondo})`}}>
            <Router>
                <div className="navbarComponent">
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenHome} icon={homeIcon} titulo="Home" ruta="/"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenNuevoTurno} icon={nuevoIcon} titulo="Nuevo Turno" ruta="/nuevoturno"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenTurnos} icon={turnosIcon} titulo="Mis Turnos" ruta="/misturnos"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenEstudios} icon={estudiosIcon} titulo="Mis Estudios" ruta="/misestudios"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenDatos} icon={datosIcon} titulo="Mis Datos" ruta="/misdatos"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenHome} icon={cierreIcon} titulo="Cierre Sesión" ruta="/cierresesion"/>
                </div>
                <div className="componentContainer">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/nuevoturno">
                        <NuevoTurno />
                    </Route>
                    <Route exact path="/misturnos">
                        <MisTurnos />
                    </Route>
                    <Route exact path="/misestudios">
                        <MisEstudios />
                    </Route>
                    <Route exact path="/misdatos">
                        <MisDatos />
                    </Route>
                    <Route exact path="/cierresesion">
                        <CierreSesion />
                    </Route>
                </Switch>
                </div>
            </Router>
        </div>
    );
}

export default Navbar;
