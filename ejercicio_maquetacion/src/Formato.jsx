
import React from 'react';
import './index.css'; // Asegúrate de tener los estilos en Formato.css



function Formato() {
    return (
        <section className='contenedor_formato'>
            <form className="formato">
                <input className="input" placeholder="Ingrese sus datos" type="text" />
                <button className='button' type="button">Enviar</button>
            </form>
        </section>
    );
}

export default Formato;
