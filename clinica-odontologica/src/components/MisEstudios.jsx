import React from 'react';

const Misestudios = ({odontologos}) => {
    return (
            <div className="mainContainer">
                <header className="headerMain">Mis Estudios</header>
                <section className="sectionMain">
                    {odontologos.map(odo => <h2>{odo.nombre}</h2>)}
                </section>
            </div>
    );
}

export default Misestudios;
