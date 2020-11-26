import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Definicion.css';
import Triste from '../images/planetatriste.png';





function Retroalimentacion5 () {
    return (
        
          <section className="Definicion">
          <h1>¡TU PUNTAJE ES BAJO!☹️☹️☹️</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2 className="til">¡FALLASTE EN LA RESPUESTA!</h2>
<h3>La respuesta correcta es: D) Verde </h3>
<h4>Debes mejorar más, en información sobre los residuos puedes encontrar la información que necesites.</h4>
 <section className="img">
           <img className="img" src={Triste} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Principal">Volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Retroalimentacion5;