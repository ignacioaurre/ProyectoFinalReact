import React, { useState } from 'react';
import NuevoOdontologo from './NuevoOdontologo';
import NuevoPaciente from './NuevoPaciente';

import "../Styles/Components.css"

const Home = () => {

    const [toggle, setToggle] = useState(true)

    return (
        <div className="homeContainer">
            <header className="headerMain">Agregar</header>
            <section className="sectionOptions">
                <button onClick={() => setToggle(true)}>Odontologos</button>
                <button onClick={() => setToggle(false)}>Pacientes</button>
            </section>
            <main className="sectionMain">
                {toggle ? <NuevoOdontologo /> : <NuevoPaciente />}
            </main>
        </div>
    );
}

export default Home;
