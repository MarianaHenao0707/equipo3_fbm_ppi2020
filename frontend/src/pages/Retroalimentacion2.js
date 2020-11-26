import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Definicion.css';
import Feliz from '../images/planetafeliz.png';





function Retroalimentacion2 () {
    return (
        
          <section className="Definicion">
          <h1>¡TU PUNTAJE ES ALTO!🤩🤩🤩</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2 className="til">¡NO FALLASTE EN LA RESPUESTA!</h2>
<h3>Has respondido perfectamente,¡¡FELICIDADES!!</h3>
 <section className="img">
           <img className="img" src={Feliz} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Principal">Volver</Link></button>
                  <button ><Link to="/Pregunta1">Siguiente</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Retroalimentacion2 ;