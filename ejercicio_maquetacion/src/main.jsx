import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Encabezado from './Encabezado';
import Formato from './Formato';
import Secciones from './Seccione';
import Parrafos from './Parrafos';
import Body from './Body';
import Footer from './Footer';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body/>
     <Encabezado/>
     <br/>
     <Formato/>
     <br/>
     <Secciones/>
     <br/>
     <Parrafos/>
     <br/>
     <Footer/>

     <div className='contenido'>
    

      {/* <section>

        <article>
          <h2>Titulo contenido</h2>
        </article>

        <article>
          <h2>Titulo contenido</h2>
        </article>

      </section>
 */}
    </div>


  </StrictMode>,
)
