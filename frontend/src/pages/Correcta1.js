import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Definicion.css';
import Feliz from '../images/planetafeliz.png';





function Correcta1 () {
    return (
        
          <section className="Definicion">
          <h1>¡RESPUESTA CORRECTA!</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
            <h2 className="til">Tienes 5 puntos</h2>
            <h3>Has respondido correctamente, sigue así, aprendiéndo más sobre los residuos con nosotros. </h3>
            <section className="img">
           <img className="img" src={Feliz} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Principal">Volver</Link></button>
                  <button ><Link to="/Correcta2">Siguiente</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Correcta1;