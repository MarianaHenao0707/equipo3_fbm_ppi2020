import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Definicion.css';
import Triste from '../images/planetatriste.png';





function Incorrecta1 () {
    return (
        
          <section className="Definicion">
          <h1>¡RESPUESTA INCORRECTA!</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
            <h2 className="til">Tienes 0 puntos</h2>
            <h3>La respuesta correcta era: B) Vasos desechables, bolsas plásticas.</h3>
            <section className="img">
           <img className="img" src={Triste} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Principal">Volver</Link></button>
                  <button ><Link to="/Incorrecta2">Siguiente</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Incorrecta1;