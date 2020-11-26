import React from 'react';
import '../styles/Quienesom.css';
import Mari from '../images/Mariana.jpg';
import Dani from '../images/Daniela.jpg';
import Manu from '../images/Manuela.jpg';
import Cami from '../images/Camilo.jpg';
import { Link } from 'react-router-dom';

   

function Quienesadmin (proops) {
    return (
        
          <section className="Quienesomos">
          <h1>¿Quiénes somos?</h1>
        

          <section className="seccion-uno">
              <div className="table-uno">
                  <h2 className="til">¡Conoce sobre nosotros!  </h2>
                  <h5>Somos un grupo de estudiantes de la Institución Educativa Félix De Bedout Moreno, estamos en el grado once, y hacemos una media técnica orientada en el desarrollo de software.</h5>
                  
                  
            <section className="img">
           <img className="img" src={Mari} alt="Responsive image"/> 
           <h3>                                 
           <p>Mariana Henao.</p>                
           <p>Líder</p>                         
           <p>Programador/a.</p>                
           </h3>

           <img className="img1"  src={Dani} alt="Responsive image"/>
           <h4>
           <p>Daniela Restrepo.</p> 
           <p>Documentador/a.</p>
           <p>Programador/a.</p>
           </h4>
           </section>


           <section className="img">
           <img className="img"   src={Manu} alt="Responsive image"/> 
           <h3>                                 
           <p>Manuela Taborda.</p>                
           <p>Diseñador/a</p>                         
           <p>Programador/a.</p>                
           </h3>

           <img className="img1"  src={Cami} alt="Responsive image"/>
           <h4>
           <p>Juan Camilo Arias.</p> 
           <p>Diseñador.</p>
           <p>Programador.</p>
           </h4>
           </section>

<button ><Link to="/menuadmin">volver</Link></button>
              </div>
                                </section>
          </section>

          

    );
    
}
export default Quienesadmin;