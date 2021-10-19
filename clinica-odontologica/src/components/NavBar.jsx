import React, { useState, useEffect } from 'react';
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
import triangleIcon from "../images/codicon_triangle-right.png"

const Navbar = () => {

    const [imagenFondo, setImagenFondo] = useState(imagenHome)
    const [bgcolor1, setBgcolor1] = useState("options")
    const [bgcolor2, setBgcolor2] = useState("options")
    const [bgcolor3, setBgcolor3] = useState("options")
    const [bgcolor4, setBgcolor4] = useState("options")
    const [bgcolor5, setBgcolor5] = useState("options")
    const [bgcolor6, setBgcolor6] = useState("options")

    const [odontologos, seteOdontologos] = useState([]);

    const fetchApi = async () => {
        const response = await fetch("http://localhost:8080/odontologos");
        const responseJSON = await response.json()
        seteOdontologos(responseJSON);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const cambioColor = () =>{
        setBgcolor1("options")
        setBgcolor2("options")
        setBgcolor3("options")
        setBgcolor4("options")
        setBgcolor5("options")
        setBgcolor6("options")
    }

    return (
        <div className="navbarContainer" style={{backgroundImage: `url(${imagenFondo})`}}>
            <Router>
                <div className="navbarComponent">
                <NavComponent triangle={triangleIcon} cambioColor={cambioColor} color={bgcolor1} setBgcolor={setBgcolor1} setImagenFondo={setImagenFondo} imagen={imagenHome} icon={homeIcon} titulo="Home" ruta="/home"/>
                <NavComponent triangle={triangleIcon} cambioColor={cambioColor} color={bgcolor2} setBgcolor={setBgcolor2} setImagenFondo={setImagenFondo} imagen={imagenNuevoTurno} icon={nuevoIcon} titulo="Nuevo Turno" ruta="/nuevoturno"/>
                <NavComponent triangle={triangleIcon} cambioColor={cambioColor} color={bgcolor3} setBgcolor={setBgcolor3} setImagenFondo={setImagenFondo} imagen={imagenTurnos} icon={turnosIcon} titulo="Mis Turnos" ruta="/misturnos"/>
                <NavComponent triangle={triangleIcon} cambioColor={cambioColor} color={bgcolor4} setBgcolor={setBgcolor4} setImagenFondo={setImagenFondo} imagen={imagenEstudios} icon={estudiosIcon} titulo="Mis Estudios" ruta="/misestudios"/>
                <NavComponent triangle={triangleIcon} cambioColor={cambioColor} color={bgcolor5} setBgcolor={setBgcolor5} setImagenFondo={setImagenFondo} imagen={imagenDatos} icon={datosIcon} titulo="Mis Datos" ruta="/misdatos"/>
                <NavComponent triangle={triangleIcon} cambioColor={cambioColor} color={bgcolor6} setBgcolor={setBgcolor6} setImagenFondo={setImagenFondo} imagen={imagenHome} icon={cierreIcon} titulo="Cierre Sesión" ruta="/cierresesion"/>
                </div>
                <div className="componentContainer">
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/nuevoturno">
                        <NuevoTurno />
                    </Route>
                    <Route exact path="/misturnos">
                        <MisTurnos />
                    </Route>
                    <Route exact path="/misestudios">
                        <MisEstudios odontologos={odontologos}/>
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
