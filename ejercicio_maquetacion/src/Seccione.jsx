import React from 'react';
import './index.css'; // Asegúrate de tener los estilos en Formato.css


function Secciones() {


    return (

        <div className="contenedor_secciones">

            <div>
                <section className="secciones" typeof="text" aria-placeholder="Sección"> SECCIÓN # 1</section>
            </div>

            <div>
                <section className="secciones" typeof="text" aria-placeholder="Sección"> SECCIÓN # 2</section>
            </div>

            <div>
                <section className="secciones" typeof="text" aria-placeholder="Sección"> SECCIÓN # 3</section>
            </div>
        </div>


    )
}

export default Secciones;