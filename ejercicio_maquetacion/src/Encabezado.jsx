import React from 'react';
import './index.css'; // Asegúrate de tener los estilos en Formato.css


function Encabezado() {
    return (
        <header className="encabezado">
            <nav>
                <a className='home' href="#home">Home - Welcome </a>
            </nav>
        </header>
    );
}

export default Encabezado;
