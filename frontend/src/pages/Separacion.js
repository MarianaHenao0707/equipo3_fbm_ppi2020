import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Separacion.css';
import Queson from '../images/queson.jpg';



function Separacion () {
    return (
        
          <section className="Separacion">
          <h1>Manera correcta de separar residuos</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2>Caneca gris: Papel escrito, impreso y roto, que no contenga clips ni ganchos metálicos. No debe estar sucio con otros materiales como grasa, sustancias, alimentos u otras mezclas diferentes que lo contaminen, es preferible que el papel no esté muy arrugado.</h2>
<h3>Caneca verde: Residuos ordinarios, esdecir, que no se pueden reciclar. Papel: carbón, mantequilla, aluminio, higiénico, de cocina, celofán; pañuelos; toallas higiénicas; servilletas utilizadas; plastificados; metalizados, icopor, chicles y residuos de barridos.</h3>
<h4>Caneca azul: Envases de bebidas no retornables, vasos desechables, bolsas plásticas, demás recipientes plásticos y que estén vacíos. </h4>
<h5>Caneca beige: Residuos orgánicos como poda de árboles o plantas, hojas secas y residuos de alimentos o similares antes y después de la preparación.</h5>
 <h6>Caneca roja
Riesgo biológico. Esta caneca se debe ubicar únicamente en los laboratorios, consultorios  y enfermería. Se depositan materiales de curación, guantes, gasas, algodones, entre otros. Además, residuos orgánicos o inorgánicos, corrosivos, tóxicos o inflamables.</h6>
 <section className="img">
           <img className="img" src={Queson} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Informacion">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Separacion;