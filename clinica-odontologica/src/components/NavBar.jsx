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

const Navbar = () => {

    const cambioColor = (e) =>{
        e.target.className === "options" ? e.target.className = "optionsSelected" : e.target.className = "options"
    }

    return (
        <div className="navbarContainer">
            <Router>
                <div className="navbarComponent">
                <NavComponent cambioColor={cambioColor} titulo="Home" ruta="/"/>
                <NavComponent cambioColor={cambioColor} titulo="Nuevo Turno" ruta="/nuevoturno"/>
                <NavComponent cambioColor={cambioColor} titulo="Mis Turnos" ruta="/misturnos"/>
                <NavComponent cambioColor={cambioColor} titulo="Mis Estudios" ruta="/misestudios"/>
                <NavComponent cambioColor={cambioColor} titulo="Mis Datos" ruta="/misdatos"/>
                <NavComponent cambioColor={cambioColor} titulo="Cierre Sesión" ruta="/cierresesion"/>
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
