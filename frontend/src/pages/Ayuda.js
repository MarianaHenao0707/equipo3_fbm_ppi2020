import React from 'react';
import  '../styles/informate.css';
import menu from '../images/menu.png';
import quejas from '../images/quejas.png';
import informacion from '../images/informacion.png';
import quienesom from '../images/quienesom.png';
import preguntase from '../images/preguntase.png';
import { Link } from 'react-router-dom';



function Ayuda (){
    return (
        <div>
     <section className="informa">
          <h1>Ayuda</h1>
        </section>
    
        <section className="img">
           <img className="img1" src={menu} alt="Responsive image"/> 
           <h3>                                                          
           <p>Menú</p>                
           </h3>

           <img className="img2"  src={quejas} alt="Responsive image"/>
           <h4>
           <p>Quejas</p>
           </h4>
           </section>

           <section className="img">
           <img className="img3"   src={informacion} alt="Responsive image"/> 
           <h3>                                                         
           <p>Información</p>                
           </h3>

           <img className="img4"  src={quienesom} alt="Responsive image"/>
           <h4>
           <p>Quiénes somos</p>
           </h4>

           <img className="img5"  src={preguntase} alt="Responsive image"/>
           <h4>
           <p>Preguntas evaluativas</p>
           </h4>

           </section>
 
<button ><Link to="/menuadmin">volver</Link></button>
    </div>
      
    );
    
}
export default Ayuda;