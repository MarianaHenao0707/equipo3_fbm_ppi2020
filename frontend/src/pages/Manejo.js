import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Manejo.css';
import manejo from '../images/manejj.jpg';



function Manejo () {
    return (
        
          <section className="Manejo">
          <h1>Manejo y tratamiento de residuos</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2>El manejo y tratamiento de residuos inicia con la recolección de los mismos, posteriormente su transporte hasta las instalaciones preparadas su manejo, y finalmente su tratamiento intermedio o definitivo.</h2>
<h3>Este tratamiento de residuos puede ser el para su aprovechamiento o para su eliminación final. En los últimos años se ha incrementado el interés para que esta actividad genere el menor riesgo para la salud y el medio ambiente.</h3>
<h4>Beneficios que hay al separar la basura:</h4>
</div>

        <div className="table-uno">
<h11>1. Ayuda a evitar la contaminación de tierras, ríos y aire.</h11>
<div/>

<div className="table-uno">
<h12>2. Permite la renovación de la tierra.</h12>
</div>

<h7>3. Disminuye el riesgo de muerte en los animales.</h7>
</div>

        <div className="table-uno">
<h8>4. Evita la proliferación de enfermedades.</h8>
</div>

        <div className="table-uno">
<h9>5. Reduce los costos de producción al poder reciclar.</h9>
</div>

        <div className="table-uno">
<h10>Adicionalmente nuestra aplicación es una solución en donde enseña y se evalúa el aprendizaje o conocimiento que se tiene sobre
     esto, y nos enseña la importancia de separar los residuos, como se hace y el momento adecuado para sacarlos.</h10>
</div>

        <div className="table-uno">


 <section className="img">
           <img className="img" src={manejo} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Informacion">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Manejo;