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
              <input type="submit"value="Enviar"/>
          </from>
        </section>

<button ><Link to="/Principal">volver</Link></button>
    </div>

    );
    
}
export default Sugerencias;