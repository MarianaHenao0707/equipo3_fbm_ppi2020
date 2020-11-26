import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Separacion.css';
import gris from '../images/gris.jpg';
import grisos from '../images/grisos.jpg';
import azul from '../images/azul.jpg';
import verde from '../images/verde.jpg';
import rojo from '../images/rojo.jpg';


function Separacion () {
    return (
        
          <section className="Separacion">
          <h1>Manera correcta de separar residuos</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">

<h7>Caneca gris: Papel escrito, impreso y roto, que no contenga clips ni ganchos metálicos. No debe estar sucio con otros materiales como grasa, sustancias, alimentos u otras mezclas diferentes que lo contaminen, es preferible que el papel no esté muy arrugado.</h7>
           <section className="img">
           <img className="img" src={gris} alt="Responsive image"/> 
           </section>

<h3>Caneca verde: Residuos ordinarios, esdecir, que no se pueden reciclar. Papel: carbón, mantequilla, aluminio, higiénico, de cocina, celofán; pañuelos; toallas higiénicas; servilletas utilizadas; plastificados; metalizados, icopor, chicles y residuos de barridos.</h3>

            <section className="img">
           <img className="img" src={verde} alt="Responsive image"/> 
           </section><h4>Caneca azul: Envases de bebidas no retornables, vasos desechables, bolsas plásticas, demás recipientes plásticos y que estén vacíos. </h4>
 
<h5>Caneca beige: Residuos orgánicos como poda de árboles o plantas, hojas secas y residuos de alimentos o similares antes y después de la preparación.</h5>

           <section className="img">
           <img className="img" src={grisos} alt="Responsive image"/> 
           </section>

 <h6>Caneca roja Riesgo: biológico. Esta caneca se debe ubicar únicamente en los laboratorios, consultorios  y enfermería. Se depositan materiales de curación, guantes, gasas, algodones, entre otros. Además, residuos orgánicos o inorgánicos, corrosivos, tóxicos o inflamables.</h6>
           
           <section className="img">
           <img className="img" src={rojo} alt="Responsive image"/> 
           </section>

<h6>Caneca azul: Envases de bebidas no retornables, vasos desechables, bolsas plásticas, demás recipientes plásticos y que estén vacíos.</h6>
           


           <section className="img">
           <img className="img" src={azul} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Informacion">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Separacion;