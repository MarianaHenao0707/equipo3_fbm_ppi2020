import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Definicion.css';
import Queson from '../images/queson.jpg';





function Tipos() {
    return (
        
          <section className="Definicion">
          <h1>Tipos</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2 className="til">Clasificación de los</h2>
<h3>Los  o disposición final.</h3>
<h4>La pala</h4>
 <section className="img">
           <img className="img" src={Queson} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Buscar">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Tipos;