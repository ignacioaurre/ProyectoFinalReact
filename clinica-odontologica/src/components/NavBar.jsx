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
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenHome} titulo="Home" ruta="/"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenNuevoTurno} titulo="Nuevo Turno" ruta="/nuevoturno"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenTurnos} titulo="Mis Turnos" ruta="/misturnos"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenEstudios} titulo="Mis Estudios" ruta="/misestudios"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenDatos} titulo="Mis Datos" ruta="/misdatos"/>
                <NavComponent cambioColor={cambioColor} cambioImagen={cambioImagen} imagen={imagenHome} titulo="Cierre Sesión" ruta="/cierresesion"/>
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
