import React, { useState } from 'react';
import NavComponent from './NavComponent';
import "../Styles/Navbar.css"

const Navbar = () => {

    const cambioColor = (e) =>{
        e.target.className === "options" ? e.target.className = "optionsSelected" : e.target.className = "options"
    }

    return (
        <div className="navbarContainer">
            <NavComponent cambioColor={cambioColor} />
            <NavComponent cambioColor={cambioColor} />
            <NavComponent cambioColor={cambioColor} />
            <NavComponent cambioColor={cambioColor} />
            <NavComponent cambioColor={cambioColor} />
            <NavComponent cambioColor={cambioColor} />
        </div>
    );
}

export default Navbar;
