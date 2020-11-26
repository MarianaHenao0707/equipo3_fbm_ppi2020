import React from 'react';
import '../styles/sugerencias.css';
import { Link } from 'react-router-dom';


function Sugerencias (){
    return (
        <div>
<section className="sugerir">
          
<section >
          <section className="sugerir">
              
              <h1>Quejas</h1>
            </section>

          </section>
          <h3>Nombre del denunciado/a o características, o dirección de residencia</h3>

          <from className="comentario">
              <input type="text" placeholder="" />
         
          </from>
          <h3>¿Qué deseas reportar?</h3>

          <from className="comentario">
              <input type="text" placeholder="" />
              <Link to="/Envioquejas" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Enviar </button>
    </Link>
          </from>
        </section>

<button ><Link to="/Principal">volver</Link></button>
    </div>

    );
    
}
export default Sugerencias;