import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Definicion.css';
import Queson from '../images/queson.jpg';





function Tipos() {
    return (
        
          <section className="Tipos">
          <h1>Tipos de residuos</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2 className="til">Según su peligrosidad:
Inertes: son aquellos que una vez depositados en el vertedero no sufren transformaciones físico, químicas o biológicas significativas.</h2>

<h3>Peligrosos: los que por sus características suponen un peligro para el medio ambiente y los seres vivos. Se refiere a la mayoría de aceites,
     disolventes y envases que hayan contenido sustancias peligrosas.</h3>

<h4>No peligrosos: los que no se encuadran ni en el grupo de residuos inertes, ni peligrosos. Todos ellos son el plástico, el papel o el metal, y todos
     aquellos que no hayan sido contaminados con ninguna sustancia peligrosa y pueden ser reciclados.</h4>

     <h5>Según su origen:</h5>
        <h6>Residuos domésticos: aquellos que han sido generados en los hogares por actividades domésticas.</h6>
        </div>
        <div className="table-uno">
        <h7>Residuos comerciales: producidos por la actividad propia de los comercios y servicios de restauración,
             así como de las oficinas y mercados y todos aquellos actores del sector servicios.</h7>
             </div>
        <div className="table-uno">
        <h8>Residuos Industriales: los que resultan de los procesos de producción, transformación, consumo o 
            mantenimiento generados en la actividad industrial.</h8>
            </div>
        <div className="table-uno">
        <h9>Biorresiduos: los denominados biodegradables, provenientes de jardines y parques y los residuos 
            alimenticios de hostelería, hogares y plantas de producción relacionadas con el sector alimentario.</h9>
            </div>
        <div className="table-uno">
        <h10>Escombros y residuos de construcción: los que se generan en una obra de construcción, sin incluir las 
            tierras extraídas de los procesos de excavación.</h10>
            </div>
        <div className="table-uno">
        <h11>Residuos sanitarios: aquellos generados en centros sanitarios, resultado del trabajo realizado en laboratorios y centros médicos 
                relacionados con la investigación, y que deben ser desechados de manera especial con el fin de no generar ninguna enfermedad.</h11>
                </div>
        <div className="table-uno">
        <h12>Residuos mineros: para referirnos a los residuos sólidos o en pasta que se generan tras el aprovechamiento de un recurso geológico.</h12>
        </div>
        <div className="table-uno">
        <h13>Residuos radiactivos: aquellos que contienen elementos químicos sin ningún propósito práctico.</h13>
        </div>
        <div className="table-uno">
        <h14>Subproductos animales: también conocidos como SANDACH (Subproductos Animales No Destinados Al Consumo Humano) para denominar a los cuerpos enteros o partes de animales o productos de origen animal que, por motivos sanitarios o por decisión del operados, no pueden ser consumidos.</h14>
 <section className="img">
           <img className="img" src={Queson} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Informacion">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Tipos;