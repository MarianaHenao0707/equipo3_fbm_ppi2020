import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Definicion.css';
import Queson from '../images/queson.jpg';





function Envioquejas () {
    return (
        
          <section className="Definicion">
          <h1>¡ENVÍO EXITOSO!</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
            <h2 className="til">Gracias por ayudar a mejorar el ambiente de tu comunidad.</h2>
            <section className="img">
           <img className="img" src={Queson} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Principal">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Envioquejas;