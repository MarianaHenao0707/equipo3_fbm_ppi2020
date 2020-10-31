import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import Buscar from '../styles/buscar.css';
import aguas from '../images/aguas.jpg';




function buscar (){
    return (
        <div>
             <section className="Buscar">
          <h1>Información sobre los residuos</h1>
          
        </section>
        
  
    <section className="Buscar">
        
    <h3>En este campo de texto puedes buscar la zona donde estas ubicado.</h3>
    </section>

    <section className="parrafo img">
    <img className="Aguas" src={aguas}/>
      
    </section>
    <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>

    );
    
}
export default buscar;
