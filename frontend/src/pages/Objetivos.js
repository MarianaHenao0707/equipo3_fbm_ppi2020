import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Objetivos.css';
import Objeti from '../images/Objeti.jpg';



function Objetivos () {
    return (
        
          <section className="Objetivos">
          <h1>Objetivos en el Reciclaje de Residuos</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2>Antes de abarcar la clasificación más general, es interesante saber que cuando queremos reciclar hay dos tipos de objetivos:</h2>
<h3>Prevención: Es el proceso preventivo mediante el cual, antes de que un material se convierta en residuo, se elimine el mayor número de sustancias peligrosas, evitando un impacto mayor al medio ambiente.</h3>
<h4>Aporte de valor: Es el proceso que tiene como objetivo que los residuos sean reutilizados, reciclados o utilizados para, por ejemplo, conseguir energía (Industria Energética…).</h4>
 <section className="img">
           <img className="img" src={Objeti} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Informacion">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Objetivos;