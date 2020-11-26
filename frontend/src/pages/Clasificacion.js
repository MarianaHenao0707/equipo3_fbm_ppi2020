import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Clasificacion.css';
import urbanos from '../images/residuos_urbanos.jpg';





function Clasificacion () {
    return (
        
          <section className="Clasificacion">
          <h1>Clasificación de los residuos</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2 className="til">Residuos sólidos urbanos (RSU):</h2>
<h3>Los residuos sólidos urbanos son los que se generan en las casas como resultado de la eliminación de los materiales que se utilizan en las actividades domésticas (p. e., de los productos de consumo y sus envases, embalajes o empaques) o los que provienen también de cualquier otra actividad que se desarrolla dentro de los establecimientos o en la vía pública, con características domiciliarias, y los resultantes de las vías y lugares públicos siempre que no sean considerados como residuos de otra índole.</h3>
<h4>°Residuos de manejo especial (RME): Los Residuos de Manejo Especial (RME) están definidos en la Ley General para la Prevención y Gestión Integral de Residuos (LGPGIR) como aquéllos generados en los procesos productivos que no reúnen las características para ser considerados residuos sólidos urbanos o peligrosos, o que son producidos por grandes generadores de residuos sólidos urbanos.</h4>
<h5>°Residuos peligrosos (RP): La gran diversidad de sustancias químicas que existe en la actualidad, si bien es cierto que ha servido para mejorar significativamente el nivel de vida de la población, también ha ejercido una presión importante sobre el medio ambiente y la salud humana.</h5>
<h6>Una vez finalizada la vida útil de muchos de los productos que se fabrican a partir de estas sustancias o que las contienen, se convierten en desechos que ponen en riesgo la salud de laspersonas o pueden causar daños al medio ambiente.</h6>

         <div className="table-uno">
<h7>Entre estos desechos se encuentran los residuos peligrosos, definidos como aquellos que poseen alguna de las características CRETIB que les confieren peligrosidad (corrosividad, C; reactividad, R; explosividad, E; toxicidad, T; inflamabilidad, I; o ser biológico-infecciosos, B), así como los envases, recipientes, embalajes y suelos que hayan sido contaminados.</h7>
         </div>

         <div className="table-uno">
    <h8>Otra forma de clasificarlos es por su composición y se pueden clasificar como residuos orgánico, residuos inorgánicos y residuos inorgánicos no reciclables.</h8>
    </div>

    <div className="table-uno">
         <h9>°Residuos orgánicos: Los residuos orgánicos son aquellos que están compuestos por desechos de origen biológico.</h9>
         </div>

         <div className="table-uno">
         <h10>°Residuos inorgánicos: Los residuos inorgánicos son aquellos que no tienen origen biológico sino industrial o artificial.</h10>
         </div>

         <div className="table-uno">
         <h11> °Residuos peligrosos (inorgánicos no reciclables): Los residous peligrosos son sustancias químicas de tipo corrosivo, ácidos o basura radioactiva son algunas de las basuras que se
        incluyen en esta tipología y que deben ser tratadas con especial cuidado pues pueden poner en serio peligro la salud de los ciudadanos.</h11>
        </div>
    
     <section className="img">
           <img className="img" src={urbanos} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Informacion">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Clasificacion;