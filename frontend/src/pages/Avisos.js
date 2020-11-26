import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Avisos.css';
import avss from '../images/avss.jpg';





function Avisos () {
    return (
        
          <section className="Definicion">
          <h1>¡AVISOS!</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2 className="til">¡RECUERDA QUE DEBES SACAR LA BASURA!</h2>
<h3>Los Martes y Viernes</h3>
<h4>A partir de las 3pm. En la esquina de la cancha de Tejelo</h4>

 <section className="img">
           <img className="img" src={avss} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Informacion">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Avisos;