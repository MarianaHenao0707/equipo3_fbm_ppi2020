import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Definicion.css';
import Queson from '../images/queson.jpg';





function Definicion () {
    return (
        
          <section className="Definicion">
          <h1>Definición</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2 className="til">¿Qué son los residuos?</h2>
<h3>Los residuos se definen en la Ley General para la Prevención y Gestión Integral de los Residuos (LGPGIR) como aquellos materiales o productos cuyo propietario o poseedor desecha y que se encuentran en estado sólido o semisólido, líquido o gaseoso y que se contienen en recipientes o depósitos; pueden ser susceptibles de ser valorizados o requieren sujetarse a tratamiento o disposición final.</h3>
<h4>La palabra residuo describe al material que pierde utilidad tras haber cumplido con su misión o servido para realizar un determinado trabajo. Por lo tanto, el concepto de residuo se emplea como sinónimo de basura, es decir, por hacer
 referencia a los desechos que el hombre ha producido.</h4>
 <section className="img">
           <img className="img" src={Queson} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Buscar">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Definicion;