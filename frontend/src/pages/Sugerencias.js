import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import sugerencias from '../styles/sugerencias.css';


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
              <input type="submit"value="Enviar"/>
          </from>
          <h3>¿Qué deseas reportar?</h3>

          <from className="comentario">
              <input type="text" placeholder="" />
              <input type="submit"value="Enviar"/>
          </from>
        </section>
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>

    );
    
}
export default Sugerencias;