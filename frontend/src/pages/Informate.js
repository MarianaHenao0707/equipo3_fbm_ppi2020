import React from 'react';
import  '../styles/informate.css';
import menu from '../images/menu.png';
import quejas from '../images/quejas.png';
import informacion from '../images/informacion.png';
import quienesom from '../images/quienesom.png';
import preguntase from '../images/preguntase.png';



function Informate (){
    return (
        <div>
     <section className="informa">
          <h1>Ayuda</h1>
        </section>
    
        <section className="img">
           <img className="img" src={menu} alt="Responsive image"/> 
           <h3>                                                          
           <p>Menú</p>                
           </h3>

           <img className="img"  src={quejas} alt="Responsive image"/>
           <h4>
           <p>Quejas</p>
           </h4>
           </section>

           <section className="img">
           <img className="img"   src={informacion} alt="Responsive image"/> 
           <h3>                                                         
           <p>Información</p>                
           </h3>

           <img className="img3"  src={quienesom} alt="Responsive image"/>
           <h4>
           <p>Quiénes somos</p>
           </h4>

           <img className="img4"  src={preguntase} alt="Responsive image"/>
           <h4>
           <p>Preguntas evaluativas</p>
           </h4>

           </section>
           <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>
      
    );
    
}
export default Informate;